import React from "react";

interface NewsDetailModalProps {
  article: any; // Replace `any` with the correct type for the article object
  onClose: () => void;
}

const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ article, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
    <button
      onClick={onClose}
      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none hover:bg-red-600"
    >
      &times;
    </button>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h2>
    <p className="text-gray-700 mb-6">{article.content}</p>
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Read Full Article
    </a>
  </div>
</div>

  );
};

export default NewsDetailModal;
