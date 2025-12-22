import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function GrowthCarausal() {
    const Data = [
        {
            "id": "palghar-2047",
            "image": "src/utlis/GrowthCarausal/1.svg",
            "title": "Palghar Growth with Glory – 2047",
            "description": "A future-focused infrastructure vision positioning Palghar as the ‘4th Mumbai’. The map highlights the Mira–Virar–Palghar Link Road, expressways, suburban and high-speed rail corridors, ports, airports, and industrial clusters—showing Palghar as a major economic and urban growth engine of the Mumbai Metropolitan Region by 2047."
        },
        {
            "id": "2",
            "image": "src/utlis/GrowthCarausal/2.svg",
            "title": "Mira–Virar–Palghar Link Road",
            "description": "This visual highlights the proposed Mira–Virar–Palghar Link Road and surrounding connectivity, showing how the corridor integrates coastal routes, highways, rail lines, ports, and urban nodes. It emphasizes improved north–south mobility, seamless links to Mumbai, ports, and industrial zones, and the role of this infrastructure in driving regional growth and development."
        },
        {
            "id": "3",
            "image": "src/utlis/GrowthCarausal/3.svg",
            "title": "Mumbai Metropolitan Region (MMR) Connectivity",
            "description": "This map showcases Palghar’s strategic position within the Mumbai Metropolitan Region, highlighting expressways, rail networks, coastal roads, water transport routes, RO-RO services, and economic corridors. It demonstrates seamless connectivity between Mumbai, Navi Mumbai, Virar, Palghar, Vadhvan Port, and key national routes, positioning Palghar as a vital growth hub within the expanding MMR."
        },
        {
            "id": "4",
            "image": "src/utlis/GrowthCarausal/4.svg",
            "title": "Maharashtra Industrial & Economic Growth Hubs",
            "description": "The visual presents Maharashtra’s regional development strategy through specialized industrial hubs. It highlights designated zones for Data Centers, Aerospace & Defence, EV & Automobile manufacturing, Agriculture, Textile, Semiconductor, and Steel industries across districts such as Palghar, Nashik, Chhatrapati Sambhajinagar, Amaravati, Nagpur, Jalgaon, and Gadchiroli—reflecting a sector-driven statewide growth plan."
        },
        {
            "id": "5",
            "image": "src/utlis/GrowthCarausal/5.svg",
            "title": "Palghar District Regional Planning (MMRDA)",
            "description": "This map illustrates Palghar District’s regional planning framework under the Mumbai Metropolitan Region Development Authority (MMRDA). It shows existing and proposed road networks, major transport corridors, land-use zoning, and administrative boundaries, clearly dividing Palghar into talukas such as Vasai, Palghar, Wada, Jawhar, and Dahanu to explain governance and development planning."
        },
        {
            "id": "6",
            "image": "src/utlis/GrowthCarausal/6.svg",
            "title": "Palghar District within Mumbai Metropolitan Region",
            "description": "The visual highlights Palghar District’s geographic location within the wider Mumbai Metropolitan Region, showing municipal limits, neighboring districts like Mumbai, Thane, Raigad, and Pune, along with major urban zones and transport corridors. It emphasizes Palghar’s integration into Mumbai’s suburban expansion and its role in future metropolitan growth."
        }
    ]
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
