"use client";

import { motion } from "framer-motion";
import { siteConfig, getWhatsAppLink } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-paper sm:pt-20">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ember-light transition-colors duration-300 hover:text-paper"
                >
                  Message Me
                </a>
                <p className="mt-1 text-stone-400">WhatsApp &middot; {siteConfig.whatsappDisplay}</p>
              </div>
              <div>
                <p className="text-stone-400">Email</p>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    "Project enquiry from your website"
                  )}&body=${encodeURIComponent(
                    "Hi KINTEMWORLD, I'd like to talk about a project. Here's a bit about what I have in mind:"
                  )}`}
                  className="font-medium text-ember-light transition-colors duration-300 hover:text-paper"
                >
                  Message Me
                </a>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-xs text-stone-500 sm:text-right"
          >
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </motion.p>
        </div>

        <div className="mt-10 overflow-hidden sm:mt-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="select-none whitespace-nowrap font-display text-[16vw] font-extrabold leading-none text-stone-800 sm:text-[13vw]"
          >
            {siteConfig.name}
          </motion.h2>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </footer>
  );
}
