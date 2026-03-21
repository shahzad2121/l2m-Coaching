"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const profiles = [
  {
    group: "Professionals & Managers",
    items: [
      "Feeling stuck or unfulfilled despite external success",
      "Struggling to step into a more senior or visible role",
      "Navigating a career transition or new leadership position",
      "Wanting to lead more effectively and be taken seriously",
    ],
  },
  {
    group: "Entrepreneurs & Business Leaders",
    items: [
      "Overwhelmed by decisions and losing sight of the vision",
      "Wanting to build a high-performing team culture",
      "Seeking clarity on next-level business direction",
      "Balancing growth with personal wellbeing and energy",
    ],
  },
  {
    group: "Parents & Families",
    items: [
      "Struggling to connect with a teenager or young adult",
      "Wanting to lead your family with greater calm and intention",
      "Navigating relationship breakdowns or communication challenges",
      "Seeking to model resilience and emotional intelligence at home",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhoThisIsFor() {
  return (
    <section className="py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, oklch(0.72 0.12 79 / 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

          {/* Left: Header + image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-brand-gold shrink-0" />
              <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
                Is This You?
              </span>
            </div>

            <h2
              className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
            >
              Who This{" "}
              <span className="italic text-gradient-gold">Coaching Is For</span>
            </h2>

            <p className="text-brand-slate text-lg leading-relaxed mb-10 max-w-md text-pretty">
              Coaching works for anyone who is ready to move from where they are
              to where they want to be — and is willing to do the inner work to
              get there.
            </p>

            {/* Image */}
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80&auto=format&fit=crop"
                alt="Professional in a coaching session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />

              {/* Floating trust badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur rounded-xl px-5 py-4 shadow-soft">
                <p className="text-brand-navy font-heading text-base font-semibold italic leading-snug">
                  &ldquo;The right coach doesn't give you answers —
                  they help you find your own.&rdquo;
                </p>
                <p className="text-brand-slate text-xs mt-1.5 font-medium">— Lloyd Munyaviri, ICF Certified Coach</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Profile cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            {profiles.map((profile, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-white rounded-2xl p-7 border border-border shadow-soft hover:border-brand-gold/25 hover:shadow-premium transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                  <h3 className="font-heading text-lg font-semibold text-brand-navy">
                    {profile.group}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {profile.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 text-brand-gold shrink-0 mt-0.5"
                        strokeWidth={1.8}
                      />
                      <span className="text-brand-slate text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
