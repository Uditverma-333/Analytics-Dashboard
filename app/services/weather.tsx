import axios from "axios";

const API_KEY = "58f3fa08aab04ab6b4a100649250601";

// Fetch current weather for a city
export const fetchWeather = async (city: string) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );
  return response.data;
};

// Fetch 7-day forecast based on latitude and longitude
export const fetchForecast = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7&aqi=no&alerts=no`
  );
  return response.data;
};
