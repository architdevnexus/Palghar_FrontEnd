import { motion } from "framer-motion";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ExploreCityCard({ city, image, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) navigate("www.google.com");
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative md:min-w-72 w-full min-h-80 h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition-transform"
      style={{
        background: `url(${image}) center/cover no-repeat`,
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

      {/* City Name */}
      <div className="absolute top-5 left-5 z-10">
        <h3 className="text-white text-2xl font-bold drop-shadow-lg">{city}</h3>
      </div>

      {/* Visit Homes Button */}
      <div className="absolute bottom-5 left-5 z-10">
        <button
          onClick={handleClick}
          className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          Visit Homes <MdNavigateNext size={20} />
        </button>
      </div>
    </motion.div>
  );
}
