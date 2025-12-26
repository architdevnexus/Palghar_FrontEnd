import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectShowCase from "./Cards/ProjectShowCase";
import { useMainStore } from "../store/GetAllData";

const ITEMS_PER_PAGE = 4;

export default function ProjectsShowCase() {
  const { projectdata, loading, error, fetchAllData } = useMainStore();

  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  /* ------------------ PROJECT DATA ------------------ */
  const allProjects = useMemo(
    () => projectdata?.[0]?.properties || [],
    [projectdata]
  );

  /* ------------------ AUTO STATUS TABS ------------------ */
  const TABS = useMemo(() => {
    const statuses = new Set();

    allProjects.forEach((project) => {
      if (project?.status) {
        statuses.add(project.status);
      }
    });

    return ["All", ...Array.from(statuses)];
  }, [allProjects]);

  /* ------------------ FILTER ------------------ */
  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase();

    return allProjects.filter((project) => {
      const statusMatch =
        activeTab === "All"
          ? true
          : project?.status?.toLowerCase() === activeTab.toLowerCase();

      const searchMatch =
        project?.name?.toLowerCase().includes(query) ||
        project?.location?.area?.toLowerCase().includes(query) ||
        project?.location?.city?.toLowerCase().includes(query);

      return statusMatch && searchMatch;
    });
  }, [allProjects, activeTab, search]);

  /* ------------------ PAGINATION ------------------ */
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

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

  const handlePrevPage = () => setPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () => setPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="w-full p-6 space-y-6">
      <h2 className="font-bold text-3xl text-center">Project Showcase</h2>

      {/* FILTER BAR */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex gap-2 bg-white p-1 rounded-2xl flex-wrap justify-center">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-5 py-2 rounded-2xl text-sm font-medium transition-all
                ${
                  activeTab === tab
                    ? "bg-(--primary-color) text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex border rounded-2xl overflow-hidden">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search projects..."
            className="px-4 py-2 outline-none"
          />
          <div className="px-4 flex items-center bg-(--primary-color) text-white">
            <CiSearch size={22} />
          </div>
        </div>
      </div>

      {/* GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {!loading && currentProjects.length ? (
            currentProjects.map((project) => (
              <motion.div
                key={project?._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <ProjectShowCase item={project} />
              </motion.div>
            ))
          ) : (
            !loading && (
              <p className="col-span-full text-center text-gray-500">
                No projects found.
              </p>
            )
          )}
        </motion.div>
      </AnimatePresence>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft />
          </button>

          <span className="font-medium">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
