import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    temperature: '',
    feelsLike: '',
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
        const response = await axios.get('https://api.meteomatics.com/2024-10-05T00:00:00Z--2024-10-08T00:00:00Z:PT1H/t_2m:C,pressure_100m:Pa,wind_speed_FL10:mph,relative_humidity_2m:p,uv:idx,total_precipitation_accumulation_1d_efi:idx,visibility:m/52.520551,13.461804/json', {
          auth: {
            username: import.meta.env.VITE_METEOMATICS_USERNAME,
            password: import.meta.env.VITE_METEOMATICS_API_KEY
          }
        });

        const data = response.data;
        setWeatherInfo({
          temperature: data.data[0].coordinates[0].dates[0].value,
          feelsLike: data.data[0].coordinates[0].dates[0].value, 
          humidity: data.data[3].coordinates[0].dates[0].value,
          windSpeed: data.data[2].coordinates[0].dates[0].value,
          visibility: data.data[6].coordinates[0].dates[0].value,
          uvIndex: data.data[4].coordinates[0].dates[0].value,
          pressure: data.data[1].coordinates[0].dates[0].value,
          precipitation: data.data[5].coordinates[0].dates[0].value,
          description: '', 
          
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
      <img src={weatherInfo.icon} alt="Weather Icon" className="weather-icon" />
      <div className="weather-info-grid">
        <div className="weather-info-row">
          <span>Temperature:</span>
          <span>{weatherInfo.temperature}°C</span>
        </div>
        <div className="weather-info-row">
          <span>Feels Like:</span>
          <span>{weatherInfo.feelsLike}°C</span>
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