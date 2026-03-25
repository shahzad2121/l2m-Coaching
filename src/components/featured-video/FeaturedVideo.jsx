"use client";

import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

const YOUTUBE_EMBED_SRC =
  "https://www.youtube.com/embed/eJxVM0vEIgs?si=gXaeAdlACcQSVgkN";

export default function FeaturedVideo() {
  return (
    <section
      id="insight"
      className="py-16 lg:py-24 bg-brand-cream-deep relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.72 0.12 79 / 0.12) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute right-0 bottom-0 w-1/2 h-2/3 pointer-events-none opacity-50"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 100% 100%, oklch(0.72 0.12 79 / 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 max-w-xl md:max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 md:mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase flex items-center gap-2">
              <Youtube className="w-4 h-4" strokeWidth={1.75} aria-hidden />
              From the channel
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
          >
            Nudge: don&apos;t let fear hold you back
          </h2>
          <p className="text-brand-slate text-sm md:text-base leading-relaxed max-w-md mx-auto">
            A short reflection on what will people say — and how fear can keep
            us small until we choose clarity and courage instead.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-brand-gold/35 via-brand-gold/10 to-transparent opacity-80 blur-sm pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-brand-gold/25 shadow-premium bg-brand-navy">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                frameBorder={0}
                src={YOUTUBE_EMBED_SRC}
                title="L2M Coaching — Nudge on not letting fear hold you back: what will people say?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-8 text-sm text-brand-slate"
        >
          More videos on{" "}
          <a
            href="https://www.youtube.com/@L2MCoaching"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy font-medium underline decoration-brand-gold/50 underline-offset-4 hover:text-brand-gold transition-colors"
          >
            YouTube @L2MCoaching
          </a>
        </motion.p>
      </div>
    </section>
  );
}
