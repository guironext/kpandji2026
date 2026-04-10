import type { Metadata } from "next";
import Link from "next/link";
import { ContactPageDecor } from "@/components/kp/ContactPageDecor";
import { JobOfferForm } from "@/components/kp/JobOfferForm";
import { Reveal } from "@/components/kp/Reveal";

export const metadata: Metadata = {
  title: "Offres d’emploi — KPANDJI Motors",
  description:
    "Publiez une offre d’emploi ou rejoignez l’écosystème KPANDJI : transmettez votre annonce à notre équipe par formulaire.",
  alternates: {
    canonical: "/emplois",
  },
  openGraph: {
    title: "Offres d’emploi — KPANDJI Motors",
    description:
      "Diffusez une offre d’emploi auprès de KPANDJI Motors : formulaire structuré et envoi par e-mail.",
    type: "website",
    locale: "fr_FR",
  },
};

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
      aria-hidden>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export default function EmploisPage() {
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
        <ContactPageDecor />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-linear-to-r from-transparent via-kp-gold/55 to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-24 md:px-10 md:pb-32">
          <Reveal>
            <header className="mx-auto max-w-3xl text-center">
              <div className="flex flex-col items-center">
                <span
                  className="h-px w-32 bg-linear-to-r from-transparent via-kp-gold/90 to-transparent md:w-48"
                  aria-hidden
                />
                <p className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.42em] text-kp-muted md:text-[11px]">
                  Carrières & talents
                </p>
                <h1 className="mt-5 max-w-[20ch] font-serif text-[clamp(2.15rem,5.4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-kp-accent">
                  Offres d’emploi
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-pretty text-sm leading-relaxed text-white/50 md:text-[15px] md:leading-[1.65]">
                  Vous recrutez pour votre structure ou souhaitez valoriser un poste dans notre
                  réseau ? Déposez les éléments de votre annonce : notre équipe en prendra
                  connaissance.
                </p>
              </div>
            </header>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:items-start lg:gap-14 xl:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative lg:pl-8">
                  <div
                    aria-hidden
                    className="absolute left-0 top-2 hidden h-[calc(100%-0.5rem)] w-px bg-linear-to-b from-kp-gold/70 via-white/12 to-transparent lg:block"
                  />
                  <p className="text-center font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-white/40 lg:text-left">
                    À savoir
                  </p>
                  <ul className="mt-6 space-y-4 text-left text-[13px] leading-relaxed text-white/45">
                    <li className="rounded-2xl border border-white/[0.07] bg-kp-elevated/25 p-5 backdrop-blur-md">
                      <span className="font-medium text-kp-accent/90">
                        Envoi par messagerie
                      </span>
                      <span className="mt-2 block text-white/42">
                        Comme sur la page Contact, le bouton final ouvre votre client mail avec
                        un message prérempli que vous pouvez modifier avant envoi.
                      </span>
                    </li>
                    <li className="rounded-2xl border border-white/[0.07] bg-kp-elevated/25 p-5 backdrop-blur-md">
                      <span className="font-medium text-kp-accent/90">
                        Contenu utile
                      </span>
                      <span className="mt-2 block text-white/42">
                        Plus la description et le profil sont précis, plus nous pourrons traiter
                        votre demande efficacement.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 rounded-2xl border border-white/6 bg-black/25 p-5 backdrop-blur-sm md:p-6">
                    <p className="text-center font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35 lg:text-left">
                      Liens utiles
                    </p>
                    <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                      <li className="flex-1 sm:flex-none sm:min-w-[140px]">
                        <Link
                          href="/contact"
                          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-center text-[13px] font-medium text-white/70 transition-all duration-300 hover:border-kp-gold/35 hover:bg-kp-gold/10 hover:text-kp-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kp-gold/45 sm:justify-between sm:text-left">
                          <span>Contact</span>
                          <IconArrow className="hidden shrink-0 text-kp-gold/80 sm:block" />
                        </Link>
                      </li>
                      <li className="flex-1 sm:flex-none sm:min-w-[140px]">
                        <Link
                          href="/kpandji-automobiles"
                          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-center text-[13px] font-medium text-white/70 transition-all duration-300 hover:border-kp-gold/35 hover:bg-kp-gold/10 hover:text-kp-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kp-gold/45 sm:justify-between sm:text-left">
                          <span>KPANDJI</span>
                          <IconArrow className="hidden shrink-0 text-kp-gold/80 sm:block" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delayMs={100} rootMargin="0px 0px -6% 0px">
                <JobOfferForm />
              </Reveal>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
