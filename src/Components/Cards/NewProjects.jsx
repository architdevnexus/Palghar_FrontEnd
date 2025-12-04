import React from "react";
import { motion } from "framer-motion";

export default function NewProject({ title, address, bgImage }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
        relative
        w-full md:w-[340px] 
        h-[450px]
        rounded-3xl 
        overflow-hidden 
        shadow-[0px_8px_25px_rgba(0,0,0,0.22)]
        cursor-pointer
        group
   
        backdrop-blur-sm
      "
            style={{
                background: `url(${bgImage}) center/cover no-repeat`,
            }}
        >
            {/* Gradient Overlay */}
            <div
                className="
          absolute inset-0 
          transition-all duration-300
        "
            />

            {/* Bottom Content */}
            <div
                className="
          absolute bottom-0 left-0 
          w-full p-6 
          flex flex-col gap-2
          text-white
          z-10
        "
            >
                <h3 className="text-2xl font-bold leading-tight drop-shadow-md">
                    {title}
                </h3>

                <p className="text-sm text-gray-200/90 font-light">
                    {address}
                </p>
            </div>
        </motion.div>
    );
}
