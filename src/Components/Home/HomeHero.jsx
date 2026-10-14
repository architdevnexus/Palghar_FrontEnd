import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import teamImg from "../../assets/team.png";

const HOTLINE = "8898588985";

const HomeHero = () => {
  const reduce = useReducedMotion();

  // Text container: staggers its children one after another
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.18, delayChildren: 0.3 },
    },
  };

  // Each text line slides in from the right
  const item = {
    hidden: { opacity: 0, x: reduce ? 0 : 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="
        w-full rounded-2xl overflow-hidden
        bg-gradient-to-br from-white via-[#F3FBFD] to-[#C9ECF0]
      "
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center">
        {/* LEFT: IMAGE (60%) */}
        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 md:col-span-3 flex justify-center items-end self-end"
        >
          <img
            src={teamImg}
            alt="Palghar Infrastructure team"
            className="w-full max-w-[560px] md:max-w-none h-auto block mix-blend-multiply p-8"
          />
        </motion.div>

        {/* RIGHT: TEXT (40%) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            order-1 md:order-2 md:col-span-2
            flex flex-col justify-center items-center md:items-start
            text-center md:text-left gap-4
            px-4 md:px-8 lg:px-12 pt-8 pb-4 md:py-8
          "
        >
          <div>
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#8B4A1F] leading-tight"
            >
              Investment Wahi...
            </motion.h1>
            <motion.h2
              variants={item}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#25C3EC] leading-tight"
            >
              Jo Returns De sahi
            </motion.h2>
          </div>

          <motion.a
            variants={item}
            href={`tel:+91${HOTLINE}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#8B4A1F]"
          >
            
            <span>Hotline no.</span>
            <span>8898588985</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;