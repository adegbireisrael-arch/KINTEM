"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/site-data";

const spanMap = [
  "sm:row-span-1",
  "sm:row-span-2",
  "sm:row-span-1",
  "sm:row-span-1",
  "sm:row-span-1",
  "sm:col-span-2 sm:row-span-2",
];

export default function ProjectsGallery() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Our Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:auto-rows-[170px] sm:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              className={`group relative h-56 overflow-hidden rounded-3xl sm:h-auto ${spanMap[i]}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                loading="lazy"
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40" />

              {hoverIndex === i && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  style={{ left: pos.x, top: pos.y }}
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-paper px-4 py-2 text-xs font-medium text-ink shadow-lg"
                >
                  {project.title}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
