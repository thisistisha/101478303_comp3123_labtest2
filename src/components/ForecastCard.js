import React from "react";
import "./ForecastCard.css";

function ForecastCard({ day, temp, weatherIcon }) {
  const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  return (
    <div className="forecast-card">
      <h4>{day}</h4>
      <img src={iconUrl} alt="Weather Icon" />
      <p>{Math.round(temp)}°C</p>
    </div>
  );
}

export default ForecastCard;
