"use client";
import React, { useState } from "react";
import StockSearch from "./StockSearch";
import StockMetrics from "./StockMetrics";
import StockChart from "./StockChart";
import HistoricalDataSelector from "./HistoricalDataSelector";

const FinanceDashboard = () => {
  const [selectedStock, setSelectedStock] = useState<string>("AAPL"); // Default to "AAPL"
  const [selectedRange, setSelectedRange] = useState<string>("1d"); // Default to "1d"

  const handleStockSelect = (stockSymbol: string) => {
    setSelectedStock(stockSymbol); // Update the selected stock
  };

  const handleRangeChange = (range: string) => {
    setSelectedRange(range); // Update the selected range
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-heading font-bold text-primary dark:text-primary-light">
        Finance Dashboard
      </h1>
      <StockSearch onSelectStock={handleStockSelect} />
      <StockMetrics stockSymbol={selectedStock} /> {/* Pass selectedStock */}
      <HistoricalDataSelector onRangeChange={handleRangeChange} />
      <StockChart stockSymbol={selectedStock} range={selectedRange} /> {/* Pass range */}
    </div>
  );
};

export default FinanceDashboard;
