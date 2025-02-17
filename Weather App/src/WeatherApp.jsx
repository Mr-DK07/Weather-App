import "./App.css";
import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";
function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    temp: 30,
    tempMin: 25,
    tempMax: 35,
    humidity: 50,
    feelsLike: 32,
    weather: "Cloudy",
  });

  let updateInfo = async (newInfo) => {
    setWeatherInfo(newInfo);
    console.log(newInfo);
  };
  return (
    <>
      <div className="WeatherApp">
        <h1>
          <u> Weather App </u>
        </h1>
        <SearchBox updateInfo={updateInfo} />
        <WeatherInfo weatherInfo={weatherInfo} />
      </div>
    </>
  );
}

export default WeatherApp;
