import React from "react";

const StatsCard = ({ title, value, change }) => {
  const isPositive = change.includes("+");

  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 flex flex-col items-center justify-between">
      <h3 className="text-lg font-medium text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p
        className={`text-sm font-medium mt-2 ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {change}
      </p>
    </div>
  );
};

export default StatsCard;
