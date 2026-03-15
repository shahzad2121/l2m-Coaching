"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Star, Compass } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Managers",
    subtitle: "From new to senior management",
    description:
      "Managers navigating the complexity of leading people — building authority, managing up, developing their team, and performing under pressure. Whether you're newly promoted or a seasoned leader hitting a ceiling, this work is for you.",
    tags: ["New Managers", "Senior Leaders", "Middle Management", "Team Leads"],
  },
  {
    icon: Users,
    title: "Parents",
    subtitle: "Navigating family leadership",
    description:
      "Parents who want to show up better — building stronger connections with their children, navigating difficult conversations, and modelling the values they want their family to live by.",
    tags: ["Parenting Challenges", "Teen Relationships", "Family Communication", "Work-Life Balance"],
  },
  {
    icon: Star,
    title: "Young People",
    subtitle: "Teenagers & early-career individuals",
    description:
      "Teenagers and young adults building confidence, discovering their strengths, setting meaningful goals, and learning to navigate the pressures of education, social life, and an uncertain world.",
    tags: ["Teen Confidence", "Goal Setting", "Academic Pressure", "Career Direction"],
  },
  {
    icon: Compass,
    title: "Professionals",
    subtitle: "Seeking career clarity & progression",
    description:
      "Professionals at a crossroads — questioning their direction, preparing for the next level, or rebuilding after burnout. If you feel like there's more, but the path isn't clear yet — this is exactly where we start.",
    tags: ["Career Transitions", "Promotion Readiness", "Burnout Recovery", "Purpose & Direction"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhoIWorkWith() {
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
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
              Who I Work With
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Coaching Built for{" "}
            <span className="italic text-gradient-gold">Where You Are</span>
          </h2>

          <p className="text-brand-slate text-lg max-w-2xl mx-auto text-pretty">
            L2M Coaching works with individuals across different stages and
            contexts — united by one thing: a genuine desire to grow.
          </p>
        </motion.div>

        {/* Audience cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.28 } }}
                className="group bg-white rounded-3xl p-8 border border-border shadow-soft hover:shadow-premium transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center shadow-soft group-hover:shadow-premium transition-shadow duration-300">
                    <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-brand-navy">
                      {a.title}
                    </h3>
                    <p className="text-brand-gold text-xs font-medium tracking-[0.15em] uppercase mt-1">
                      {a.subtitle}
                    </p>
                  </div>
                </div>

                <div className="gold-divider mb-5" />

                <p className="text-brand-slate text-sm leading-relaxed mb-6">
                  {a.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-brand-gold-muted text-brand-navy font-medium border border-brand-gold/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-brand-slate mb-6 text-pretty max-w-lg mx-auto">
            Not sure if coaching is right for you? Start with a free,
            no-obligation conversation.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy text-brand-cream font-medium rounded-full shadow-premium hover:bg-brand-navy-light transition-all duration-300"
          >
            Book a Free Conversation
            <span className="text-brand-gold">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
