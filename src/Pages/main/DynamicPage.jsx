import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";

const DynamicPage = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------------- FETCH BLOG ---------------- */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/blog/${id}`
        );

        if (!res.ok) {
          throw new Error("Blog not found");
        }

        const data = await res.json();
        setBlog(data?.blog || null);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  /* ---------------- SANITIZE & STYLE HTML ---------------- */
  const styledHTML = useMemo(() => {
    if (!blog?.blogContent) return "";

    const cleanHTML = DOMPurify.sanitize(blog.blogContent);

    return cleanHTML
      .replace(/<table/g, '<div class="overflow-x-auto my-8"><table class="min-w-full border rounded-xl"')
      .replace(/<\/table>/g, "</table></div>")
      .replace(/<h2/g, '<h2 class="text-2xl font-semibold mt-10 mb-4"')
      .replace(/<h3/g, '<h3 class="text-xl font-semibold mt-8 mb-3"')
      .replace(/<p/g, '<p class="text-gray-700 leading-relaxed mb-5"')
      .replace(/<ul/g, '<ul class="list-disc pl-6 space-y-2 mb-6"')
      .replace(/<ol/g, '<ol class="list-decimal pl-6 space-y-2 mb-6"')
      .replace(/<a/g, '<a class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"');
  }, [blog]);

  /* ---------------- LOADING UI ---------------- */
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 animate-pulse">
        <div className="h-72 bg-gray-200 rounded-xl mb-6" />
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-6" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
      </div>
    );
  }

  /* ---------------- ERROR UI ---------------- */
  if (error || !blog) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-semibold text-red-500">
          {error || "Blog not found"}
        </h2>
        <Link
          to="/blogs"
          className="mt-4 text-blue-600 underline"
        >
          Go Back to Blogs
        </Link>
      </div>
    );
  }

  /* ---------------- PAGE UI ---------------- */
  return (
    <article className="w-full max-w-5xl mx-auto px-4 md:px-10 py-12">
      {/* FEATURE IMAGE */}
      {blog.featureImage && (
        <img
          src={blog.featureImage}
          alt={blog.title}
          loading="lazy"
          className="w-full h-64 md:h-[420px] object-cover rounded-2xl mb-8"
        />
      )}

      {/* META INFO */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
        {blog.date && <span>{blog.date}</span>}
        {blog.category && (
          <span className="text-blue-600 font-medium">
            {blog.category}
          </span>
        )}
      </div>

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
        {blog.title}
      </h1>

      {/* CONTENT */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: styledHTML }}
      />
    </article>
  );
};

export default DynamicPage;
