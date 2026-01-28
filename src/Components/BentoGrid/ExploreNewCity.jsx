import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExploreCityCard from "../Cards/ExploreCities";
import { useMainStore } from "../../store/GetAllData";

const CARDS_PER_SLIDE_DESKTOP = 6;
const CARDS_PER_SLIDE_MOBILE = 1;
const SLIDE_INTERVAL = 5000;

export default function ExploreNewCitySlider() {
  const { fetchAllData, loading, error, projectdata } = useMainStore();

  /* ---------------- FETCH ---------------- */
  useEffect(() => {
    fetchAllData();
  }, []);

  /* ---------------- DATA ---------------- */
  const allCities = useMemo(
    () => projectdata?.[0]?.properties || [],
    [projectdata]
  );
// console.log(allCities)
  /* ---------------- RESPONSIVE ---------------- */
  const getCardsPerSlide = () =>
    window.innerWidth < 640
      ? CARDS_PER_SLIDE_MOBILE
      : CARDS_PER_SLIDE_DESKTOP;

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => setCardsPerSlide(getCardsPerSlide());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- SLIDES ---------------- */
  const slides = useMemo(() => {
    const result = [];
    for (let i = 0; i < allCities.length; i += cardsPerSlide) {
      result.push(allCities.slice(i, i + cardsPerSlide));
    }
    return result;
  }, [allCities, cardsPerSlide]);

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [slides.length]);

  /* ---------------- NAV ---------------- */
  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  /* ---------------- GRID LAYOUT ---------------- */
  const gridClasses = [
    "col-span-2 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
  ];

  /* ---------------- SKELETON ---------------- */
  if (loading) {
    return (
      <div className="w-full py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-40 rounded-2xl bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error || !slides.length) return null;

  return (
    <div className="w-full py-8  px-6">
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Explore Cities</h2>
        <p className="text-sm sm:text-base text-black">
          Browse homes, neighborhood photos, reviews and local insights.
        </p>
      </div>

      <div className="relative">
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white"
        >
          <ChevronRight />
        </button>

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={`grid gap-4 ${
              cardsPerSlide === 1
                ? "grid-cols-1 auto-rows-[300px]"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-3 auto-rows-[150px]"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            drag={cardsPerSlide === 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) handleNext();
              if (info.offset.x > 50) handlePrev();
            }}
          >
            {slides[currentSlide].map((city, index) => (
              <motion.div
                key={city?._id || index}
                className={`rounded-2xl overflow-hidden shadow-lg ${
                  cardsPerSlide === 1
                    ? ""
                    : `sm:${gridClasses[index % gridClasses.length]}`
                }`}
                whileHover={{ scale: cardsPerSlide === 1 ? 1 : 1.03 }}
              >
                <ExploreCityCard
                  city={city?.location?.city || "Unknown"}
                  image={city?.images?.[0]?.url}
                  link={`/city/${city?.location?.city?.toLowerCase() || ""}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
