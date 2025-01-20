import React from "react";
import { Calendar, Heart, Clock, MessageCircle } from "lucide-react";
import Blogs from "./Blogs";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 relative inline-block">
            Featured Blog Posts
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 rounded-full transform transition-all duration-300 hover:scale-x-110"></div>
          </h1>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
            Discover our latest thoughts, ideas, and insights on various topics
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {Blogs.map((post) => (
            <Link
              to="/Blogdescription"
              key={post.id}
              state={{ blog: post }}
              className="no-underline transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    src={post.image}
                    alt={post.question}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category || 'Featured'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-red-600 transition-colors">
                    {post.question}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.heading}
                  </p>

                  {/* Metadata */}
                  <div className="mt-auto">
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-red-500" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-green-500" />
                        {post.readTime || '5 min read'}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-gray-600">{post.likes} likes</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-600">{post.comments || 0} comments</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;