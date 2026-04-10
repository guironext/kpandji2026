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
    <div className="min-h-screen bg-kp-bg">
      <main className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_18%_10%,rgba(201,169,98,0.08),transparent_60%),radial-gradient(900px_600px_at_82%_60%,rgba(255,255,255,0.04),transparent_62%)]"
        />
        <VirtualShowroom />
      </main>
    </div>
  );
}
