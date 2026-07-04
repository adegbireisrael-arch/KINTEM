"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-data";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const allLinks = [...navLinks, { label: "Contact Us", href: "#contact" }];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[70] flex flex-col bg-paper md:hidden"
        >
          <div className="container flex h-16 items-center justify-between sm:h-20">
            <span className="font-display text-lg font-extrabold tracking-tight text-ink">
              {siteConfig.name}
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink"
            >
              <X size={18} />
            </button>
          </div>

          <motion.nav
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {allLinks.map((link) => (
              <motion.a
                key={link.href}
                variants={itemVariants}
                href={link.href}
                onClick={onClose}
                className="text-2xl font-medium text-stone-500 transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
