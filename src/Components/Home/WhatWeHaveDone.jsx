import { useState } from "react";

export default function WhatWeHaveDone() {
  const Data = [
    {
      heading: "MIRA BHAYANDAR",
      images: [
        {
          year: "1995",
          src: 'src/utlis/WhatWeHaveDone/MiraBefore.svg',
          caption: '(witness by “Google–Dev”)'
        },
        {
          year: "2015",
          src: 'src/utlis/WhatWeHaveDone/MiraAfter.svg',
          caption: '(witness by “Google–Dev”)'
        }
      ]
    },
    {
      heading: "VASAI - NALLA SOPARA",
      images: [
        { year: "Old", src: "src/utlis/WhatWeHaveDone/VasaiBefore.svg" },
        { year: "New", src: "src/utlis/WhatWeHaveDone/VasaiAfter.svg" }
      ]
    },
    {
      heading: "NAIGOAN",
      images: [
        { year: "Old", src: "src/utlis/WhatWeHaveDone/NaigaonBefore.svg" },
        { year: "New", src: "src/utlis/WhatWeHaveDone/NaigaonAfter.svg" }
      ]
    },
    {
      heading: "PALGHAR DISTRICT",
      images: [
        { year: "Old", src: "src/utlis/WhatWeHaveDone/NaigaonAfter.svg" },
        { year: "New", src: "src/utlis/WhatWeHaveDone/PalgharAfter.svg" }
      ]
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-14 bg-[#F4F9F9]">

      {/* TITLE */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
        What We Have Done
      </h2>

      {/* TABS */}
      <div className="relative w-full flex justify-center mb-10">
        <div
          className="flex gap-3 p-2 rounded-xl bg-white w-full max-w-4xl overflow-x-auto hide-scrollbar"
        >
          {Data.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`whitespace-nowrap cursor-pointer px-6 py-2 rounded-xl border font-medium text-sm md:text-base transition-all
                ${active === index
                  ? "bg-(--primary-color) text-white shadow-md border-transparent"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {item.heading}
            </button>
          ))}
        </div>
      </div>

      {/* SUB TITLE */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-8 bg-(--primary-color) rounded"></div>
        <h3 className="text-xl md:text-2xl font-semibold">
          Our First Vision in (20 Years)
        </h3>
      </div>

      {/* IMAGES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Data[active].images.map((img, i) => (
          <div key={i} className="w-full">
            <img
              src={img.src}
              alt={`${Data[active].heading} ${img.year}`}
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
            />

            <h4 className="text-center mt-4 font-semibold text-lg">
              {Data[active].heading} {img.year}
            </h4>

            {img.caption && (
              <p className="text-center text-gray-500 text-sm">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Hide scrollbar utility */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
}
