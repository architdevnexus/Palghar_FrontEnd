import BlogHeader from "../../Components/Blog/BlogHeader";
import BlogCard from "../../Components/Cards/BlogCard";
import TrendingBlog from "../../Components/Blog/TrendingBlog";
import Datas from "../../DataStore/blogs.json";
import GetInTouch from "../../Components/Form/GetInTouch";

export default function Blogs() {
  const Data = Datas?.Data || [];

  // Split blogs for top section (first N blogs) and remaining
  const topBlogsCount = 4; // number of blogs to show in top-left with trending
  const topBlogs = Data.slice(0, topBlogsCount);
  const remainingBlogs = Data.slice(topBlogsCount);

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Top Header */}
      <BlogHeader />

      {/* Main content container */}
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-10 mt-10 flex flex-col lg:flex-row gap-10">
        {/* LEFT : Top Blog Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {topBlogs.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>

        {/* RIGHT : Trending Sidebar (Desktop only) */}
        <aside className="block lg:block lg:w-1/3">
          <h2 className="text-2xl font-bold mb-6">Trending</h2>
          <TrendingBlog item={Data} />
        </aside>
      </div>

      {/* Remaining blogs in 3-column grid */}
      {remainingBlogs.length > 0 && (
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-10 mt-16">
          <h2 className="text-2xl font-bold mb-6">More Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingBlogs.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Get In Touch Section */}
      <div className="mt-16">
        <GetInTouch />
      </div>
    </div>
  );
}
