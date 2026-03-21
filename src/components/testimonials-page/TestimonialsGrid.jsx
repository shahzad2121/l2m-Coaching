"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lloyd has a rare ability to hold space while simultaneously challenging you. I walked out of each session feeling both seen and stretched.",
    name: "Amara L.",
    role: "Head of Operations, Charity Sector",
    stars: 5,
  },
  {
    quote:
      "I went from doubting every decision I made to trusting my instincts completely. The ROI on these sessions is unlike anything else.",
    name: "Michael T.",
    role: "Director, Consulting Firm",
    stars: 5,
  },
  {
    quote:
      "My relationship with my teenage son completely changed after working with Lloyd. He helped me understand what my son actually needed from me.",
    name: "Rachel T.",
    role: "Parent & Community Leader",
    stars: 5,
  },
  {
    quote:
      "I'd tried therapy, courses, everything. Coaching with Lloyd was the missing piece. It's practical, actionable, and deeply personal.",
    name: "Priya S.",
    role: "Marketing Manager",
    stars: 5,
  },
  {
    quote:
      "Within three months I had the clarity to make a career move I'd been too afraid to consider. The confidence is real and it lasts.",
    name: "Oliver R.",
    role: "Senior Engineer turned Founder",
    stars: 5,
  },
  {
    quote:
      "Lloyd doesn't give you answers — he helps you find them yourself. That's why the change sticks. I feel genuinely unstuck for the first time in years.",
    name: "Christine A.",
    role: "Nonprofit Executive Director",
    stars: 5,
  },
  {
    quote:
      "Our team had a communication problem no training had touched. Lloyd got to the root of it within two group sessions.",
    name: "Daniel F.",
    role: "VP People & Culture",
    stars: 5,
  },
  {
    quote:
      "The work is gentle, but the results are profound. I've become a better leader, partner, and parent. Hard to say which matters more.",
    name: "Nina W.",
    role: "Physician & Clinical Lead",
    stars: 5,
  },
  {
    quote:
      "I was sceptical about coaching. Now I recommend Lloyd to everyone I care about. The transformation is not subtle — it's visible.",
    name: "Marcus E.",
    role: "Business Development Lead",
    stars: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function TestimonialCard({ item }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: "0 24px 48px -8px rgba(13, 21, 38, 0.12)" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl p-7 border border-border flex flex-col gap-5 shadow-soft hover:border-brand-gold/30 transition-colors duration-300"
    >
      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: item.stars }).map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
          />
        ))}
      </div>

      {/* Quote mark */}
      <div
        className="text-brand-gold/25 group-hover:text-brand-gold/40 transition-colors duration-300"
        style={{ fontFamily: "Georgia, serif", fontSize: "4rem", lineHeight: 0.7 }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Quote */}
      <p className="text-brand-navy/80 text-sm leading-relaxed italic flex-1 text-pretty">
        {item.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-brand-gold-muted border border-brand-gold/30 flex items-center justify-center shrink-0">
          <span className="font-heading text-brand-navy font-semibold text-xs">
            {item.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-brand-navy font-semibold text-sm leading-tight">{item.name}</p>
          <p className="text-brand-slate text-xs mt-0.5 truncate">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsGrid() {
  return (
    <section className="py-28 lg:py-36 bg-background">
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
              What Clients Say
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Voices of{" "}
            <span className="italic text-gradient-gold">Transformation</span>
          </h2>

          <p className="text-brand-slate text-lg max-w-xl mx-auto text-pretty">
            Across industries, roles, and life stages — one consistent thread:
            lasting, meaningful change.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
