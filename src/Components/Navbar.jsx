import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Navdata } from "../DataStore/Navdata"
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

      {/* TOP NAVBAR */}
      <nav className="flex p-4 md:mx-auto rounded-2xl max-w-[99%] items-center w-full fixed left-1 top-1 md:top-2 md:left-2 bg-white shadow-md z-50 justify-between">

        {/* Logo */}
        <img
          src="/palghar_logo.svg"
          alt="logo"
          className="w-10 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[16px]">
          {Navdata.map((item) => (
            <li
              key={item.id}
              className="hover:text-(--primary-color) cursor-pointer transition-all"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Enquire Now Button */}
        <button
          className="hidden md:block px-4 py-2 rounded-md bg-(--primary-color) text-white cursor-pointer hover:opacity-90 transition"
          onClick={() => navigate("/contact")}
        >
          Enquire Now
        </button>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          role="button"
          tabIndex={0}
        >
          <FiMenu />
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
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 z-50"
          >
            {/* Close Icon */}
            <div className="flex justify-between items-center mb-8">
              <img src="/palghar_logo.svg" alt="logo" className="w-10" />
              <FiX
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(false)}
                aria-label="Close Menu"
              />
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-6 text-lg font-semibold">
              {Navdata.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="hover:text-(--primary-color)transition-all"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <button
                className="mt-6 px-4 py-2 bg-(--primary-color) text-white rounded-md"
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

      {/* DARK OVERLAY */}
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
