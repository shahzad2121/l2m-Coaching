"use client";

import { motion } from "framer-motion";
import BookingButton from "@/components/calendly/BookingButton";

export default function BlogCTA() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Gold divider */}
          <div
            className="h-px max-w-[5rem] mx-auto mb-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.12 79 / 0.5), transparent)",
            }}
          />

          <p className="text-brand-gold font-medium text-xs tracking-[0.22em] uppercase mb-5">
            Take the Next Step
          </p>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-5 text-balance"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Ready to put these ideas{" "}
            <span className="italic text-gradient-gold">into practice?</span>
          </h2>

          <p className="text-brand-slate text-base leading-relaxed mb-10 text-pretty">
            Reading creates awareness. Coaching creates lasting change. Book a
            free 30-minute conversation to explore what&apos;s possible for you.
          </p>

          <BookingButton variant="primary" size="lg">
            Book a Complimentary Coaching Conversation
          </BookingButton>

          <p className="text-brand-slate/50 text-xs mt-5 italic">
            No pressure. No sales pitch. Just an honest conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
