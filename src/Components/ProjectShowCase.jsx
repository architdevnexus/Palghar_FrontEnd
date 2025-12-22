import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Data from "../DataStore/ESTATE.json";
import ProjectShowCase from "./Cards/ProjectShowCase";

const TABS = ["All", "Upcoming", "Ongoing", "Completed"];
const ITEMS_PER_PAGE = 4;

export default function ProjectsShowCase() {
    const allProjects = Data?.palghar_properties ?? [];

    const [activeTab, setActiveTab] = useState("All");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    /* ------------------ FILTER PROJECTS ------------------ */
    const filteredProjects = useMemo(() => {
        const query = search.toLowerCase();

        return allProjects.filter((project) => {
            const statusMatch =
                activeTab === "All"
                    ? true
                    : (project?.status ?? "").toLowerCase() === activeTab.toLowerCase();

            const searchMatch =
                (project?.name ?? "").toLowerCase().includes(query) ||
                (project?.location?.area ?? "").toLowerCase().includes(query) ||
                (project?.location?.city ?? "").toLowerCase().includes(query);

            return statusMatch && searchMatch;
        });
    }, [allProjects, activeTab, search]);

    /* ------------------ PAGINATION ------------------ */
    const totalPages = useMemo(
        () => Math.ceil(filteredProjects.length / ITEMS_PER_PAGE),
        [filteredProjects.length]
    );

    const currentProjects = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredProjects, page]);

    /* ------------------ HANDLERS ------------------ */
    const handleTabChange = useCallback((tab) => {
        setActiveTab(tab);
        setPage(1);
    }, []);

    const handleSearchChange = useCallback((e) => {
        setSearch(e.target.value);
        setPage(1);
    }, []);

    const handlePrevPage = useCallback(
        () => setPage((prev) => Math.max(prev - 1, 1)),
        []
    );

    const handleNextPage = useCallback(
        () => setPage((prev) => Math.min(prev + 1, totalPages)),
        [totalPages]
    );

    return (
        <div className="w-full p-6 space-y-6">
            <h2 className="text-black font-bold text-3xl text-center">
                Project Showcase
            </h2>

            {/* FILTER BAR */}
            <div className="max-w-full w-full flex-wrap flex items-center gap-4 justify-center">
                {/* Tabs */}
                <div className="flex gap-3 justify-between max-w-md rounded-2xl p-1 bg-white overflow-x-auto no-scrollbar mb-6">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`px-5 py-2 rounded-2xl text-sm font-medium transition-all ${
                                activeTab === tab
                                    ? "bg-(--primary-color) text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="flex justify-center mb-6">
                    <div className="flex w-full rounded-2xl overflow-hidden border border-gray-300">
                        <input
                            type="text"
                            placeholder="Search projects by name, area, or city..."
                            value={search}
                            onChange={handleSearchChange}
                            className="flex-1 px-4 py-2 outline-none text-(--primary-color)"
                        />
                        <div className="flex items-center px-4 bg-(--primary-color) text-white">
                            <CiSearch size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* PROJECT GRID */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${activeTab}-${search}-${page}`}
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {currentProjects.length ? (
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
                                    title={project?.name ?? "Unnamed Project"}
                                    image={
                                        project?.images?.[0] ??
                                        "https://via.placeholder.com/400x250"
                                    }
                                    bhk={project?.config ?? "-"}
                                    sqft={project?.carpet_sqft ?? "-"}
                                    area={project?.location?.area ?? "-"}
                                    city={project?.location?.city ?? "-"}
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

            {/* PAGINATION */}
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
