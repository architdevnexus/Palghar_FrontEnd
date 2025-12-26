import { useEffect, useMemo, useState } from "react";
import GetInTouch from "../../Components/Form/GetInTouch";
import MediaHero from "../../Components/Media/MediaHero";
import MediaCard from "../../Components/Cards/MediaCard";
import { useMainStore } from "../../store/GetAllData";

const ITEMS_PER_PAGE = 12;

export default function Media() {
  const { fetchAllData, projectdata, loading, error } = useMainStore();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  // Safely extract media data
  const mediaItems = useMemo(
    () => projectdata?.[0]?.properties || [],
    [projectdata]
  );

  console.log(mediaItems)

  // Pagination logic
  const totalPages = Math.ceil(mediaItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = mediaItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="w-full">
      <MediaHero />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Skeleton Loader */}
          {loading &&
            Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <div
                key={i}
                className="w-full h-72 bg-gray-200 animate-pulse rounded-2xl"
              />
            ))}

          {/* Error */}
          {error && !loading && (
            <p className="col-span-full text-center text-red-600">
              Failed to load media.
            </p>
          )}

          {/* Media Cards */}
          {!loading &&
            !error &&
            currentItems.map((item) => (
              <MediaCard key={item._id} item={item} />
            ))}

          {/* Empty State */}
          {!loading && !error && currentItems.length === 0 && (
            <p className="col-span-full text-center text-gray-600">
              No media available.
            </p>
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">

            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 rounded-lg border disabled:opacity-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg border
                  ${currentPage === index + 1
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"}
                `}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 rounded-lg border disabled:opacity-50"
            >
              Next
            </button>

          </div>
        )}
      </div>

      <GetInTouch />
    </div>
  );
}
