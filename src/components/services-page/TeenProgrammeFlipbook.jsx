"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const FLIPBOOK_SRC =
  "https://designrr.page?id=589117&token=3526187761&h=6738";

/**
 * Teen Programme — embedded Designrr flipbook (client-provided iframe).
 */
export default function TeenProgrammeFlipbook() {
  return (
    <section
      id="teen-programme-flipbook"
      className="py-16 lg:py-24 bg-white relative overflow-hidden border-y border-border/60"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.72 0.12 79 / 0.14) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="section-container relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase flex items-center gap-2">
              <BookOpen className="w-4 h-4" strokeWidth={1.75} aria-hidden />
              Resource
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-4 text-balance"
            style={{ fontSize: "clamp(1.65rem, 3vw, 2.35rem)" }}
          >
            Teen programme — interactive flipbook
          </h2>
          <p className="text-brand-slate text-base leading-relaxed max-w-2xl mx-auto text-pretty mb-2">
            Browse the programme overview in full screen. This sits alongside
            our{" "}
            <Link
              href="/services#services-detail"
              className="text-brand-navy font-medium underline decoration-brand-gold/40 underline-offset-4 hover:text-brand-gold transition-colors"
            >
              Family Connection Coaching
            </Link>{" "}
            offer for parents and teens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-brand-gold/30 via-brand-gold/8 to-transparent opacity-90 blur-sm pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-brand-gold/20 shadow-premium bg-brand-navy/5">
            <iframe
              title="L2M Coaching — Teen programme flipbook"
              src={FLIPBOOK_SRC}
              className="w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] block bg-white"
              allowFullScreen
              frameBorder={0}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
