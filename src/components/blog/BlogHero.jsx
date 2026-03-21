"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden mesh-gradient pt-32 pb-20">
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.07, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 right-0 w-[560px] h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.12) 0%, transparent 65%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 28, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-32 -left-16 w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.17 0.035 264 / 0.05) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.17 0.035 264) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemUp} className="flex items-center gap-3 mb-7">
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 36, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-brand-gold block shrink-0"
            />
            <span className="text-brand-gold font-medium text-sm tracking-[0.22em] uppercase">
              Insights & Perspectives
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemUp}
            className="font-heading font-light text-brand-navy leading-[1.1] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)" }}
          >
            Clarity Starts with{" "}
            <span className="italic text-gradient-gold">Understanding</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemUp}
            className="text-brand-slate text-lg md:text-xl leading-relaxed max-w-xl text-pretty"
          >
            Practical perspectives on leadership, coaching, and the inner work
            of becoming who you&apos;re capable of being — written for
            professionals who take their growth seriously.
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
