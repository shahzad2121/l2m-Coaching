"use client";

import { motion } from "framer-motion";
import { User, Users, Presentation } from "lucide-react";

const services = [
  {
    icon: User,
    tag: "Individual",
    title: "1:1 Coaching",
    description:
      "Personalised, confidential coaching sessions tailored entirely to you. Whether you're navigating a career transition, building confidence, or seeking purpose — this is your space to think, grow, and transform.",
    features: [
      "60-minute deep-dive sessions",
      "Personalised action plans",
      "Between-session support",
      "Flexible scheduling",
    ],
    cta: "Explore 1:1 Coaching",
    featured: false,
  },
  {
    icon: Users,
    tag: "Leadership",
    title: "Team & Leadership Coaching",
    description:
      "Elevate your leadership impact and unlock your team's full potential. We work with leaders and teams to build alignment, communication, and a culture of high performance.",
    features: [
      "Leadership style assessment",
      "Team alignment workshops",
      "Culture development",
      "Performance strategy",
    ],
    cta: "Explore Team Coaching",
    featured: true,
  },
  {
    icon: Presentation,
    tag: "Group",
    title: "Workshops & Group Coaching",
    description:
      "Dynamic, interactive group coaching experiences for organisations, schools, and communities. Powerful frameworks delivered at scale without sacrificing depth or impact.",
    features: [
      "Bespoke workshop design",
      "Half-day & full-day formats",
      "Corporate & community groups",
      "Teen & parent programmes",
    ],
    cta: "Explore Workshops",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
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
              How We Work Together
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Coaching That Meets{" "}
            <span className="italic text-gradient-gold">You Where You Are</span>
          </h2>

          <p className="text-brand-slate text-lg max-w-2xl mx-auto text-pretty">
            Three ways to engage with L2M Coaching — all rooted in the same
            commitment to your genuine, lasting transformation.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative flex flex-col rounded-3xl p-8 border transition-all duration-300 ${
                  service.featured
                    ? "bg-brand-navy border-brand-navy shadow-premium"
                    : "bg-white border-border shadow-soft hover:shadow-premium hover:border-brand-gold/30"
                }`}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-gold text-brand-navy text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide shadow-gold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tag */}
                <span
                  className={`text-xs font-medium tracking-[0.2em] uppercase mb-6 ${
                    service.featured ? "text-brand-gold" : "text-brand-gold"
                  }`}
                >
                  {service.tag}
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    service.featured
                      ? "bg-white/10"
                      : "bg-brand-gold-muted group-hover:bg-brand-gold/20 transition-colors duration-300"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      service.featured ? "text-brand-gold" : "text-brand-gold"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title & description */}
                <h3
                  className={`font-heading text-2xl font-semibold mb-4 ${
                    service.featured ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-8 flex-grow ${
                    service.featured ? "text-white/70" : "text-brand-slate"
                  }`}
                >
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="flex flex-col gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          service.featured ? "bg-brand-gold" : "bg-brand-gold"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          service.featured ? "text-white/80" : "text-brand-slate"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-medium transition-all duration-300 ${
                    service.featured
                      ? "bg-brand-gold text-brand-navy hover:bg-brand-gold-light shadow-gold"
                      : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-cream"
                  }`}
                >
                  {service.cta}
                  <span>→</span>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-brand-slate/60 text-sm mt-10"
        >
          All programmes include a complimentary discovery conversation — no obligation.
        </motion.p>
      </div>
    </section>
  );
}
