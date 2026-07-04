"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollTop}
          aria-label="Move to top"
          className="fixed bottom-6 right-5 z-50 flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-xs font-medium text-paper shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={14} />
          <span className="hidden sm:inline">Move to Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
