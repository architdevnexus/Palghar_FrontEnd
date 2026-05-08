import React, { memo, useMemo } from "react";
import { MdEmail } from "react-icons/md";
import "./palghar-cards.css";

const PalgharHomeCard = ({ item = {}, index = 0 }) => {
    const { name = "N/A", category = "N/A", email = "N/A" } = useMemo(() => item, [item]);

    return (
        <div
            className="
                pgcard-wrap
                relative bg-white rounded-2xl p-6
                w-[300px] min-h-[260px]
                flex flex-col items-center text-center gap-0
                border border-gray-100
                hover:-translate-y-1
                transition-all duration-300 overflow-hidden
                cursor-pointer
            "
            style={{ animationDelay: `${index * 0.12}s` }}
        >
          
            <div className="pgcard-bar absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-200 via-[#23c1eb] to-blue-400" />


            <div className="pgcard-icon w-16 h-10 flex items-center justify-center shrink-0 mt-1 mb-4">
                <img
                    src="/Logo.png"
                    alt={`${name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                />
            </div>

            {/* Company Name */}
            <h2
                className="
                    text-sm font-bold uppercase tracking-wide
                    leading-relaxed text-gray-800 line-clamp-2 mb-3
                    transition-colors duration-300
                    group-hover:text-[#23c1eb]
                "
                title={name}
            >
                {name}
            </h2>

            {/* Breathing category pill */}
            <span className="
                pgcard-pill
                inline-flex items-center gap-1.5
                text-[9px] font-medium tracking-[0.12em] uppercase
                text-[#23c1eb] bg-blue-50 border border-blue-200
                px-3 py-1 rounded-full mb-4
            ">
                <span className="w-1 h-1 rounded-full bg-[#23c1eb] shrink-0" />
                {category}
            </span>

            {/* Subtle divider */}
            <div className="w-12 h-px bg-gray-200 my-1" />

            <div className="flex-1" />

            {/* Email row */}
            <div className="flex items-center gap-2 w-full mt-3">
                <span className="
                    w-7 h-7 rounded-full shrink-0
                    bg-green-50 border border-[#23c1eb]
                    flex items-center justify-center
                    transition-all duration-300
                    hover:bg-green-100 hover:scale-110
                ">
                    <MdEmail size={14} className="text-[#23c1eb]" />
                </span>
                <span className="text-[10.5px] text-gray-500 text-left break-all leading-relaxed line-clamp-2">
                    {email}
                </span>
            </div>
        </div>
    );
};

export default memo(PalgharHomeCard);