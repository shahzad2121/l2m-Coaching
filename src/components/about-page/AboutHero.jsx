"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutHero() {
  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden mesh-gradient pt-24 pb-20">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full"
          style={{ background: "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.12) 0%, transparent 65%)" }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle at center, oklch(0.17 0.035 264 / 0.06) 0%, transparent 65%)" }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.17 0.035 264) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemUp} className="flex items-center justify-center gap-3 mb-8">
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 40, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-brand-gold block shrink-0"
            />
            <span className="text-brand-gold font-medium text-sm tracking-[0.22em] uppercase">
              Our Story
            </span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 40, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-brand-gold block shrink-0"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemUp}
            className="font-heading font-light text-brand-navy leading-[1.1] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            The Story Behind{" "}
            <span className="italic text-gradient-gold">L2M Coaching</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemUp}
            className="text-brand-slate text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-pretty"
          >
            A coaching practice built on real leadership experience, personal
            growth, and meaningful transformation.
          </motion.p>

          {/* Intro paragraph */}
          <motion.p
            variants={itemUp}
            className="text-brand-slate/80 text-base leading-relaxed max-w-2xl mx-auto mb-12 text-pretty"
          >
            L2M Coaching was founded by Lloyd Munyaviri — a Chartered Manager,
            EMCC Senior Practitioner, and Head of Manufacturing at Brompton
            Bicycle — with one purpose: to help professionals and managers move
            forward with confidence, clarity, and real impact. Everything we do
            is guided by integrity, accountability, and a genuine belief in
            human potential.
          </motion.p>

          {/* Breadcrumb / page CTAs */}
          <motion.div variants={itemUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#founder"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy text-brand-cream font-medium rounded-full shadow-premium hover:bg-brand-navy-light transition-all duration-300 text-sm"
            >
              Meet Lloyd
              <span className="text-brand-gold">→</span>
            </motion.a>
            <motion.a
              href="/about#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-brand-navy font-medium rounded-full hover:border-brand-navy transition-all duration-300 text-sm"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
