"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email directly",
    value: "lloydm2m@gmail.com",
    href: "mailto:lloydm2m@gmail.com",
    note: "Expect a reply within 1–2 business days",
  },
  {
    icon: Linkedin,
    label: "Connect on LinkedIn",
    value: "Lloyd Munyaviri",
    href: "https://linkedin.com",
    note: "Send a message or connection request",
  },
];

const trustBadges = [
  "ICF Certified Coach",
  "10+ Years Experience",
  "200+ Lives Transformed",
  "UK & International Clients",
];

export default function ContactAlternative() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Faint gold radial accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.72 0.12 79 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px max-w-xs mx-auto mb-20 origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.12 79 / 0.4), transparent)",
            }}
          />

          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
            {/* Left: Heading + contact methods */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-brand-gold shrink-0" />
                <span className="text-brand-gold font-medium text-xs tracking-[0.2em] uppercase">
                  Alternative Contact
                </span>
              </div>

              <h2
                className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Prefer to Reach{" "}
                <span className="italic text-gradient-gold">Out Directly?</span>
              </h2>

              <p className="text-brand-slate text-base leading-relaxed mb-8 text-pretty max-w-sm">
                Not ready to book yet? That&apos;s completely fine. Send a
                message and I&apos;ll be happy to answer any questions before
                you take the next step.
              </p>

              {/* Contact method cards */}
              <div className="space-y-4">
                {contactMethods.map(({ icon: Icon, label, value, href, note }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-4 bg-white rounded-2xl px-6 py-5 border border-border shadow-soft hover:border-brand-gold/30 hover:shadow-premium transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-gold-muted border border-brand-gold/25 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/15 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-brand-gold" strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-brand-slate text-xs font-medium tracking-wide uppercase mb-0.5">
                        {label}
                      </p>
                      <p className="text-brand-navy font-semibold text-sm mb-1 truncate">
                        {value}
                      </p>
                      <p className="text-brand-slate/70 text-xs">{note}</p>
                    </div>
                    <span className="text-brand-gold text-sm ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right: Trust / about card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-brand-navy rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                {/* Inner glow */}
                <div
                  className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 0%, oklch(0.72 0.12 79 / 0.18) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center mb-6">
                    <MessageSquare className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-8">
                    <p className="font-heading text-white text-xl lg:text-2xl font-light italic leading-snug mb-4 text-pretty">
                      &ldquo;The most important conversation you can have is the
                      one that helps you see what&apos;s possible on the other
                      side of where you are now.&rdquo;
                    </p>
                    <footer className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
                        <span className="font-heading text-brand-gold font-semibold text-xs">LM</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm leading-none mb-0.5">
                          Lloyd Munyaviri
                        </p>
                        <p className="text-white/50 text-xs">ICF Certified Coach</p>
                      </div>
                    </footer>
                  </blockquote>

                  {/* Gold divider */}
                  <div
                    className="h-px mb-8"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.72 0.12 79 / 0.4), transparent)",
                    }}
                  />

                  {/* Trust badges */}
                  <div className="grid grid-cols-2 gap-3">
                    {trustBadges.map((badge, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 shrink-0" />
                        <span className="text-white/60 text-xs font-medium leading-tight">
                          {badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
