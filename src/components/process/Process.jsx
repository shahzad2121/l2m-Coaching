"use client";

import { motion } from "framer-motion";
import { Eye, Map, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Clarity",
    subtitle: "See Yourself & Your Path Clearly",
    description:
      "We begin by creating deep clarity. Through powerful questioning and active listening, we uncover what truly matters to you — your values, your vision, and the patterns holding you back.",
    outcome: "You leave this phase with a crystal-clear picture of where you are, where you want to go, and what's really been in your way.",
  },
  {
    number: "02",
    icon: Map,
    title: "Strategy",
    subtitle: "Build Your Personalised Action Plan",
    description:
      "Clarity without strategy is just wishful thinking. Together we design a concrete, personalised plan that aligns with your strengths, circumstances, and goals — built to actually work in your real life.",
    outcome: "You gain a structured, step-by-step roadmap that's ambitious yet achievable, with clear milestones and accountability built in.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Transformation",
    subtitle: "Live the Change That Lasts",
    description:
      "This is where the real work — and real rewards — happen. We support you through implementation, help you navigate challenges, celebrate breakthroughs, and embed new habits that make change permanent.",
    outcome: "You don't just reach your goals — you become the person who naturally and confidently operates at a higher level.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-36 bg-brand-cream-deep relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.72 0.12 79 / 0.3) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
              The Process
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            A Simple, Powerful{" "}
            <span className="italic text-gradient-gold">Coaching Process</span>
          </h2>

          <p className="text-brand-slate text-lg max-w-2xl mx-auto text-pretty">
            Three connected phases that guide you from confusion to clarity, and
            from intention to lasting transformation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-4xl">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="h-px origin-left"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.72 0.12 79 / 0.5) 20%, oklch(0.72 0.12 79 / 0.5) 80%, transparent)",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="group bg-white rounded-2xl p-8 border border-border shadow-soft hover:shadow-premium transition-shadow duration-300 h-full"
                  >
                    {/* Step number + icon */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center shadow-soft group-hover:shadow-premium transition-shadow duration-300">
                        <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-brand-gold font-medium text-xs tracking-[0.2em] uppercase">
                          Step {step.number}
                        </span>
                        <h3 className="font-heading text-3xl font-semibold text-brand-navy leading-none mt-1">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="gold-divider mb-5" />

                    <p className="text-brand-slate/80 text-sm font-medium tracking-wide uppercase mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-brand-slate text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Outcome */}
                    <div className="rounded-xl bg-brand-gold-muted border border-brand-gold/20 p-4">
                      <p className="text-brand-navy text-sm leading-relaxed font-medium">
                        <span className="text-brand-gold mr-2">✦</span>
                        {step.outcome}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-brand-slate mb-6">
            Ready to begin your transformation journey?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-brand-cream font-medium rounded-full shadow-premium hover:bg-brand-navy-light transition-all duration-300"
          >
            Start with a Free Consultation
            <span className="text-brand-gold">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
