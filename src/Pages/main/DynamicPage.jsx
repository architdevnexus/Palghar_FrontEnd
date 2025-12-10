import React from "react";
import { useParams, Link } from "react-router-dom";
import Datas from "../../DataStore/blogs.json";

const DynamicPage = () => {
  const { id } = useParams();
  const Data = Datas?.Data || [];

  // Find the blog that matches the ID
  const blog = Data.find((item) => item.id === parseInt(id));

  // If blog not found, show a 404 message
  if (!blog) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Blog not found.</h2>
        <Link to="/blogs" className="text-blue-500 ml-4 underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-10 py-10">
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
      />

      {/* Blog Info */}
      <div className="flex flex-col gap-2 mb-4">
        <span className="text-sm text-gray-500">{blog.date}</span>
        <span className="text-sm text-blue-600">{blog.category}</span>
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{blog.title}</h1>

      {/* Blog Description */}
      <p className="text-gray-700 text-lg leading-relaxed">{blog.desc}</p>
    </div>
  );
};

export default DynamicPage;
