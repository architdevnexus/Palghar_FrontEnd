// components/GlobalLoader.jsx
import { motion } from "framer-motion";
import { useAppStore } from "../store/authStore";

export default function GlobalLoader() {
  const loading = useAppStore((s) => s.loading);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-14 h-14 border-4 border-white border-t-transparent rounded-full"
      />
    </motion.div>
  );
}
