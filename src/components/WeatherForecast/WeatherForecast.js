import React, {useState} from "react"

import ListWeather from "./ListWeather"
import GetWeather from "./GetWeather"

function WeatherForecast(props) {
  const {phrase} = props

  const [weatherData, setWeatherData] = useState()

  const handleWeatherData = (data) => {
    setWeatherData(data)
  }

  return (
<main>
  <div className="kontajner" id="predpoved">

    <GetWeather phrase={phrase} onSubmitData={handleWeatherData} />
    <ListWeather phrase={phrase} weatherData={weatherData} />

    <p>{phrase["The data is obtained"]} <strong><a href="https://open-meteo.com/">open-meteo.com</a></strong></p>
  </div>
</main>
  );
}

export default WeatherForecast;