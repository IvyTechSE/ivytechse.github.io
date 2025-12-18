'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("reveal-ready");

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px 100px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [pathname]);

  return null;
}
