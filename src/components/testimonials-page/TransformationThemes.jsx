"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Zap,
  Users,
  Brain,
  TrendingUp,
  Heart,
} from "lucide-react";

const themes = [
  {
    icon: Compass,
    title: "Clearer Decision-Making",
    description:
      "Clients move from analysis paralysis to confident, values-driven choices — at work and in life.",
  },
  {
    icon: TrendingUp,
    title: "Increased Leadership Confidence",
    description:
      "Discover and embody the leader within. Stop shrinking in rooms where you belong.",
  },
  {
    icon: Brain,
    title: "Reduced Overwhelm",
    description:
      "Understand the root causes of mental overload and build systems for sustainable focus.",
  },
  {
    icon: Zap,
    title: "Renewed Motivation",
    description:
      "Reconnect with purpose, energy, and the drive that may have faded over time.",
  },
  {
    icon: Users,
    title: "Stronger Relationships",
    description:
      "Whether at home or in the boardroom — communicate with depth, honesty, and impact.",
  },
  {
    icon: Heart,
    title: "Authentic Living",
    description:
      "Align your daily actions with who you truly are, not who others expect you to be.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } },
};

export default function TransformationThemes() {
  return (
    <section className="py-28 lg:py-36 bg-brand-cream-deep">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
              Common Outcomes
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            What Clients{" "}
            <span className="italic text-gradient-gold">Consistently Gain</span>
          </h2>

          <p className="text-brand-slate text-lg max-w-xl mx-auto text-pretty">
            Every coaching journey is unique — but these themes emerge again and
            again across different clients and contexts.
          </p>
        </motion.div>

        {/* Theme grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {themes.map((theme, i) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl p-7 border border-border shadow-soft hover:border-brand-gold/30 hover:shadow-premium transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-5 w-11 h-11 rounded-xl bg-brand-gold-muted border border-brand-gold/25 flex items-center justify-center group-hover:bg-brand-gold/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>

                {/* Gold line */}
                <div className="gold-divider mb-4" />

                <h3 className="font-heading text-xl font-semibold text-brand-navy mb-3 leading-snug">
                  {theme.title}
                </h3>

                <p className="text-brand-slate text-sm leading-relaxed text-pretty">
                  {theme.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
