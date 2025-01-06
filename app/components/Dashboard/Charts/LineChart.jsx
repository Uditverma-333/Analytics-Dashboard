import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: [50, 70, 100, 80, 120, 150],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
        },
      },
      title: {
        display: true,
        text: "Monthly Users",
        color: "#333",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#eee",
        },
        ticks: {
          color: "#666",
        },
      },
      y: {
        grid: {
          color: "#eee",
        },
        ticks: {
          color: "#666",
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
