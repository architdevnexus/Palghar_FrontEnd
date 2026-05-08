import { useNavigate } from "react-router-dom";

export default function TrendingBlog({ blogs = [] }) {
  const navigate = useNavigate();

  console.log(blogs)

  const Item = ({ item }) => {
    return (
      <div
        onClick={() => navigate(`/blog/${item._id}`)}
        className="flex items-start gap-3 cursor-pointer hover:opacity-80 transition-all"
      >
        {/* Thumbnail */}
        <img
          src={item.featureImage}
          alt={item.title}
          className="w-16 h-16 rounded-lg object-cover"
        />

        {/* Blog text */}
        <div className="flex flex-col">
          <span dangerouslySetInnerHTML={{
            __html:
              item.blogContent?.length > 60
                ? item.blogContent.slice(0, 60) + " ..."
                : item.blogContent

          }} className="font-semibold text-sm leading-tight">

          </span>
          <span className="italic text-xs text-gray-500 mt-1">
            {new Date(item.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className="p-4 rounded-2xl bg-white relative w-full border-2"
      style={{ borderColor: "#23c1eb" }}
    >
      {/* Top badge header */}
      <div
        className="text-white font-semibold text-lg px-4 py-3 rounded-2xl flex items-center gap-2 absolute -top-6 left-6 shadow-md"
        style={{ backgroundColor: "#23c1eb" }}
      >
        <span
          className="h-6 w-2 rounded-full"
          style={{ backgroundColor: "#fff" }}
        ></span>
        Trending Posts
      </div>

      {/* Wrapper Box */}
      <div className="mt-10 border-l-4 pl-4" style={{ borderColor: "#23c1eb" }}>
        {/* Scrollable Area */}
        <div className="flex flex-col gap-6 max-h-[520px] overflow-y-auto pr-2 scrollbar-hide">
          {blogs.slice(0, 7).map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
