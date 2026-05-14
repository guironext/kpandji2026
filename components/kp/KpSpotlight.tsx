"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

export function KpSpotlight() {
  return (
    <section
      id="innovation"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/6 bg-[#070707]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_700px_at_20%_15%,rgba(201,169,98,0.10),transparent_60%),radial-gradient(900px_600px_at_85%_40%,rgba(255,255,255,0.04),transparent_62%)]"
      />
      <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-2">
        <div className="relative min-h-[56vh] lg:min-h-[85vh]">
          <Image
            src="/DjetInt6.png"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-transparent lg:from-black/50" />
          <div className="kp-grain pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 md:px-10 lg:py-24">
          <Reveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-kp-muted">
              Innovation
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-kp-accent md:text-5xl">
              Une cabine pensée pour le quotidien
            </h2>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-white/65 md:text-lg">
              Ergonomie, matériaux et équipements : chaque détail participe à un
              confort de route calme et maîtrisé, du premier kilomètre au long
              courrier.
            </p>
            <ul className="mt-10 space-y-4 font-sans text-sm text-white/75 md:text-base">
              {[
                "Instrumentation lisible, commandes à portée",
                "Habitacle spacieux et finitions soignées",
                "Solutions adaptées aux conditions locales",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-px w-8 shrink-0 bg-kp-gold/80" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
