import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Navdata } from "../DataStore/Navdata";
import EnquireForm from "./Form/EnquireForm";

const mobileMenuVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openForm = useCallback(() => {
    setMenuOpen(false);
    setFormOpen(true);
  }, []);
  const closeForm = useCallback(() => setFormOpen(false), []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          fixed top-2 mx-auto md:ml-2
          w-full md:w-[99%] z-50
          rounded-2xl
          bg-white/90 backdrop-blur-md
          shadow-md
        "
      >
        <div
          className="
            flex items-center justify-evenly
            px-4 py-2 md:px-10 md:py-2
            max-w-screen-2xl mx-auto
          "
        >
          {/* Logo */}
          <img
            src="/Logo.png"
            alt="logo"
            className="w-14   cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
            {Navdata.map(({ id, name, path }) => (
              <li
                key={id}
                onClick={() => navigate(path)}
                className="cursor-pointer transition hover:text-[#23c1eb]"
              >
                {name}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={openForm}
            className="
              hidden md:block
              px-5 py-2 rounded-md
              bg-[#23c1eb] text-white
              text-sm font-medium
              hover:opacity-90 transition
            "
          >
            Enquire Now
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.aside
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="
                fixed top-0 left-0 z-50
                h-full w-72
                bg-white shadow-xl
                p-6 flex flex-col
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <img src="/Logo.png" alt="logo" className="w-10" />
                <FiX
                  className="text-3xl cursor-pointer"
                  onClick={closeMenu}
                />
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-6 text-lg font-semibold">
                {Navdata.map(({ id, name, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={closeMenu}
                    className="transition hover:text-(--primary-color)"
                  >
                    {name}
                  </Link>
                ))}

                {/* CTA */}
                <button
                  onClick={openForm}
                  className="
                    mt-6 px-4 py-3 rounded-md
                    bg-(--primary-color) text-white
                    text-base
                  "
                >
                  Enquire Now
                </button>
              </nav>
            </motion.aside>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={closeMenu}
            />
          </>
        )}
      </AnimatePresence>

      {/* ENQUIRY POPUP */}
      <AnimatePresence>
        {formOpen && (
          <EnquireForm
            open={formOpen}
            onClose={closeForm}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
