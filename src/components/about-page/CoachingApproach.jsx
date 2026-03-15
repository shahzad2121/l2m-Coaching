"use client";

import { motion } from "framer-motion";
import { Eye, Map, Zap, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Deep Listening",
    description:
      "Every engagement begins with genuinely listening — not just to what you say, but to what lies beneath it. Lloyd creates a safe, non-judgemental space where the real conversation can happen.",
  },
  {
    number: "02",
    icon: Map,
    title: "Powerful Questions",
    description:
      "The right question changes everything. Lloyd's coaching is characterised by the art of asking questions that shift perspective, unlock insight, and open up possibilities you hadn't considered.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Strengths-Based Action",
    description:
      "Rather than dwelling on weakness, we build on what's already working. Grounded in positive psychology and strengths-based frameworks, we design action around what's most natural and energising for you.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Sustainable Change",
    description:
      "Transformation isn't an event — it's a process. Lloyd supports clients through accountability, reflection, and iteration so that new behaviours and mindsets become permanent, not just temporary.",
  },
];

export default function CoachingApproach() {
  return (
    <section className="py-24 lg:py-36 bg-background relative">
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
              The Approach
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            How Lloyd{" "}
            <span className="italic text-gradient-gold">Supports Your Transformation</span>
          </h2>

          <p className="text-brand-slate text-lg leading-relaxed text-pretty">
            Lloyd&apos;s coaching draws on evidence-based frameworks — including NLP,
            positive psychology, and strengths-based approaches — but what
            makes it work is the quality of the relationship and the depth
            of the conversation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.28 } }}
                className="group bg-white rounded-2xl p-7 border border-border shadow-soft hover:shadow-premium transition-shadow duration-300"
              >
                {/* Step number */}
                <p className="text-brand-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
                  Step {step.number}
                </p>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5 shadow-soft">
                  <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>

                <div className="gold-divider mb-5" />

                <h3 className="font-heading text-xl font-semibold text-brand-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.65 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <p
            className="font-heading font-light text-brand-navy italic leading-snug"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
          >
            &ldquo;You already hold the answers. Great coaching helps you
            access them with clarity and confidence.&rdquo;
          </p>
          <footer className="mt-4 text-brand-gold text-xs font-medium tracking-widest uppercase">
            Lloyd Munyaviri
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
