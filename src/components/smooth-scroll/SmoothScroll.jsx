"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { lenisOptions } from "@/lib/lenis-config";

import "lenis/dist/lenis.css";

/**
 * Global smooth scroll provider using Lenis.
 * Initializes Lenis with options from lenis-config and cleans up on unmount.
 * Wrap the app (e.g. in layout) so all scrolling is smooth.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis(lenisOptions);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return children;
}
