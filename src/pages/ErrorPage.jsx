import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-red-200">
      <div className="text-center p-10 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl max-w-md">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-3 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-300 to-indigo-600 rounded-lg shadow-lg hover:scale-105 transform transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
