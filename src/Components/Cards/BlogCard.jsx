import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

/* ---------- utils ---------- */
const truncate = (text = "", max) =>
  text.length > max ? text.slice(0, max) + "..." : text;

export default function BlogCard({ item }) {
  const navigate = useNavigate();

  /* ---------- Memoized Date ---------- */
  const dateInfo = useMemo(() => {
    if (!item?.createdAt) return { day: "--", month: "---" };

    const date = new Date(item.createdAt);
    return {
      day: date.getDate(),
      month: date.toLocaleString("en-US", { month: "short" }),
    };
  }, [item?.createdAt]);

  return (
    <div className="w-full max-w-md flex flex-col gap-4 p-4 rounded-2xl shadow-md bg-white relative">

      {/* Date tag */}
      <div
        style={{ background: "url('/blogicon.svg') no-repeat" }}
        className="absolute -left-4 h-22 text-white px-3 flex flex-col items-center justify-center"
      >
        <p className="text-xl -translate-y-5 font-bold">{dateInfo.day}</p>
        <p className="text-sm -translate-y-6">{dateInfo.month}</p>
      </div>

      {/* Image */}
      <div className="w-full h-48 rounded-2xl overflow-hidden">
        <img
          src={item?.featureImage}
          alt={item?.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-2">

        {/* Fixed-height title */}
        <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-600 line-clamp-2 min-h-14">
          {truncate(item?.title, 50)}
        </h2>

        {/* Fixed-height description */}
        <p className="text-gray-600 text-sm line-clamp-4 min-h-20">
          {truncate(item?.blogContent, 180)}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate(`/blog/${item?._id}`)}
        className="mt-2 px-5 py-2 cursor-pointer rounded-xl w-1/2 bg-green-500 text-white font-medium hover:bg-green-600 transition"
      >
        Learn More
      </button>
    </div>
  );
}
