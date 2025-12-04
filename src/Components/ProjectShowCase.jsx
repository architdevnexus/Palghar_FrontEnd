import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Data from "../DataStore/ESTATE.json";
import ProjectShowCase from "./Cards/ProjectShowCase";

export default function ProjectsShowCase() {
    const allProjects = Data?.palghar_properties || [];

    const tabs = ["All", "Upcoming", "Ongoing", "Completed"];
    const [activeTab, setActiveTab] = useState("All");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const ITEMS_PER_PAGE =4;

    // Filter projects by tab and search
    const filteredProjects = allProjects.filter((project) => {
        const statusMatch =
            activeTab === "All"
                ? true
                : (project?.status || "").toLowerCase() === activeTab.toLowerCase();

        const searchMatch =
            (project?.name || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            (project?.location?.area || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            (project?.location?.city || "")
                .toLowerCase()
                .includes(search.toLowerCase());

        return statusMatch && searchMatch;
    });

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

    // Slice data for current page
    const currentProjects = filteredProjects.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));

    // Reset page when tab or search changes
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setPage(1);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    return (
        <div className="w-full p-6 space-y-6">
            <h2 className="text-black font-bold text-3xl text-center">
                Project Showcase
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Tabs */}
                <div className="flex gap-3 justify-center overflow-x-auto no-scrollbar mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab
                                    ? "bg-(--primary-color) text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Search Input */}
                <div className="flex justify-center mb-4">
                    <div className="flex w-full md:w-1/2 rounded-2xl overflow-hidden border border-gray-300">
                        <input
                            type="text"
                            placeholder="Search projects by name, area, or city..."
                            value={search}
                            onChange={handleSearchChange}
                            className="flex-1 px-4 py-3 outline-none text-(--primary-color)"
                        />
                        <div className="flex items-center px-4 bg-(--primary-color) text-white">
                            <CiSearch size={24} />
                        </div>
                    </div>
                </div>



            </div>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab + search + page}
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {currentProjects.length > 0 ? (
                        currentProjects.map((project) => (
                            <motion.div
                                key={project?.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectShowCase
                                    title={project?.name || "Unnamed Project"}
                                    image={project?.images?.[0] || "https://via.placeholder.com/400x250"}
                                    bhk={project?.config || "-"}
                                    sqft={project?.carpet_sqft || "-"}
                                    area={project?.location?.area || "-"}
                                    city={project?.location?.city || "-"}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500 mt-10">
                            No projects found.
                        </p>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <span className="text-gray-700 font-medium">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}
