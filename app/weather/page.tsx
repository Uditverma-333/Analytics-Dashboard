"use client";

import React, { useState } from "react";
import SearchBar from "@components/Weather/SearchBar";
import WeatherCard from "@components/Weather/WeatherCard";
import ForecastChart from "@components/Weather/ForecastChart";
import { fetchWeather, fetchForecast } from "@services/weather";

const WeatherPage = () => {
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);

  const handleCitySelect = async (city: string) => {
    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);

      const forecastData = await fetchForecast(
        weatherData.location.lat,
        weatherData.location.lon
      );
      setForecast(forecastData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="font-sans p-5 text-center bg-background-light text-neutral-dark dark:bg-background-dark dark:text-neutral-light">
      <h1 className="text-3xl font-heading text-primary dark:text-primary-light mb-5">
        Weather Information
      </h1>
      <SearchBar onCitySelect={handleCitySelect} />
      {weather && <WeatherCard weather={weather} />}
      {forecast && <ForecastChart forecast={forecast} />}
    </div>

  );
};

export default WeatherPage;
