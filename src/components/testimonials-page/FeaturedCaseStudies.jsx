"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Senior Manager, Financial Services",
    initials: "SM",
    image:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=700&q=80&auto=format&fit=crop",
    tag: "Leadership Confidence",
    before: {
      label: "Starting Point",
      points: [
        "Doubted her readiness to lead at senior level",
        "Struggled to assert herself in executive meetings",
        "Felt disconnected from her team despite strong results",
      ],
    },
    workedOn: {
      label: "What We Worked On",
      points: [
        "Identifying and reframing limiting beliefs around authority",
        "Developing a clear, authentic leadership voice",
        "Building strategies for high-stakes conversations",
      ],
    },
    results: {
      label: "Transformation",
      points: [
        "Promoted to Director within 8 months of coaching",
        "Now leads her team with confidence and visibility",
        "Became a mentor to two junior managers in her firm",
      ],
    },
    quote:
      "I gained confidence, creativity and clarity through Lloyd's coaching. I'm now showing up as the leader I always wanted to be.",
  },
  {
    id: 2,
    name: "David K.",
    role: "Entrepreneur & Business Owner",
    initials: "DK",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80&auto=format&fit=crop",
    tag: "Entrepreneurial Clarity",
    before: {
      label: "Starting Point",
      points: [
        "Overwhelmed by competing priorities in his business",
        "Losing sight of his long-term vision and purpose",
        "Struggling to make high-stakes decisions with confidence",
      ],
    },
    workedOn: {
      label: "What We Worked On",
      points: [
        "Reconnecting with core values and business vision",
        "Frameworks for faster, clearer decision-making",
        "Managing energy and focus as a solo leader",
      ],
    },
    results: {
      label: "Transformation",
      points: [
        "Restructured his business around what mattered most",
        "Reduced overwhelm and reclaimed strategic thinking time",
        "Closed his largest-ever contract within 3 months",
      ],
    },
    quote:
      "Working with Lloyd was one of the best investments I've made in myself. Everything shifted for me after just our second session.",
  },
  {
    id: 3,
    name: "James O.",
    role: "CEO, Technology Scale-up",
    initials: "JO",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=80&auto=format&fit=crop",
    tag: "Team & Culture",
    before: {
      label: "Starting Point",
      points: [
        "Leadership team lacked shared language and direction",
        "Culture of silos was slowing growth and trust",
        "High turnover in senior roles affecting company morale",
      ],
    },
    workedOn: {
      label: "What We Worked On",
      points: [
        "Establishing a shared values framework across the leadership team",
        "Coaching conversations around accountability and trust",
        "Building psychological safety for honest communication",
      ],
    },
    results: {
      label: "Transformation",
      points: [
        "Reduced executive turnover by 60% in 12 months",
        "Launched company-wide culture initiative",
        "Team now operates with measurable alignment and momentum",
      ],
    },
    quote:
      "Lloyd helped our entire leadership team find a shared language and vision. The culture shift we've seen in six months would have taken years without his guidance.",
  },
];

function CaseStudyCard({ study, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-[1fr_1fr] gap-0 rounded-3xl overflow-hidden border border-border shadow-soft ${
        isEven ? "" : "lg:[direction:rtl]"
      }`}
    >
      {/* Image panel */}
      <div
        className={`relative h-72 lg:h-auto min-h-[360px] overflow-hidden ${
          isEven ? "" : "lg:[direction:ltr]"
        }`}
      >
        <Image
          src={study.image}
          alt={`Case study: ${study.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 to-transparent" />

        {/* Tag badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-flex items-center gap-1.5 bg-brand-gold/90 text-brand-navy text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40" />
            {study.tag}
          </span>
        </div>

        {/* Client avatar + name on image */}
        <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur border-2 border-white/40 flex items-center justify-center">
            <span className="font-heading text-white font-semibold text-sm">
              {study.initials}
            </span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">{study.name}</p>
            <p className="text-white/70 text-xs">{study.role}</p>
          </div>
        </div>
      </div>

      {/* Content panel */}
      <div
        className={`bg-white p-8 lg:p-10 flex flex-col justify-between ${
          isEven ? "" : "lg:[direction:ltr]"
        }`}
      >
        {/* Three-column mini sections */}
        <div className="space-y-6 mb-8">
          {[study.before, study.workedOn, study.results].map((section) => (
            <div key={section.label}>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-5 bg-brand-gold shrink-0" />
                <h4 className="text-brand-gold font-medium text-xs tracking-[0.18em] uppercase">
                  {section.label}
                </h4>
              </div>
              <ul className="space-y-1.5">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-brand-slate text-sm leading-relaxed">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="relative pl-5 border-l-2 border-brand-gold">
          <p className="font-heading text-brand-navy text-lg font-light leading-snug italic text-pretty">
            &ldquo;{study.quote}&rdquo;
          </p>
        </blockquote>
      </div>
    </motion.div>
  );
}

export default function FeaturedCaseStudies() {
  return (
    <section className="py-28 lg:py-36 bg-brand-cream-deep">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase">
              Case Studies
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Stories of{" "}
            <span className="italic text-gradient-gold">Meaningful Change</span>
          </h2>

          <p className="text-brand-slate text-lg max-w-2xl mx-auto text-pretty">
            These are not just success stories — they are documented journeys
            from uncertainty and stagnation to clarity, confidence, and purpose.
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
