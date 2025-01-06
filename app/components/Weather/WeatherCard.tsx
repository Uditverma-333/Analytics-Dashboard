const WeatherCard = ({ weather }: { weather: any }) => (
  <div className="my-5 p-5 bg-neutral-light text-neutral-dark dark:bg-neutral-dark dark:text-neutral-light border border-neutral-300 dark:border-neutral-600 rounded-lg w-full max-w-md mx-auto text-center shadow-md">
    <h2 className="text-2xl font-semibold text-primary dark:text-primary-light">
      {weather.location.name}
    </h2>
    <p className="text-lg mt-2">
      <strong>Temperature:</strong> {weather.current.temp_c}°C
    </p>
    <p className="text-lg mt-2">
      <strong>Humidity:</strong> {weather.current.humidity}%
    </p>
    <p className="text-lg mt-2">
      <strong>Wind Speed:</strong> {weather.current.wind_kph} km/h
    </p>
  </div>

);

export default WeatherCard;

