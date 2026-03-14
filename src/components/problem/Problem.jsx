"use client";

import { motion } from "framer-motion";
import { Compass, Flame, CloudFog, Users } from "lucide-react";

const problems = [
  {
    icon: Compass,
    title: "Feeling Stuck in Leadership",
    description:
      "You're capable and experienced, yet something holds you back from stepping into your full leadership potential. Decisions feel harder. Momentum feels lost.",
    accent: "border-l-brand-gold",
  },
  {
    icon: Flame,
    title: "Burnout & Overwhelm",
    description:
      "Giving everything to your role, your family, your team — and running on empty. You need sustainable energy, clarity of purpose, and real strategies to recover.",
    accent: "border-l-brand-gold",
  },
  {
    icon: CloudFog,
    title: "Lack of Clarity & Direction",
    description:
      "You know you're meant for more, but the path forward isn't clear. Goals feel fuzzy, decisions feel paralysing, and confidence quietly erodes.",
    accent: "border-l-brand-gold",
  },
  {
    icon: Users,
    title: "Team Misalignment",
    description:
      "Your team has talent — but something isn't clicking. Communication breaks down, culture drifts, and results suffer. You need alignment, not just strategy.",
    accent: "border-l-brand-gold",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-36 bg-background relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  className="lg:sticky lg:top-24 h-fit"
>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
                The Challenge
              </span>
            </div>

            <h2
              className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Does any of{" "}
              <span className="italic text-gradient-gold">this feel familiar?</span>
            </h2>

            <p className="text-brand-slate text-lg leading-relaxed mb-8 text-pretty">
              Most people we work with arrive knowing something needs to change
              — but unsure what or how. These are the most common challenges
              that bring clients to L2M Coaching.
            </p>

            <p className="text-brand-slate leading-relaxed mb-10 text-pretty">
              You're not broken. You're not failing. You're at a{" "}
              <span className="text-brand-navy font-medium">
                turning point that requires a different kind of support
              </span>{" "}
              — a trusted thinking partner who helps you see clearly and move
              forward with confidence.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-brand-navy font-medium border-b-2 border-brand-gold pb-0.5 hover:text-brand-gold transition-colors duration-200"
            >
              Let's talk about your situation
              <span>→</span>
            </motion.a>
          </motion.div>

          {/* Right: Problem cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5"
          >
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={problem.title}
                  variants={cardVariants}
                  whileHover={{ x: 6, transition: { duration: 0.25 } }}
                  className="group flex gap-5 bg-white rounded-2xl p-6 border-l-4 border-l-brand-gold border border-border shadow-soft hover:shadow-premium transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-gold-muted flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors duration-300 mt-0.5">
                    <Icon className="w-4 h-4 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-brand-navy mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-brand-slate text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
