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
  stockSymbol: string; // Accept stockSymbol as a prop
}

const StockChart: React.FC<StockChartProps> = ({ stockSymbol }) => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: { label: string; data: string[]; borderColor: string; fill: boolean }[];
  } | null>(null);

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const data = await fetchStockChartData(stockSymbol); // Use the stockSymbol prop
        if (data && data.labels && data.datasets) {
          setChartData(data); // Only set data if it's valid
        } else {
          setChartData(null); // Handle empty or invalid data
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setChartData(null); // Handle fetch errors
      }
    };
    fetchChart();
  }, [stockSymbol]); // Re-fetch data when stockSymbol changes

  // Ensure chartData is valid before using it in the Line component
  const isChartDataValid = chartData && chartData.labels && chartData.datasets;

  return (
    <div className="p-6 bg-white dark:bg-darkModeGray shadow-card rounded-lg">
      {isChartDataValid ? (
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
