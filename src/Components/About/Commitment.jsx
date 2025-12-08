import React from "react";

const commitmentData = [
    { id: 1, image: "/Sustainability.svg", text: "Sustainability" },
    { id: 2, image: "/Innovation.svg", text: "Innovation" },
    { id: 3, image: "/Safety.svg", text: "Safety" },
    { id: 4, image: "/Economic_Inclusion.svg", text: "Economic Inclusion" },
];

 const CommitmentItem = ({ image, text }) => (
    <div className="flex flex-col items-center justify-around gap-4 p-4  rounded-xl hover:scale-105 transition-transform">
        <img src={image} alt={text} className="w-32 h-32 md:w-52 md:h-52 object-contain" />
        <span className="text-white font-semibold text-lg">{text}</span>
    </div>
);

export default function Commitment() {
    return (
        <section className="w-full flex flex-col gap-8 px-4 md:px-16 py-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-18">
                <h2 className="text-3xl md:text-4xl font-bold text-(--black-color)">
                    Our Commitment
                </h2>
                <p className="text-[#8C8C8C] max-w-3xl">
                    Every project we deliver is designed to improve connectivity while
                    protecting the environment and supporting India’s long-term
                    development vision. Together, we’re building the roads, waterways,
                    corridors, and connections that move the future.
                </p>
            </div>

            {/* Commitment Cards */}
            <div className="flex flex-col items-center rounded-2xl bg-(--primary-color) p-6 gap-6">
                <span className="text-white font-semibold text-xl">
                    At PALGHAR INFRASTRUCTURE, we believe in:
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 w-full">
                    {commitmentData.map((item) => (
                        <CommitmentItem key={item.id} image={item.image} text={item.text} />
                    ))}
                </div>
            </div>
        </section>
    );
}
