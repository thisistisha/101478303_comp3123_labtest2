import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Toronto");

  const fetchWeather = async (cityName) => {
    const API_KEY = "e9c25238017b8df6a005edc23d367cd7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar fetchWeather={fetchWeather} setCity={setCity} />
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default App;
