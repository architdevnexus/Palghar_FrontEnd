import React, { memo, useMemo } from "react";
import { MdEmail } from "react-icons/md";
import "./palghar-cards.css";

const PalgharHomeCard = ({ item = {}, index = 0 }) => {
    const { name = "N/A", category = "N/A", email = "N/A" } = useMemo(() => item, [item]);

    return (
        <div
            className="
                pgcard-wrap group
                relative bg-white rounded-2xl px-6 pt-8 pb-6
                w-[300px] min-h-[280px]
                flex flex-col items-center justify-start text-center
                border border-gray-100
                shadow-[0_2px_12px_rgba(0,0,0,0.05)]
                hover:-translate-y-1.5
                transition-all duration-300 overflow-hidden
                cursor-pointer
            "
            style={{ animationDelay: `${index * 0.12}s` }}
        >
            {/* Top accent bar */}
            <div className="pgcard-bar absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-200 via-[#23c1eb] to-blue-400" />

            {/* Soft glow behind logo */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#23c1eb]/5 blur-2xl pointer-events-none" />

            {/* Logo */}
            <div className="pgcard-icon relative w-20 h-14 flex items-center justify-center shrink-0 mb-5 rounded-xl bg-gray-50 border border-gray-100 p-2 transition-transform duration-300 group-hover:scale-105">
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
                "
                title={name}
            >
                {name}
            </h2>

            {/* Category pill */}
            <span className="
                pgcard-pill
                inline-flex items-center gap-1.5
                text-[10px] font-semibold tracking-[0.12em] uppercase
                text-[#23c1eb] bg-blue-50 border border-blue-200
                px-3.5 py-1 rounded-full mb-4
            ">
                <span className="w-1.5 h-1.5 rounded-full bg-[#23c1eb] shrink-0" />
                {category}
            </span>

            <div className="flex-1" />

            {/* Divider */}
            <div className="w-12 h-px bg-gray-200 mb-4" />

            {/* Email row - centered */}
            <div className="
                flex items-center justify-center gap-2 w-full
                bg-gray-50 border border-gray-100 rounded-full
                px-3 py-2
            ">
                <span className="
                    w-6 h-6 rounded-full shrink-0
                    bg-white border border-[#23c1eb]
                    flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-110
                ">
                    <MdEmail size={13} className="text-[#23c1eb]" />
                </span>
                <span className="text-[11px] text-gray-600 text-center break-all leading-snug line-clamp-2">
                    {email}
                </span>
            </div>
        </div>
    );
};

export default memo(PalgharHomeCard);
