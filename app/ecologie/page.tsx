  import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/kp/Reveal";

export const metadata: Metadata = {
  title: "Écologie & environnement — KPANDJI Motors",
  description:
    "KPANDJI AUROMOBILES : actions concrètes pour réduire l’impact environnemental — ateliers responsables, gestion des fluides et motorisations optimisées.",
  alternates: {
    canonical: "/ecologie",
  },
  openGraph: {
    title: "Écologie & environnement — KPANDJI Motors",
    description:
      "Notre engagement pour la protection de l’environnement : pratiques d’atelier, sobriété énergétique et amélioration continue.",
    type: "website",
    locale: "fr_FR",
  },
};

const HERO_BACKDROP = "/hero/pic21.png";
const CTA_BACKDROP = "/garage2.jpg";

const btnPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/55";

const btnGhost =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/45 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/55";

const eyebrow =
  "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-400/95";

const stats = [
  { value: "4", label: "Axes d’engagement" },
  { value: "100%", label: "Ateliers sous contrôle" },
  { value: "SAV", label: "Fluides & déchets tracés" },
  { value: "+", label: "Efficacité au kilomètre" },
];

const marqueeValues = [
  "Ateliers responsables",
  "Gestion des fluides",
  "Motorisations optimisées",
  "Amélioration continue",
  "Territoires préservés",
  "Industrie automobile propre",
];

const initiatives = [
  {
    title: "Ateliers et sites sous contrôle",
    body:
      "Nos espaces de production et d’entretien sont organisés pour limiter les risques de dispersion : zones dédiées, rangement des produits et suivi des opérations afin de protéger les sols et les équipes.",
    image: "/garage2.jpg",
    alt: "Atelier KPANDJI : espace de travail structuré et propre",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="1.5" />
        <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
        <path d="M3 14h18" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Gestion responsable des fluides et déchets",
    body:
      "Huiles, solvants et déchets d’atelier font l’objet d’une collecte et d’une évacuation conformes aux bonnes pratiques, avec l’objectif de réduire l’empreinte locale de nos activités.",
    image: "/garage3.jpg",
    alt: "Zone d’atelier KPANDJI : maintenance et traitement maîtrisés",
    icon: (
      <>
        <path d="M12 2.5v5.5l3 2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M8.5 21h7M6 17.5c0-3.3 2.7-6 6-6s6 2.7 6 6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="8" r="5.5" />
      </>
    ),
  },
  {
    title: "Motorisations pensées pour l’usage réel",
    body:
      "Nous privilégions des chaînes de traction adaptées aux conditions de route et de charge en Afrique de l’Ouest, avec une recherche d’efficacité pour limiter la consommation et les émissions au kilomètre parcouru.",
    image: "/Interior_TA_4x4_Diesel_1_18ed005af5.jpg",
    alt: "Habitacle d’un véhicule KPANDJI : technologie et efficacité",
    icon: (
      <>
        <path d="M5 17h14l-1.5-5.5H6.5L5 17z" strokeLinejoin="round" />
        <path d="M7 11.5V9a5 5 0 0110 0v2.5" strokeLinecap="round" />
        <circle cx="8" cy="17" r="1.5" />
        <circle cx="16" cy="17" r="1.5" />
      </>
    ),
  },
  {
    title: "Amélioration continue",
    body:
      "La formation des techniciens, le choix des fournisseurs et l’optimisation des processus font partie d’un même effort : industrialiser proprement, sans relâcher la vigilance sur l’environnement de travail.",
    image: "/garage1.jpeg",
    alt: "Infrastructure KPANDJI : montage et contrôle qualité",
    icon: (
      <path
        d="M4 14c2-4 4-6 8-6s6 2 8 6M12 8V4M9 5l3-3 3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
] as const;

const principles = [
  {
    title: "Prévenir",
    body: "Organiser les ateliers et les flux pour éviter les incidents et la dispersion des produits.",
  },
  {
    title: "Réduire",
    body: "Optimiser consommation, déchets et émissions à chaque étape du cycle de vie du véhicule.",
  },
  {
    title: "Recycler",
    body: "Collecter et évacuer huiles, solvants et déchets selon les règles en vigueur.",
  },
];

export default function EcologiePage() {
  return (
    <div className="min-h-screen bg-kp-bg text-kp-accent">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section
        aria-label="Écologie & environnement — KPANDJI Motors"
        className="relative isolate flex min-h-[88svh] items-end overflow-hidden pt-[110px] md:min-h-[92svh] md:pt-[132px]"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={HERO_BACKDROP}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-emerald-950/50 via-black/55 to-black/95"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_15%_20%,rgba(52,211,153,0.22),transparent_58%),radial-gradient(800px_600px_at_85%_40%,rgba(201,169,98,0.14),transparent_55%),radial-gradient(900px_700px_at_50%_50%,transparent_50%,rgba(0,0,0,0.82)_100%)]"
        />
        <div
          aria-hidden
          className="kp-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.32] mix-blend-overlay"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-6 hidden lg:block"
        >
          <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-emerald-400/25" />
          <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-emerald-400/25" />
          <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-emerald-400/25" />
          <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-emerald-400/25" />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-emerald-300/70 [writing-mode:vertical-rl]">
              Environnement
            </span>
            <span className="h-24 w-px bg-linear-to-b from-emerald-400/70 via-emerald-400/25 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
          <Reveal from="bottom">
            <div className={eyebrow}>
              <span aria-hidden className="h-px w-10 bg-emerald-400/80 sm:w-16" />
              Engagement environnemental
            </div>
          </Reveal>

          <Reveal from="bottom" delayMs={120}>
            <h1 className="mt-5 max-w-[18ch] font-serif text-[clamp(2.2rem,6vw,5rem)] font-medium leading-[1.04] tracking-[-0.025em] text-white">
              <span className="block">Une démarche</span>
              <span className="block bg-linear-to-r from-white via-emerald-100/90 to-emerald-400/85 bg-clip-text text-transparent">
                active pour l’environnement
              </span>
            </h1>
          </Reveal>

          <Reveal from="bottom" delayMs={200}>
            <p className="mt-6 max-w-2xl font-sans text-[15px] leading-relaxed text-white/72 sm:text-[16px] md:text-[17px]">
              KPANDJI Motors ne se contente pas de promesses : nos équipes
              mettent en œuvre des gestes concrets sur le terrain — des ateliers
              aux choix techniques — pour réduire les impacts et préserver les
              territoires où nous opérons.
            </p>
          </Reveal>

          <Reveal from="bottom" delayMs={280}>
            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="#engagements" className={btnPrimary}>
                <span>Nos engagements</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  <path
                    d="M12 5v14M5 12l7 7 7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="/contact" className={btnGhost}>
                Nous contacter
              </Link>
            </div>
          </Reveal>

          <Reveal from="bottom" delayMs={420}>
            <div className="mt-14 hidden items-center gap-3 sm:flex">
              <span
                aria-hidden
                className="flex h-9 w-5 items-start justify-center rounded-full border border-emerald-400/30"
              >
                <span className="kp-scroll-dot mt-1.5 size-1 rounded-full bg-emerald-300/90" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
                Faire défiler
              </span>
            </div>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-white/8 bg-black/40 backdrop-blur-md md:block">
          <div className="mx-auto grid max-w-[1280px] grid-cols-4 px-8 lg:px-12">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`group relative flex flex-col gap-1 py-5 transition-colors duration-500 hover:bg-emerald-500/5 ${
                  i > 0 ? "border-l border-white/8 pl-6" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-emerald-400/80 via-emerald-400/35 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
                <span className="font-serif text-2xl font-medium tracking-tight text-white md:text-3xl">
                  {s.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile stats */}
      <section className="border-y border-white/8 bg-kp-surface md:hidden">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px bg-white/8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1 bg-kp-surface px-5 py-5"
            >
              <span className="font-serif text-2xl font-medium tracking-tight text-white">
                {s.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────── MANIFESTE / QUOTE ───────────────────── */}
      <section
        aria-labelledby="manifeste-heading"
        className="relative isolate overflow-hidden bg-kp-bg"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_10%_20%,rgba(52,211,153,0.10),transparent_60%),radial-gradient(700px_500px_at_90%_80%,rgba(201,169,98,0.08),transparent_55%)]"
        />

        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <Reveal from="bottom">
            <div className="mx-auto max-w-3xl text-center">
              <p className={eyebrow + " justify-center"}>
                <span aria-hidden className="h-px w-8 bg-emerald-400/60" />
                Notre conviction
                <span aria-hidden className="h-px w-8 bg-emerald-400/60" />
              </p>
              <h2
                id="manifeste-heading"
                className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-white"
              >
                L’industrie automobile a un rôle à jouer.
              </h2>
            </div>
          </Reveal>

          <Reveal from="bottom" delayMs={100}>
            <figure className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-kp-elevated/30 shadow-[0_32px_100px_-48px_rgba(0,0,0,0.95)] backdrop-blur-md md:mt-18">
              <div className="relative aspect-21/9 w-full min-h-[200px] bg-kp-elevated/50 md:min-h-[300px]">
                <Image
                  src={HERO_BACKDROP}
                  alt="KPANDJI : mobilité et engagement responsable"
                  fill
                  className="object-cover object-center transition-transform duration-1200 ease-out hover:scale-[1.03]"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-emerald-950/20"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/50 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-400/95">
                    De la conception au SAV
                  </p>
                  <p className="mt-2 max-w-2xl font-serif text-xl font-medium text-white md:text-2xl">
                    Chaque étape est l’occasion de limiter le gaspillage et de
                    renforcer la qualité durable de nos véhicules.
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal from="bottom" delayMs={160}>
            <figure className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-emerald-950/25 via-kp-elevated/40 to-kp-elevated/10 p-7 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md md:mt-16 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 font-serif text-[120px] leading-none text-emerald-400/12 sm:-right-4 sm:-top-2 sm:text-[160px]"
              >
                “
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/45 to-transparent"
              />
              <blockquote className="relative">
                <p className="font-serif text-lg italic leading-[1.55] text-white/90 md:text-2xl md:leading-[1.45]">
                  Protéger l’environnement de travail et les territoires où nous
                  sommes implantés, c’est une responsabilité industrielle — pas
                  un slogan.
                </p>
                <figcaption className="mt-6 flex items-center justify-center gap-3 md:justify-start">
                  <span aria-hidden className="h-px w-8 bg-emerald-400/70" />
                  <span className="text-[11px] uppercase tracking-[0.24em] text-white/60">
                    KPANDJI Motors — Côte d’Ivoire
                  </span>
                </figcaption>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── MARQUEE ───────────────────── */}
      <section
        aria-hidden
        className="relative overflow-hidden border-y border-white/8 bg-kp-surface py-7"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-kp-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-kp-surface to-transparent" />
        <div className="kp-marquee-eco flex w-max items-center gap-12 whitespace-nowrap text-white/55">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-12">
              {marqueeValues.map((v, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="flex items-center gap-12 font-serif text-2xl font-normal tracking-tight md:text-3xl"
                >
                  <span className="transition-colors duration-300 hover:text-emerald-300/90">
                    {v}
                  </span>
                  <span className="size-1.5 shrink-0 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.35)]" />
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes kp-marquee-eco {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .kp-marquee-eco {
            animation: kp-marquee-eco 36s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .kp-marquee-eco { animation: none; }
          }
        `}</style>
      </section>

      {/* ───────────────────── PRINCIPES (3 colonnes) ───────────────────── */}
      <section
        aria-labelledby="principes-heading"
        className="relative isolate overflow-hidden bg-kp-bg"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/40 to-transparent"
        />

        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <Reveal from="bottom">
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow + " justify-center"}>
                <span aria-hidden className="h-px w-8 bg-emerald-400/60" />
                Notre méthode
                <span aria-hidden className="h-px w-8 bg-emerald-400/60" />
              </p>
              <h2
                id="principes-heading"
                className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-white"
              >
                Prévenir, réduire, recycler.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-white/55 md:text-[15px]">
                Trois principes qui guident nos choix au quotidien, du montage à
                l’entretien en atelier.
              </p>
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
            {principles.map((p, i) => (
              <Reveal key={p.title} from="bottom" delayMs={i * 80}>
                <li className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-kp-elevated/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-400/25 hover:bg-kp-elevated/55 md:p-8">
                  <span className="font-serif text-4xl font-medium leading-none text-emerald-400/20 transition-colors duration-500 group-hover:text-emerald-400/35">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-normal text-white md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/60 md:text-[15px]">
                    {p.body}
                  </p>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-linear-to-r from-emerald-400/70 via-emerald-400/30 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                  />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────────── ENGAGEMENTS / INITIATIVES ───────────────────── */}
      <section
        id="engagements"
        aria-labelledby="engagements-heading"
        className="relative isolate overflow-hidden bg-kp-surface"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/45 to-transparent"
        />

        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <Reveal from="bottom">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
              <div className="max-w-2xl">
                <p className={eyebrow}>
                  <span aria-hidden className="h-px w-8 bg-emerald-400/60" />
                  Actions concrètes
                </p>
                <h2
                  id="engagements-heading"
                  className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-white"
                >
                  Quatre axes sur le terrain.
                </h2>
              </div>
              <p className="max-w-md text-[14px] leading-relaxed text-white/55 md:text-[15px]">
                De l’atelier à la motorisation : des pratiques mesurables, sans
                relâcher la vigilance sur l’environnement de travail.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-6 md:gap-5">
            {/* Featured initiative */}
            <Reveal from="bottom" className="md:col-span-3 md:row-span-2">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-kp-bg transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-400/30">
                <div className="absolute inset-0 -z-10">
                  <Image
                    src={initiatives[0].image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-45 transition-all duration-1000 group-hover:scale-[1.04] group-hover:opacity-55"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black via-black/75 to-black/35"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_320px_at_20%_30%,rgba(52,211,153,0.18),transparent_70%)]"
                  />
                </div>

                <div className="flex h-full min-h-[380px] flex-col p-7 md:min-h-[480px] md:p-10">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-500/10 text-emerald-400 transition-colors duration-500 group-hover:bg-emerald-500/15">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="size-5"
                    >
                      {initiatives[0].icon}
                    </svg>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-normal tracking-tight text-white md:text-3xl">
                    {initiatives[0].title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70 md:text-[16px]">
                    {initiatives[0].body}
                  </p>

                  <div className="mt-auto flex items-end justify-between pt-10">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-400/85">
                      <span>Axe 01</span>
                      <span aria-hidden className="h-px w-6 bg-current opacity-60" />
                    </span>
                    <span
                      aria-hidden
                      className="font-serif text-5xl font-medium leading-none text-white/8 md:text-6xl"
                    >
                      01
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>

            {initiatives.slice(1).map((item, idx) => {
              const i = idx + 1;
              return (
                <Reveal
                  key={item.title}
                  from="bottom"
                  delayMs={i * 60}
                  className="md:col-span-3"
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-kp-bg transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-400/25">
                    <div className="relative aspect-16/10 w-full overflow-hidden md:aspect-2/1">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent"
                      />
                      <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur-md">
                        <span className="size-1 rounded-full bg-emerald-400/95" />
                        Axe 0{i + 1}
                      </span>
                    </div>

                    <div className="relative flex flex-1 flex-col p-6 md:p-7">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-emerald-400/70 via-emerald-400/30 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                      />
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 transition-colors duration-500 group-hover:bg-emerald-500/15">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            className="size-5"
                          >
                            {item.icon}
                          </svg>
                        </div>
                        <span
                          aria-hidden
                          className="font-serif text-2xl font-medium leading-none text-white/12 transition-colors duration-500 group-hover:text-white/20"
                        >
                          0{i + 1}
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-normal tracking-tight text-white md:text-[22px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-white/60 md:text-[15px]">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────── GALERIE ATELIERS ───────────────────── */}
      <section
        aria-labelledby="terrain-heading"
        className="relative isolate overflow-hidden bg-kp-bg"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_500px_at_50%_0%,rgba(52,211,153,0.08),transparent_60%)]"
        />

        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <Reveal from="bottom">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
              <div className="max-w-2xl">
                <p className={eyebrow}>
                  <span aria-hidden className="h-px w-8 bg-emerald-400/60" />
                  Sur le terrain
                </p>
                <h2
                  id="terrain-heading"
                  className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-white"
                >
                  Nos ateliers en images.
                </h2>
              </div>
              <p className="max-w-md text-[14px] leading-relaxed text-white/55 md:text-[15px]">
                Des espaces structurés, où la qualité industrielle et la
                responsabilité environnementale vont de pair.
              </p>
            </div>
          </Reveal>

          <Reveal from="bottom" delayMs={120}>
            <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:grid-rows-2 md:gap-5">
              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-kp-elevated/40 md:col-span-2 md:row-span-2">
                <div className="relative aspect-16/10 w-full md:aspect-auto md:h-full md:min-h-[480px]">
                  <Image
                    src="/garage1.jpeg"
                    alt="Infrastructure KPANDJI — montage et contrôle qualité"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition-transform duration-1200 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent"
                  />
                  <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur-md">
                    <span className="size-1 rounded-full bg-emerald-400/95" />
                    01 — Production
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-400/95">
                      Montage & qualité
                    </p>
                    <p className="mt-2 font-serif text-2xl font-medium text-white md:text-3xl">
                      Industrialiser proprement
                    </p>
                  </figcaption>
                </div>
              </figure>

              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-kp-elevated/40">
                <div className="relative aspect-4/3 w-full md:aspect-auto md:h-full md:min-h-[230px]">
                  <Image
                    src="/garage2.jpg"
                    alt="Atelier KPANDJI — espace structuré"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1200 ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur-md">
                    <span className="size-1 rounded-full bg-emerald-400/95" />
                    02 — Atelier
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-serif text-lg font-medium text-white">
                      Zones dédiées
                    </p>
                  </figcaption>
                </div>
              </figure>

              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-kp-elevated/40">
                <div className="relative aspect-4/3 w-full md:aspect-auto md:h-full md:min-h-[230px]">
                  <Image
                    src="/garage3.jpg"
                    alt="Maintenance et traitement maîtrisés"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1200 ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur-md">
                    <span className="size-1 rounded-full bg-emerald-400/95" />
                    03 — SAV
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-serif text-lg font-medium text-white">
                      Fluides & déchets
                    </p>
                  </figcaption>
                </div>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── CTA ───────────────────── */}
      <section
        aria-labelledby="ecologie-cta"
        className="relative isolate overflow-hidden bg-kp-bg"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={CTA_BACKDROP}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-kp-bg via-kp-bg/88 to-kp-bg"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_50%_50%,rgba(52,211,153,0.14),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/45 to-transparent"
        />
        <div
          aria-hidden
          className="kp-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.2] mix-blend-overlay"
        />

        <div className="mx-auto max-w-[1100px] px-5 py-24 text-center sm:px-8 md:py-36 lg:px-12">
          <Reveal from="bottom">
            <div className="mx-auto flex w-full max-w-sm items-center gap-3">
              <span
                aria-hidden
                className="h-px flex-1 bg-linear-to-r from-transparent via-emerald-400/45 to-emerald-400/20"
              />
              <span
                aria-hidden
                className="size-1.5 shrink-0 rounded-full bg-emerald-400/95 shadow-[0_0_14px_rgba(52,211,153,0.4)]"
              />
              <span
                aria-hidden
                className="h-px flex-1 bg-linear-to-l from-transparent via-emerald-400/45 to-emerald-400/20"
              />
            </div>
          </Reveal>

          <Reveal from="bottom" delayMs={80}>
            <p className={eyebrow + " mt-7 justify-center"}>
              Partenariats & questions
            </p>
          </Reveal>

          <Reveal from="bottom" delayMs={140}>
            <h2
              id="ecologie-cta"
              className="mt-5 font-serif text-[clamp(2rem,4.8vw,3.5rem)] font-normal leading-[1.06] tracking-tight text-white"
            >
              Aller plus loin
              <br className="hidden sm:block" />
              <span className="bg-linear-to-r from-emerald-300 via-emerald-400/90 to-white/85 bg-clip-text text-transparent">
                {" "}ensemble
              </span>
            </h2>
          </Reveal>

          <Reveal from="bottom" delayMs={220}>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-[16px]">
              Vous souhaitez en savoir plus sur nos pratiques ou proposer un
              partenariat lié à l’environnement ? Écrivez-nous — nous vous
              répondrons avec attention.
            </p>
          </Reveal>

          <Reveal from="bottom" delayMs={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link href="/contact" className={btnPrimary}>
                <span>Nous contacter</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="/kpandji-automobiles" className={btnGhost}>
                L’entreprise
              </Link>
            </div>
          </Reveal>

          <Reveal from="bottom" delayMs={380}>
            <div className="mt-14 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-white/35 sm:flex-row sm:justify-center sm:gap-6">
              <span>Ateliers responsables</span>
              <span
                aria-hidden
                className="hidden size-1 rounded-full bg-emerald-400/40 sm:block"
              />
              <span>Côte d’Ivoire</span>
              <span
                aria-hidden
                className="hidden size-1 rounded-full bg-emerald-400/40 sm:block"
              />
              <span>Amélioration continue</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
