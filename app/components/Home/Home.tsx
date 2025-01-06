"use client";
import React, { useState } from "react";
import Sidebar from "@components/Sidebar/Sidebar";  // Adjust import path as necessary
import Navbar from "@components/Navbar/Navbar";    // Adjust import path as necessary

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">

      <div className="flex flex-col flex-1 ml-64">

        {/* Main Content */}
        <main className="flex-1 pt-16 px-6 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Real-Time Analytics</h2>
              <p>Monitor your data as it happens with our real-time tracking tools.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Custom Dashboards</h2>
              <p>Build dashboards tailored to your specific needs and metrics.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">AI-Powered Insights</h2>
              <p>Leverage AI to uncover trends and actionable insights.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
