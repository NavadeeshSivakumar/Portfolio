import { useEffect } from "react";
import "./useScrollReveal.css";

/**
 * Reveals elements marked with data-reveal when they enter the viewport.
 * Attach the returned behavior to a container ref and mark its children
 * with data-reveal. The container itself may also have data-reveal.
 */
const useScrollReveal = (containerRef) => {
  useEffect(() => {
    const root = containerRef.current;

    if (!root) return;

    // Leave content visible when motion is reduced or the API is unavailable.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const targets = [];

    if (root.matches("[data-reveal]")) {
      targets.push(root);
    }

    targets.push(...root.querySelectorAll("[data-reveal]"));

    if (targets.length === 0) return;

    root.classList.add("reveal-enabled");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-enabled");
      targets.forEach((target) => target.classList.remove("is-visible"));
    };
  }, [containerRef]);
};

export default useScrollReveal;