import React from "react";

export default function CoreSectors() {
  const coreSectorsData = [
    { id: 1, image: "/Construction.svg", text: "Construction" },
    { id: 2, image: "/Development.svg", text: "Development" },
    { id: 3, image: "/Maintainence.svg", text: "Maintenance" },
    { id: 4, image: "/Operations.svg", text: "Operations" },
  ];

  const CommitmentItem = ({ image, text }) => (
    <div className="flex flex-col items-center justify-between gap-4 p-4 rounded-xl hover:scale-105 transition-transform ">
      <img src={image} alt={text} className="w-32 h-32 md:w-52 md:h-52 object-contain" />
      <span className="text-white font-semibold text-lg">{text}</span>
    </div>
  );

  return (
    <section className="w-full py-12 px-4 md:px-16 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
        <p className="text-gray-500 md:max-w-3xl">
          In key transportation sectors such as Expressways, Coastal Roads,
          Water Taxis, Economic Corridors, RO-RO Services, and Track Lines —
          modern transportation is the backbone of economic progress,
          connecting people, boosting trade, and opening new opportunities.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-(--primary-color)">
          Our Core Sectors
        </h2>
      </div>

      {/* Core Sector Cards */}
      <div className="bg-green-500 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
        {coreSectorsData.map((sector) => (
          <CommitmentItem key={sector.id} image={sector.image} text={sector.text} />
        ))}
      </div>
    </section>
  );
}
