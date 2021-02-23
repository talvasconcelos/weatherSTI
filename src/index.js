import "./style";
import { Info } from "./components/info";
import { SearchBox } from "./components/search";
import { useEffect, useState } from "preact/hooks";
import { API_KEY, mockDaily, mockWeek } from "./key";

const fetchForecast = async city => {
  try {
    const rqDaily = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const resDaily = await rqDaily.json();
		if(resDaily.message === "city not found"){
			return false
		}

    const rqWeekly = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${resDaily.coord.lat}&lon=${resDaily.coord.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
    );
    const resWeekly = await rqWeekly.json();

    return {
      current: resDaily,
      weekly: resWeekly
    };
  } catch (e) {
    console.error(e);
  }
};

export default function App() {
  const [city, setCity] = useState("Lisbon, PT");
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    // setTimeout(() => {
    // 	setForecast({current: mockDaily, weekly: mockWeek})
    // }, 2000)
    fetchForecast(city)
			.then(res => {
				if(res) {
					setForecast(res)
				}else{
					setForecast('NOT_FOUND')
				}
			})
			.catch(e => console.error(e))
  }, [city]);

  return (
    <div class="container">
      <header class="hero">
        <h1 class="title">
          weather forecast
          <br />
          for the next 7 days
        </h1>
        <h2 class="subtitle">Lorem ipsum</h2>
        <div class="info">
          <Info title="Lorem #1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ab
            a, accusantium autem blanditiis enim ipsa doloribus rerum sapiente
            esse velit vel laboriosam maxime voluptas error odio. Voluptatibus
            incidunt nesciunt adipisci iste, laboriosam ad eius dolorem labore
            doloremque at expedita facere exercitationem quaerat itaque, fugit
            vitae. Repellat velit quis, atque!
          </Info>
          <Info title="Lorem #1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            tempora!
          </Info>
          <Info title="Lorem #1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            tempora!
          </Info>
        </div>
      </header>
      {forecast === 'NOT_FOUND' ? (
				<SearchBox
					setCity={setCity}
					current={null}
					weekly={null}
				/>
			) : forecast ? (
        <SearchBox
          setCity={setCity}
          current={forecast.current}
          weekly={forecast.weekly}
        />
      ) : null}
    </div>
  );
}
