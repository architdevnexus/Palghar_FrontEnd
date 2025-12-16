import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiShareForwardBoxLine } from "react-icons/ri";

export default function PalgharHomeCard({ item }) {
    const navigate = useNavigate();

    return (
        <div
            className="
        relative
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
        transition
      
      "
        >
            {/* Share Icon */}
            <button
                onClick={() => navigate(item?._id)}
                className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-teal-600 transition"
                aria-label="View Details"
            >
                <RiShareForwardBoxLine size={20} />
            </button>

            {/* Logo */}
            <div className="w-20 h-20 flex items-center justify-center shrink-0">
                <img
                    src={'/palghar_logo.svg'}
                    alt={item?.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                />
            </div>

            {/* Company Name (2-line clamp) */}
            <h2 className="text-lg font-bold uppercase leading-snug line-clamp-2 min-h-6">
                {item?.name}
            </h2>

            {/* Category (single-line clamp) */}
            <p className="text-sm text-gray-500 tracking-wide line-clamp-1 min-h-4">
                {item?.category}
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-gray-300 my-1" />

            {/* Spacer to push email to bottom */}
            <div className="flex-1" />

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="bg-teal-500 text-white rounded-full p-1 flex items-center justify-center">
                    <MdEmail size={14} />
                </span>
                <span className="text-xs break-all line-clamp-2">
                    {item?.email}
                </span>
            </div>
        </div>
    );
}
