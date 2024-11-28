import React from "react";

const WeatherInfo = ({ weatherData }) => {
  const { name, main, weather } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p>Temperature: {main.temp}°C</p>
      <p>Condition: {weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
