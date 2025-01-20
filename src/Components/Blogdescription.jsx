import React from "react";
import { useLocation } from "react-router-dom";

const Blogdescription = () => {
  const location = useLocation();
  const { blog } = location.state || {}; // Accessing passed blog data

  if (!blog) {
    return <p className="text-center text-red-500 font-semibold mt-12">No blog data found!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-12">
      {/* Blog Image */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.question}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <h2 className="absolute bottom-4 left-6 text-white text-3xl font-bold drop-shadow-lg">
          {blog.question}
        </h2>
      </div>

      {/* Blog Content */}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {blog.heading}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">{blog.todo}</p>
      </div>

      {/* Blog Footer */}
      <div className="px-8 py-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Published by <span className="font-semibold text-gray-700">Admin</span>
        </p>
        <p className="text-sm text-gray-500">
          Posted on <span className="font-semibold text-gray-700">January 20, 2025</span>
        </p>
      </div>
    </div>
  );
};

export default Blogdescription;
