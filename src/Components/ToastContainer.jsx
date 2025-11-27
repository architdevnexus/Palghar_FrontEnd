import React, { useEffect } from "react";
import { useUIStore } from "../store/useUIStore";
import { motion, AnimatePresence } from "framer-motion";

/*
  Global Toast with Framer Motion:
  - Slides in / fades out
  - Auto hides in 3 seconds
  - Tailwind styling + color based on toast type
*/

export default function ToastContainer() {
  const { toast, hideToast } = useUIStore();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => hideToast(), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const colors = {
    success: "border-green-500",
    error: "border-red-500",
    info: "border-blue-500",
  };

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-999"
        >
          <div
            className={`
              bg-white px-4 py-3 rounded-lg shadow-lg border-l-4 
              w-64 font-medium text-sm
              ${colors[toast.type]}
            `}
          >
            {toast.message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
