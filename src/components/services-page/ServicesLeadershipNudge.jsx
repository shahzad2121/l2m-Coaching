"use client";

import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

const YOUTUBE_EMBED_SRC =
  "https://www.youtube.com/embed/65F4EE--03k?si=pUvEqn278R1E7tDL";

const innerImpact = [
  {
    title: "Self-reflection",
    description:
      "Understand your values and vision for more effective leadership.",
  },
  {
    title: "Emotional intelligence",
    description:
      "Cultivate empathy to strengthen relationships and team dynamics.",
  },
  {
    title: "Authentic communication",
    description:
      "Use clear and honest dialogue to foster trust within the team.",
  },
  {
    title: "Role modeling",
    description:
      "Demonstrate the behaviour you wish to see in your team.",
  },
];

export default function ServicesLeadershipNudge() {
  return (
    <section
      id="leadership-nudge"
      className="py-16 lg:py-24 bg-white relative border-b border-border/70 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.72 0.12 79 / 0.14) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase flex items-center gap-2">
              <Youtube className="w-4 h-4" strokeWidth={1.75} aria-hidden />
              Leadership nudge
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-snug tracking-tight text-balance"
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.35rem)" }}
          >
            L2M Coaching presents —{" "}
            <span className="italic text-gradient-gold">
              helping you reset when you feel overwhelmed
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.92fr)] gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Video — wider column so 16:9 reads larger */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full min-w-0"
          >
            <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-brand-gold/40 via-brand-gold/12 to-transparent opacity-90 blur-sm pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-brand-gold/25 shadow-premium bg-brand-navy">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  frameBorder={0}
                  src={YOUTUBE_EMBED_SRC}
                  title="L2M Coaching — Leadership nudge: reset when you feel overwhelmed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

          {/* Inner Leadership Impact */}
          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-border bg-brand-cream/80 backdrop-blur-sm shadow-soft p-6 lg:p-8 w-full min-w-0"
          >
            <p className="text-brand-gold font-semibold text-xs tracking-[0.2em] uppercase mb-2">
              Takeaway framework
            </p>
            <h3 className="font-heading text-xl lg:text-[1.45rem] font-semibold text-brand-navy mb-5 leading-tight">
              Inner leadership impact
            </h3>

            <ul className="flex flex-col gap-3.5">
              {innerImpact.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.45 }}
                  className="rounded-xl border border-brand-gold/20 bg-brand-gold-muted/90 px-3.5 py-3 shadow-[inset_0_1px_0_0_oklch(1_0_0/.35)]"
                >
                  <p className="text-brand-navy font-semibold text-sm mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-brand-slate text-sm leading-snug">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ul>

            <p className="mt-5 pt-5 border-t border-border text-center text-xs font-medium tracking-wide text-brand-navy/70">
              {/* www.L2MCoaching.com */}
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
