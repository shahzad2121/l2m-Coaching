"use client";

import { motion } from "framer-motion";
import { Heart, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Authentic Connection",
    description:
      "Every coaching relationship is built on genuine trust, respect, and human connection.",
  },
  {
    icon: Target,
    title: "Results That Matter",
    description:
      "We're not interested in surface-level change. We go deep to create transformation that lasts.",
  },
  {
    icon: Lightbulb,
    title: "Your Own Wisdom",
    description:
      "You already hold the answers. Great coaching helps you access them with clarity and confidence.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 50%, oklch(0.72 0.12 79 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:sticky lg:top-24 h-fit"
          >
            {/* Photo placeholder — replace src with real image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-brand-cream-deep shadow-premium">
              {/* Abstract portrait placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.955 0.014 88) 0%, oklch(0.90 0.025 85) 100%)",
                }}
              />
              {/* Decorative geometric shapes */}
              <div
                className="absolute bottom-0 left-0 right-0 h-3/5"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, oklch(0.17 0.035 264 / 0.06) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-24 h-24 rounded-full bg-brand-gold/20 border-2 border-brand-gold/40 flex items-center justify-center shadow-gold">
                  <span className="font-heading text-4xl font-light text-brand-gold">LM</span>
                </div>
                <p className="text-brand-slate/60 text-xs text-center tracking-widest uppercase">
                  Photo Coming Soon
                </p>
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-soft"
              >
                <p className="text-brand-navy font-heading text-2xl font-semibold">10+</p>
                <p className="text-brand-slate text-xs">Years Coaching</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-6 bg-brand-navy rounded-2xl px-4 py-3 shadow-premium"
              >
                <p className="text-brand-gold font-heading text-2xl font-semibold">ICF</p>
                <p className="text-white/70 text-xs">Certified Coach</p>
              </motion.div>
            </div>

            {/* Gold accent border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl -z-10 border-2 border-brand-gold/20"
            />
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
                Meet Your Coach
              </span>
            </div>

            <h2
              className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-3"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Lloyd Munyaviri
            </h2>
            <p className="text-brand-gold font-medium tracking-wide text-sm mb-8 uppercase">
              ICF Certified Coach · Mentor · Leadership Specialist
            </p>

            <div className="space-y-5 text-brand-slate leading-relaxed mb-10">
              <p>
                I founded L2M Coaching because I believe that every person holds
                more potential than they currently see — and that the right
                coaching relationship can make that potential visible, tangible,
                and real.
              </p>
              <p>
                With over a decade of experience working across corporate
                leadership, community development, and personal coaching, I've
                had the privilege of sitting alongside hundreds of individuals
                at pivotal moments in their lives — and helping them move
                forward with clarity, courage, and confidence.
              </p>
              <p>
                My coaching draws on evidence-based frameworks, NLP, and
                strengths-based approaches — but more than technique, I believe
                it's the{" "}
                <span className="text-brand-navy font-medium">
                  quality of the relationship and the depth of the conversation
                </span>{" "}
                that creates genuine transformation.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4 mb-10">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.3, duration: 0.5 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-gold-muted flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-brand-navy font-semibold text-sm mb-0.5">
                        {value.title}
                      </h4>
                      <p className="text-brand-slate text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy text-brand-cream font-medium rounded-full shadow-premium hover:bg-brand-navy-light transition-all duration-300"
            >
              Have a Conversation with Lloyd
              <span className="text-brand-gold">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
