import { motion } from "framer-motion";

export default function WhatWeDo() {
    const services = [
        {
            id: 1,
            title: "Expressways",
            description:
                "We design and build high-speed expressways that reduce congestion and create fast travel corridors between major cities. Built to international standards, our expressways help reduce travel time, fuel usage, and logistic costs.",
        },
        {
            id: 2,
            title: "Coastal Roads",
            description:
                "Our coastal road projects strengthen shoreline connectivity, boost tourism, improve access to ports, and support local communities. These roads are engineered to be resilient, scenic, and sustainable.",
        },
        {
            id: 3,
            title: "Water Taxi Services",
            description:
                "We are pioneers in modern water-based transport. Our water taxi systems offer quick, eco-friendly, and congestion-free travel options — perfect for both daily commuters and tourists.",
        },
        {
            id: 4,
            title: "Economic Corridors",
            description:
                "We build economic corridors that connect industrial hubs, manufacturing zones, and logistics centers. These corridors help move cargo faster and support regional economic development.",
        },
        {
            id: 5,
            title: "RO-RO (Roll-On/Roll-Off) Services",
            description:
                "Our RO-RO solutions allow vehicles and goods to be transported across waterways without unloading. This reduces travel time, lowers logistics costs, and helps decongest highways.",
        },
        {
            id: 6,
            title: "Track Lines & Multi-Modal Integration",
            description:
                "We develop dedicated railway track lines for freight and passenger movement. Our multi-modal systems ensure smooth connectivity between rail, road, and maritime transport, reducing delays and improving logistics efficiency.",
        },
    ];

    const image =
        "https://images.pexels.com/photos/2370932/pexels-photo-2370932.jpeg";

    // Framer Motion variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.18,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, x: 40 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 py-12 px-4 md:px-8 w-full">
            {/* Left Section */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start gap-4 md:w-1/3"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                    What We Do
                </h2>

                <span className="text-[#989898] text-sm md:text-base">
                    Our main expertise lies in:
                </span>

                <motion.img
                    src={image}
                    alt="service-main"
                    className="rounded-xl w-full max-h-[400px] object-cover shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                />
            </motion.div>

            {/* Right Section */}
            <div className="custom-scroll flex md:w-2/3 overflow-y-auto max-h-[500px] pr-3">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-6"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={item}
                            className="flex items-start gap-4  p-5  hover:shadow-lg transition-all"
                        >
                            {/* Number Badge */}
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "backOut",
                                }}
                                className="min-w-12 min-h-12 flex items-center justify-center rounded-full bg-[#23c1eb] text-white font-bold text-lg"
                            >
                                {service.id}
                            </motion.span>

                            {/* Text */}
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-semibold text-black mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-[#989898] text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
