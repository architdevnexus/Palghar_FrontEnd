import { IoLocationOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({
    img,
    projectname,
    address,
    locationUrl = "#",
    status = "COMING SOON...",
}) {
    return (
        <div
            className="
                bg-white rounded-2xl shadow-md overflow-hidden 
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                flex flex-col
                h-full
            "
        >
            {/* IMAGE (fixed height & consistent) */}
            <div className="w-full h-56 md:h-64 shrink-0">
                <img
                    src={img}
                    alt={projectname}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* CONTENT (flex-grow ensures equal height) */}
            <div className="px-5 py-4 flex flex-col justify-between grow min-h-[150px]">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                        {projectname}
                    </h3>

                    <p className="text-gray-500 text-sm line-clamp-2">
                        {address}
                    </p>
                </div>

                <a
                    href={locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex items-center gap-2 text-gray-900 font-medium 
                        hover:text-(--primary-color) transition-colors text-sm mt-2
                    "
                >
                    <IoLocationOutline size={18} />
                    Location
                    <GoArrowUpRight size={18} />
                </a>
            </div>

            <hr className="border-gray-200" />

            {/* FOOTER (consistent height) */}
            <div className="px-5 py-3 flex justify-center items-center min-h-[60px]">
                <span
                    className="
                        inline-flex items-center gap-2 px-4 py-1.5 rounded-xl 
                        bg-[#E8FCFF] text-[#00879F] font-medium text-sm
                    "
                >
                    ✨ {status}
                </span>
            </div>
        </div>
    );
}
