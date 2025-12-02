import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <div className="
            relative
            w-full 
            bg-[#2A2A2A] 
            rounded-3xl
            flex 
            flex-col-reverse 
            md:flex-row 
            items-center 
            justify-between 
          gap-3
          
            overflow-visible
        ">
            {/* LEFT TEXT */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-1/2 px-6 flex flex-col text-left z-10"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
                    About{" "}
                    <span className="
                        bg-linear-to-r 
                        from-[#F1C40F] 
                        to-[#E67E22] 
                        bg-clip-text 
                        text-transparent
                    ">
                        Us
                    </span>
                </h2>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                    At{" "}
                    <span className="font-semibold text-white">
                        PALGHAR INFRASTRUCTURE
                    </span>
                    , we’ve spent over <strong>25+ years</strong> shaping India’s
                    transportation future.
                    <br /> <br />
                    We build smart, sustainable, and well-connected infrastructure
                    that enhances connectivity, supports economic growth, and
                    improves everyday travel.
                    <br /> <br />
                    We integrate{" "}
                    <span className="font-semibold text-white">
                        roads, railways, coastal routes, and waterways
                    </span>{" "}
                    to create a seamless network ensuring faster and safer travel
                    for millions.
                </p>
            </motion.div>

            {/* RIGHT IMAGE POPPING OUT */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
                    w-full 
                    md:w-1/2 
                    flex 
                    justify-center 
                    relative
                "
            >
                <img
                    src="https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg"
                    alt="About Section"
                    className="
                        
                       
                    "
                />
            </motion.div>
        </div>
    );
};

export default AboutUs;
