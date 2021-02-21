import {Result} from './resultCard'

export const SearchBox = ({city, setCity, current, weekly}) => {
  weekly.daily.shift()

  const {lat, lon} = current.coord
  const currentData = {
    date: current.dt,
    temp: current.main.temp,
    minMax: [current.main.temp_min, current.main.temp_max],
    wind: current.wind.speed,
    hum: current.main.humidity,
    hpa: current.main.pressure
  }

  const weeklyData = (day) => {
    console.log({day});
    return {
      date: day.dt,
      temp: day.temp.max,
      minMax: [day.temp.min, day.temp.max],
      wind: day.wind_speed,
      hum: day.humidity,
      hpa: day.pressure
    }
  }

  return (
    <div class="search-wrapper">
      <input class='search-input' type="text" placeholder='search for a specific city...'/>
      <div class='search-results'>
        <h2 class='title'>
        {city}
        <span>{` [${lat}, ${lon}]`}</span>
        </h2>
        <Result today={true} data={currentData} />
        {weekly.daily.map(f => (<Result data={weeklyData(f)} />))}
      </div>
    </div>
  )
}
