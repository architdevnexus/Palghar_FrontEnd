import { MapPin, Square } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectShowCase({ item }) {
  const imageUrl =
    item?.images?.[0]?.url || "/images/property-placeholder.jpg";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="
        relative w-full h-[260px] md:h-[300px]
        rounded-2xl overflow-hidden shadow-xl 
        cursor-pointer group
      "
    >
      {/* Image (Lazy Loaded) */}
      <img
        src={imageUrl}
        alt={item?.name || "Project image"}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "/images/property-placeholder.jpg";
        }}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500 group-hover:scale-110
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0 
          bg-black/40 group-hover:bg-black/50
          transition-all duration-300 rounded-2xl
        "
      />

      {/* Bottom Floating Info Card */}
      <div
        className="
          absolute bottom-0 left-0 
          bg-white/95 backdrop-blur-lg 
          rounded-xl p-4
          shadow-lg flex flex-col gap-3 z-10
        "
      >
        {/* Title */}
        <h3 className="text-base font-bold text-gray-800 leading-tight">
          {item?.name}
        </h3>

        {/* Details */}
        <div className="flex items-center gap-4 text-gray-700">
          {/* Sqft */}
          <div className="flex flex-col items-center">
            <Square size={20} className="text-black/70 mb-1" />
            <span className="font-semibold text-[12px]">
              {item?.area?.carpet_sqft ?? "-"} sq ft
            </span>
            <span className="text-[10px] text-gray-400">Carpet</span>
          </div>

          <div className="h-10 w-px bg-gray-300" />

          {/* Location */}
          <div className="flex flex-col items-center">
            <MapPin size={20} className="text-black/70 mb-1" />
            <span className="font-semibold text-[12px]">
              {item?.location?.area}
            </span>
            <span className="text-[10px] text-gray-400">
              {item?.location?.city}
            </span>
            <span className="text-[10px] text-gray-400">
              {item?.location?.pincode}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
