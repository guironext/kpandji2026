import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/kp/Reveal";

export const metadata: Metadata = {
  title: "Écologie & environnement — KPANDJI Motors",
  description:
    "KPANDJI Motors : actions concrètes pour réduire l’impact environnemental — ateliers responsables, gestion des fluides et motorisations optimisées.",
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

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-kp-gold/35 bg-kp-gold/10 px-5 py-3.5 text-[13px] font-medium text-kp-accent transition-all duration-300 hover:border-kp-gold/50 hover:bg-kp-gold/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kp-gold/45";

const initiatives = [
  {
    title: "Ateliers et sites sous contrôle",
    body:
      "Nos espaces de production et d’entretien sont organisés pour limiter les risques de dispersion : zones dédiées, rangement des produits et suivi des opérations afin de protéger les sols et les équipes.",
    image: "/garage2.jpg",
    alt: "Atelier KPANDJI : espace de travail structuré et propre",
  },
  {
    title: "Gestion responsable des fluides et déchets",
    body:
      "Huiles, solvants et déchets d’atelier font l’objet d’une collecte et d’une évacuation conformes aux bonnes pratiques, avec l’objectif de réduire l’empreinte locale de nos activités.",
    image: "/garage3.jpg",
    alt: "Zone d’atelier KPANDJI : maintenance et traitement maîtrisés",
  },
  {
    title: "Motorisations pensées pour l’usage réel",
    body:
      "Nous privilégions des chaînes de traction adaptées aux conditions de route et de charge en Afrique de l’Ouest, avec une recherche d’efficacité pour limiter la consommation et les émissions au kilomètre parcouru.",
    image: "/Interior_TA_4x4_Diesel_1_18ed005af5.jpg",
    alt: "Habitacle d’un véhicule KPANDJI : technologie et efficacité",
  },
  {
    title: "Amélioration continue",
    body:
      "La formation des techniciens, le choix des fournisseurs et l’optimisation des processus font partie d’un même effort : industrialiser proprement, sans relâcher la vigilance sur l’environnement de travail.",
    image: "/garage1.jpeg",
    alt: "Infrastructure KPANDJI : montage et contrôle qualité",
  },
] as const;

export default function EcologiePage() {
  return (
    <div className="min-h-screen bg-kp-bg">
      <main className="relative overflow-hidden pt-[110px] md:pt-[132px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-kp-surface"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(880px_420px_at_10%_0%,rgba(34,197,94,0.12),transparent_55%),radial-gradient(820px_520px_at_90%_40%,rgba(201,169,98,0.12),transparent_55%),radial-gradient(700px_400px_at_50%_100%,rgba(255,255,255,0.04),transparent_50%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-size-[72px_72px]"
        />
        <div
          className="kp-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.09] mix-blend-overlay"
          aria-hidden
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-linear-to-r from-transparent via-emerald-400/35 to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 pb-24 md:px-10 md:pb-32">
          <Reveal>
            <header className="mx-auto max-w-3xl text-center">
              <span
                className="mx-auto block h-px w-32 bg-linear-to-r from-transparent via-emerald-400/70 to-transparent md:w-48"
                aria-hidden
              />
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-400/85">
                Environnement
              </p>
              <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.08] tracking-tight text-white">
                Une démarche active pour l’environnement
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/58 md:text-[16px]">
                KPANDJI Motors ne se contente pas de promesses : nos équipes
                mettent en œuvre des gestes concrets sur le terrain — des
                ateliers aux choix techniques — pour réduire les impacts et
                préserver l’environnement de travail et les territoires où nous
                opérons.
              </p>
            </header>
          </Reveal>

          <Reveal delayMs={100}>
            <figure className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-white/[0.07] bg-kp-elevated/30 shadow-[0_32px_100px_-48px_rgba(0,0,0,0.95)] backdrop-blur-md md:mt-18">
              <div className="relative aspect-21/9 w-full min-h-[200px] bg-kp-elevated/50 md:min-h-[280px]">
                <Image
                  src="/hero/pic21.png"
                  alt="KPANDJI : mobilité et engagement responsable"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-kp-bg/90 via-kp-bg/20 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-12 text-left md:px-10 md:pb-8">
                  <p className="text-[13px] font-medium text-white/90 md:text-[14px]">
                    L’industrie automobile a un rôle à jouer
                  </p>
                  <p className="mt-1 max-w-xl text-[12px] leading-relaxed text-white/55 md:text-[13px]">
                    Chaque étape — conception, assemblage, SAV — est l’occasion
                    de limiter le gaspillage et de renforcer la qualité durable
                    de nos véhicules.
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <div className="mt-16 space-y-14 md:mt-20 md:space-y-20">
            {initiatives.map((item, i) => (
              <Reveal key={item.title} delayMs={60 + i * 40}>
                <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-kp-elevated/25 shadow-[0_28px_90px_-44px_rgba(0,0,0,0.92)] ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-4/3 w-full bg-kp-elevated/50">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-serif text-2xl font-normal tracking-tight text-white md:text-[1.65rem]">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-[1.75] text-white/60 md:text-[16px]">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={120}>
            <section
              className="relative mx-auto mt-20 max-w-2xl overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-950/15 px-8 py-10 text-center shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)] backdrop-blur-md md:mt-24 md:px-12 md:py-12"
              aria-labelledby="ecologie-cta"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-emerald-500/10 blur-3xl"
              />
              <h2
                id="ecologie-cta"
                className="relative font-serif text-xl font-normal text-white md:text-2xl"
              >
                Aller plus loin ensemble
              </h2>
              <p className="relative mt-3 text-[14px] leading-relaxed text-white/55 md:text-[15px]">
                Vous souhaitez en savoir plus sur nos pratiques ou proposer un
                partenariat lié à l’environnement ? Écrivez-nous.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className={btnPrimary}>
                  Contact
                </Link>
                <Link
                  href="/kpandji-automobiles"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/4 px-5 py-3.5 text-[13px] font-medium text-white/70 transition-all duration-300 hover:border-white/18 hover:bg-white/8 hover:text-white/88 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kp-gold/45"
                >
                  L’entreprise
                </Link>
              </div>
            </section>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
