"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { getWhatsAppLink } from "@/lib/site-data";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CTASection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 sm:py-28">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Let&apos;s Design Something Exceptional
        </motion.h2>

        <div className="relative mt-10 h-[420px] overflow-hidden rounded-5xl sm:h-[460px]">
          <div ref={imageRef} className="absolute inset-0 scale-125">
            <Image
              src="https://images.unsplash.com/photo-1745761264415-6acbdb47a0c7?q=80&w=2400&auto=format&fit=crop"
              alt="Contemporary architectural facade at dusk"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-ink/55" />

          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-balance text-paper/90"
            >
              Whether you&apos;re planning a dream home, office space, or
              large-scale development, we&apos;re ready to bring your vision to
              life.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              href={getWhatsAppLink(
                "Hi KINTEMWORLD, I'd like to start a project with you. Here's a bit about what I have in mind:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleRipple}
              className="relative mt-7 overflow-hidden rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start Your Project
              {ripples.map((r) => (
                <span
                  key={r.id}
                  style={{ left: r.x, top: r.y }}
                  className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/30 animate-ripple"
                />
              ))}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
