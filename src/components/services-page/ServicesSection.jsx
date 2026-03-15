"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "./services-data";
import ServicesNavigation from "./ServicesNavigation";
import ServiceVisual from "./ServiceVisual";
import ServiceContent from "./ServiceContent";

/* ─────────────────────────────────────────────
   Mobile / Tablet: stacked accordion sections
───────────────────────────────────────────── */
function MobileServices() {
  const [open, setOpen] = useState(SERVICES[0].id);

  return (
    <div className="flex flex-col gap-4">
      {/* Mobile tab strip */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {SERVICES.map((s) => (
          <button
            key={s.id}
            onClick={() => setOpen(s.id)}
            className={`shrink-0 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
              open === s.id
                ? "bg-brand-navy text-white border-brand-navy"
                : "bg-white text-brand-slate border-border hover:border-brand-navy"
            }`}
          >
            {s.num} {s.label.split(" ").slice(0, 2).join(" ")}
          </button>
        ))}
      </div>

      {/* Content for selected service */}
      {SERVICES.map((s) =>
        open !== s.id ? null : (
          <div key={s.id} className="flex flex-col gap-6">
            <div className="h-72 relative">
              <ServiceVisual activeId={s.id} />
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border shadow-soft">
              <ServiceContent service={s} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Desktop: 3-column scroll-synced layout
───────────────────────────────────────────── */
function DesktopServices() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const activeIdRef = useRef(SERVICES[0].id);
  const sectionRefs = useRef({});
  const observing = useRef(true);

  const activeService = SERVICES.find((s) => s.id === activeId);

  useEffect(() => {
    const TRIGGER_RATIO = 0.35;

    const handleScroll = () => {
      if (!observing.current) return;

      const triggerY = window.innerHeight * TRIGGER_RATIO;
      let best = null;
      let bestDist = Infinity;

      SERVICES.forEach((service) => {
        const el = sectionRefs.current[service.id];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) {
          const dist = Math.abs(rect.top - triggerY);
          if (dist < bestDist) {
            bestDist = dist;
            best = service.id;
          }
        }
      });

      if (best && best !== activeIdRef.current) {
        activeIdRef.current = best;
        setActiveId(best);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavSelect = useCallback((id) => {
    observing.current = false;
    activeIdRef.current = id;
    setActiveId(id);
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => { observing.current = true; }, 900);
  }, []);

  return (
    <div className="grid grid-cols-[260px_1fr_1fr] gap-8 xl:gap-16 items-start">
      {/* ── LEFT: Sticky nav ── */}
      <div className="sticky top-32 self-start">
        <p className="text-brand-slate/60 text-xs font-medium tracking-[0.18em] uppercase mb-5 px-4">
          Services
        </p>
        <ServicesNavigation
          services={SERVICES}
          activeId={activeId}
          onSelect={handleNavSelect}
        />
        <div className="mt-8 px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-brand-slate/50 text-[10px] tracking-wide">Progress</span>
            <span className="text-brand-gold text-[10px] font-semibold">
              {String(SERVICES.findIndex((s) => s.id === activeId) + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
            </span>
          </div>
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-gold rounded-full"
              animate={{
                width: `${((SERVICES.findIndex((s) => s.id === activeId) + 1) / SERVICES.length) * 100}%`,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>

      {/* ── CENTER: Sticky visual ── */}
      <div className="sticky top-32 self-start h-[520px]">
        <ServiceVisual activeId={activeId} />
      </div>

      {/* ── RIGHT: Scrollable content sections ── */}
      <div className="flex flex-col">
        {SERVICES.map((service, i) => (
          <div
            key={service.id}
            ref={(el) => { sectionRefs.current[service.id] = el; }}
            className={`py-14 ${i < SERVICES.length - 1 ? "border-b border-border" : ""}`}
          >
            <ServiceContent service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Exported section
───────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section id="services-detail" className="py-24 lg:py-32 bg-brand-cream-deep relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 1px at center, oklch(0.72 0.12 79 / 0.22) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="px-5 relative z-10">
        {/* Section header */}
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
              All Services
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>

          <h2
            className="font-heading font-light text-brand-navy leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Choose the Right{" "}
            <span className="italic text-gradient-gold">Coaching Path</span>
          </h2>

          <p className="text-brand-slate text-lg max-w-2xl mx-auto text-pretty">
            Every service is grounded in the same commitment: helping you move
            forward with clarity, confidence, and lasting impact.
          </p>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden lg:block">
          <DesktopServices />
        </div>

        {/* Mobile/tablet layout */}
        <div className="lg:hidden">
          <MobileServices />
        </div>
      </div>
    </section>
  );
}
