"use client";

import { motion } from "framer-motion";
import BookingButton from "@/components/calendly/BookingButton";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const reassuranceItems = [
  "No obligation",
  "Strictly confidential",
  "30 minutes, free",
  "ICF certified coach",
];

export default function ContactHero() {
  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden mesh-gradient pt-28 pb-20">
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 28, 0], y: [0, -20, 0], scale: [1, 1.07, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 right-0 w-[580px] h-[580px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.12) 0%, transparent 65%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 28, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-40 -left-24 w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.17 0.035 264 / 0.05) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(oklch(0.17 0.035 264) 1px, transparent 1px), linear-gradient(90deg, oklch(0.17 0.035 264) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemUp} className="flex items-center justify-center gap-3 mb-8">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 40, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-brand-gold block shrink-0"
              />
              <span className="text-brand-gold font-medium text-sm tracking-[0.22em] uppercase">
                Begin Your Journey
              </span>
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 40, opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-brand-gold block shrink-0"
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemUp}
              className="font-heading font-light text-brand-navy leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Start the{" "}
              <span className="italic text-gradient-gold">Conversation</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemUp}
              className="text-brand-slate text-lg md:text-xl leading-relaxed mb-12 text-pretty max-w-xl mx-auto"
            >
              Whether you&apos;re ready to begin or simply exploring what
              coaching could do for you — this is the place to start.
            </motion.p>

            {/* Primary CTA */}
            <motion.div variants={itemUp} className="flex flex-col items-center gap-6">
              <BookingButton variant="primary" size="lg">
                Book a Complimentary Coaching Conversation
              </BookingButton>

              {/* Reassurance pills */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {reassuranceItems.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-brand-slate/70 text-xs font-medium tracking-wide"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold/60 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
