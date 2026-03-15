"use client";

import { motion } from "framer-motion";

export default function ServicesNavigation({ services, activeId, onSelect }) {
  return (
    <nav aria-label="Services navigation" className="flex flex-col gap-1">
      {services.map((service) => {
        const isActive = service.id === activeId;
        const Icon = service.icon;

        return (
          <button
            key={service.id}
            onClick={() => onSelect(service.id)}
            className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-300 ${
              isActive
                ? "bg-brand-navy text-white shadow-premium"
                : "hover:bg-brand-cream-deep text-brand-slate hover:text-brand-navy"
            }`}
            aria-current={isActive ? "true" : undefined}
          >
            {/* Active indicator bar */}
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-brand-gold rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            )}

            {/* Number */}
            <span
              className={`shrink-0 text-[10px] font-semibold tracking-[0.15em] w-6 transition-colors duration-300 ${
                isActive ? "text-brand-gold" : "text-brand-slate/50 group-hover:text-brand-gold/70"
              }`}
            >
              {service.num}
            </span>

            {/* Icon */}
            <span
              className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? "bg-brand-gold/20"
                  : "bg-brand-cream-deep group-hover:bg-brand-gold/15"
              }`}
            >
              <Icon
                className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-brand-gold" : "text-brand-slate/60 group-hover:text-brand-gold"}`}
                strokeWidth={1.5}
              />
            </span>

            {/* Label */}
            <span className={`text-sm font-medium leading-tight ${isActive ? "text-white" : ""}`}>
              {service.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
