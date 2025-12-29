import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DynamicPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/blog/${id}`);
        if (!res.ok) {
          throw new Error("Blog not found");
        }

        const data = await res.json();
        setBlog(data.blog || null);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">{error || "Blog not found."}</h2>
        <Link to="/blogs" className="text-blue-500 mt-4 underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-10 py-10">
      {/* Blog Image */}
      <img
        src={blog.featureImage}
        alt={blog.title}
        className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
      />

      {/* Blog Info */}
      <div className="flex flex-col gap-2 mb-4">
        <span className="text-sm text-gray-500">{blog.date}</span>
        <span className="text-sm text-blue-600">{blog.category}</span>
      </div>

      {/* Blog Title */}
      <h1 className="text-lg md:text-xl font-bold mb-6">{blog.title}</h1>

      {/* Blog Description */}
      <p className="text-gray-700 text-base leading-relaxed">{blog.blogContent}</p>
    </div>
  );
};

export default DynamicPage;
