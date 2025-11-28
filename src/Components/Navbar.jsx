import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Navdata = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "All Projects", path: "/projects" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Media", path: "/media" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  const Navigate = useNavigate()
  return (
    <>
      {/* NAVBAR */}
      <div className="flex p-4 items-center w-full fixed top-0 left-0 bg-white shadow-md z-50 justify-between">
        {/* Logo */}

        <img src="/vite.svg" alt="logo" className="w-10" />


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          {Navdata.map((item) => (
            <li
              key={item.id}
              onClick={() => Navigate(item.path)}
              className="hover:text-amber-600 transition-all"
            >
              {item.name}
            </li>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(true)}>
          <FiMenu />
        </div>
      </div>

      {/* MOBILE SIDEBAR MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 z-50"
          >
            {/* Close Icon */}
            <div className="flex justify-between items-center mb-8">
              <img src="/vite.svg" alt="logo" className="w-10" />
              <FiX
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-6 text-lg font-semibold">
              {Navdata.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="hover:text-amber-600 transition-all"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Overlay when menu open */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
