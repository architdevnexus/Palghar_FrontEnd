import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTestimonialStore } from "../store/GetTestimonial";

const AUTO_SLIDE_TIME = 5000;

function TestimonialSlider() {
  const { testimonial = [], loading, fetchTestimonial } =
    useTestimonialStore();

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = testimonial.length;

  /* -------- Fetch once -------- */
  useEffect(() => {
    fetchTestimonial();
  }, [fetchTestimonial]);

  /* -------- Reset index on data change -------- */
  useEffect(() => {
    if (index >= total) setIndex(0);
  }, [index, total]);

  /* -------- Navigation -------- */
  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const next = useCallback(() => {
    setIndex((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  /* -------- Auto slide -------- */
  useEffect(() => {
    if (paused || total <= 1) return;
    const timer = setInterval(next, AUTO_SLIDE_TIME);
    return () => clearInterval(timer);
  }, [paused, total, next]);

  if (loading) {
    return <div className="py-20 text-center">Loading testimonials…</div>;
  }

  if (!total) {
    return <div className="py-20 text-center">No testimonials found.</div>;
  }

  const current = testimonial[index];
  const rating = Math.min(5, Math.max(0, Math.round(current?.rating || 0)));

  return (
    <section
      className="relative w-full py-20 bg-[#E9F6F7] bg-[url('/testimonialBack.svg')] bg-cover bg-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        What Our Clients Say
      </h2>

      <div className="relative max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-white rounded-3xl shadow-xl px-6 sm:px-10 pt-16 pb-14"
          >
            {/* ---------- Blue Label ---------- */}
            <div
              className="absolute -top-8 -left-12 sm:-left-26 w-[280px] text-white rounded-2xl px-2 py-4"
              style={{
                backgroundImage: "url('/testimonialBlue.svg')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
                <div className="translate-x-12 -translate-y-2">

              <h3 className="font-semibold text-sm sm:text-base">
                {current?.name}
              </h3>
              <p className="text-xs opacity-90">{current?.property}</p>
              <p className="text-[11px] opacity-80">
                {current?.propertyBought}
              </p>

              <div className="flex gap-0.5 mt-1 text-yellow-300 text-xs">
                {[...Array(rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
                </div>
            </div>

            {/* ---------- Avatar ---------- */}
            <div className="absolute -top-6 right-6 sm:right-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-white bg-gray-200 shadow-lg">
                <img
                  src={current?.image || "/avatar-fallback.png"}
                  alt={current?.name || "Client"}
                  loading="lazy"
                  onError={(e) =>
                    (e.currentTarget.src = "/avatar-fallback.png")
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* ---------- Review ---------- */}
            <p className="mt-10 sm:mt-14 text-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-6">
              “{current?.review}”
            </p>

            {/* ---------- Controls ---------- */}
            <div className="flex justify-center sm:justify-end gap-4 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-3 rounded-full bg-[#42B549] text-white shadow-md hover:scale-105 transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="p-3 rounded-full bg-[#42B549] text-white shadow-md hover:scale-105 transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default memo(TestimonialSlider);
