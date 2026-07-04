"use client";

import { motion } from "framer-motion";
import { whyClients } from "@/lib/site-data";

export default function WhyClients() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Why Clients Work With Us
        </motion.h2>

        <div className="mt-10 space-y-4">
          {whyClients.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-5 rounded-3xl bg-stone-50 px-6 py-5 transition-colors duration-300 hover:bg-stone-100 sm:px-8 sm:py-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-200 text-sm font-semibold text-ink">
                {item.number}
              </span>
              <p className="text-sm text-stone-600 sm:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
