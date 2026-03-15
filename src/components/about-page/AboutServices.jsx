"use client";

import { motion } from "framer-motion";
import { User, Users, Presentation, Heart, BookOpen } from "lucide-react";

const services = [
  {
    icon: User,
    tag: "Individual",
    title: "1:1 Coaching",
    description:
      "Personalised one-to-one sessions built around your unique goals, challenges, and context. Whether you're aiming for promotion, clarity, or a complete reset — this is your space.",
    features: ["Goal-focused sessions", "Personalised action plans", "Between-session support", "Flexible delivery"],
  },
  {
    icon: Users,
    tag: "Leadership",
    title: "Team & Group Coaching",
    description:
      "Transform how your team communicates, collaborates, and performs. We work with managers and their teams to build high-trust, high-performance cultures.",
    features: ["Team dynamics assessment", "Culture & alignment work", "Performance coaching", "Leadership development"],
    featured: true,
  },
  {
    icon: Presentation,
    tag: "Corporate",
    title: "Workshops & Presentations",
    description:
      "Impactful, bespoke workshops and keynote presentations for organisations and conferences. Topics include leadership, resilience, communication, and managing change.",
    features: ["Bespoke workshop design", "Keynote presentations", "Half & full-day formats", "Measurable outcomes"],
  },
  {
    icon: Heart,
    tag: "Family",
    title: "Teen & Parent Coaching",
    description:
      "Specialist coaching for parents navigating challenges with their children, and for teens building the confidence and skills they need to thrive.",
    features: ["Parent-teen relationship work", "Teen confidence building", "Family communication", "Purpose coaching"],
  },
  {
    icon: BookOpen,
    tag: "Professional",
    title: "Competency & Skills Development",
    description:
      "Structured programmes designed to develop core management and leadership competencies — aligned to recognised frameworks such as CMI and ILM.",
    features: ["CMI / ILM aligned", "Competency frameworks", "Structured learning plans", "Professional accreditation support"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutServices() {
  return (
    <section id="services" className="py-24 lg:py-36 bg-background relative">
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
              What We Offer
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Core Coaching{" "}
            <span className="italic text-gradient-gold">Services</span>
          </h2>

          <p className="text-brand-slate text-lg max-w-2xl mx-auto text-pretty">
            Five ways to work with L2M Coaching — all rooted in the same
            commitment to meaningful, lasting transformation.
          </p>
        </motion.div>

        {/* Cards — 3 top, 2 bottom centred */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Row 1 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {services.slice(0, 3).map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{ y: -7, transition: { duration: 0.28 } }}
                  className={`group relative flex flex-col rounded-3xl p-8 border transition-all duration-300 ${
                    service.featured
                      ? "bg-brand-navy border-brand-navy shadow-premium"
                      : "bg-white border-border shadow-soft hover:shadow-premium hover:border-brand-gold/30"
                  }`}
                >
                  {service.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-brand-gold text-brand-navy text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide shadow-gold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <span className="text-xs font-medium tracking-[0.2em] uppercase mb-5 text-brand-gold">
                    {service.tag}
                  </span>

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.featured ? "bg-white/10" : "bg-brand-gold-muted group-hover:bg-brand-gold/20 transition-colors duration-300"}`}>
                    <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                  </div>

                  <h3 className={`font-heading text-2xl font-semibold mb-4 ${service.featured ? "text-white" : "text-brand-navy"}`}>
                    {service.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-7 flex-grow ${service.featured ? "text-white/70" : "text-brand-slate"}`}>
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-7">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span className={`text-sm ${service.featured ? "text-white/75" : "text-brand-slate"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="/about#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-medium transition-all duration-300 ${
                      service.featured
                        ? "bg-brand-gold text-brand-navy hover:bg-brand-gold-light shadow-gold"
                        : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-cream"
                    }`}
                  >
                    Learn More <span>→</span>
                  </motion.a>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2 — 2 cards centred */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 lg:max-w-2xl lg:mx-auto">
            {services.slice(3).map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{ y: -7, transition: { duration: 0.28 } }}
                  className="group flex flex-col rounded-3xl p-8 bg-white border border-border shadow-soft hover:shadow-premium hover:border-brand-gold/30 transition-all duration-300"
                >
                  <span className="text-xs font-medium tracking-[0.2em] uppercase mb-5 text-brand-gold">
                    {service.tag}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-brand-gold-muted flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-heading text-2xl font-semibold text-brand-navy mb-4">
                    {service.title}
                  </h3>

                  <p className="text-brand-slate text-sm leading-relaxed mb-7 flex-grow">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-7">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span className="text-brand-slate text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="/about#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-medium border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-cream transition-all duration-300"
                  >
                    Learn More <span>→</span>
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
