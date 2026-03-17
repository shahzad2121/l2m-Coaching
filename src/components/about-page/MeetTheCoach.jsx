"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const stats = [
  { value: "1800+", label: "Coaching Hours" },
  { value: "10+",   label: "Years Leading Teams" },
  { value: "EMCC",  label: "Senior Practitioner" },
  { value: "CMgr",  label: "FCMI Chartered" },
];

const accreditations = [
  "EMCC Senior Practitioner",
  "Chartered Manager (CMgr FCMI)",
  "Fellow — ILM (FInstLM)",
  "MA, MBA, BA",
  "NLP Practitioner",
];

export default function MeetTheCoach() {
  return (
    <section className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-0 w-1/2 h-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse 60% 80% at 0% 50%, oklch(0.72 0.12 79 / 0.07) 0%, transparent 70%)" }}
      />

      <div className="section-container relative z-10">
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
              Meet the Coach
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            The Person Behind{" "}
            <span className="italic text-gradient-gold">the Coaching</span>
          </h2>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto bg-white rounded-3xl border border-border shadow-premium overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            {/* Photo column */}
            <div className="lg:col-span-2 relative min-h-[360px] lg:min-h-0 bg-brand-cream-deep">
              <Image
                src="/images/Lloyd-Munyaviri-Coach.png"
                alt="Lloyd Munyaviri — L2M Coaching"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-brand-navy/30 to-transparent" />
            </div>

            {/* Content column */}
            <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Name & title */}
                <h3
                  className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-1"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
                >
                  Lloyd Munyaviri
                </h3>
                <p className="text-brand-gold font-medium text-xs tracking-[0.18em] uppercase mb-8">
                  Founder · Head of Manufacturing, Brompton Bicycle · Coach
                </p>

                {/* Bio */}
                <p className="text-brand-slate text-sm leading-relaxed mb-8 text-pretty">
                  Lloyd founded L2M Coaching to bring the lessons of real
                  leadership into the coaching room. With a career that spans
                  manufacturing leadership at Brompton Bicycle, advanced
                  academic study, and over 1800 hours of coaching, Lloyd offers
                  a rare combination of lived experience, professional rigour,
                  and genuine human connection.
                </p>

                {/* Accreditations */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {accreditations.map((a) => (
                    <span
                      key={a}
                      className="text-xs px-3 py-1.5 rounded-full bg-brand-gold-muted text-brand-navy font-medium border border-brand-gold/20"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mb-8">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-white/90 py-4 px-3 text-center">
                      <p className="font-heading text-2xl font-semibold text-brand-navy">{s.value}</p>
                      <p className="text-xs text-brand-slate font-medium mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Social / contact */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href="mailto:lloydm2m@gmail.com"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-brand-cream font-medium rounded-full shadow-premium hover:bg-brand-navy-light transition-all duration-300 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-brand-slate hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
