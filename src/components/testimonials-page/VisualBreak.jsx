"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const overlayQuotes = [
  { text: "Clarity", sub: "On decisions that once felt impossible" },
  { text: "Confidence", sub: "In the leader you were always meant to be" },
  { text: "Direction", sub: "A clear path forward — finally" },
];

export default function VisualBreak() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-80px", "80px"]);

  return (
    <section ref={ref} className="relative h-[580px] lg:h-[680px] overflow-hidden">
      {/* Parallax image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&q=80&auto=format&fit=crop"
          alt="Transformative coaching environment"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-brand-navy/78" />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.72 0.12 79 / 0.14) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center section-container text-center z-10">
        {/* Central statement */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-brand-gold font-medium text-sm tracking-[0.25em] uppercase mb-6">
            The outcomes speak for themselves
          </p>
          <h2
            className="font-heading font-light text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
          >
            Clarity.{" "}
            <span className="italic text-gradient-gold">Confidence.</span>
            {" "}Direction.
          </h2>
        </motion.div>

        {/* Three outcome pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-3xl w-full"
        >
          {overlayQuotes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm px-6 py-8 flex flex-col items-center gap-2"
            >
              <span
                className="font-heading font-light text-white"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                {item.text}
              </span>
              <span className="text-white/50 text-xs text-center leading-relaxed">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Top and bottom fades for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
