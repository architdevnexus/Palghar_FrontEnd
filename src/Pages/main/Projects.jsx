import { useEffect, useMemo } from "react";
import ProjectHero from "../../Components/Projects/ProjectHero";
import GetInTouch from "../../Components/Form/GetInTouch";
import ProjectCard from "../../Components/Cards/ProjectCard";
import { useMainStore } from "../../store/GetAllData";

export default function Projects() {
  const { projectdata, loading, error, fetchAllData } = useMainStore();

  useEffect(() => {
    fetchAllData();
  }, []);

  // Safely memoize projects list
  const projects = useMemo(
    () => projectdata?.[0]?.projects || [],
    [projectdata]
  );
console.log(projects)
  return (
    <div className="w-full flex flex-col">
      {/* HERO SECTION */}
      <ProjectHero />

      {/* PROJECT GRID */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-10 bg-[#C9ECF0]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Your Dream Home Coming Soon
        </h2>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-lg font-medium">Loading projects...</p>
        )}

        {/* Error State */}
        {error && (
          <p className="text-center text-red-600">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Projects */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((item) => (
                <ProjectCard
                  key={item?._id}
                  item={item}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">
                No projects available.
              </p>
            )}
          </div>
        )}
      </section>

      {/* CONTACT FORM */}
      <GetInTouch />
    </div>
  );
}
