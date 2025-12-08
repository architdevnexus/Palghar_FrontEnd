import { useEffect, useState } from "react";
import GetInTouch from "../../Components/Form/GetInTouch";
import MediaHero from "../../Components/Media/MediaHero";
import MediaCard from "../../Components/Cards/MediaCard";
import Data from "../../DataStore/properties.json";

export default function Media() {
    const itemsPerPage = 12;
    const allProperties = Data?.properties || [];

    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    // Pagination Logic
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = allProperties.slice(indexOfFirst, indexOfLast);

    // Fake loading shimmer
    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timeout);
    }, [currentPage]);

    const totalPages = Math.ceil(allProperties.length / itemsPerPage);

    return (
        <div className="w-full">
            <MediaHero />

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* SHIMMER LOADING */}
                    {loading &&
                        [...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="w-full h-72 bg-gray-200 animate-pulse rounded-2xl"
                            ></div>
                        ))
                    }

                    {/* REAL DATA */}
                    {!loading &&
                        currentItems.map((item) => (
                            <MediaCard key={item.id} item={item} />
                        ))
                    }
                </div>

                {/* PAGINATION */}
                <div className="flex items-center justify-center gap-4 mt-10">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className={`px-4 py-2 rounded-lg border 
                        ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}
                        `}
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded-lg border 
                            ${currentPage === index + 1 ? "bg-black text-white" : "hover:bg-gray-100"}
                            `}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className={`px-4 py-2 rounded-lg border 
                        ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}
                        `}
                    >
                        Next
                    </button>
                </div>

            </div>

            <GetInTouch />
        </div>
    );
}
