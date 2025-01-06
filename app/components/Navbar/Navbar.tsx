"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react"; // Use for dropdown
import { FaSun, FaMoon, FaUserCircle, FaBell, FaSignOutAlt, FaCog } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
      setIsDarkMode(storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", !prev);
      return !prev;
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="w-full text-gray-900 bg-white dark:bg-gray-800 dark:text-white p-3 shadow-md flex justify-between items-center border-b border-gray-300 dark:border-gray-600">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-900 rounded-lg"
          placeholder="Search..."
        />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <FaSun className="w-6 h-6 text-yellow-400" />
          ) : (
            <FaMoon className="w-6 h-6 text-blue-500" />
          )}
        </button>

        {/* User Profile Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none">
            <FaUserCircle className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </Menu.Button>

          <Transition
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/profile"
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-800" : ""
                    } flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    <FaUserCircle className="w-5 h-5 mr-2" />
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/notifications"
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-800" : ""
                    } flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    <FaBell className="w-5 h-5 mr-2" />
                    Notifications
                  </Link>
                )}
              </Menu.Item>
              {/* Added Settings Option */}
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/settings"
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-800" : ""
                    } flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    <FaCog className="w-5 h-5 mr-2" />
                    Settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => console.log("Logout")}
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-800" : ""
                    } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    <FaSignOutAlt className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Navbar;
