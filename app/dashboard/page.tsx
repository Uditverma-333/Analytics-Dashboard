"use client";
import React from "react";
import StatsCard from "@components/Dashboard/StatsCard";
import LineChart from "@components/Dashboard/Charts/LineChart";
import BarChart from "@components/Dashboard/Charts/BarChart";

const DashboardPage = () => {
  const stats = [
    { title: "Total Users", value: "1,234", change: "+12%" },
    { title: "Revenue", value: "$45,678", change: "+8%" },
    { title: "Orders", value: "2,890", change: "-5%" },
  ];

  return (
    <div className="flex-1 bg-white dark:bg-gray-800 overflow-y-auto p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <LineChart />
        <BarChart />
      </div>
    </div>
  );
};

export default DashboardPage;
