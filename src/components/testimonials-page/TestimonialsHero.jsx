"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingQuotes = [
  {
    quote: "Everything shifted after just our second session.",
    name: "David K.",
    role: "Entrepreneur",
  },
  {
    quote: "I'm now showing up as the leader I always wanted to be.",
    name: "Sarah M.",
    role: "Senior Manager",
  },
  {
    quote: "The culture shift would have taken years without Lloyd's guidance.",
    name: "James O.",
    role: "CEO",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } },
};

export default function TestimonialsHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-28 pb-20">
      {/* Mesh background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.17 0.035 264) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Animated gold blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.13) 0%, transparent 65%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.17 0.035 264 / 0.06) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-center">

          {/* ── Left: Text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemUp} className="flex items-center gap-3 mb-8">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 40, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-brand-gold block shrink-0"
              />
              <span className="text-brand-gold font-medium text-sm tracking-[0.22em] uppercase">
                Client Transformations
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemUp}
              className="font-heading font-light text-brand-navy leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)" }}
            >
              Real Clients.{" "}
              <br />
              <span className="italic text-gradient-gold">
                Real Transformations.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemUp}
              className="text-brand-slate text-lg md:text-xl leading-relaxed mb-8 max-w-lg text-pretty"
            >
              Every story here began with a professional feeling stuck — and ended
              with clarity, confidence, and a new sense of direction. Discover what
              coaching with Lloyd can unlock for you.
            </motion.p>

            {/* Stats strip */}
            <motion.div
              variants={itemUp}
              className="flex flex-wrap gap-8 pt-2"
            >
              {[
                { value: "200+", label: "Lives transformed" },
                { value: "10+", label: "Years experience" },
                { value: "100%", label: "Client-centred" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="font-heading text-brand-navy font-semibold"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-brand-slate font-medium tracking-wider uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Floating quote cards stacked ── */}
          <div className="relative h-[480px] lg:h-[540px] hidden sm:block">
            {/* Background image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-premium"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=900&q=80&auto=format&fit=crop"
                alt="Professional coaching conversation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-transparent" />
            </motion.div>

            {/* Floating quote cards */}
            {floatingQuotes.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  delay: 0.9 + i * 0.18,
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  top: i === 0 ? "auto" : i === 1 ? "24px" : "auto",
                  bottom: i === 0 ? "28px" : i === 2 ? "110px" : "auto",
                  left: i === 1 ? "-24px" : "auto",
                  right: i === 0 ? "-12px" : i === 2 ? "-20px" : "auto",
                }}
                className="absolute z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-premium border border-border max-w-[200px]"
              >
                <div
                  className="text-brand-gold mb-2"
                  style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", lineHeight: 0.7 }}
                  aria-hidden="true"
                >
                  "
                </div>
                <p className="text-brand-navy text-xs leading-relaxed font-medium italic mb-3">
                  {q.quote}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center shrink-0">
                    <span className="text-brand-gold font-heading font-semibold text-[9px]">
                      {q.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-brand-navy font-semibold text-[10px] leading-none">{q.name}</p>
                    <p className="text-brand-slate text-[9px] mt-0.5">{q.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
