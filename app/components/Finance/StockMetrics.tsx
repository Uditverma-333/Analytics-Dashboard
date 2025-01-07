"use client";

// StockMetrics.tsx
import React, { useEffect, useState } from "react";

// Define the type for the props
interface StockMetricsProps {
  stockSymbol: string;  // Define the type for the stockSymbol prop
}

const StockMetrics: React.FC<StockMetricsProps> = ({ stockSymbol }) => {
  const [metrics, setMetrics] = useState<any>(null);  // Define state to hold the data

  useEffect(() => {
    const fetchMetrics = async () => {
      const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=1min&apikey=YOUR_API_KEY`);
      const data = await response.json();
      setMetrics(data);
    };

    fetchMetrics();
  }, [stockSymbol]);  // Re-fetch data when the stock symbol changes

  return (
    <div>
      {metrics ? (
        <div>
          <h2>{stockSymbol} Metrics</h2>
          <p>Price: {metrics["Time Series (1min)"]?.[Object.keys(metrics["Time Series (1min)"])[0]]?.["1. open"]}</p>
          <p>Volume: {metrics["Time Series (1min)"]?.[Object.keys(metrics["Time Series (1min)"])[0]]?.["5. volume"]}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockMetrics;
