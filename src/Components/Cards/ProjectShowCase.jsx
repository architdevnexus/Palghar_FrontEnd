import React from "react";
import { MapPin, Square, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectShowCase({
  image,
  title,
  bhk,
  sqft,
  area,
  city,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="
        relative w-full h-[260px] md:h-[300px]
        rounded-2xl overflow-hidden shadow-xl 
        cursor-pointer group
      "
      style={{
        background: `url(${image}) center/cover no-repeat`,
      }}
    >
      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0 
          bg-black/40 group-hover:bg-black/50
          transition-all duration-300
        "
      />

      {/* Bottom Floating Info Card */}
      <div
        className="
          absolute bottom-0 left-0 right-6 
          bg-white/95 backdrop-blur-lg 
          rounded-xl p-4
          shadow-lg flex flex-col gap-3 z-10
        "
      >
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 leading-tight">
          {title}
        </h3>

        {/* Details */}
        <div className="flex items-center justify-between text-gray-700">
          
          {/* BHK */}
          <div className="flex flex-col items-center">
            <Home size={20} className="text-black/70 mb-1" />
            <span className="font-semibold text-[12px]">{bhk} BHK</span>
            <span className="text-[10px] text-gray-400">Layout</span>
          </div>

          {/* Divider */}
          <div className="h-10 w-px bg-gray-300" />

          {/* Sqft */}
          <div className="flex flex-col items-center">
            <Square size={20} className="text-black/70 mb-1" />
            <span className="font-semibold text-[12]">{sqft} sq ft</span>
            <span className="text-[12px] text-gray-400">Carpet</span>
          </div>

          {/* Divider */}
          <div className="h-10 w-px bg-gray-300" />

          {/* Location */}
          <div className="flex flex-col items-center">
            <MapPin size={20} className="text-black/70 mb-1" />
            <span className="font-semibold text-[12px]">{area}</span>
            <span className="text-[10px] text-gray-400">{city}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
