import React, { useState, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import img1 from "../utlis/Roads_Proposed_Alignment_Images/1.png";
import img2 from "../utlis/Roads_Proposed_Alignment_Images/2.png";
import img3 from "../utlis/Roads_Proposed_Alignment_Images/3.png";
import img4 from "../utlis/Roads_Proposed_Alignment_Images/4.png";
import img5 from "../utlis/Roads_Proposed_Alignment_Images/5.png";
import img6 from "../utlis/Roads_Proposed_Alignment_Images/6.png";
import img7 from "../utlis/Roads_Proposed_Alignment_Images/7.png";
import img8 from "../utlis/Roads_Proposed_Alignment_Images/8.png";

// ROAD DATA (can later be moved to JSON or API)
const ROAD_DATA = Object.freeze([
  { id: 1, label: "Roads Connecting in the Vicinity of the proposed road", image: img1 },
  { id: 2, label: "Existing and Proposed Major Transportation Network in the region", image: img2 },
  { id: 3, label: "Road Network Considered in the Study", image: img3 },
  { id: 4, label: "Proposed Road Alignment for the Vadhavan Port", image: img4 },
  { id: 5, label: "Connectivity of Vadodara Mumbai Expressway in the study area", image: img5 },
  { id: 6, label: "Study Network with Classification Based on road width", image: img6 },
  { id: 7, label: "Morning Peak Hour Link Flows in PCU/hr", image: img7 },
  { id: 8, label: "Vadhavan Location With Reference To JNP & Mumbai Port", image: img8 }
]);

// MEMOIZED MENU ITEM
const MenuItem = memo(({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    aria-current={isActive}
    className={`
      w-full text-left px-4 py-3 rounded-xl text-sm md:text-base font-medium
      transition-all duration-200 cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-teal-500
      ${isActive
        ? "bg-[#23c1eb] text-white shadow"
        : "text-gray-700 hover:bg-gray-100"}
    `}
  >
    {label}
  </button>
));

export default function RoadAlignment() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoize active item to prevent unnecessary recalculations
  const activeItem = useMemo(() => ROAD_DATA[activeIndex], [activeIndex]);

  const handleSelect = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="w-full p-6 flex flex-col gap-6">

      {/* Heading */}
      <header className="flex items-center gap-3">
        <span className="h-6 w-1 bg-green-600 rounded" />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Roads Proposed Alignment
        </h2>
      </header>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left Menu */}
        <nav
          className="
            lg:w-[38%] bg-white rounded-2xl shadow
            p-2 flex flex-col gap-2
            max-h-[70vh] overflow-y-auto 
          "
          aria-label="Road alignment list"
        >
          {ROAD_DATA.map((item, index) => (
            <MenuItem
              key={item.id}
              label={item.label}
              isActive={index === activeIndex}
              onClick={() => handleSelect(index)}
            />
          ))}
        </nav>

        {/* Right Content */}
        <div className="flex-1 p-4 md:p-2 rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className="text-base md:text-lg font-medium mb-4 text-gray-800">
                {activeItem.label}
              </h3>

              <motion.img
                src={activeItem.image}
                alt={activeItem.label}
                loading="lazy"
                decoding="async"
                className="
                  w-full rounded-3xl
                  object-contain md:object-fill 
                  max-h-[60vh]
                "
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.35 }}
              />
            </motion.article>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
