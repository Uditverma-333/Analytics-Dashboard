"use client";
import { useState } from 'react';

const HistoricalDataSelector = () => {
  const [selectedRange, setSelectedRange] = useState('1d');

  const ranges = ['1d', '1w', '1m', '1y'];

  return (
    <div className="flex space-x-4">
      {ranges.map((range) => (
        <button
          key={range}
          onClick={() => setSelectedRange(range)}
          className={`px-4 py-2 rounded ${
            selectedRange === range
              ? 'bg-primary text-white'
              : 'bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light'
          }`}
        >
          {range.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default HistoricalDataSelector;
