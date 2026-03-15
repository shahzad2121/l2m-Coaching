"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden mesh-gradient pt-24 pb-20">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.07, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full"
          style={{ background: "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.13) 0%, transparent 65%)" }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 35, 0], scale: [1, 1.09, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-48 -left-40 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle at center, oklch(0.17 0.035 264 / 0.06) 0%, transparent 65%)" }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.028] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.17 0.035 264) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Main copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemUp} className="flex items-center gap-3 mb-8">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 40, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-brand-gold block shrink-0"
              />
              <span className="text-brand-gold font-medium text-sm tracking-[0.22em] uppercase">
                What We Offer
              </span>
            </motion.div>

            <motion.h1
              variants={itemUp}
              className="font-heading font-light text-brand-navy leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Our{" "}
              <span className="italic text-gradient-gold">Services</span>
            </motion.h1>

            <motion.p
              variants={itemUp}
              className="text-brand-slate text-lg md:text-xl leading-relaxed mb-12 max-w-xl text-pretty"
            >
              Professional coaching, leadership development, and family support
              designed to help individuals and teams unlock their full potential.
            </motion.p>

            <motion.div variants={itemUp} className="flex flex-col sm:flex-row items-start gap-4">
              <motion.a
                href="#services-detail"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-brand-cream font-medium rounded-full shadow-premium hover:bg-brand-navy-light transition-all duration-300"
              >
                See Prices &amp; Book a Service
                <span className="text-brand-gold">→</span>
              </motion.a>
              <motion.a
                href="#service-consultation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-4 border border-border text-brand-navy font-medium rounded-full hover:border-brand-navy transition-all duration-300"
              >
                Free 30-Min Consultation
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Free intro consultation callout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            id="service-consultation"
          >
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-premium overflow-hidden">
              {/* Gold glow top-right */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle at 100% 0%, oklch(0.72 0.12 79 / 0.12) 0%, transparent 70%)" }}
              />

              <div className="relative z-10">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 bg-brand-gold-muted border border-brand-gold/25 text-brand-navy text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Free Session · No Obligation
                </span>

                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-brand-navy mb-4 leading-tight">
                  Free 30-Minute Introductory Consultation
                </h2>

                <p className="text-brand-slate text-sm leading-relaxed mb-7 text-pretty">
                  A complimentary session to explore how coaching can support
                  your personal or professional goals. During this session we will:
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "Discuss your goals and areas of focus",
                    "Identify key challenges you are facing",
                    "Introduce our coaching approach",
                    "Answer your questions about coaching",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-brand-gold-muted border border-brand-gold/30 flex items-center justify-center mt-0.5">
                        <span className="text-brand-gold text-[9px] font-bold">✓</span>
                      </span>
                      <span className="text-brand-slate text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-brand-navy text-sm font-medium italic mb-8 border-l-2 border-brand-gold pl-4">
                  By the end, you will clearly understand how coaching can support
                  your journey and whether it is the right fit for you.
                </p>

                <motion.a
                  href="mailto:lloyd@l2mcoaching.com"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-gold text-brand-navy font-semibold rounded-full shadow-gold hover:bg-brand-gold-light transition-all duration-300"
                >
                  Book Free Consultation
                  <span>→</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
