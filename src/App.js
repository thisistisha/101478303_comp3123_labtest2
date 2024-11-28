import React, { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";

function App() {
  const [city, setCity] = useState("Mumbai");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = "e9c25238017b8df6a005edc23d367cd7";
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    const weatherJson = await weatherRes.json();
    const forecastJson = await forecastRes.json();
    setWeatherData(weatherJson);
    setForecastData(forecastJson.list.slice(0, 5)); // Get 5-day forecast
  };

  return (
    <div className="App">
      <header>
        <h1>Weather Forecast</h1>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </header>
      {weatherData && (
        <WeatherCard
          city={weatherData.name}
          temp={weatherData.main.temp}
          weather={weatherData.weather[0]}
          humidity={weatherData.main.humidity}
          wind={weatherData.wind.speed}
        />
      )}
      <div className="forecast-container">
        {forecastData &&
          forecastData.map((day, index) => (
            <ForecastCard
              key={index}
              day={new Date(day.dt * 1000).toLocaleString("en-US", {
                weekday: "short",
              })}
              temp={day.main.temp}
              weatherIcon={day.weather[0].icon}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
