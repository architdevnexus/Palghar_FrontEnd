import { useNavigate } from "react-router-dom";

export default function BlogCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md flex flex-col gap-4 p-4 rounded-2xl shadow-md bg-white relative">

      {/* Date tag */}
      <div
        style={{
          background: "url('/blogicon.svg') no-repeat",
        }}
        className="absolute -left-4 text-white px-3 flex flex-col items-center justify-center"
      >
        <p className="text-lg font-bold">
          {item?.createdAt ? new Date(item.createdAt).getDate() : "--"}
        </p>
        <p className="text-sm">
          {item?.createdAt
            ? new Date(item.createdAt).toLocaleString("en-US", { month: "short" })
            : "---"}
        </p>
      </div>

      {/* Image */}
      <div className="w-full h-48 rounded-2xl overflow-hidden">
        <img
          src={item.featureImage}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Description */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-600">
          {item.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-4">
          {item.blogContent}
        </p>
      </div>

      {/* Learn More Button */}
      <button
        onClick={() => navigate(`/blog/${item._id}`)}
        className="mt-2 px-5 py-2 cursor-pointer rounded-xl w-1/2 bg-green-500 text-white font-medium hover:bg-green-600 transition"
      >
        Learn More
      </button>
    </div>
  );
}
