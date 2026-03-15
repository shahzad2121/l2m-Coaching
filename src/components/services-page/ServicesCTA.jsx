"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-24 lg:py-36 bg-navy-section relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 28, 0], y: [0, -18, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 28, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
              Get Started Today
            </span>
            <span className="h-px w-12 bg-brand-gold" />
          </div>

          {/* Headline */}
          <h2
            className="font-heading font-light text-white leading-[1.1] tracking-tight mb-8 text-balance"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}
          >
            Ready to Start Your{" "}
            <span className="italic text-gradient-gold block">
              Coaching Journey?
            </span>
          </h2>

          {/* Body */}
          <p className="text-white/65 text-lg leading-relaxed mb-14 max-w-2xl mx-auto text-pretty">
            Whether you are looking to grow as a leader, strengthen your family
            connections, or gain clarity in your career, L2M Coaching is here
            to support you. The first step is always a conversation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <motion.a
              href="mailto:lloyd@l2mcoaching.com"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-navy font-semibold rounded-full shadow-gold hover:bg-brand-gold-light transition-all duration-300 text-base"
            >
              <Calendar className="w-5 h-5" />
              Book Your Free Consultation
            </motion.a>

            <motion.a
              href="#services-detail"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-4 border border-white/25 text-white/80 font-medium rounded-full hover:border-white/50 hover:text-white transition-all duration-300 text-base"
            >
              <ArrowRight className="w-5 h-5" />
              View Pricing &amp; Services
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-white/40 text-sm italic"
          >
            No pressure. No sales pitch. Just a genuine, confidential conversation.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 h-px mx-auto max-w-xs origin-center"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 79 / 0.5), transparent)" }}
          />

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-8"
          >
            {["ICF Certified", "EMCC Senior Practitioner", "Confidential", "Flexible Scheduling"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-white/40 text-xs font-medium tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
