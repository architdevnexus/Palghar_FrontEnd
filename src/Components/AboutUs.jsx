import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div
      className="
        relative w-full 
        rounded-3xl
        flex flex-col-reverse md:flex-row
        items-start justify-between

        overflow-visible
        py-10 md:py-14
      "
    >
      {/* LEFT SIDE TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          w-full md:w-1/2 
          bg-[#2A2A2A] 
          px-6 md:px-10 
          py-8 md:py-12
          
          flex flex-col 
          text-left 
          shadow-xl
          z-10
        "
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          About{" "}
          <span
            className="
              bg-linear-to-r 
              from-[#F1C40F] 
              to-[#E67E22] 
              bg-clip-text 
              text-transparent
            "
          >
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
          <br />
          <br />
          We build smart, sustainable, and well-connected infrastructure that
          strengthens connectivity, supports economic development, and improves
          everyday travel.
          <br />
          <br />
          Our expertise spans{" "}
          <span className="font-semibold text-white">
            roads, railways, coastal corridors, and waterways
          </span>
          — creating seamless, future-ready transport networks for millions.
        </p>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          w-full md:w-1/2 
          flex justify-center
          relative
        "
      >
        <img
          src="https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg"
          alt="About Section"
          className="
            w-full h-[300px] md:h-[420px] lg:h-[460px]
            object-cover object-center
             shadow-xl
          "
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
