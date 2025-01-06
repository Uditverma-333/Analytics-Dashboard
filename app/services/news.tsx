import axios from "axios";

const API_KEY = "17f01c542a304cf1ab3604463d40b342";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNewsByCategory = async (category: string, page: number) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      country: "us", // Modify based on your target country
      page,
      pageSize: 20, // Number of articles per page
      apiKey: API_KEY,
    },
  });
  return {
    articles: response.data.articles,
    totalResults: response.data.totalResults,
  };
};
