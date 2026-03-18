"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I gained confidence, creativity and clarity through Lloyd's coaching. The journey helped me discover new strengths and perspectives I didn't even know I had. I'm now showing up as the leader I always wanted to be.",
    name: "Sarah M.",
    role: "Senior Manager, Financial Services",
    initials: "SM",
  },
  {
    quote:
      "Working with Lloyd was one of the best investments I've made in myself. He has an extraordinary ability to ask the right questions at exactly the right moment — everything shifted for me after just our second session.",
    name: "David K.",
    role: "Entrepreneur & Business Owner",
    initials: "DK",
  },
  {
    quote:
      "As a parent, I was struggling to connect with my teenager. Lloyd's guidance transformed not just how I communicate, but how I see my relationship with my child. The change has been profound and lasting.",
    name: "Rachel T.",
    role: "Parent & Community Leader",
    initials: "RT",
  },
  {
    quote:
      "Lloyd helped our entire leadership team find a shared language and vision. The culture shift we've seen in six months would have taken years without his guidance. Truly outstanding.",
    name: "James O.",
    role: "CEO, Technology Scale-up",
    initials: "JO",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setIsAutoPlaying(false);
    },
    [current]
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      next();
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-navy-section relative overflow-hidden"
    >
      {/* Parallax background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <Image
            src="/images/client.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1600px"
            className="object-cover opacity-80 blur-[1px]"
            priority={false}
          />
        </motion.div>

        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-brand-navy/75" />

        {/* Subtle accent blob */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.72 0.12 79 / 0.18) 0%, transparent 70%)",
          }}
        />
      </div>

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
              Client Stories
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-white leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Real People.{" "}
            <span className="italic text-gradient-gold">Real Transformation.</span>
          </h2>

          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Hear directly from those who've been through the journey.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          {/* Large quote mark */}
          <div
            className="text-center mb-8"
            aria-hidden="true"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "8rem",
              lineHeight: 0.6,
              color: "oklch(0.72 0.12 79 / 0.3)",
            }}
          >
            "
          </div>

          {/* Slide */}
          <div
            className="relative overflow-hidden min-h-[220px] flex items-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full text-center"
              >
                <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed italic mb-10 text-pretty">
                  {t.quote}
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 border-2 border-brand-gold/40 flex items-center justify-center">
                    <span className="font-heading text-brand-gold font-semibold text-sm">
                      {t.initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium">{t.name}</p>
                    <p className="text-white/50 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Prev */}
            <motion.button
              onClick={() => {
                prev();
                setIsAutoPlaying(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative"
                >
                  <motion.span
                    animate={{
                      width: i === current ? 28 : 8,
                      backgroundColor:
                        i === current
                          ? "oklch(0.72 0.12 79)"
                          : "rgba(255,255,255,0.3)",
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="block h-2 rounded-full"
                  />
                </button>
              ))}
            </div>

            {/* Next */}
            <motion.button
              onClick={() => {
                next();
                setIsAutoPlaying(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
