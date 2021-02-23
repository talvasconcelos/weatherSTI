import { useRef, useState } from "preact/hooks";
import { Result } from "./resultCard";

const weekLoop = day => {
  return {
    date: day.dt,
    temp: day.temp.max,
    minMax: [Math.round(day.temp.min), Math.round(day.temp.max)],
    wind: day.wind_speed,
    hum: day.humidity,
    hpa: day.pressure
  };
};

export const SearchBox = ({ setCity, current, weekly }) => {
  const notFound = !current || !weekly;

  if (notFound) {
    return (
      <div class="search-wrapper">
        <form onSubmit={submitSearch} class="search-input">
          <input
            type="text"
            placeholder="search for a specific city..."
            onchange={handleChange}
            ref={inputSearch}
            value={searchVal}
          />
        </form>
        <div class="search-results">
          <h2 class="title" style="color: tomato;">
            City not found...
          </h2>
        </div>
      </div>
    );
  }

  weekly.daily.shift();

  const inputSearch = useRef();
  const [searchVal, setSearchVal] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setSearchVal(inputSearch.current.value);
  };

  const submitSearch = e => {
    e.preventDefault();
    setCity(searchVal);
    setSearchVal("");
  };

  const { lat, lon } = current.coord;
  const currentData = {
    date: current.dt,
    temp: current.main.temp,
    minMax: [
      Math.round(current.main.temp_min),
      Math.round(current.main.temp_max)
    ],
    wind: current.wind.speed,
    hum: current.main.humidity,
    hpa: current.main.pressure
  };

  const weeklyData = weekly.daily.map(f => weekLoop(f));

  const city = `${current.name}, ${current.sys.country}`;

  return (
    <div class="search-wrapper">
      <form onSubmit={submitSearch} class="search-input">
        <input
          type="text"
          placeholder="search for a specific city..."
          onchange={handleChange}
          ref={inputSearch}
          value={searchVal}
        />
      </form>
      <div class="search-results">
        <h2 class="title">
          {city}
          <span>
            <i class="fas fa-map-pin" style="margin-left:1rem;" />
            {` [${lat}, ${lon}]`}
          </span>
        </h2>
        <Result today={true} data={currentData} />
        {weeklyData.map(f => (
          <Result data={f} />
        ))}
      </div>
    </div>
  );
};
