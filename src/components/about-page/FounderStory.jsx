"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, Clock, Briefcase } from "lucide-react";

const credentials = [
  { icon: Briefcase, label: "Head of Manufacturing", sub: "Brompton Bicycle" },
  { icon: Award,     label: "EMCC Senior Practitioner", sub: "European Mentoring & Coaching Council" },
  { icon: Award,     label: "Chartered Manager (CMgr FCMI)", sub: "Chartered Management Institute" },
  { icon: Award,     label: "Fellow — ILM (FInstLM)", sub: "Institute of Leadership & Management" },
  { icon: GraduationCap, label: "MA, MBA, BA", sub: "Academic Qualifications" },
  { icon: Clock,     label: "1800+ Coaching Hours", sub: "Delivered to date" },
];

const story = [
  "Lloyd Munyaviri's journey into coaching began long before he founded L2M Coaching. As Head of Manufacturing at Brompton Bicycle — one of the world's most iconic engineering businesses — Lloyd spent years leading high-performing teams through growth, change, and challenge.",
  "That frontline leadership experience gave him something no qualification alone can teach: an unshakeable understanding of what it actually feels like to manage people, navigate pressure, and carry responsibility. It also showed him, first-hand, how much difference the right support can make.",
  "Driven by a desire to give others the transformational support he wished he'd had earlier in his career, Lloyd trained rigorously — achieving EMCC Senior Practitioner status, Chartered Manager (CMgr FCMI) designation, and Fellowship of the Institute of Leadership & Management (FInstLM). He has since accumulated over 1800 coaching hours across sectors, roles, and cultures.",
  "Today, L2M Coaching brings that lived experience and professional rigour together in service of one purpose: helping professionals, managers, and leaders unlock what's already inside them — and step into the version of themselves they're capable of becoming.",
];

export default function FounderStory() {
  return (
    <section id="founder" className="py-24 lg:py-36 bg-brand-cream-deep relative overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.72 0.12 79 / 0.25) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
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
              The Founder
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>
          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            A Coach Forged in{" "}
            <span className="italic text-gradient-gold">Real Leadership</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Photo + credentials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 bg-brand-navy shadow-premium mb-10">
              <Image
                src="/images/Lloyd-Munyaviri-Coach.png"
                alt="Lloyd Munyaviri — Founder of L2M Coaching"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-soft"
              >
                <p className="text-brand-navy font-heading text-2xl font-semibold">1800+</p>
                <p className="text-brand-slate text-xs">Coaching Hours</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-8 left-6 bg-brand-navy rounded-2xl px-4 py-3 shadow-premium border border-white/10"
              >
                <p className="text-brand-gold font-heading text-xl font-semibold">EMCC</p>
                <p className="text-white/65 text-xs">Senior Practitioner</p>
              </motion.div>

              {/* Gold border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl -z-10 border-2 border-brand-gold/20 pointer-events-none" />
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border shadow-soft"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-brand-gold-muted flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-brand-navy text-xs font-semibold leading-snug">{c.label}</p>
                      <p className="text-brand-slate/70 text-xs mt-0.5">{c.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
                Founder Story
              </span>
            </div>

            <h3
              className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-2"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Lloyd Munyaviri
            </h3>
            <p className="text-brand-gold font-medium tracking-wide text-xs mb-10 uppercase">
              Founder · EMCC Senior Practitioner · CMgr FCMI · FInstLM
            </p>

            <div className="space-y-6 text-brand-slate leading-relaxed">
              {story.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-12 px-7 py-3.5 bg-brand-navy text-brand-cream font-medium rounded-full shadow-premium hover:bg-brand-navy-light transition-all duration-300"
            >
              Have a Conversation with Lloyd
              <span className="text-brand-gold">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
