"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeLux = [0.22, 1, 0.36, 1] as const;

export function ContactPageDecor() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 size-[min(100vw,420px)] rounded-full bg-kp-gold/10 blur-3xl md:-left-24 md:top-32 md:size-[480px]"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, 20, 0], x: [0, 12, 0], opacity: [0.55, 0.75, 0.55] }
        }
        transition={{
          duration: 11,
          ease: easeLux,
          repeat: reduceMotion ? 0 : Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-[38%] size-[min(110vw,520px)] rounded-full bg-white/7 blur-3xl md:-right-28 md:size-[540px]"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -18, 0], x: [0, -10, 0], opacity: [0.4, 0.6, 0.4] }
        }
        transition={{
          duration: 12.5,
          ease: easeLux,
          repeat: reduceMotion ? 0 : Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[min(50vh,380px)] w-[min(100%,720px)] -translate-x-1/2 translate-y-1/3 rounded-full bg-kp-gold/6 blur-3xl"
        animate={
          reduceMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.35, 0.5, 0.35] }
        }
        transition={{
          duration: 14,
          ease: easeLux,
          repeat: reduceMotion ? 0 : Infinity,
          repeatType: "mirror",
        }}
      />
    </>
  );
}
