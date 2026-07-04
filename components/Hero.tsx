"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const extraDarken = useTransform(scrollYProgress, [0, 1], [0, 0.3]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], ["-14px", "14px"]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], ["-14px", "14px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative pt-24 sm:pt-28"
    >
      <div className="container">
        <div className="relative h-[460px] overflow-hidden rounded-4xl sm:h-[600px] lg:h-[760px]">
          <motion.div
            style={{ y: imageY, x: parallaxX, translateY: parallaxY }}
            className="absolute inset-0 scale-[1.08]"
          >
            <motion.div
              initial={{ scale: 1.25 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1757359056339-22968344cce6?q=80&w=2400&auto=format&fit=crop"
                alt="Modern architectural residence with clean geometric lines"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/25" />
          <motion.div
            style={{ opacity: extraDarken }}
            className="absolute inset-0 bg-ink"
          />

          <div className="relative flex h-full flex-col justify-end p-6 sm:p-10 lg:p-14">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
            >
              Designing Spaces That Inspire
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
              className="mt-5 max-w-md text-balance text-sm text-paper/80 sm:text-base"
            >
              We create modern, functional, and timeless architectural designs
              tailored for residential, commercial, and luxury projects.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.55 } },
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                href="#projects"
                className="rounded-full bg-paper/90 px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-paper"
              >
                View Projects
              </motion.a>
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                href="#contact"
                className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper ring-1 ring-inset ring-paper/20 transition-colors duration-300 hover:bg-stone-800"
              >
                Book a consultation
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
