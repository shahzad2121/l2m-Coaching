"use client";

import { motion, AnimatePresence } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServiceContent({ service }) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={service.id}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-full"
        aria-label={service.title}
      >
        {/* Tag + number */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-brand-gold font-medium text-xs tracking-[0.2em] uppercase">
            {service.num}
          </span>
          <span className="h-px flex-grow bg-border" />
          <span className="text-xs px-3 py-1 rounded-full bg-brand-gold-muted border border-brand-gold/20 text-brand-navy font-medium">
            {service.tag}
          </span>
        </div>

        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-5">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center shadow-soft">
            <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
          </div>
          <div>
            <h2
              className="font-heading font-semibold text-brand-navy leading-tight"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}
            >
              {service.title}
            </h2>
            {service.subtitle && (
              <p className="text-brand-gold text-xs font-medium tracking-[0.15em] uppercase mt-1">
                {service.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-6" />

        {/* Intro */}
        <p className="text-brand-slate leading-relaxed mb-7 text-pretty">
          {service.intro}
        </p>

        {/* Structured sections */}
        {service.sections?.map((section, i) => (
          <div key={i} className="mb-5">
            <h3 className="text-brand-navy font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
              {section.heading}
            </h3>
            <p className="text-brand-slate text-sm leading-relaxed pl-4">{section.body}</p>
          </div>
        ))}

        {/* Bullet points */}
        {service.bullets && (
          <div className="mb-6">
            <h3 className="text-brand-navy font-semibold text-sm mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
              {service.id === "one-to-one"
                ? "Each Session Supports"
                : service.id === "leadership"
                ? "Core Topics"
                : "Focus Areas"}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="shrink-0 w-4 h-4 rounded-full bg-brand-gold-muted border border-brand-gold/25 flex items-center justify-center mt-0.5">
                    <span className="text-brand-gold text-[8px] font-bold">✓</span>
                  </span>
                  <span className="text-brand-slate text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Coaching tools */}
        {service.tools && (
          <div className="mb-6">
            <h3 className="text-brand-navy font-semibold text-sm mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
              Coaching Tools
            </h3>
            <div className="flex flex-wrap gap-2 pl-4">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1.5 rounded-full bg-white border border-border text-brand-navy font-medium shadow-soft"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* TGROWTHR framework badge */}
        {service.framework && (
          <div className="mb-6 rounded-2xl bg-brand-navy p-5 border border-brand-navy">
            <p className="text-brand-gold text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
              {service.framework.label}
            </p>
            <p className="font-heading text-white text-2xl font-semibold mb-1">
              {service.framework.title}
            </p>
            <p className="text-white/60 text-xs">{service.framework.description}</p>
          </div>
        )}

        {/* Ideal for */}
        {service.idealFor && (
          <div className="mb-6">
            <h3 className="text-brand-navy font-semibold text-sm mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
              Ideal For
            </h3>
            <div className="flex flex-wrap gap-2 pl-4">
              {service.idealFor.map((role) => (
                <span
                  key={role}
                  className="text-xs px-3 py-1.5 rounded-full bg-brand-gold-muted border border-brand-gold/20 text-brand-navy font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Outcome */}
        {service.outcome && (
          <div className="mb-8 rounded-xl bg-brand-gold-muted border border-brand-gold/20 p-4">
            <p className="text-brand-navy text-sm leading-relaxed font-medium">
              <span className="text-brand-gold mr-2">✦</span>
              {service.outcome}
            </p>
          </div>
        )}

        {/* CTA */}
        <motion.a
          href={service.ctaHref}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy text-brand-cream font-medium rounded-full shadow-premium hover:bg-brand-navy-light transition-all duration-300"
        >
          {service.cta}
          <span className="text-brand-gold">→</span>
        </motion.a>
      </motion.article>
    </AnimatePresence>
  );
}
