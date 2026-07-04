"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/lib/site-data";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Our Services
        </motion.h2>

        <div className="mt-10 space-y-5">
          {services.map((service, i) => {
            const imageFirst = i % 2 === 1;
            return (
              <div
                key={service.number}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <motion.div
                  initial={{ opacity: 0, x: imageFirst ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`group flex flex-col justify-center rounded-4xl bg-stone-50 p-8 transition-shadow duration-500 hover:shadow-xl hover:shadow-black/5 sm:p-10 ${
                    imageFirst ? "sm:order-2" : "sm:order-1"
                  }`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-sm font-semibold text-ink">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-500 sm:text-[15px]">
                    {service.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: imageFirst ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative h-56 overflow-hidden rounded-4xl sm:h-auto ${
                    imageFirst ? "sm:order-1" : "sm:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
