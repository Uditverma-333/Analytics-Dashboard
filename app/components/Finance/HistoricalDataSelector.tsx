"use client";
import { useState } from "react";

interface HistoricalDataSelectorProps {
  onRangeChange: (range: string) => void; // Accept a callback to handle range selection
}

const HistoricalDataSelector: React.FC<HistoricalDataSelectorProps> = ({ onRangeChange }) => {
  const [selectedRange, setSelectedRange] = useState('1d');

  const ranges = ['1d', '1w', '1m', '1y'];

  const handleRangeClick = (range: string) => {
    setSelectedRange(range);
    onRangeChange(range); // Notify parent about the range change
  };

  return (
    <div className="flex space-x-4">
      {ranges.map((range) => (
        <button
          key={range}
          onClick={() => handleRangeClick(range)}
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
