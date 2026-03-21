"use client";

import { motion } from "framer-motion";
import BookingButton from "@/components/calendly/BookingButton";

const trustPillars = [
  "ICF Certified Coach",
  "10+ Years Experience",
  "Confidential",
  "No Obligation",
];

export default function TestimonialsCTA() {
  return (
    <section className="py-28 lg:py-40 bg-navy-section relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.14) 0%, transparent 68%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 35, 0] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-32 -left-32 w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.09) 0%, transparent 68%)",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold font-medium text-sm tracking-[0.22em] uppercase">
                Your Turn
              </span>
              <span className="h-px w-12 bg-brand-gold" />
            </div>

            {/* Headline */}
            <h2
              className="font-heading font-light text-white leading-[1.1] tracking-tight mb-7 text-balance"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}
            >
              Ready for Your Own{" "}
              <span className="italic text-gradient-gold block">
                Transformation?
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto text-pretty">
              Every person featured on this page started exactly where you are
              now — with a question, a challenge, or a feeling that something had
              to change. The first step is simply a conversation.
            </p>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
              <BookingButton variant="gold" size="lg">
                Book a Complimentary Coaching Conversation
              </BookingButton>

              <motion.a
                href="mailto:lloydm2m@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-7 py-4 border border-white/25 text-white/80 font-medium rounded-full hover:border-white/50 hover:text-white transition-all duration-300 text-base"
              >
                Send a Message
              </motion.a>
            </div>

            <p className="text-white/40 text-sm italic mb-16">
              No pressure. No sales pitch. Just a genuine, confidential conversation.
            </p>
          </motion.div>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="h-px mx-auto max-w-xs origin-center mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.12 79 / 0.5), transparent)",
            }}
          />

          {/* Trust pillars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {trustPillars.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-white/40 text-xs font-medium tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50 shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
