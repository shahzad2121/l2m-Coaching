"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function GoogleAnalytics({ gaId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  useEffect(() => {
    if (!gaId || typeof window.gtag !== "function") return;

    const qs = searchParams?.toString();
    const pagePath = qs ? `${pathname}?${qs}` : pathname;

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    window.gtag("config", gaId, { page_path: pagePath });
  }, [pathname, searchParams, gaId]);

  return null;
}
