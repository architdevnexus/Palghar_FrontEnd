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
                justify-center
                items-center
                text-center
                gap-3
                transition
            "
        >
            {/* Logo */}
            <div className="flex items-center justify-center shrink-0">
                <img
                    src="/palghar_logo.svg"
                    alt={`${name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                />
            </div>

            {/* Company Name */}
            <h2 className="text-lg font-bold uppercase leading-snug line-clamp-2 min-h-6">
                {name}
            </h2>

            {/* Category */}
            <p className="text-sm text-gray-500 tracking-wide line-clamp-1 min-h-4">
                {category}
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-gray-300 my-1" />

            {/* Spacer */}
            <div className="flex-1" />

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="bg-teal-500 text-white rounded-full p-1 flex items-center justify-center">
                    <MdEmail size={14} />
                </span>
                <span className="text-xs break-all line-clamp-2">
                    {email}
                </span>
            </div>
        </div>
    );
};

export default memo(PalgharHomeCard);
