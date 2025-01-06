import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa"; // For a dropdown icon

const categories = [
  "general",
  "technology",
  "sports",
  "business",
  "health",
  "entertainment",
];

const FilterBar = ({ setCategory }: { setCategory: (category: string) => void }) => {
    return (
      <div className="flex space-x-4 my-4 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    );
  };

export default FilterBar;
