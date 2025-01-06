import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ForecastChart = ({ forecast }: { forecast: any }) => {
  const data = forecast.forecast.forecastday.map((day: any) => ({
    date: day.date,
    temp: day.day.avgtemp_c,
  }));

  return (
    <div className="my-5 text-center text-neutral-dark dark:text-neutral-light">
      <h2 className="text-2xl font-bold text-primary dark:text-primary-light">
        7-Day Temperature Forecast
      </h2>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="currentColor"
            className="dark:stroke-neutral-600"
          />
          <XAxis dataKey="date" stroke="currentColor" />
          <YAxis unit="°C" stroke="currentColor" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--tw-bg-opacity)',
              borderColor: 'var(--tw-border-opacity)',
            }}
            labelStyle={{ color: 'var(--tw-text-opacity)' }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#ffcc00"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
