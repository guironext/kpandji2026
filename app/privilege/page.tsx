import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/kp/Reveal";

export const metadata: Metadata = {
  title: "Privilège — KPANDJI Motors",
  description:
    "Espace Privilège KPANDJI : avantages et services dédiés. Contenu en cours de préparation.",
  alternates: {
    canonical: "/privilege",
  },
  openGraph: {
    title: "Privilège — KPANDJI Motors",
    description:
      "Espace Privilège : contenu en cours de préparation. Revenez bientôt ou contactez-nous.",
    type: "website",
    locale: "fr_FR",
  },
};

function IconSpark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3.25" />
    </svg>
  );
}

function IconArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

const cardShell =
  "relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-white/[0.07] bg-kp-elevated/20 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md md:p-12";

const cardGlow =
  "pointer-events-none absolute -left-20 -top-20 size-48 rounded-full bg-kp-gold/12 blur-3xl";

const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-5 py-3.5 text-[13px] font-medium text-white/70 transition-all duration-300 hover:border-kp-gold/35 hover:bg-kp-gold/10 hover:text-kp-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kp-gold/45";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-kp-gold/35 bg-kp-gold/10 px-5 py-3.5 text-[13px] font-medium text-kp-accent transition-all duration-300 hover:border-kp-gold/50 hover:bg-kp-gold/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kp-gold/45";

export default function PrivilegePage() {
  return (
    <div className="min-h-screen bg-kp-bg">
      <main className="relative overflow-hidden pt-[110px] md:pt-[132px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-kp-surface"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(880px_460px_at_50%_-8%,rgba(201,169,98,0.18),transparent_55%),radial-gradient(720px_420px_at_8%_55%,rgba(201,169,98,0.08),transparent_50%),radial-gradient(640px_380px_at_92%_60%,rgba(255,255,255,0.05),transparent_52%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-size-[72px_72px]"
        />
        <div
          className="kp-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.1] mix-blend-overlay"
          aria-hidden
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-linear-to-r from-transparent via-kp-gold/55 to-transparent"
        />

        <div className="relative z-10 mx-auto flex min-h-[min(640px,calc(100dvh-200px))] max-w-[1600px] flex-col items-center justify-center px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <div className={cardShell}>
              <span className={cardGlow} aria-hidden />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-br from-kp-gold/6 via-transparent to-transparent"
              />

              <div className="relative flex flex-col items-center text-center">
                <span
                  className="flex size-14 items-center justify-center rounded-2xl border border-kp-gold/25 bg-kp-gold/10 text-kp-gold"
                  aria-hidden
                >
                  <IconSpark className="opacity-95" />
                </span>

                <span className="mt-8 h-px w-24 bg-linear-to-r from-transparent via-kp-gold/80 to-transparent md:w-32" />

                <p className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.42em] text-kp-muted md:text-[11px]">
                  KPANDJI Motors
                </p>

                <h1 className="mt-4 font-serif text-[clamp(2.25rem,5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-kp-accent">
                  Privilège
                </h1>

                <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-kp-gold/30 bg-kp-gold/[0.07] px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-kp-gold">
                  <span
                    className="size-1.5 rounded-full bg-kp-gold/90 shadow-[0_0_12px_rgba(201,169,98,0.65)]"
                    aria-hidden
                  />
                  Page en construction
                </p>

                <p className="mx-auto mt-8 max-w-[34ch] text-pretty text-sm leading-relaxed text-white/48 md:text-[15px] md:leading-[1.65]">
                  Nous préparons une expérience dédiée à nos clients et partenaires.
                  Revenez très bientôt, ou écrivez-nous pour toute demande prioritaire.
                </p>

                <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link href="/" className={btnPrimary}>
                    <span>Retour à l&apos;accueil</span>
                    <IconArrow className="text-kp-gold/90" />
                  </Link>
                  <Link href="/contact" className={btnSecondary}>
                    <span>Nous contacter</span>
                    <IconArrow className="text-kp-gold/70" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
