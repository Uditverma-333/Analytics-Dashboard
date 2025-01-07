"use client";

import { useState } from "react";
import { fetchStockAutocomplete } from "@/services/finance";

const StockSearch = ({ onSelectStock }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); // For keyboard navigation

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const results = await fetchStockAutocomplete(value);
      setSuggestions(results);
      setSelectedIndex(-1); // Reset the selection index
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (stockSymbol) => {
    setQuery(stockSymbol); // Set the query to the selected symbol
    setSuggestions([]); // Clear suggestions
    onSelectStock(stockSymbol); // Pass the selected symbol to the parent component
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      handleSelect(suggestions[selectedIndex]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Search for stocks"
        className="w-full px-4 py-2 border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white dark:bg-darkModeGray border border-neutral-light dark:border-neutral-dark rounded shadow-lg w-full max-h-48 overflow-auto">
          {suggestions.map((stockSymbol, index) => (
            <li
              key={stockSymbol}
              onClick={() => handleSelect(stockSymbol)}
              className={`px-4 py-2 cursor-pointer ${
                index === selectedIndex
                  ? "bg-primary text-white"
                  : "hover:bg-primary-light dark:hover:bg-primary-dark"
              }`}
            >
              {stockSymbol}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockSearch;
