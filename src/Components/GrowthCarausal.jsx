import { useState, useEffect, useMemo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ------------------ IMAGE IMPORTS ------------------ */
import Img1 from "../utlis/GrowthCarausal/1.png";
import Img2 from "../utlis/GrowthCarausal/2.png";
import Img3 from "../utlis/GrowthCarausal/3.png";
import Img4 from "../utlis/GrowthCarausal/4.svg";
import Img5 from "../utlis/GrowthCarausal/5.svg";
import Img6 from "../utlis/GrowthCarausal/6.svg";

export default function GrowthCarausal() {
  const [current, setCurrent] = useState(0);

  /* ------------------ DATA (MEMOIZED) ------------------ */
  const Data = useMemo(
    () => [
      {
        id: "palghar-2047",
        image: Img1,
        title: "Palghar Growth with Glory – 2047",
        description:
          "A future-focused infrastructure vision positioning Palghar as the '4th Mumbai'. The map highlights the Mira–Virar–Palghar Link Road, expressways, suburban and high-speed rail corridors, ports, airports, and industrial clusters—showing Palghar as a major economic and urban growth engine of the Mumbai Metropolitan Region by 2047.",
      },
      {
        id: "2",
        image: Img2,
        title: "Mira–Virar–Palghar Link Road",
        description:
          "This visual highlights the proposed Mira–Virar–Palghar Link Road and surrounding connectivity, showing how the corridor integrates coastal routes, highways, rail lines, ports, and urban nodes.",
      },
      {
        id: "3",
        image: Img3,
        title: "Mumbai Metropolitan Region (MMR) Connectivity",
        description:
          "This map showcases Palghar's strategic position within the Mumbai Metropolitan Region, highlighting expressways, rail networks, coastal roads, water transport routes, RO-RO services, and economic corridors.",
      },
      {
        id: "4",
        image: Img4,
        title: "Maharashtra Industrial & Economic Growth Hubs",
        description:
          "The visual presents Maharashtra's regional development strategy through specialized industrial hubs including Data Centers, EV, Defence, Textile, Semiconductor, and Steel industries.",
      },
      {
        id: "5",
        image: Img5,
        title: "Palghar District Regional Planning (MMRDA)",
        description:
          "This map illustrates Palghar District's regional planning framework under MMRDA, showing transport corridors, zoning, and administrative divisions.",
      },
      {
        id: "6",
        image: Img6,
        title: "Palghar District within Mumbai Metropolitan Region",
        description:
          "The visual highlights Palghar District's geographic location within the wider MMR, emphasizing its integration into Mumbai's suburban expansion.",
      },
    ],
    []
  );

  /* ------------------ SLIDE CONTROLS ------------------ */
  const nextSlide = () => setCurrent((prev) => (prev + 1) % Data.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + Data.length) % Data.length);

  /* ------------------ AUTO PLAY ------------------ */
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [Data.length]);

  return (
    <section className="relative w-full rounded-2xl overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#E9F6F7]" />

      {/* DECORATIVE BOTTOM CHEVRON — replaces Rectangle.svg */}
      <div className="absolute bottom-0 left-0 w-full h-48 opacity-80">
        <svg
          viewBox="0 0 1440 192"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="chevron-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#23c1eb" />
              <stop offset="50%"  stopColor="#1fb5db" />
              <stop offset="100%" stopColor="#199fc1" />
            </linearGradient>
          </defs>
          <polygon
            points="0,0 720,140 1440,0 1440,192 0,192"
            fill="url(#chevron-grad)"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-12 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* LEFT CARD */}
          <div className="lg:w-[45%] bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <span className="inline-block w-2 h-6 bg-[#23c1eb] rounded mb-3" />
            <h2 className="text-2xl font-bold mb-4 leading-snug">
              {Data[current].title}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {Data[current].description}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-[55%]">
            <img
              src={Data[current].image}
              alt={Data[current].title}
              loading="lazy"
              className="w-full h-[260px] md:h-[360px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {Data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                current === index ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow z-20 text-[var(--darkbg-color)]"
      >
        <FiChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow z-20 text-[var(--darkbg-color)]"
      >
        <FiChevronRight size={22} />
      </button>
    </section>
  );
}