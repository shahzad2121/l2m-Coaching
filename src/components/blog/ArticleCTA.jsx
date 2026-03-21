"use client";

import { motion } from "framer-motion";
import BookingButton from "@/components/calendly/BookingButton";

/**
 * ArticleCTA — inline coaching nudge rendered between article content
 * and related posts. Subtle, not intrusive.
 */
export default function ArticleCTA() {
  return (
    <section className="py-16 bg-brand-cream-deep">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-border shadow-soft p-8 lg:p-10 relative overflow-hidden">
            {/* Gold glow */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, oklch(0.72 0.12 79 / 0.1) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              {/* Left: gold accent */}
              <div className="shrink-0 w-1 self-stretch rounded-full bg-brand-gold hidden sm:block" />

              {/* Content */}
              <div className="flex-1">
                <p className="text-brand-gold font-medium text-xs tracking-[0.2em] uppercase mb-3">
                  Apply This to Your Own Life
                </p>
                <h3
                  className="font-heading font-light text-brand-navy leading-tight mb-3"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}
                >
                  Want support putting this into practice?
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed text-pretty max-w-lg">
                  Reading creates awareness. Coaching creates lasting change.
                  Book a free 30-minute conversation to explore what this could
                  look like in your specific situation.
                </p>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <BookingButton variant="primary" size="md">
                  Book a Free Session
                </BookingButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
