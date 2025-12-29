// src/Components/PopUp/SearchPopup.jsx
import React from "react";
import ProjectCard from "../Cards/ProjectCard";

const SearchPopup = ({ open, onClose, results, loading }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50  bg-black/70 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">

                {/* HEADER */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h3 className="text-xl font-bold">
                        Search Results ({results.length})
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-2xl hover:text-red-500 transition"
                    >
                        ✕
                    </button>
                </div>

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto p-6">
                    {loading ? (
                        <p className="text-center text-gray-500">Loading...</p>
                    ) : results.length ? (
                        <div className="grid grid-cols-1  gap-6">
                            {results.map((item) => (
                                <ProjectCard key={item.id} item={item} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 mt-20">
                            No properties found
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPopup;
