import type { Metadata } from "next";
import "./globals.css";
import { KpHeader } from "@/components/kp/KpHeader";
import { KpFooter } from "@/components/kp/KpFooter";

export const metadata: Metadata = {
  title: "KPANDJI Motors — Constructeur automobile",
  description:
    "KPANDJI Motors conçoit, assemble et commercialise des véhicules. Ingénierie, qualité et mobilité durable.",
  applicationName: "KPANDJI Motors",
  metadataBase: new URL("https://kpandji.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KPANDJI Motors — Constructeur automobile",
    description:
      "Ingénierie automobile, assemblage et vente de véhicules neufs.",
    type: "website",
    siteName: "KPANDJI Motors",
    locale: "fr_FR",
  },
};

export const viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-kp-bg text-kp-accent"
        suppressHydrationWarning
      >
        <KpHeader />
        {children}
        <KpFooter />
      </body>
    </html>
  );
}
