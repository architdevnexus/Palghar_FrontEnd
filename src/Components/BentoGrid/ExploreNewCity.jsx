import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExploreCityCard from "../Cards/ExploreCities";
import Data from "../../DataStore/ESTATE.json";

export default function ExploreNewCitySlider() {
  const allCities = Data?.palghar_properties || [];

  const CARDS_PER_SLIDE_DESKTOP = 6; // desktop/tablet
  const CARDS_PER_SLIDE_MOBILE = 1; // mobile
  const SLIDE_INTERVAL = 5000;

  // Determine number of cards per slide based on screen width
  const [cardsPerSlide, setCardsPerSlide] = useState(
    window.innerWidth < 640 ? CARDS_PER_SLIDE_MOBILE : CARDS_PER_SLIDE_DESKTOP
  );

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(window.innerWidth < 640 ? CARDS_PER_SLIDE_MOBILE : CARDS_PER_SLIDE_DESKTOP);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split cities into slides
  const slides = [];
  for (let i = 0; i < allCities.length; i += cardsPerSlide) {
    slides.push(allCities.slice(i, i + cardsPerSlide));
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Bento grid for desktop
  const gridClasses = [
    "col-span-2 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-12">
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Explore Cities</h2>
        <p className="text-black text-sm sm:text-base">
          Discover top cities with available properties and explore neighborhoods with ease.
        </p>
      </div>

      <div className="relative max-h-[800px]">
        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={`grid gap-2 sm:gap-4 lg:gap-6 ${
              cardsPerSlide === 1
                ? "grid-cols-1 grid-rows-1 auto-rows-[300px]"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-3 auto-rows-[150px]"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            drag={cardsPerSlide === 1 ? "x" : false} // enable drag only on mobile
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) handleNext();
              else if (info.offset.x > 50) handlePrev();
            }}
          >
            {slides[currentSlide].map((city, index) => (
              <motion.div
                key={city?.id || index}
                className={`overflow-hidden rounded-2xl shadow-lg cursor-pointer ${
                  cardsPerSlide === 1 ? "" : `sm:${gridClasses[index % gridClasses.length]}`
                }`}
                whileHover={{ scale: cardsPerSlide === 1 ? 1 : 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExploreCityCard
                  city={city?.location?.city || "Unknown City"}
                  image={city?.images?.[0] || "https://via.placeholder.com/400x300"}
                  link={`/city/${city?.location?.city?.toLowerCase() || ""}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
