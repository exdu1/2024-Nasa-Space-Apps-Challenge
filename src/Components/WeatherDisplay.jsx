import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    temperature: '',
    humidity: '',
    windSpeed: '',
    visibility: '',
    uvIndex: '',
    pressure: '',
    precipitation: '',
    description: '',
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Request data from your backend (Node.js)
        const response = await axios.get('http://localhost:3000/api/weather');
        const data = response.data;
        console.log(data)

        setWeatherInfo({
          temperature: data["t_2m:C"],
          humidity: data["relative_humidity_2m:p"],
          windSpeed: data["wind_speed_FL10:mph"],
          visibility: data["visibility:m"],
          uvIndex: data["uv:idx"],
          pressure: data["pressure_100m:Pa"],
          precipitation: data["total_precipitation_accumulation_1d_efi:idx"],
          description: 'No description provided', // Add a default description
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-display">
      <h2>Current Weather</h2>
      <div className="weather-info-grid">
        <div className="weather-info-row">
          <span>Temperature:</span>
          <span>{weatherInfo.temperature}°C</span>
        </div>
        <div className="weather-info-row">
          <span>Humidity:</span>
          <span>{weatherInfo.humidity}%</span>
        </div>
        <div className="weather-info-row">
          <span>Wind Speed:</span>
          <span>{weatherInfo.windSpeed} mph</span>
        </div>
        <div className="weather-info-row">
          <span>Visibility:</span>
          <span>{weatherInfo.visibility} m</span>
        </div>
        <div className="weather-info-row">
          <span>UV Index:</span>
          <span>{weatherInfo.uvIndex}</span>
        </div>
        <div className="weather-info-row">
          <span>Pressure:</span>
          <span>{weatherInfo.pressure} Pa</span>
        </div>
        <div className="weather-info-row">
          <span>Precipitation:</span>
          <span>{weatherInfo.precipitation} mm</span>
        </div>
        <div className="weather-info-row">
          <span>Description:</span>
          <span>{weatherInfo.description}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
