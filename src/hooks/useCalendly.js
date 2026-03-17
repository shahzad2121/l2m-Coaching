"use client";

import { useState, useCallback, useRef } from "react";
import { CALENDLY_URL, CALENDLY_SCRIPT_URL, CALENDLY_CSS_URL } from "@/lib/calendly-config";

/**
 * useCalendly
 * -----------
 * Lazily loads Calendly script + CSS on first click, then opens
 * Calendly's own native popup modal via initPopupWidget.
 *
 * Calendly handles its own modal — centered, responsive, with backdrop
 * and close button. No custom modal wrapper needed.
 */
export function useCalendly() {
  const [isLoading, setIsLoading] = useState(false);
  const loaded = useRef(false);

  const loadAssets = useCallback(() => {
    return new Promise((resolve) => {
      if (loaded.current) {
        resolve();
        return;
      }

      // Inject CSS once
      if (!document.querySelector(`link[href="${CALENDLY_CSS_URL}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = CALENDLY_CSS_URL;
        document.head.appendChild(link);
      }

      // Already has script tag — mark loaded and resolve
      if (document.querySelector(`script[src="${CALENDLY_SCRIPT_URL}"]`)) {
        loaded.current = true;
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_URL;
      script.async = true;
      script.onload = () => {
        loaded.current = true;
        resolve();
      };
      script.onerror = () => resolve(); // fail silently, let Calendly handle it
      document.head.appendChild(script);
    });
  }, []);

  const openCalendly = useCallback(async () => {
    setIsLoading(true);
    await loadAssets();
    setIsLoading(false);

    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  }, [loadAssets]);

  return { isLoading, openCalendly };
}
