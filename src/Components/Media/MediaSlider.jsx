import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MediaSlider({ images = [] }) {
    const [index, setIndex] = useState(0);

    if (!images.length) return null;

    const prev = () =>
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

    const next = () =>
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <div className="relative bg-white rounded-xl max-w-4xl w-full overflow-hidden">

            {/* IMAGE */}
            <div className="w-full h-[500px] relative">
                <img
                    src={images[index]?.url}
                    alt=""
                    className="w-full h-[500px]  object-cover"
                />

                {/* DOT INDICATORS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full  transition 
                                ${i === index
                                    ? "bg-white scale-110"
                                    : "bg-white/50 cursor-pointer hover:bg-white"}
                                `}
                        />
                    ))}
                </div>


            </div>

            {/* CONTROLS */}
            <FaChevronLeft
                size={40}
                onClick={prev}
                className="absolute p-2 cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white  rounded-full"

            />

            <FaChevronRight
                size={40}
                onClick={next}
                className="absolute p-2 cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full"
            />
        </div>
    );
}
