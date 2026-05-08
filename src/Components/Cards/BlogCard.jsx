import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

/* ---------- utils ---------- */
const truncate = (text = "", max) =>
  text.length > max ? text.slice(0, max) + "..." : text;

/* Strip HTML to plain text */
const stripHTML = (html = "") => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

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

  /* ---------- Safe Preview Content ---------- */
  const previewText = useMemo(() => {
    if (!item?.blogContent) return "";

    // 1. Sanitize HTML
    const cleanHTML = DOMPurify.sanitize(item.blogContent);

    // 2. Convert to plain text
    const textOnly = stripHTML(cleanHTML);

    // 3. Truncate for card preview
    return truncate(textOnly, 180);
  }, [item?.blogContent]);

  return (
    <div className="w-full max-w-md flex flex-col gap-4 p-4 rounded-2xl shadow-md bg-white relative">

      {/* Date tag */}
     
    <div className="absolute -left-4 h-16 w-16 bg-[#23c1eb] rounded-br-2xl rounded-tr-2xl rounded-tl-2xl text-white px-3 flex flex-col items-center justify-center shadow-md">
      <p className="text-xl font-bold leading-none">{dateInfo.day}</p>
      <p className="text-xs">{dateInfo.month}</p>
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

        {/* Title */}
        <h2 className="text-xl font-semibold border-l-4 pl-3 border-[#23c1eb] line-clamp-2 min-h-14">
          {truncate(item?.title, 50)}
        </h2>

        {/* Sanitized Description Preview */}
        <p className="text-gray-600 text-sm line-clamp-4 min-h-20">
          {previewText}
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
