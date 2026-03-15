"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Compass } from "lucide-react";

const principles = [
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We believe in continuous growth — for our clients, for ourselves, and for the organisations we serve. Stagnation is never the answer; courageous forward movement always is.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Every coaching engagement is held in the highest confidence. We speak truthfully, act consistently, and honour the trust every client places in us.",
  },
  {
    icon: Users,
    title: "Accountability",
    description:
      "Real change requires honest accountability. We help clients set bold commitments and create the structures and habits that ensure they follow through.",
  },
  {
    icon: Compass,
    title: "Clarity",
    description:
      "Confusion is the enemy of progress. We guide people through complexity to find clear direction — so they can move forward with purpose and confidence.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutMission() {
  return (
    <section className="py-24 lg:py-36 bg-brand-cream-deep relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 79 / 0.3), transparent)" }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
              Mission & Philosophy
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            What We Stand For &{" "}
            <span className="italic text-gradient-gold">Why It Matters</span>
          </h2>

          <p className="text-brand-slate text-lg leading-relaxed text-pretty">
            L2M Coaching exists to help professionals and managers move from
            where they are to where they know they&apos;re capable of being.
            These four principles guide every conversation, every programme,
            and every client relationship.
          </p>
        </motion.div>

        {/* Principle cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.28 } }}
                className="group bg-white rounded-2xl p-7 border border-border shadow-soft hover:shadow-premium transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold-muted flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>
                <div className="gold-divider mb-5" />
                <h3 className="font-heading text-2xl font-semibold text-brand-navy mb-3">
                  {p.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission statement pull-quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 bg-brand-navy rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.72 0.12 79 / 0.25) 0%, transparent 70%)" }}
          />
          <p
            className="font-heading font-light text-white italic leading-snug relative z-10"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
          >
            &ldquo;Our mission is simple: to help people unlock their full
            potential, lead with confidence, and create meaningful change —
            in their careers, their teams, and their lives.&rdquo;
          </p>
          <p className="text-brand-gold font-medium text-sm mt-6 tracking-widest uppercase relative z-10">
            Lloyd Munyaviri — Founder, L2M Coaching
          </p>
        </motion.div>
      </div>
    </section>
  );
}
