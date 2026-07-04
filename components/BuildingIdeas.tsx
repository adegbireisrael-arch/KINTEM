"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stats } from "@/lib/site-data";
import CountUp from "@/components/CountUp";

export default function BuildingIdeas() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm text-3xl font-bold leading-tight sm:text-4xl"
          >
            Building Ideas Into Reality
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-wrap gap-3 rounded-3xl border border-stone-200 bg-stone-50 p-2 sm:gap-0 sm:divide-x sm:divide-stone-200"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-[120px] px-5 py-3 text-center sm:text-left">
                <div className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs text-stone-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-10 max-w-2xl space-y-4 text-sm leading-relaxed text-stone-500 sm:text-[15px]"
        >
          <p>
            At KINTEMWORLD, we believe architecture is more than structures,
            it&apos;s about creating experiences, improving lifestyles, and
            designing spaces that stand the test of time.
          </p>
          <p>
            With a focus on creativity, functionality, and precision, we
            deliver architectural solutions that combine beauty with purpose.
            From modern homes to commercial developments, every project is
            designed with attention to detail and client satisfaction at its
            core.
          </p>
        </motion.div>

        <div className="relative mt-10 h-[300px] overflow-hidden rounded-4xl sm:h-[420px] lg:h-[520px]">
          <motion.div
            initial={{ opacity: 0.4, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1522042637941-6e0e45681c3a?q=80&w=2400&auto=format&fit=crop"
              alt="Modern residential architecture with landscaped grounds"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
