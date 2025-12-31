import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useTestimonialStore } from "../store/GetTestimonial"

export default function TestimonialSlider() {
    // Memoize testimonial to avoid recalculations


    const { testimonial, loading, error, fetchTestimonial } = useTestimonialStore();

    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);



    const total = testimonial.length;

    useEffect(() => {
        fetchTestimonial();
    }, [])
    console.log(testimonial)
    // Navigation functions (memoized)
    const handlePrev = useCallback(() => {
        setIndex(prev => (prev === 0 ? total - 1 : prev - 1));
    }, [total]);

    const handleNext = useCallback(() => {
        setIndex(prev => (prev === total - 1 ? 0 : prev + 1));
    }, [total]);

    // Auto-slide effect
    useEffect(() => {
        if (isPaused || total === 0) return;

        const interval = setInterval(() => {
            setIndex(prev => (prev === total - 1 ? 0 : prev + 1));
        }, 5000); // 5-second auto-slide

        return () => clearInterval(interval);
    }, [isPaused, total]);

    // If no data exists
    if (total === 0) {
        return (
            <div className="py-20 text-center text-gray-700">
                No testimonial available.
            </div>
        );
    }

    const current = testimonial[index];
    // console.log("current",current)

    return (
        <div
            className="relative w-full py-20 flex flex-col items-center justify-center bg-[#E9F6F7] bg-[url('/testimonialBack.svg')] bg-cover bg-center bg-no-repeat px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 sm:mb-14 text-center">
                What Our Clients Say
            </h2>

            {/* Slider Container */}
            <div className="relative w-full max-w-4xl mx-auto px-2 sm:px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="relative bg-white rounded-3xl shadow-xl px-4 sm:px-8 md:px-10 py-10 sm:py-14 overflow-visible"
                    >
                        {/* Orange Label */}
                        <div
                            className="
                                absolute 
                                -top-3 
                                left-1/4     
                                sm:-left-20
                                -translate-x-1/2 
                                sm:translate-x-0
                                text-white 
                                py-5 sm:py-8 px-8 sm:px-8 
                                rounded-2xl 
                                bg-no-repeat 
                                bg-cover 
                                w-52 sm:w-[260px]
                            "
                            style={{
                                backgroundImage: `url('/testimonialBlue.svg')`,
                                backgroundSize: "100% 100%",
                            }}
                        >
                            <div className="flex flex-col items-start justify-start -mt-4 ">
                                <h3 className="font-semibold text-sm sm:text-base">
                                    {current.name}
                                </h3>

                                <p className="text-[10px] opacity-90">
                                    {current.propertyBought}
                                </p>

                                <div className="flex text-yellow-300 text-xs sm:text-sm">
                                    {[...Array(Math.round(current.rating || 0))].map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Avatar */}
                        <div className="absolute top-4 right-[15%] sm:right-6 translate-x-1/2 sm:translate-x-0">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden ring-4 ring-white shadow-lg">
                                <img
                                    src={current?.image}
                                    alt={current.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Review */}
                        <p className="text-center text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-10 sm:mt-12 px-2 sm:px-6">
                            “{current.review}”
                        </p>

                        {/* Navigation */}
                        <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 mt-10">
                            <button
                                onClick={handlePrev}
                                className="p-2 sm:p-3 rounded-full bg-[#42B549] text-white transition-all shadow-md hover:scale-105 cursor-pointer"
                            >
                                <FaChevronLeft className="text-sm sm:text-base" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="p-2 sm:p-3 rounded-full bg-[#42B549] text-white transition-all shadow-md hover:scale-105 cursor-pointer"
                            >
                                <FaChevronRight className="text-sm sm:text-base" />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
