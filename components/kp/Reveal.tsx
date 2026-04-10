"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  /**
   * How much of the element must be visible before revealing.
   * Lower = reveals earlier.
   */
  threshold?: number;
  /** Expands/contracts the viewport box for earlier/later reveal. */
  rootMargin?: string;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.14,
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() === true;
  const [visible, setVisible] = useState(() => reduceMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduceMotion) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        io.unobserve(entry.target);
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={`transform-gpu transition-[transform,opacity,filter] duration-1050 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        visible
          ? "translate-y-0 opacity-100 blur-0 scale-100"
          : "translate-y-12 opacity-0 blur-sm scale-[0.985]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
