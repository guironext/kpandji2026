import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/kp/Reveal";

export const metadata: Metadata = {
  title: "Kpandji Automobiles — KPANDJI Motors",
  description:
    "Découvrez KPANDJI Automobiles : notre histoire, notre vision et l’engagement d’une équipe au service de la mobilité en Côte d’Ivoire et en Afrique.",
  alternates: {
    canonical: "/kpandji-automobiles",
  },
  openGraph: {
    title: "Kpandji Automobiles — KPANDJI Motors",
    description:
      "L’entreprise derrière KPANDJI Motors : ingénierie, assemblage et service client.",
    type: "website",
    locale: "fr_FR",
  },
};

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-kp-gold/35 bg-kp-gold/10 px-5 py-3.5 text-[13px] font-medium text-kp-accent transition-all duration-300 hover:border-kp-gold/50 hover:bg-kp-gold/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kp-gold/45";

/** Placez la photo du fondateur sous public/kpandji/fondateur.jpg (recommandé : portrait, ratio 3/4). */
const FOUNDER_IMAGE = "/kpandji/fondateur.jpg";
const GARAGE_IMAGE = "/garage1.jpeg";

export default function KpandjiAutomobilesPage() {
  return (
    <div className="min-h-screen bg-kp-bg">
      <main className="relative overflow-hidden pt-[110px] md:pt-[132px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-kp-surface"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_480px_at_12%_0%,rgba(201,169,98,0.16),transparent_58%),radial-gradient(820px_520px_at_88%_45%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(700px_400px_at_50%_100%,rgba(201,169,98,0.05),transparent_50%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.28] bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-size-[72px_72px]"
        />
        <div
          className="kp-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.11] mix-blend-overlay"
          aria-hidden
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-linear-to-r from-transparent via-kp-gold/55 to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 pb-24 md:px-10 md:pb-32">
          <Reveal>
            <header className="mx-auto max-w-3xl text-center">
              <div className="flex flex-col items-center">
                <span
                  className="h-px w-32 bg-linear-to-r from-transparent via-kp-gold/90 to-transparent md:w-48"
                  aria-hidden
                />
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-kp-gold/90">
                  L’entreprise
                </p>
                <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.08] tracking-tight text-white">
                  Kpandji Automobiles
                </h1>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/58 md:text-[16px]">
                  Constructeur et distributeur engagé derrière la marque KPANDJI
                  Motors : concevoir des véhicules adaptés aux réalités locales,
                  avec une exigence de qualité et un service de proximité.
                </p>
              </div>
            </header>
          </Reveal>

          <Reveal delayMs={80}>
            <section
              className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start lg:gap-16"
              aria-labelledby="founder-heading"
            >
              <div className="relative mx-auto w-full max-w-[380px] lg:mx-0">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 rounded-[28px] bg-linear-to-br from-kp-gold/20 via-transparent to-white/4 opacity-80 blur-sm"
                />
                <figure className="relative overflow-hidden rounded-2xl border border-white/8 bg-kp-elevated/40 shadow-[0_28px_90px_-42px_rgba(0,0,0,0.95)] backdrop-blur-md">
                  <div className="relative aspect-3/4 w-full bg-kp-elevated/60">
                    <Image
                      src={FOUNDER_IMAGE}
                      alt="Portrait du fondateur de KPANDJI Automobiles"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 380px"
                      priority
                    />
                  </div>
                  <figcaption className="border-t border-white/6 px-5 py-4">
                    <p
                      id="founder-heading"
                      className="text-[13px] font-medium text-white/88"
                    >
                      Message du fondateur
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-white/45">
                      Une vision industrielle ancrée en Côte d’Ivoire, tournée
                      vers l’Afrique.
                    </p>
                  </figcaption>
                </figure>
              </div>

              <div className="space-y-10 text-[15px] leading-[1.75] text-white/62 md:text-[16px]">
                <div>
                  <h2 className="font-serif text-xl font-normal tracking-tight text-white md:text-2xl">
                    Notre histoire
                  </h2>
                  <p className="mt-4">
                    Kpandji Automobiles est née d’une conviction simple : la
                    mobilité doit être fiable, accessible et au service du
                    développement économique. En nous appuyant sur l’ingénierie,
                    l’assemblage et un réseau de partenaires exigeants, nous
                    bâtissons une offre automobile pensée pour les routes, les
                    usages et les attentes de nos clients.
                  </p>
                </div>
                <div>
                  <h2 className="font-serif text-xl font-normal tracking-tight text-white md:text-2xl">
                    Notre mission
                  </h2>
                  <p className="mt-4">
                    Proposer des véhicules robustes et modernes, accompagnés d’un
                    service après-vente et d’équipes commerciales à l’écoute.
                    Chaque étape — du showroom à l’entretien — reflète notre
                    engagement pour la transparence et la durabilité de la
                    relation client.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/7 bg-kp-elevated/25 p-6 backdrop-blur-sm md:p-8">
                  <p className="font-serif text-lg italic leading-relaxed text-white/78 md:text-xl">
                    « Nous investissons dans l’industrie automobile ici, avec des
                    équipes locales et une vision long terme : faire du groupe
                    KPANDJI un repère de confiance pour les particuliers comme
                    pour les professionnels. »
                  </p>
                </div>
                <div>
                  <h2 className="font-serif text-xl font-normal tracking-tight text-white md:text-2xl">
                    Nos engagements
                  </h2>
                  <ul className="mt-4 list-none space-y-3">
                    {[
                      "Qualité d’assemblage et de contrôle avant livraison",
                      "Réseau SAV et pièces pour assurer la longévité des véhicules",
                      "Proximité : équipes présentes pour conseiller et suivre chaque projet",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-white/62 before:mt-[0.55em] before:size-1.5 before:shrink-0 before:rounded-full before:bg-kp-gold/70 before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link href="/contact" className={btnPrimary}>
                    Nous contacter
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delayMs={120}>
            <section
              className="mt-20 lg:mt-24"
              aria-labelledby="garage-heading"
            >
              <figure className="overflow-hidden rounded-2xl border border-white/8 bg-kp-elevated/30 shadow-[0_28px_90px_-42px_rgba(0,0,0,0.95)] backdrop-blur-md">
                <div className="relative aspect-21/9 w-full min-h-[200px] bg-kp-elevated/50 sm:min-h-[260px]">
                  <Image
                    src={GARAGE_IMAGE}
                    alt="Installations KPANDJI — garage et atelier"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
                <figcaption className="border-t border-white/6 px-5 py-4 md:flex md:items-center md:justify-between md:gap-6 md:px-8 md:py-5">
                  <div>
                    <p
                      id="garage-heading"
                      className="text-[13px] font-medium text-white/88"
                    >
                      Nos installations
                    </p>
                    <p className="mt-1 max-w-2xl text-[12px] leading-relaxed text-white/45 md:text-[13px]">
                      Espaces d’accueil, atelier et suivi technique pour entretenir
                      votre véhicule dans les règles de l’art.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </section>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
