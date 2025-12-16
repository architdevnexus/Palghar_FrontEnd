import React, { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../utlis/Roads_Proposed_Alignment_Images/1.png";
import img2 from "../utlis/Roads_Proposed_Alignment_Images/2.png";
import img3 from "../utlis/Roads_Proposed_Alignment_Images/3.png";
import img4 from "../utlis/Roads_Proposed_Alignment_Images/4.png";
import img5 from "../utlis/Roads_Proposed_Alignment_Images/5.png";
import img6 from "../utlis/Roads_Proposed_Alignment_Images/6.png";
import img7 from "../utlis/Roads_Proposed_Alignment_Images/7.png";
import img8 from "../utlis/Roads_Proposed_Alignment_Images/8.png";

/* ===========================
   STATIC DATA (OUTSIDE RENDER)
=========================== */
const ROAD_DATA = [
  { id: 1, label: "Roads Connecting in the Vicinity of the proposed road", image: img1 },
  { id: 2, label: "Existing and Proposed Major Transportation Network in the region", image: img2 },
  { id: 3, label: "Road Network Considered in the Study", image: img3 },
  { id: 4, label: "Proposed Road Alignment for the Vadhavan Port", image: img4 },
  { id: 5, label: "Connectivity of Vadodara Mumbai Expressway in the study area", image: img5 },
  { id: 6, label: "Study Network with Classification Based on road width", image: img6 },
  { id: 7, label: "Morning Peak Hour Link Flows in PCU/hr", image: img7 },
  { id: 8, label: "Vadhavan Location With Reference To JNP & Mumbai Port", image: img8 }
];

/* ===========================
   MEMOIZED MENU ITEM
=========================== */
const MenuItem = memo(({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      text-left px-4 py-3 rounded-xl transition
      focus:outline-none focus:ring-2 focus:ring-teal-500
      ${isActive
        ? "bg-teal-600 text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100"}
    `}
    aria-pressed={isActive}
  >
    {label}
  </button>
));

/* ===========================
   MAIN COMPONENT
=========================== */
export default function RoadAlignment() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = useMemo(
    () => ROAD_DATA[activeIndex],
    [activeIndex]
  );

  return (
    <section className="flex flex-col gap-6  w-[97%] m-auto">

      {/* HEADING */}
      <header className="flex items-center gap-3">
        <span className="h-6 w-1 bg-green-600 rounded" />
        <h2 className="text-xl font-semibold">
          Roads Proposed Alignment
        </h2>
      </header>

      {/* CONTENT WRAPPER */}
      <div className="flex flex-col-reverse  lg:flex-row gap-6 h-[520px]">

        {/* LEFT MENU */}
        <nav
          className="
            lg:w-[38%]
            bg-white rounded-2xl shadow
            p-3
            flex flex-col gap-2
            overflow-y-auto
          "
          aria-label="Road alignment options"
        >
          {ROAD_DATA.map((item, index) => (
            <MenuItem
              key={item.id}
              label={item.label}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
                
            />
          ))}
        </nav>

        {/* RIGHT CONTENT */}
        <div className="flex-1 bg-white rounded-2xl shadow p-4 flex flex-col">

          {/* Fixed title height to avoid jump */}
          <h3 className="text-lg cursor-pointer font-medium mb-3 min-h-12">
            {activeItem.label}
          </h3>

          {/* IMAGE CONTAINER */}
          <div className="relative flex-1 overflow-hidden rounded-xl">

            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.label}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
