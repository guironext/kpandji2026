import type { Metadata } from "next";
import VirtualShowroom from "../../components/kp/VirtualShowroom";

export const metadata: Metadata = {
  title: "Showroom — KPANDJI Motors",
  description:
    "Explorez la gamme KPANDJI comme dans un showroom virtuel : photos, points forts et fiches modèles.",
  alternates: {
    canonical: "/showroom",
  },
  openGraph: {
    title: "Showroom — KPANDJI Motors",
    description:
      "Découvrez nos modèles KPANDJI dans un showroom virtuel : visuels, highlights et fiches.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ShowroomPage() {
  return (
    <div className="min-h-screen bg-kp-bg text-white">
      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1100px_700px_at_14%_8%,rgba(201,169,98,0.10),transparent_60%),radial-gradient(900px_600px_at_86%_58%,rgba(255,255,255,0.05),transparent_62%),linear-gradient(to_bottom,rgba(0,0,0,0.10),transparent_30%,rgba(0,0,0,0.35))]"
        />

        <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-16">
          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
           

         
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-2 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
            />
            <div className="p-3 sm:p-5 lg:p-6">
              <VirtualShowroom />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
