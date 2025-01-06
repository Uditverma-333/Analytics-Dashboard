"use client";

import React, { useState, useEffect } from "react";
import FilterBar from "../components/News/FilterBar";
import NewsFeed from "../components/News/NewsFeed";
import Pagination from "../components/News/Pagination";
import { fetchNewsByCategory } from "../services/news";

const NewsPage = () => {
    const [category, setCategory] = useState<string>("general");
    const [news, setNews] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
  
    useEffect(() => {
      const loadNews = async () => {
        setLoading(true);
        setError(null);
        try {
          const { articles, totalResults } = await fetchNewsByCategory(category, page);
          setNews(articles);
          setTotalPages(Math.ceil(totalResults / 20)); // Assuming 20 articles per page
        } catch (err: any) {
          setError("Failed to fetch news. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
  
      loadNews();
    }, [category, page]);
  
    const handlePageChange = (newPage: number) => {
      setPage(newPage);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
        <h1 className="text-3xl text-gray-900 dark:text-white font-bold text-center mb-6 capitalize">
          {category} News
        </h1>
        <FilterBar setCategory={setCategory} />
        {error && <p className="text-red-500 text-center">{error}</p>}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <NewsFeed articles={news} />
        )}
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    );
  };
  

export default NewsPage;
