"use client";

import { motion } from "framer-motion";
import { Calendar, Loader2 } from "lucide-react";
import { useCalendly } from "@/hooks/useCalendly";

/**
 * BookingButton
 * -------------
 * Drop-in CTA button. On click, lazily loads Calendly and opens
 * Calendly's own native popup — no custom modal wrapper.
 *
 * Props:
 *   children   — label (default: "Book a Free Consultation")
 *   variant    — "primary" | "gold" | "outline" | "ghost"
 *   size       — "sm" | "md" | "lg"
 *   showIcon   — boolean (default: true)
 *   fullWidth  — boolean
 *   className  — extra Tailwind classes
 */

const variants = {
  primary: "bg-brand-navy text-brand-cream hover:bg-brand-navy-light shadow-premium",
  gold:    "bg-brand-gold text-brand-navy hover:bg-brand-gold-light shadow-gold font-semibold",
  outline: "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-cream",
  ghost:   "border border-white/25 text-white/80 hover:border-white/50 hover:text-white",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm gap-2",
  md: "px-7 py-3.5 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-3",
};

export default function BookingButton({
  children = "Book a Free Consultation",
  variant = "primary",
  size = "md",
  showIcon = true,
  fullWidth = false,
  className = "",
}) {
  const { isLoading, openCalendly } = useCalendly();

  return (
    <motion.button
      onClick={openCalendly}
      disabled={isLoading}
      whileHover={isLoading ? {} : { scale: 1.02, y: -2 }}
      whileTap={isLoading ? {} : { scale: 0.97 }}
      className={[
        "inline-flex items-center justify-center rounded-full font-medium",
        "transition-all duration-300 focus:outline-none",
        "focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2",
        "disabled:opacity-70 disabled:cursor-wait",
        variants[variant] ?? variants.primary,
        sizes[size] ?? sizes.md,
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={isLoading ? "Loading booking calendar…" : String(children)}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
          Loading…
        </>
      ) : (
        <>
          {showIcon && <Calendar className="w-4 h-4 shrink-0" />}
          {children}
        </>
      )}
    </motion.button>
  );
}
