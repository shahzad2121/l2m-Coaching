"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "./services-data";

/**
 * ServiceVisual
 * ------------
 * Receives the active service id, looks up the image from SERVICES data,
 * and displays it with a smooth cross-fade + subtle scale transition.
 *
 * Image source comes entirely from services-data.js → service.image.src
 * so swapping to a CMS or API response only requires updating that field.
 */
export default function ServiceVisual({ activeId }) {
  const service = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];
  const { src, alt } = service.image;

  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Outer card — fixed chrome, never re-mounts */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden border border-border shadow-premium bg-brand-cream-deep">

        {/* Image cross-fade — only the inner content animates */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center"
              priority={service.num === "01"}
            />

            {/* Gradient overlay — keeps tag readable */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Service tag — positioned over the gradient */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tag-${activeId}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-5 left-5 right-5 flex items-end justify-between"
          >
            <div>
              <p className="text-brand-gold text-[10px] font-medium tracking-[0.2em] uppercase mb-1">
                {service.num} of {SERVICES.length}
              </p>
              <p className="text-white font-heading text-lg font-semibold leading-snug drop-shadow">
                {service.label}
              </p>
            </div>

            <span className="shrink-0 text-[10px] font-semibold px-3 py-1.5 rounded-full bg-brand-gold text-brand-navy shadow-gold">
              {service.tag}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Fallback placeholder — only visible when image fails to load (e.g. missing local file) */}
        <div
          className="absolute inset-0 -z-10 flex flex-col items-center justify-center gap-3 bg-brand-cream-deep"
          aria-hidden="true"
        >
          <div className="relative z-10 flex flex-col items-center gap-3">
            {(() => {
              const Icon = service.icon;
              return (
                <div className="w-16 h-16 rounded-2xl bg-brand-navy/10 border border-brand-navy/15 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-brand-navy/40" strokeWidth={1.5} />
                </div>
              );
            })()}
            <p className="text-brand-slate/50 text-xs tracking-widest uppercase">
              Image
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
