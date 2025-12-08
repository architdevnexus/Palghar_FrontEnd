import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Navdata } from "../DataStore/Navdata";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const mobileMenuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="
        fixed top-2 md:ml-2 mx-auto rounded-2xl w-full md:w-[99%] z-50
        bg-white/90 backdrop-blur-md
        shadow-md
      ">
        <div className="
          flex justify-between items-center
          px-4 py-3
          md:px-10 md:py-4
          max-w-screen-2xl mx-auto
        ">
          {/* Logo */}
          <img
            src="/palghar_logo.svg"
            alt="logo"
            className="w-10 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
            {Navdata.map((item) => (
              <li
                key={item.id}
                onClick={() => navigate(item.path)}
                className="
                  cursor-pointer transition-all
                  hover:text-(--primary-color)
                "
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <button
            className="
              hidden md:block px-5 py-2 rounded-md
              bg-(--primary-color) text-white
              hover:opacity-90 transition
              text-sm font-medium
            "
            onClick={() => navigate("/contact")}
          >
            Enquire Now
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="
              fixed top-0 left-0 h-full w-72
              bg-white shadow-xl
              p-6 z-50 flex flex-col
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <img src="/palghar_logo.svg" alt="logo" className="w-10" />
              <FiX
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(false)}
                aria-label="Close Menu"
              />
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-6 text-lg font-semibold">
              {Navdata.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="
                    hover:text-(--primary-color)
                    transition-all
                  "
                >
                  {item.name}
                </Link>
              ))}

              {/* CTA Button */}
              <button
                className="
                  mt-6 px-4 py-3 rounded-md
                  bg-(--primary-color) text-white
                  text-center text-base
                "
                onClick={() => {
                  setOpen(false);
                  navigate("/contact");
                }}
              >
                Enquire Now
              </button>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* BACKDROP OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
