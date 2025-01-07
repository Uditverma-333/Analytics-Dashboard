const API_KEY = 'P0O0EP54W75UWVBK';

export const fetchStockAutocomplete = async (query) => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`
  );
  const data = await res.json();
  return data.bestMatches.map((match) => match['1. symbol']);
};

export const fetchStockMetrics = async (symbol) => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
  );
  const data = await res.json();
  const quote = data['Global Quote'];
  return {
    currentPrice: quote['05. price'],
    dailyHigh: quote['03. high'],
    dailyLow: quote['04. low'],
    volume: quote['06. volume'],
  };
};

export const fetchStockChartData = async (symbol: string) => {
    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
      );
  
      // Check if the response is OK
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json();
  
      // Log the entire response to see the structure
      console.log('API Response:', data);
  
      const timeSeries: { [key: string]: { '4. close': string } } = data['Time Series (Daily)'];
  
      // Check if timeSeries exists and is not empty
      if (!timeSeries || Object.keys(timeSeries).length === 0) {
        console.error('No time series data available for the symbol:', symbol);
        return null;
      }
  
      return {
        labels: Object.keys(timeSeries),
        datasets: [
          {
            label: 'Price',
            data: Object.values(timeSeries).map((day) => day['4. close']),
            borderColor: '#4CAF50',
            fill: false,
          },
        ],
      };
    } catch (error) {
      console.error('Error fetching stock chart data:', error);
      return null; // Return null in case of an error
    }
  };
  