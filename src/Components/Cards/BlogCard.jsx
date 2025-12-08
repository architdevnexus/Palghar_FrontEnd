import { useNavigate } from "react-router-dom";

export default function BlogCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xl flex flex-col gap-4 p-4 rounded-2xl transition duration-300
                    h-[500px] "> {/* fixed height for consistent card size */}

      {/* Date Badge + Image */}
      <div className="relative h-60">
        {/* Date tag */}
        <div
          style={{
            background: "url('/blogicon.svg')",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute -left-8 text-white px-3 h-18 text-center"
        >
          <p className="text-lg font-bold">{new Date(item.date).getDate()}</p>
          <p className="text-sm">
            {new Date(item.date).toLocaleString("en-US", { month: "short" })}
          </p>
        </div>

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col items-start gap-2">
        <h2 className="text-2xl font-semibold border-l-8 pl-4 border-(--primary-color)">
          {item.title}
        </h2>
        <p className="text-gray-600 text-sm pl-4">{item.desc}</p>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate(item?.path)}
        className="px-5 py-2 rounded-xl w-1/2 cursor-pointer bg-green-500 text-white font-medium hover:bg-green-600 transition"
      >
        Learn More
      </button>
    </div>
  );
}
