"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const avatars = [
  "https://i.pravatar.cc/200?img=12",
  "https://i.pravatar.cc/200?img=32",
  "https://i.pravatar.cc/200?img=5",
  "https://i.pravatar.cc/200?img=47",
];

export default function TrustSection() {
  return (
    <section className="py-14 sm:py-16">
      <div className="container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md text-sm text-stone-500 sm:text-[15px]"
        >
          Trusted by homeowners, businesses, and property developers for
          innovative architectural solutions and exceptional project execution.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="flex shrink-0 items-center"
        >
          {avatars.map((src, i) => (
            <motion.div
              key={src}
              variants={{
                hidden: { opacity: 0, scale: 0.6, x: 16 },
                show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
              style={{ marginLeft: i === 0 ? 0 : -14, zIndex: avatars.length - i }}
              className="relative h-11 w-11 overflow-hidden rounded-full ring-4 ring-paper sm:h-12 sm:w-12"
            >
              <Image src={src} alt="" fill sizes="48px" className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
