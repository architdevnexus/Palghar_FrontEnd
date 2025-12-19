import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function GrowthCarausal() {
    const Data = [
        {
            id: "palghar-2047",
            image:
                "https://images.pexels.com/photos/35202826/pexels-photo-35202826.jpeg",
            title: "Palghar growth with glory ... 2047",
            description:
                "A future-focused infrastructure map showing Palghar as '4th Mumbai', highlighting the proposed Mira–Virar–Palghar Link Road, major expressways, rail corridors, ports, airports, and industrial hubs—positioning the region as a key growth engine of the Mumbai Metropolitan Region by 2047.",
        },
        {
            id: "palghar-2048",
            image:
                "https://images.pexels.com/photos/35202826/pexels-photo-35202826.jpeg",
            title: "Palghar Growth with Glory – 2047",
            description:
                "An integrated vision showcasing transport corridors, logistics hubs, urban infrastructure, and future-ready connectivity aimed at transforming Palghar into a strategic metropolitan extension.",
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () =>
        setCurrent((prev) => (prev + 1) % Data.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + Data.length) % Data.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full rounded-2xl overflow-hidden">
            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-[#E9F6F7]" />

            {/* DECORATIVE BOTTOM SHAPE */}
            <div
                className="absolute bottom-0 left-0 w-full h-48 bg-no-repeat bg-cover opacity-80"
                style={{ backgroundImage: 'url("/Rectangle.svg")' }}
            />

            {/* CONTENT */}
            <div className="relative z-10 px-6 md:px-12 py-10">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* LEFT CARD */}
                    <div className="lg:w-[45%] bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                        <span className="inline-block w-2 h-6 bg-green-500 rounded mb-3" />
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
                            className={`h-2.5 w-2.5 rounded-full transition-all ${current === index
                                    ? "bg-white scale-110"
                                    : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* ARROWS */}
            <button
                onClick={prevSlide}
                className="absolute cursor-pointer text-(--darkbg-color) left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow z-20"
            >
                <FiChevronLeft size={22} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute cursor-pointer text-(--darkbg-color) right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow z-20"
            >
                <FiChevronRight size={22} />
            </button>
        </section>
    );
}
