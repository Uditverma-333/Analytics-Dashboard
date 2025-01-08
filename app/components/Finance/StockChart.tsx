"use client";

import { useEffect, useState } from "react";
import { fetchStockChartData } from "@/services/finance";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

interface StockChartProps {
  stockSymbol: string;
  range: string; // Accept the selected range as a prop
}

const StockChart: React.FC<StockChartProps> = ({ stockSymbol, range }) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const data = await fetchStockChartData(stockSymbol, range);
        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setChartData(null);
      }
    };

    fetchChart();
  }, [stockSymbol, range]); // Re-fetch data when stockSymbol or range changes

  return (
    <div className="p-6 bg-white dark:bg-darkModeGray shadow-card rounded-lg">
      {chartData ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
            },
            scales: {
              x: {
                type: "category",
                ticks: { autoSkip: true, maxTicksLimit: 10 },
              },
              y: {
                type: "linear",
              },
            },
          }}
        />
      ) : (
        <p>Loading chart or no data available...</p>
      )}
    </div>
  );
};

export default StockChart;

