"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, CheckCircle, ArrowRight, BookOpen } from "lucide-react";

const guidePoints = [
  "Shift from managing to genuinely leading",
  "Build psychological safety in your team",
  "Communicate with clarity and authority",
  "Create a culture of accountability",
  "Lead with emotional intelligence under pressure",
];

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
  
    setLoading(true);
  
    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_KIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: process.env.NEXT_PUBLIC_KIT_API_KEY,
            email: email,
          }),
        }
      );
  
      const data = await response.json();
      console.log("ConvertKit response:", data);
  
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Error:", data);
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Network error. Try again.");
    }
  
    setLoading(false);
  };

  return (
    <section
      id="guide"
      className="py-24 lg:py-36 bg-brand-cream-deep relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.72 0.12 79 / 0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute left-0 top-0 w-1/3 h-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 50%, oklch(0.72 0.12 79 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Left: Guide preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image hero preview (text over image) */}
            <motion.div
              whileHover={{ rotate: -1, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative inline-block mb-10 w-full max-w-md lg:max-w-lg"
            >
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-premium bg-brand-navy">
                {/* Image */}
                <div className="relative h-[500px] w-full sm:h-[590px]">
                  <Image
                    src="/images/book-reading.png"
                    alt="Lloyd reading a book"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-contain object-top"
                    priority
                  />

                  {/* Bottom gradient for readable overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/95 via-brand-navy/70 to-transparent" />
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center border border-white/10">
                      <BookOpen className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-brand-gold text-xs font-medium tracking-[0.2em] uppercase">
                      Free Guide
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl font-light text-white leading-snug mb-6">
                    5 Leadership Shifts That Transform{" "}
                    <span className="italic text-gradient-gold">Your Team</span>
                  </h3>

                  <div className="space-y-3 mb-8">
                    {guidePoints.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <span className="shrink-0 w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center mt-0.5">
                          <span className="text-brand-gold text-[10px] font-semibold">
                            {i + 1}
                          </span>
                        </span>
                        <span className="text-white/75 text-sm leading-relaxed">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center">
                      <span className="font-heading text-brand-gold text-sm font-semibold">L</span>
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">Lloyd Munyaviri</p>
                      <p className="text-white/50 text-xs">ICF Certified Coach</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
                Free Download
              </span>
            </div>

            <h2
              className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}
            >
              Get Your Free Leadership{" "}
              <span className="italic text-gradient-gold">Transformation Guide</span>
            </h2>

            <p className="text-brand-slate leading-relaxed mb-8 text-pretty">
              Discover the five most impactful leadership shifts that separate
              good managers from truly transformational leaders. Practical,
              proven, and immediately actionable.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="lm-email" className="block text-brand-navy text-sm font-medium mb-2">
                      Your email address
                    </label>
                    <div className="relative">
                      <input
                        id="lm-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full px-5 py-4 rounded-xl border border-border bg-white text-brand-navy placeholder:text-brand-slate/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-brand-navy text-brand-cream font-medium rounded-xl shadow-premium hover:bg-brand-navy-light transition-all duration-300 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-brand-cream/30 border-t-brand-gold rounded-full"
                        />
                        Sending your guide…
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 text-brand-gold" />
                        Send Me the Free Guide
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-brand-slate/60 text-xs text-center">
                    No spam, ever. Unsubscribe at any time. We respect your privacy.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl p-8 border border-border shadow-soft text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-semibold text-brand-navy mb-3">
                    Your guide is on its way!
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed">
                    Check your inbox for your free leadership guide. While you
                    wait, why not book a complimentary coaching conversation?
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-6 text-brand-navy font-medium text-sm border-b border-brand-gold hover:text-brand-gold transition-colors duration-200 pb-0.5"
                  >
                    Book a free conversation →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
