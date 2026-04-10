import DernierSortie from "@/components/kp/DernierSortie";
import { KpHero } from "@/components/kp/KpHero";
import Modeles from "@/components/kp/Modeles";
import Parala from "@/components/kp/Parala";
import { ServiceApresVente } from "@/components/kp/ServiceApresVente";
import Turn from "@/components/kp/Turn";


export default function Home() {
  return (
    <div className="min-h-screen bg-kp-bg">
      
      <main className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_18%_10%,rgba(201,169,98,0.08),transparent_60%),radial-gradient(900px_600px_at_82%_60%,rgba(255,255,255,0.04),transparent_62%)]"
        />
        <KpHero />
        <DernierSortie />
        <Modeles />
        <Parala />
        <ServiceApresVente />
        <Turn />
      </main>
      
    </div>
  );
}
