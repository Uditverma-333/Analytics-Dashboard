import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white h-screen shadow-lg border-r border-gray-300 dark:border-gray-600 flex flex-col">
      {/* Sidebar Title */}
      <h1 className="text-2xl p-4 font-bold border-b border-gray-300 dark:border-gray-600 text-center">
        My App
      </h1>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul className="flex flex-col space-y-2 mt-6">
          <li>
            <Link
              href="/dashboard"
              className="block w-full px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all text-center"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/weather"
              className="block w-full px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all text-center"
            >
              Weather
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className="block w-full px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all text-center"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/finance"
              className="block w-full px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all text-center"
            >
              Finance
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <footer className="mt-auto mb-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        © 2025 Analytics
      </footer>
    </div>
  );
};

export default Sidebar;
