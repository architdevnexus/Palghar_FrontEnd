import React, { memo, useMemo } from "react";
import { MdEmail } from "react-icons/md";

const PalgharHomeCard = ({ item = {} }) => {
    const {
        name = "N/A",
        category = "N/A",
        email = "N/A",
    } = useMemo(() => item, [item]);

    return (
        <div
            className="
                bg-white
                rounded-2xl
                p-6
                w-[320px]
                h-[260px]
                flex
                flex-col
                items-center
                text-center
                gap-3
                
                hover:shadow-md
                transition-all
                duration-300
            "
        >
            {/* Logo */}
            <div className="w-20 h-12 flex items-center justify-center shrink-0">
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
                    text-sm
                    font-bold
                    uppercase
                    tracking-wide
                    leading-snug
                    min-h-10
                    line-clamp-2
                "
                title={name}   // shows full name on hover
            >
                {name}
            </h2>

            {/* Category */}
            <p className="text-xs text-gray-500 min-h-4 line-clamp-1">
                {category}
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-gray-300 my-1" />

            {/* Spacer */}
            <div className="flex-1" />

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-600 text-xs">
                <span className="bg-teal-500 text-white rounded-full p-1 flex items-center justify-center">
                    <MdEmail size={14} />
                </span>
                <span className="break-all line-clamp-2">
                    {email}
                </span>
            </div>
        </div>
    );
};

export default memo(PalgharHomeCard);
