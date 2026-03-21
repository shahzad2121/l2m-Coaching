"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Shield, Star } from "lucide-react";
import { CALENDLY_URL, CALENDLY_SCRIPT_URL, CALENDLY_CSS_URL } from "@/lib/calendly-config";

const sessionDetails = [
  { icon: Clock, label: "30 minutes", sub: "A focused, unhurried conversation" },
  { icon: Shield, label: "Confidential", sub: "Everything discussed stays private" },
  { icon: Star, label: "No obligation", sub: "Explore at your own pace" },
  { icon: Calendar, label: "Flexible timing", sub: "Book a time that works for you" },
];

function CalendlyWidget() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Inject Calendly CSS
    if (!document.querySelector(`link[href="${CALENDLY_CSS_URL}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS_URL;
      document.head.appendChild(link);
    }

    // Inject Calendly script once
    const existing = document.querySelector(`script[src="${CALENDLY_SCRIPT_URL}"]`);
    if (existing) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
  }, []);

  // Calendly's own inline widget auto-initialises when it sees the div
  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url={`${CALENDLY_URL}?hide_event_type_details=0&hide_gdpr_banner=1&background_color=fdfcf7&text_color=1c2338&primary_color=c9a840`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

export default function BookingSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream-deep relative overflow-hidden">
      {/* Subtle top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.12 79 / 0.3), transparent)",
        }}
      />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
              Book Your Session
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}
          >
            Choose a Time That{" "}
            <span className="italic text-gradient-gold">Works for You</span>
          </h2>

          <p className="text-brand-slate text-base md:text-lg max-w-lg mx-auto text-pretty">
            A relaxed, no-pressure conversation to explore your goals and see
            if coaching is the right fit for you.
          </p>
        </motion.div>

        {/* Session detail pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {sessionDetails.map(({ icon: Icon, label, sub }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-5 py-5 border border-border shadow-soft text-center flex flex-col items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-gold-muted border border-brand-gold/25 flex items-center justify-center">
                <Icon className="w-4 h-4 text-brand-gold" strokeWidth={1.6} />
              </div>
              <span className="text-brand-navy font-semibold text-sm">{label}</span>
              <span className="text-brand-slate text-xs leading-snug text-center">{sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Calendly inline embed card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-border shadow-premium overflow-hidden relative">
            {/* Gold glow accent */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, oklch(0.72 0.12 79 / 0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 p-2 sm:p-4">
              <CalendlyWidget />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
