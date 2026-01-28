import { useState, useMemo } from "react";

/* ------------------ IMAGE IMPORTS ------------------ */
import MiraBefore from "../../utlis/WhatWeHaveDone/MiraBefore.svg";
import MiraAfter from "../../utlis/WhatWeHaveDone/MiraAfter.svg";

import VasaiBefore from "../../utlis/WhatWeHaveDone/VasaiBefore.svg";
import VasaiAfter from "../../utlis/WhatWeHaveDone/VasaiAfter.svg";

import NaigaonBefore from "../../utlis/WhatWeHaveDone/NaigaonBefore.svg";
import NaigaonAfter from "../../utlis/WhatWeHaveDone/NaigaonAfter.svg";

import PalgharAfter from "../../utlis/WhatWeHaveDone/PalgharAfter.svg";

/* ------------------ COMPONENT ------------------ */
export default function WhatWeHaveDone() {
  const [active, setActive] = useState(0);

  /* ------------------ DATA (MEMOIZED) ------------------ */
  const DATA = useMemo(
    () => [
      {
        heading: "MIRA BHAYANDAR",
        images: [
          {
            year: "1995",
            src: MiraBefore,
            caption: '(witness by “Google–Dev”)',
          },
          {
            year: "2015",
            src: MiraAfter,
            caption: '(witness by “Google–Dev”)',
          },
        ],
      },
      {
        heading: "VASAI - NALLA SOPARA",
        images: [
          { year: "Old", src: VasaiBefore },
          { year: "New", src: VasaiAfter },
        ],
      },
      {
        heading: "NAIGOAN",
        images: [
          { year: "Old", src: NaigaonBefore },
          { year: "New", src: NaigaonAfter },
        ],
      },
      {
        heading: "PALGHAR DISTRICT",
        images: [
          { year: "Old", src: NaigaonAfter },
          { year: "New", src: PalgharAfter },
        ],
      },
    ],
    []
  );

  return (
    <section className="w-full px-6 py-14 bg-[#F4F9F9]">
      {/* TITLE */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
        What We Have Done
      </h2>

      {/* TABS */}
      <div className="relative flex justify-center mb-10">
        <div className="flex gap-1 p-2 rounded-xl bg-white  overflow-x-auto hide-scrollbar">
          {DATA.map((item, index) => (
            <button
              key={item.heading}
              onClick={() => setActive(index)}
              className={`px-6 py-2 rounded-xl border cursor-pointer text-sm md:text-base font-medium transition-all whitespace-nowrap
                ${
                  active === index
                    ? "bg-(--primary-color) text-white shadow-md border-transparent"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {item.heading}
            </button>
          ))}
        </div>
      </div>

      {/* SUB TITLE */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-8 bg-(--primary-color) rounded" />
        <h3 className="text-xl md:text-2xl font-semibold">
          Our First Vision in (20 Years)
        </h3>
      </div>

      {/* IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {DATA[active].images.map((img) => (
          <div key={img.year}>
            <img
              src={img.src}
              alt={`${DATA[active].heading} ${img.year}`}
              loading="lazy"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
            />

            <h4 className="text-center mt-4 font-semibold text-lg">
              {DATA[active].heading} {img.year}
            </h4>

            {img.caption && (
              <p className="text-center text-gray-500 text-sm">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* SCROLLBAR HIDE */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </section>
  );
}
