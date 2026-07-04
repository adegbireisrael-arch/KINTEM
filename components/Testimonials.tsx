"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
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
          What Clients Say
        </motion.h2>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className="flex w-full max-w-sm flex-col items-center rounded-3xl border border-stone-200 p-8 text-center sm:w-[calc(50%-0.65rem)] lg:w-[calc(33.333%-0.9rem)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember text-paper">
                <Quote size={20} fill="currentColor" />
              </span>
              <p className="mt-5 text-sm leading-relaxed text-stone-600 sm:text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 text-xs font-medium text-stone-400">
                {t.name} &middot; {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
