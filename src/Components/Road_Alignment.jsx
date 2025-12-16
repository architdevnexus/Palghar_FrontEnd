import React, { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../utlis/Roads_Proposed_Alignment_Images/1.png"
import img2 from "../utlis/Roads_Proposed_Alignment_Images/2.png"
import img3 from "../utlis/Roads_Proposed_Alignment_Images/3.png"
import img4 from "../utlis/Roads_Proposed_Alignment_Images/4.png"
import img5 from "../utlis/Roads_Proposed_Alignment_Images/5.png"
import img6 from "../utlis/Roads_Proposed_Alignment_Images/6.png"
import img7 from "../utlis/Roads_Proposed_Alignment_Images/7.png"
import img8 from "../utlis/Roads_Proposed_Alignment_Images/8.png"



/* ===========================
   DATA (can be moved to JSON)
=========================== */
const ROAD_DATA = [
    {
        id: 1,
        label: "Roads Connecting in the Vicinity of the proposed road",
        image: img1
    },
    {
        id: 2,
        label: "Existing and Proposed Major Transportation Network in the region",
        image: img2
    },
    {
        id: 3,
        label: "Road Network Considered in the Study",
        image: img3
    },
    {
        id: 4,
        label: "Proposed Road Alignment for the Vadhavan Port",
        image: img4
    },
    {
        id: 5,
        label: "Connectivity of Vadodara Mumbai Expressway in the study area",
        image: img5
    },
    {
        id: 6,
        label: "Study Network with Classification Based on road width",
        image: img6
    },
    {
        id: 7,
        label: "Morning Peak Hour Link Flows in PCU/hr",
        image: img7
    },
    {
        id: 8,
        label: "Vadhavan Location With Reference To JNP & Mumbai Port",
        image: img8
    }
];

/* ===========================
   LEFT MENU ITEM (MEMOIZED)
=========================== */
const MenuItem = memo(({ item, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`text-left px-4 py-3 rounded-xl transition-all
        focus:outline-none focus:ring-2 focus:ring-teal-500
        ${isActive
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            aria-pressed={isActive}
        >
            {item.label}
        </button>
    );
});

/* ===========================
   MAIN COMPONENT
=========================== */
export default function RoadAlignment() {
    const [activeIndex, setActiveIndex] = useState(0);

    /* Prevent unnecessary recalculation */
    const activeItem = useMemo(
        () => ROAD_DATA[activeIndex],
        [activeIndex]
    );

    return (
        <section className="flex flex-col gap-6">

            {/* HEADING */}
            <div className="flex items-center gap-3">
                <span className="h-6 w-1 bg-green-600 rounded" />
                <h2 className="text-xl font-semibold">
                    Roads Proposed Alignment
                </h2>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col-reverse lg:flex-row gap-6">

                {/* LEFT MENU */}
                <nav
                    className="lg:w-[38%] bg-white rounded-2xl shadow p-4 flex flex-col gap-2"
                    aria-label="Road alignment options"
                >
                    {ROAD_DATA.map((item, index) => (
                        <MenuItem
                            key={item.id}
                            item={item}
                            isActive={index === activeIndex}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </nav>

                {/* RIGHT CONTENT */}
                <div className="flex-1 bg-white rounded-2xl shadow p-4 overflow-hidden">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <h3 className="text-lg font-medium mb-3">
                                {activeItem.label}
                            </h3>

                            <motion.img
                                src={activeItem.image}
                                alt={activeItem.label}
                                loading="lazy"
                                decoding="async"
                                className="w-full rounded-xl object-cover"
                                initial={{ scale: 0.97 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}
