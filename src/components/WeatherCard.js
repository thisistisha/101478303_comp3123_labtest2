import React from "react";
import "./WeatherCard.css";

function WeatherCard({ city, temp, weather, humidity, wind }) {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <img src={iconUrl} alt={weather.description} />
      <h3>{Math.round(temp)}°C</h3>
      <p>{weather.description}</p>
      <div className="details">
        <p>Humidity: {humidity}%</p>
        <p>Wind: {wind} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;
