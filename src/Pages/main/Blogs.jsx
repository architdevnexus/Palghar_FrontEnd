import { useEffect, useMemo } from "react";
import BlogHeader from "../../Components/Blog/BlogHeader";
import BlogCard from "../../Components/Cards/BlogCard";
import TrendingBlog from "../../Components/Blog/TrendingBlog";
import GetInTouch from "../../Components/Form/GetInTouch";
import { useBlogs } from "../../store/GetBlogs";

export default function Blogs() {
  const { blogData, loading, error, getBlog } = useBlogs();

  useEffect(() => {
    getBlog();
  }, []);
  console.log(blogData)

  /* ------------------ DERIVED DATA ------------------ */
  const topBlogsCount = 4;

  const { topBlogs, remainingBlogs } = useMemo(() => {
    return {
      topBlogs: blogData.slice(0, topBlogsCount),
      remainingBlogs: blogData.slice(topBlogsCount),
    };
  }, [blogData]);

  /* ------------------ STATES ------------------ */
  if (loading) {
    return (
      <div className="w-full text-center py-20 text-gray-500">
        Loading blogs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-20 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-gray-900">
      {/* HEADER */}
      <BlogHeader />

      {/* TOP SECTION */}
      <div className="w-full px-4 sm:px-6 lg:px-10 mt-10 flex flex-col lg:flex-row gap-10">
        {/* LEFT */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {topBlogs.length > 0 ? (
            topBlogs.map((item) => (
              <BlogCard key={item._id} item={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No blogs available.
            </p>
          )}
        </div>

        {/* RIGHT */}
        <aside className="hidden lg:block lg:w-1/3">
          <h2 className="text-2xl font-bold mb-6">Trending</h2>
          <TrendingBlog blogs={topBlogs} />
        </aside>
      </div>

      {/* MORE BLOGS */}
      {remainingBlogs.length > 0 && (
        <div className="w-full px-4 sm:px-6 lg:px-10 mt-16">
          <h2 className="text-2xl font-bold mb-6">More Blogs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingBlogs.map((item) => (
              <BlogCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* CONTACT */}
      <div className="mt-16">
        <GetInTouch />
      </div>
    </div>
  );
}
