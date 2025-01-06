import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 5000, 4000, 4500, 6000, 7000],
        backgroundColor: "rgba(53, 162, 235, 0.7)",
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 1,
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
        text: "Monthly Revenue",
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
