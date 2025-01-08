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

export const fetchStockChartData = async (symbol: string, range: string) => {
  try {
    let apiUrl;

    switch (range) {
      case '1d':
        apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
        break;
      case '1w':
        apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
        break;
      case '1m':
      case '1y':
        apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${API_KEY}`;
        break;
      default:
        throw new Error('Invalid range');
    }

    const res = await fetch(apiUrl);
    const data = await res.json();

    let timeSeries;
    if (range === '1d') {
      timeSeries = data['Time Series (5min)'];
    } else if (range === '1w' || range === '1m') {
      timeSeries = data['Time Series (Daily)'];
    } else {
      timeSeries = data['Monthly Time Series'];
    }

    if (!timeSeries || Object.keys(timeSeries).length === 0) {
      console.error('No time series data available for the symbol:', symbol);
      return null;
    }

    // Filter the time series for the selected range
    const labels = Object.keys(timeSeries).slice(0, range === '1d' ? 48 : range === '1w' ? 7 : range === '1m' ? 30 : 365);
    const dataPoints = labels.map((key) => timeSeries[key]['4. close']);

    return {
      labels,
      datasets: [
        {
          label: 'Price',
          data: dataPoints,
          borderColor: '#4CAF50',
          fill: false,
        },
      ],
    };
  } catch (error) {
    console.error('Error fetching stock chart data:', error);
    return null;
  }
};
