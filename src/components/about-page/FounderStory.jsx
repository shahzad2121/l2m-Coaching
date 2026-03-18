"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const credentials = [
  { label: "EMCC Senior Practitioner", sub: "European Mentoring & Coaching Council" },
  { label: "Chartered Manager · CMgr FCMI", sub: "Chartered Management Institute" },
  { label: "Fellow · ILM (FInstLM)", sub: "Institute of Leadership & Management" },
  { label: "Head of Manufacturing", sub: "Brompton Bicycle" },
  { label: "MA · MBA · BA", sub: "Academic Qualifications" },
];

const slides = [
  {
    src: "/images/client-handing-certificate.png",
    alt: "Client receiving certificate",
    caption: "Client success",
  },
  {
    src: "/images/book-reading.png",
    alt: "Lloyd reading — continuous learning",
    caption: "Continuous learning",
  },
  {
    src: "/images/client.png",
    alt: "Lloyd Munyaviri — Executive Coach",
    caption: "Lloyd Munyaviri",
  },
];

const story = [
  "Lloyd Munyaviri's journey into coaching began long before he founded L2M Coaching. As Head of Manufacturing at Brompton Bicycle — one of the world's most iconic engineering businesses — Lloyd spent years leading high-performing teams through growth, change, and challenge.",
  "That frontline leadership experience gave him something no qualification alone can teach: an unshakeable understanding of what it actually feels like to manage people, navigate pressure, and carry responsibility. It also showed him, first-hand, how much difference the right support can make.",
  "Driven by a desire to give others the transformational support he wished he'd had earlier in his career, Lloyd trained rigorously — achieving EMCC Senior Practitioner status, Chartered Manager (CMgr FCMI) designation, and Fellowship of the Institute of Leadership & Management (FInstLM). He has since accumulated over 1800 coaching hours across sectors, roles, and cultures.",
  "Today, L2M Coaching brings that lived experience and professional rigour together in service of one purpose: helping professionals, managers, and leaders unlock what's already inside them — and step into the version of themselves they're capable of becoming.",
];

export default function FounderStory() {
  return (
    <section
      id="founder"
      className="py-16 sm:py-20 lg:py-36 bg-brand-cream-deep relative"
    >
      {/* Decorative dot grid */}
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
          className="text-center mb-12 sm:mb-16 lg:mb-20"
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

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-start">
          {/* ── LEFT: Slider + credentials ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 xl:top-36 self-start w-full min-w-0"
          >
            {/* Slider wrapper using padding-bottom trick for reliable height */}
            <div className="founder-slider-wrap rounded-2xl overflow-hidden shadow-premium">
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                speed={700}
                className="founder-swiper"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.src} className="founder-slide">
                    <div className="founder-slide-inner">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover object-center"
                        priority
                      />
                      {/* Bottom gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent pointer-events-none" />
                      {/* Caption */}
                      <p className="absolute bottom-4 left-5 text-white/70 text-[10px] sm:text-xs tracking-[0.12em] uppercase z-10">
                        {slide.caption}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Credential dot list */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.07 + 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-3 py-3 border-b border-border"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-[5px]" />
                  <div>
                    <p className="text-brand-navy text-sm font-medium leading-snug">
                      {c.label}
                    </p>
                    <p className="text-brand-slate/60 text-xs mt-0.5">{c.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Story ── */}
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
                  transition={{
                    delay: i * 0.1 + 0.2,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
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

      <style jsx global>{`
        /*
          ROOT CAUSE FIX:
          Swiper with EffectFade makes all slides position:absolute, so the
          swiper container collapses to 0 height — taking the image with it.
          The padding-bottom trick is the only reliable cross-browser fix:
          set height:0 + padding-bottom on the swiper, then make all internal
          elements position:absolute to fill that space.
        */

        .founder-slider-wrap {
          position: relative;
          width: 100%;
        }

        /* 4:3 on mobile */
        .founder-swiper {
          position: relative !important;
          width: 100% !important;
          height: 0 !important;
          padding-bottom: 75% !important; /* 4:3 ratio */
          overflow: hidden !important;
        }

        /* 16:9 from sm (640px) upward */
        @media (min-width: 640px) {
          .founder-swiper {
            padding-bottom: 56.25% !important; /* 16:9 ratio */
          }
        }

        /* All swiper internals must be absolute to fill the padded space */
        .founder-swiper .swiper-wrapper {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .founder-slide,
        .founder-swiper .swiper-slide {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
        }

        .founder-slide-inner {
          position: absolute;
          inset: 0;
          background: #0d1b3e;
        }

        /* Pagination */
        .founder-swiper .swiper-pagination {
          position: absolute;
          bottom: 14px;
          right: 16px;
          left: auto;
          width: auto;
          display: flex;
          gap: 5px;
          align-items: center;
          z-index: 20;
        }

        .founder-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.45);
          opacity: 1;
          width: 6px;
          height: 6px;
          margin: 0 !important;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .founder-swiper .swiper-pagination-bullet-active {
          background: #c9a84c;
          width: 18px;
        }

        @media (max-width: 640px) {
          .founder-swiper .swiper-pagination {
            bottom: 10px;
            right: 12px;
          }
        }
      `}</style>
    </section>
  );
}