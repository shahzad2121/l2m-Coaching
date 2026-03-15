"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Text Reveal Primitives
───────────────────────────────────────────── */

/**
 * Character-by-character slide-up reveal.
 * Used for the eyebrow label.
 */
function CharReveal({ text, delay = 0, className = "" }) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ lineHeight: 1 }}
          aria-hidden="true"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              delay: delay + i * 0.022,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * Single-word / phrase slide-up reveal from behind a clip mask.
 * The outer span acts as the mask; the inner motion.span slides up.
 * Used word-by-word on the h1 headline.
 */
function RevealWord({ children, delay = 0, className = "", tag = "span" }) {
  const MotionTag = motion[tag] ?? motion.span;
  return (
    <span
      className="inline-block overflow-hidden"
      style={{ paddingBottom: "0.1em", marginBottom: "-0.1em", verticalAlign: "bottom" }}
    >
      <MotionTag
        className={`inline-block ${className}`}
        initial={{ y: "115%", opacity: 0, skewY: 4 }}
        animate={{ y: "0%", opacity: 1, skewY: 0 }}
        transition={{
          delay,
          duration: 0.78,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </MotionTag>
    </span>
  );
}

/**
 * Full-block reveal — wraps a paragraph or element in an overflow-hidden
 * container and slides it up. Used for the subheadline and CTA group.
 */
function RevealBlock({ children, delay = 0, className = "" }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: "60%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          delay,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Blob animation variants (unchanged)
───────────────────────────────────────────── */
const blobVariants = {
  animate1: {
    x: [0, 40, 0],
    y: [0, -30, 0],
    scale: [1, 1.08, 1],
    transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
  },
  animate2: {
    x: [0, -30, 0],
    y: [0, 40, 0],
    scale: [1, 1.12, 1],
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 },
  },
  animate3: {
    x: [0, 20, 0],
    y: [0, -15, 0],
    scale: [1, 1.06, 1],
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 },
  },
};

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient pt-5">

      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={blobVariants}
          animate="animate1"
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.14) 0%, transparent 65%)",
          }}
        />
        <motion.div
          variants={blobVariants}
          animate="animate2"
          className="absolute -bottom-48 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.17 0.035 264 / 0.07) 0%, transparent 65%)",
          }}
        />
        <motion.div
          variants={blobVariants}
          animate="animate3"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.72 0.12 79 / 0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(oklch(0.17 0.035 264) 1px, transparent 1px), linear-gradient(90deg, oklch(0.17 0.035 264) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Main content ── */}
      <div className="section-container relative z-10 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">

          {/* ── 1. Eyebrow — animated lines + char-by-char reveal ── */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 48, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-brand-gold block shrink-0"
            />
            <span className="text-brand-gold font-medium text-sm tracking-[0.22em] uppercase">
              <CharReveal text="ICF Certified Coaching" delay={0.3} />
            </span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 48, opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-brand-gold block shrink-0"
            />
          </div>

          {/* ── 2. Headline — word-by-word clip reveal ── */}
          <h1
            className="font-heading font-light text-brand-navy leading-[1.15] tracking-tight mb-10"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.4rem)" }}
          >
            {/* Line 1 */}
            <RevealWord delay={0.48}>Coaching</RevealWord>

            <br />

            {/* Line 2 */}
            <RevealWord delay={0.55}>Professionals</RevealWord>
            {" "}
            <RevealWord delay={0.62} className="italic text-gradient-gold">
              &amp;
            </RevealWord>
            {" "}
            <RevealWord delay={0.69} className="italic text-gradient-gold">
              Managers
            </RevealWord>

            <br />

            {/* Line 3 */}
            <RevealWord delay={0.76}>to</RevealWord>
            {" "}
            <RevealWord delay={0.82}>Unlock</RevealWord>
            {" "}
            {/* "Confidence," with animated underline spawning after word reveals */}
            <span className="relative inline-block overflow-hidden"
              style={{ paddingBottom: "0.1em", marginBottom: "-0.1em", verticalAlign: "bottom" }}
            >
              <motion.span
                className="inline-block"
                initial={{ y: "115%", opacity: 0, skewY: 4 }}
                animate={{ y: "0%", opacity: 1, skewY: 0 }}
                transition={{ delay: 0.88, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              >
                Confidence,
              </motion.span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-brand-gold origin-left"
              />
            </span>
            {" "}
            <RevealWord delay={0.96}>Clarity</RevealWord>
            {" "}
            <RevealWord delay={1.03}>&amp; Connection.</RevealWord>
          </h1>

          {/* ── 3. Subheadline — full-block reveal ── */}
          <RevealBlock delay={1.15} className="text-brand-slate text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14 text-pretty">
            Elevate your growth. Empower your future. Expert coaching and
            mentoring to help professionals and managers unlock their full
            potential — whether you&apos;re leading a team or advancing your career.
          </RevealBlock>

          {/* ── 4. CTA Group — fade-up as a unit ── */}
          <RevealBlock delay={1.32}>
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-brand-cream text-base font-medium rounded-full shadow-premium hover:bg-brand-navy-light transition-all duration-300"
                >
                  Book a Complimentary Coaching Conversation
                  <span className="text-brand-gold">→</span>
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border border-border text-brand-navy text-base font-medium rounded-full hover:border-brand-navy transition-all duration-300"
                >
                  Explore Services
                </motion.a>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.7 }}
                className="text-brand-slate/60 text-sm italic"
              >
                No pressure. Just a conversation.
              </motion.p>
            </div>
          </RevealBlock>
        </div>

        {/* ── 5. Floating stats — slide up after headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-soft max-w-3xl mx-auto"
        >
          {[
            { value: "200+", label: "Lives Transformed" },
            { value: "10+",  label: "Years Experience"  },
            { value: "ICF",  label: "Certified Coach"   },
            { value: "3",    label: "Core Programs"     },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.65 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/80 backdrop-blur-sm py-6 px-4 text-center"
            >
              <div className="font-heading text-3xl font-semibold text-brand-navy mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-brand-slate font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
