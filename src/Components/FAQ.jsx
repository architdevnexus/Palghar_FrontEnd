import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";

export default function FAQ() {
    const faqs = [
        {
            id: 1,
            question: "What are expressways and how do they improve urban and intercity connectivity?",
            answer:
                "Expressways are high-capacity roads designed to facilitate efficient travel by reducing congestion and travel time. They enhance urban and intercity connectivity by providing fast, reliable routes that support economic development and ease transportation challenges.",
        },
        {
            id: 2,
            question: "How do coastal roads contribute to regional development and tourism growth?",
            answer:
                "Coastal roads improve regional connectivity by providing better access to ports, beaches, and tourist destinations. They promote economic activities, support local communities, boost tourism, and help strengthen shoreline infrastructure.",
        },
        {
            id: 3,
            question: "What advantages do water taxis offer as an alternative passenger transport mode in congested urban areas?",
            answer:
                "Water taxis provide a fast, eco-friendly, and congestion-free travel option, especially in densely populated cities. They reduce pressure on road networks, shorten commute times, and offer scenic and sustainable transportation for both daily commuters and tourists.",
        },
        {
            id: 4,
            question: "Can you explain the concept of economic corridors and their role in trade facilitation?",
            answer:
                "Economic corridors connect industrial hubs, logistics centers, and markets. They support trade by enabling faster movement of goods, reducing transportation costs, and boosting economic growth.",
        },
        {
            id: 5,
            question: "What are RO-RO services and how do they differ from conventional maritime shipping methods?",
            answer:
                "RO-RO (Roll-On/Roll-Off) services allow vehicles and cargo to be transported without unloading, enabling fast loading/unloading and reducing logistics costs.",
        },
        {
            id: 6,
            question: "Why is the integration of multiple transportation modes important for logistics efficiency?",
            answer:
                "Multi-modal integration ensures smooth connectivity between road, rail, and waterways, reducing delays and improving logistics efficiency while cutting transportation costs.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col items-center py-16 px-6">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Frequently Asked Questions
            </h2>

            <div className="w-full max-w-full flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="bg-white cursor-pointer rounded-xl shadow-md p-4 border-l-4 border-(--primary-color)"
                    >
                        {/* Question Row */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full cursor-pointer flex items-center justify-between text-left"
                        >
                            <h3 className=" text-sm md:text-lg font-semibold text-gray-800 pr-4">
                                {faq.question}
                            </h3>

                            <motion.div
                                initial={false}
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.35 }}
                            >
                                {openIndex === index ? (
                                    <CiCircleChevUp size={28} />
                                ) : (
                                    <CiCircleChevDown size={28} />
                                )}
                            </motion.div>
                        </button>

                        {/* Answer Animation */}
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-gray-600 text-sm mt-3 leading-relaxed px-1 pb-2">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
