import React, { useState } from "react";
import NewsDetailModal from "./NewsDetailModal";

const NewsCard = ({ article }: { article: any }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src={article.urlToImage || "https://via.placeholder.com/150"}
        alt={article.title || "News Image"}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg text-gray-900 font-bold mb-2">{article.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        <button
          onClick={() => setModalOpen(true)}
          className="text-blue-500 font-semibold hover:underline focus:outline-none"
        >
          Read More
        </button>
        {isModalOpen && (
          <NewsDetailModal
            article={article}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default NewsCard;
