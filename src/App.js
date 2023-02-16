import "./App.css";
import Search from "./component/Current-weather/search/search";
import CurrentWeather from "./component/Current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const hanldeOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    ); 
  };

  return (
    <div className="container">
      <Search onSearchChange={hanldeOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
