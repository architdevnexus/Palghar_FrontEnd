import VisionCard from "../Cards/VisionCard";

/* ------------------ IMAGE IMPORTS ------------------ */
import LANDSCAPED_PARK from "../../utlis/OurVision/LANDSCAPED_PARK.svg";
import MALL from "../../utlis/OurVision/MALL.svg";
import EDUCATION_GROWTH from "../../utlis/OurVision/EDUCATION GROWTH.svg";
import DAILY_UTILITY_SERVICES from "../../utlis/OurVision/DAILY_UTILITY_SERVICES.svg";
import WELL_CONNECTED_TRANSPORT_SERVICES from "../../utlis/OurVision/WELL_CONNECTED_TRANSPORT_SERVICES.svg";
import MULTILEVEL_SECURITY from "../../utlis/OurVision/MULTILEVEL_SECURITY.svg";
import HEALTHCARE_CENTER from "../../utlis/OurVision/HEALTHCARE_CENTER.svg";

export default function OurVision() {
  const Data = [
    {
      title: "LANDSCAPED PARK",
      description:
        "Extensively landscaped parks with Fountains, Flower Beds, Green Belts, Large Ground and other recreation",
      image: LANDSCAPED_PARK,
    },
    {
      title: "MALL",
      description:
        "Multiplex, Restaurant, Shopping Complex with Food Outlets, Gaming Zone for Recreation in Township Itself",
      image: MALL,
    },
    {
      title: "EDUCATION GROWTH",
      description: "Primary & Secondary School & Colleges",
      image: EDUCATION_GROWTH,
    },
    {
      title: "DAILY UTILITY SERVICES",
      description:
        "They ensure that residents enjoy a smooth, comfortable, and stress-free lifestyle.",
      image: DAILY_UTILITY_SERVICES,
    },
    {
      title: "WELL CONNECTED TRANSPORT SERVICES",
      description:
        "The region offers excellent connectivity through expanding road networks, suburban rail upgrades.",
      image: WELL_CONNECTED_TRANSPORT_SERVICES,
    },
    {
      title: "MULTILEVEL SECURITY",
      description:
        "The township features 24×7 surveillance, controlled entry systems, trained security personnel.",
      image: MULTILEVEL_SECURITY,
    },
    {
      title: "HEALTHCARE CENTER",
      description:
        "A dedicated healthcare center provides quick access to doctors, emergency care, and essential medical services.",
      image: HEALTHCARE_CENTER,
    }
  ];

  const firstRowCards = Data.slice(0, 3);
  const remainingCards = Data.slice(3);

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-12 bg-white">
      {/* ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* HEADER */}
        <div className="flex flex-col">
          <span className="border-l-8 border-[var(--primary-color)] pl-3 text-3xl font-semibold tracking-wide uppercase">
            Our Vision
          </span>

          <p className="mt-2 text-gray-600">
            About the new living style city
          </p>

          <h2 className="font-semibold text-xl mt-3 leading-snug text-gray-900">
            An Impeccable blend of modern features,
            <br />
            value added and world class infrastructure.
          </h2>
        </div>

        {/* FIRST 3 CARDS */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
          {firstRowCards.map((item, index) => (
            <VisionCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {remainingCards.map((item, index) => (
          <VisionCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
