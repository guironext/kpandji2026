"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const easeOut = [0.22, 1, 0.36, 1] as const;

const mastheadContainer = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1, delayChildren: 0.06 },
	},
};

const fadeUpItem = (reduce: boolean) => ({
	hidden: reduce
		? { opacity: 1, y: 0 }
		: { opacity: 0, y: 26 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: reduce ? 0 : 0.85, ease: easeOut },
	},
});

const heroContentContainer = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.11, delayChildren: 0.2 },
	},
};

const heroLine = (reduce: boolean) => ({
	hidden: reduce
		? { opacity: 1, y: 0 }
		: { opacity: 0, y: 22 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: reduce ? 0 : 0.78, ease: easeOut },
	},
});

const pillarsContainer = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.06 },
	},
};

const pillarItem = (reduce: boolean) => ({
	hidden: reduce
		? { opacity: 1, y: 0, scale: 1 }
		: { opacity: 0, y: 18, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: reduce ? 0 : 0.65, ease: easeOut },
	},
});

const ornamentStagger = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.07, delayChildren: 0.02 },
	},
};

const ornamentLine = (reduce: boolean) => ({
	hidden: reduce
		? { scaleX: 1, opacity: 1 }
		: { scaleX: 0, opacity: 0 },
	visible: {
		scaleX: 1,
		opacity: 1,
		transition: { duration: reduce ? 0 : 0.65, ease: easeOut },
	},
});

const ornamentDot = (reduce: boolean) => ({
	hidden: reduce ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: { duration: reduce ? 0 : 0.42, ease: easeOut },
	},
});

const garageImages = [
	{
		src: "/garage1.jpeg",
		alt: "Atelier KPANDJI — espace d’entretien et de réparation",
		caption: "Réception & diagnostic",
	},
	{
		src: "/garage2.jpg",
		alt: "Atelier KPANDJI — zone technique",
		caption: "Zone technique",
	},
	{
		src: "/garage3.jpg",
		alt: "Atelier KPANDJI — service après vente",
		caption: "Contrôle qualité",
	},
] as const;

const pillars = [
	{
		title: "Diagnostic transparent",
		description: "Évaluation claire, devis détaillé et validation avant intervention.",
	},
	{
		title: "Pièces d’origine",
		description: "Qualité constructeur pour préserver fiabilité, sécurité et valeur.",
	},
	{
		title: "Techniciens qualifiés",
		description: "Procédures maîtrisées, outillage adapté et contrôle systématique.",
	},
	{
		title: "Suivi & garantie",
		description: "Traçabilité des opérations et conseils d’entretien personnalisés.",
	},
] as const;



export function ServiceApresVente() {
	const reduce = useReducedMotion() === true;
	const [main] = garageImages;

	return (
		<section id="marque" className="scroll-mt-28">
			<header className="relative mx-auto max-w-3xl px-5 pt-10 pb-8 text-center md:px-10 md:pt-14 md:pb-10">
				<div
					className="pointer-events-none absolute left-1/2 top-0 h-24 w-[min(100%,520px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,169,98,0.12),transparent_72%)]"
					aria-hidden
				/>
				<motion.div
					className="relative flex flex-col items-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35, margin: "0px 0px -10% 0px" }}
					variants={mastheadContainer}>
					<motion.div
						className="flex items-center gap-3"
						aria-hidden
						variants={ornamentStagger}>
						<motion.span
							className="block h-px w-10 origin-right bg-linear-to-r from-transparent to-kp-gold/70 md:w-14"
							variants={ornamentLine(reduce)}
						/>
						<motion.span
							className="size-1.5 rotate-45 rounded-[2px] bg-kp-gold/85"
							variants={ornamentDot(reduce)}
						/>
						<motion.span
							className="block h-px w-10 origin-left bg-linear-to-l from-transparent to-kp-gold/70 md:w-14"
							variants={ornamentLine(reduce)}
						/>
					</motion.div>
					<motion.p
						className="mt-7 font-sans text-[11px] font-semibold uppercase tracking-[0.38em] text-kp-muted"
						variants={fadeUpItem(reduce)}>
						Service après vente
					</motion.p>
					<motion.p
						className="mt-5 max-w-xl font-serif text-[clamp(1.25rem,3.2vw,1.65rem)] font-medium leading-snug tracking-[-0.02em] text-kp-accent"
						variants={fadeUpItem(reduce)}>
						Entretien, pièces d’origine et suivi personnalisé pour votre véhicule.
					</motion.p>
					<motion.p
						className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-kp-muted md:text-[15px]"
						variants={fadeUpItem(reduce)}>
						Notre équipe technique vous accompagne à chaque étape — diagnostic,
						réparation et conseil — avec les standards KPANDJI.
					</motion.p>
				</motion.div>
			</header>

			<section
				className="relative flex min-h-[min(64vh,700px)] flex-col justify-end overflow-hidden ring-1 ring-inset ring-white/10"
				aria-labelledby="sav-title">
				<div className="absolute inset-0 z-0">
					<motion.div
						className="absolute inset-0"
						initial={reduce ? { opacity: 1 } : { opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, amount: 0.2, margin: "0px 0px -12% 0px" }}
						transition={{
							duration: reduce ? 0 : 1.05,
							ease: easeOut,
						}}>
						<div className="relative h-full min-h-[min(64vh,700px)] w-full overflow-hidden">
							<Image
								src={main.src}
								alt=""
								fill
								priority
								sizes="100vw"
								className="object-cover object-center scale-105"
								aria-hidden
							/>
						</div>
					</motion.div>
					<div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/93" />
					<div className="absolute inset-0 bg-[radial-gradient(980px_520px_at_12%_18%,rgba(201,169,98,0.22),transparent_55%)]" />
					<div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_80%_60%,transparent_38%,rgba(0,0,0,0.72)_100%)]" />
					<div
						className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent"
						aria-hidden
					/>
					<div
						className="kp-grain absolute inset-0 opacity-[0.18] md:opacity-[0.22]"
						aria-hidden
					/>
				</div>

				<motion.div
					className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-14 pt-20 md:px-10 md:pb-24 md:pt-24"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
					variants={heroContentContainer}>
					<div className="max-w-2xl">
						<motion.div
							className="flex items-center gap-3"
							aria-hidden
							variants={heroLine(reduce)}>
							<span className="block h-px w-12 origin-right bg-linear-to-r from-transparent to-kp-gold/75 md:w-16" />
							<span className="size-1.5 rotate-45 rounded-[2px] bg-kp-gold/90 shadow-[0_0_12px_rgba(201,169,98,0.45)]" />
							<span className="block h-px w-12 origin-left bg-linear-to-l from-transparent to-kp-gold/75 md:w-16" />
						</motion.div>
						<motion.p
							className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.34em] text-white/60 md:text-[11px]"
							variants={heroLine(reduce)}>
							KPANDJI Motors
						</motion.p>
						<motion.h1
							id="sav-title"
							className="mt-3 max-w-[16ch] font-serif text-[clamp(2.25rem,5.8vw,3.65rem)] font-medium leading-[1.04] tracking-[-0.025em] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.35)] md:max-w-[20ch]"
							variants={heroLine(reduce)}>
							Service après vente
						</motion.h1>
						<motion.p
							className="mt-5 max-w-md text-pretty text-[15px] leading-[1.65] text-white/80 md:max-w-lg md:text-base md:leading-relaxed"
							variants={heroLine(reduce)}>
							Un atelier équipé et des techniciens formés pour préserver performances,
							sécurité et valeur de votre véhicule.
						</motion.p>
						<motion.div
							className="mt-10 flex flex-wrap gap-3 sm:gap-4"
							variants={heroLine(reduce)}>
							<motion.a
								href="mailto:contact@kpandji.com?subject=Service%20apr%C3%A8s%20vente"
								className="inline-flex min-h-11 min-w-44 items-center justify-center rounded-full bg-kp-gold px-8 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-black shadow-[0_12px_40px_-12px_rgba(201,169,98,0.55)] transition duration-300 hover:bg-[#d4b56e] hover:shadow-[0_16px_48px_-10px_rgba(201,169,98,0.5)]"
								whileHover={reduce ? undefined : { scale: 1.03 }}
								whileTap={reduce ? undefined : { scale: 0.98 }}>
								Contacter le S.A.V.
							</motion.a>
							<motion.a
								href="#sav-atelier"
								className="inline-flex min-h-11 min-w-44 items-center justify-center rounded-full border border-white/40 bg-white/[0.07] px-8 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition duration-300 hover:border-white/55 hover:bg-white/12"
								whileHover={reduce ? undefined : { scale: 1.03 }}
								whileTap={reduce ? undefined : { scale: 0.98 }}>
								Découvrir l’atelier
							</motion.a>
						</motion.div>
					</div>
				</motion.div>
			</section>

			<section
				className="relative overflow-hidden border-y border-white/8 bg-kp-surface/40 px-5 py-12 md:px-10 md:py-16"
				aria-label="Axes du service après vente">
				<div
					className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(201,169,98,0.07),transparent_58%)]"
					aria-hidden
				/>
				<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/12 to-transparent" aria-hidden />
				<div className="relative z-1 mx-auto max-w-[1600px]">
					<motion.div
						className="mx-auto max-w-2xl text-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.35, margin: "0px 0px -8% 0px" }}
						variants={mastheadContainer}>
						<motion.div
							className="flex items-center justify-center gap-3"
							aria-hidden
							variants={ornamentStagger}>
							<motion.span
								className="block h-px w-10 origin-right bg-linear-to-r from-transparent to-kp-gold/70 md:w-14"
								variants={ornamentLine(reduce)}
							/>
							<motion.span
								className="size-1.5 rotate-45 rounded-[2px] bg-kp-gold/85"
								variants={ornamentDot(reduce)}
							/>
							<motion.span
								className="block h-px w-10 origin-left bg-linear-to-l from-transparent to-kp-gold/70 md:w-14"
								variants={ornamentLine(reduce)}
							/>
						</motion.div>
						<motion.p
							className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.36em] text-kp-muted md:text-[11px]"
							variants={fadeUpItem(reduce)}>
							Notre engagement
						</motion.p>
						<motion.p
							className="mx-auto mt-4 max-w-[min(100%,22rem)] text-pretty font-serif text-[clamp(1.3rem,3.4vw,1.75rem)] font-medium leading-snug tracking-[-0.02em] text-kp-accent md:mt-5 md:max-w-[min(100%,26rem)]"
							variants={fadeUpItem(reduce)}>
							<span className="text-kp-gold/90">Quatre piliers</span>
							{" "}
							<span className="text-kp-accent/95">pour rouler l’esprit tranquille</span>
						</motion.p>
					</motion.div>
					<motion.ul
						className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:gap-5 lg:grid-cols-4"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2, margin: "0px 0px -6% 0px" }}
						variants={pillarsContainer}>
						{pillars.map((pillar, index) => (
							<motion.li
								key={pillar.title}
								className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-kp-elevated/50 p-4 shadow-[0_22px_56px_-32px_rgba(0,0,0,0.92)] ring-1 ring-white/5 backdrop-blur-md transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-kp-gold/30 hover:bg-kp-elevated/65 hover:shadow-[0_28px_64px_-28px_rgba(201,169,98,0.14)] focus-within:border-kp-gold/35 focus-within:ring-2 focus-within:ring-kp-gold/25 sm:p-5 md:p-6"
								variants={pillarItem(reduce)}>
								<div
									className="pointer-events-none absolute inset-0 opacity-[0.55] transition duration-300 group-hover:opacity-100"
									aria-hidden>
									<div className="absolute inset-0 bg-[radial-gradient(420px_240px_at_50%_-10%,rgba(201,169,98,0.14),transparent_72%)]" />
									<div className="absolute inset-0 bg-linear-to-b from-white/4 via-transparent to-transparent opacity-80" />
								</div>
								<div className="relative flex items-start justify-between gap-3">
									<div
										className="mt-1 h-px w-8 shrink-0 origin-left bg-linear-to-r from-kp-gold/75 to-transparent sm:w-9 md:w-11"
										aria-hidden
									/>
									<span className="font-sans text-[10px] font-semibold tabular-nums tracking-[0.22em] text-kp-gold/75 md:text-[11px]">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>
								<p className="relative mt-3 font-serif text-sm font-medium leading-snug tracking-[-0.015em] text-white/95 sm:mt-4 sm:text-[0.9375rem] md:text-base">
									{pillar.title}
								</p>
								<p className="relative mt-2 flex-1 text-pretty text-[11px] leading-relaxed text-kp-muted sm:text-xs md:mt-2.5 md:text-[13px] md:leading-relaxed">
									{pillar.description}
								</p>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</section>

			
		</section>
	);
}
