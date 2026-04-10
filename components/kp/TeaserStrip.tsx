"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

const items = [
  {
    title: "DJET",
    subtitle: "Pick-up & utilitaire",
    image: "/djet1.png",
    href: "#vehicules",
  },
  {
    title: "LATHAYE",
    subtitle: "Confort & robustesse",
    image: "/Lat3.png",
    href: "#vehicules",
  },
  {
    title: "Intérieurs",
    subtitle: "Finitions premium",
    image: "/intlat1.png",
    href: "#innovation",
  },
  {
    title: "Atelier",
    subtitle: "Savoir-faire local",
    image: "/garage2.jpg",
    href: "#marque",
  },
];

export function TeaserStrip() {
  return (
    <section
      id="vehicules"
      className="relative overflow-hidden border-t border-white/6 bg-black py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_10%,rgba(201,169,98,0.08),transparent_60%),radial-gradient(900px_520px_at_88%_70%,rgba(255,255,255,0.05),transparent_62%)]"
      />
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-kp-muted">
            La gamme
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-medium tracking-tight text-kp-accent md:text-5xl">
            Des véhicules conçus pour durer
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 md:mt-16">
        <div className="kp-hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:gap-6 md:px-10">
          {items.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 70} className="shrink-0 snap-center">
              <a
                href={item.href}
                className="group relative block w-[82vw] max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-kp-surface shadow-[0_26px_80px_-34px_rgba(0,0,0,0.9)] md:w-[min(32vw,420px)]"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition duration-[1.4s] ease-out group-hover:scale-105"
                    sizes="(max-width:768px) 82vw, 420px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-white md:text-3xl">
                    {item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 transition group-hover:gap-3">
                    En savoir plus
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
