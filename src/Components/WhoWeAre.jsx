import React, { useEffect, useState } from "react";

const WhoWeAre = () => {

    // 🔥 Replace with API Data When Ready
    const apiData = [
        { name: "Premium Houses", digit: 80 },
        { name: "Agent House", digit: 500 },
        { name: "Happy Customers", digit: 1200 },
    ];

    // Convert numbers → 1.2K, 5.4M etc.
    const formatNumber = (num) => {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num.toString();
    };

    // Count animation
    const [counters, setCounters] = useState(apiData.map(() => 0));

    useEffect(() => {
        const intervals = apiData.map((item, index) => {
            const target = item.digit;
            const duration = 1200;
            const step = target / (duration / 60);

            return setInterval(() => {
                setCounters((prev) => {
                    const updated = [...prev];
                    if (updated[index] < target) {
                        updated[index] = Math.min(updated[index] + step, target);
                    }
                    return updated;
                });
            }, 60);
        });

        return () => intervals.forEach(clearInterval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center 
                        bg-white rounded-l-2xl p-5 shadow-xl 
                        w-full max-w-4xl mx-auto ">

            {/* Title */}
            <h2 className="text-black font-bold text-4xl mb-2 text-center">
                Who We Are?
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-[#2A2A2A] text-center max-w-2xl mb-10">
                We are shaping the future of real estate by delivering smart,
                sustainable, and integrated infrastructure solutions across India
                for 25+ years.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-10 w-full">
                {apiData.map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-4">

                        <span className="text-3xl md:text-4xl font-extrabold"
                            style={{ color: "var(--golden-color)" }}>
                            {formatNumber(Math.floor(counters[i]))}+
                        </span>

                        <span className="text-sm md:text-base text-gray-700 mt-1">
                            {item.name}
                        </span>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default WhoWeAre;
