"use client";

import { useEffect, useRef, useState } from "react";

export function KpHero() {
	const wrapRef = useRef<HTMLDivElement>(null);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const el = wrapRef.current;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const h = rect.height || 1;
			const p = Math.min(1, Math.max(0, -rect.top / (h * 0.65)));
			setProgress(p);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scale = 1 + progress * 0.06;
	const y = progress * 48;
	const dim = 0.35 + progress * 0.35;

	return (
		<section
			id="accueil"
			ref={wrapRef}
			className="relative flex min-h-svh flex-col justify-end overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div
					className="absolute inset-0 origin-center will-change-transform"
					style={{
						transform: `scale(${scale}) translate3d(0, ${y}px, 0)`,
						transition: "transform 0.1s linear",
					}}>
					<video
						className="h-full w-full object-cover"
						autoPlay
						muted
						loop
						playsInline>
						<source src="/video.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="pointer-events-none absolute inset-0 h-full w-full" style={{ opacity: dim }}>
					{/* Cinematic overlay stack: vignette + highlight + legibility fades */}
					<div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/15 to-black/95" />
					<div className="absolute inset-0 bg-[radial-gradient(1200px_520px_at_22%_18%,rgba(201,169,98,0.18),transparent_62%)]" />
					<div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_50%,transparent_55%,rgba(0,0,0,0.78)_100%)]" />
					<div className="kp-grain absolute inset-0 opacity-[0.28] md:opacity-[0.33]" />
				</div>
			</div>

			<div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-32 md:px-10 md:pb-24">
				<p
					className="kp-hero-reveal kp-hero-delay-1 mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70 md:text-xs">
					KPANDJI — Constructeur automobile
				</p>
				<h1 className="max-w-[18ch] font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
					<span className="kp-hero-reveal kp-hero-delay-2 block">
						La force d&apos;une racine,
					</span>
					<span className="kp-hero-reveal kp-hero-delay-3 block text-white/90">
						L&apos;élan d&apos;une Nation
					</span>
				</h1>
				<p
					className="kp-hero-reveal kp-hero-delay-4 mt-6 max-w-xl font-sans text-base leading-relaxed text-white/75 md:text-lg">
					Ingénierie, assemblage et mobilité durable — une signature africaine
					pour des véhicules pensés pour exiger le meilleur.
				</p>
				<div className="mt-10 flex flex-wrap items-center gap-4">
					<a
						href="#vehicules"
						className="kp-hero-reveal kp-hero-delay-5 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-black transition duration-300 ease-out hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]">
						Découvrir Nos Véhicules
					</a>
					<a
						href="#marque"
						className="kp-hero-reveal kp-hero-delay-6 inline-flex items-center justify-center rounded-full border border-white/35 px-8 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 ease-out hover:scale-[1.02] hover:border-white/60 hover:bg-white/5 active:scale-[0.98]">
						La marque
					</a>
				</div>
			</div>

			<div className="kp-scroll-hint absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
				<span className="sr-only">Faire défiler</span>
				<div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/25 pt-2">
					<span className="kp-scroll-dot block h-2 w-1 rounded-full bg-white/80" />
				</div>
			</div>
		</section>
	);
}
