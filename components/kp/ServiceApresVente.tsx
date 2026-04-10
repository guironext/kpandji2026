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
		<>
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
				className="relative flex min-h-[min(58vh,620px)] flex-col justify-end overflow-hidden"
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
						<div className="relative h-full min-h-[min(58vh,620px)] w-full">
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
					<div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/92" />
					<div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_18%_22%,rgba(201,169,98,0.2),transparent_58%)]" />
					<div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_80%_60%,transparent_40%,rgba(0,0,0,0.65)_100%)]" />
					<div
						className="kp-grain absolute inset-0 opacity-[0.2] md:opacity-[0.26]"
						aria-hidden
					/>
				</div>

				<motion.div
					className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-12 pt-16 md:px-10 md:pb-20 md:pt-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
					variants={heroContentContainer}>
					<motion.p
						className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55 md:text-[11px]"
						variants={heroLine(reduce)}>
						KPANDJI Motors
					</motion.p>
					<motion.h1
						id="sav-title"
						className="mt-3 max-w-[18ch] font-serif text-[clamp(2.125rem,5.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white md:max-w-[22ch]"
						variants={heroLine(reduce)}>
						Service après vente
					</motion.h1>
					<motion.p
						className="mt-5 max-w-lg text-pretty text-[15px] leading-relaxed text-white/78 md:text-base"
						variants={heroLine(reduce)}>
						Un atelier équipé et des techniciens formés pour préserver performances,
						sécurité et valeur de votre véhicule.
					</motion.p>
					<motion.div
						className="mt-9 flex flex-wrap gap-3"
						variants={heroLine(reduce)}>
						<motion.a
							href="mailto:contact@kpandji.com?subject=Service%20apr%C3%A8s%20vente"
							className="inline-flex items-center justify-center rounded-full bg-kp-gold px-7 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-[#d4b56e]"
							whileHover={reduce ? undefined : { scale: 1.03 }}
							whileTap={reduce ? undefined : { scale: 0.98 }}>
							Contacter le S.A.V.
						</motion.a>
						<motion.a
							href="#sav-atelier"
							className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-7 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/10"
							whileHover={reduce ? undefined : { scale: 1.03 }}
							whileTap={reduce ? undefined : { scale: 0.98 }}>
							Découvrir l’atelier
						</motion.a>
					</motion.div>
				</motion.div>
			</section>

			<section
				className="border-y border-white/8 bg-kp-surface/40 px-5 py-10 md:px-10 md:py-12"
				aria-label="Axes du service après vente">
				<div className="mx-auto max-w-[1600px]">
					<motion.div
						className="mx-auto max-w-2xl text-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.35, margin: "0px 0px -8% 0px" }}
						variants={mastheadContainer}>
						<motion.p
							className="font-sans text-[10px] font-semibold uppercase tracking-[0.36em] text-kp-muted md:text-[11px]"
							variants={fadeUpItem(reduce)}>
							Notre engagement
						</motion.p>
						<motion.p
							className="mt-3 font-serif text-lg font-medium text-kp-accent md:text-xl"
							variants={fadeUpItem(reduce)}>
							Quatre piliers pour rouler l’esprit tranquille
						</motion.p>
					</motion.div>
					<motion.ul
						className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2, margin: "0px 0px -6% 0px" }}
						variants={pillarsContainer}>
						{pillars.map((pillar) => (
							<motion.li
								key={pillar.title}
								className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07] sm:p-5"
								variants={pillarItem(reduce)}>
								<div
									className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
									aria-hidden>
									<div className="absolute inset-0 bg-[radial-gradient(380px_220px_at_50%_0%,rgba(201,169,98,0.16),transparent_70%)]" />
								</div>
								<p className="relative font-serif text-sm font-medium tracking-[-0.01em] text-white/95">
									{pillar.title}
								</p>
								<p className="relative mt-2 text-pretty text-xs leading-relaxed text-kp-muted">
									{pillar.description}
								</p>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</section>

			<section
				id="sav-atelier"
				className="border-t border-white/8 bg-kp-bg px-5 py-14 md:px-10 md:py-20"
				aria-labelledby="sav-atelier-title">
				<div className="mx-auto max-w-[1600px]">
					<motion.div
						className="mx-auto max-w-2xl text-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.35, margin: "0px 0px -8% 0px" }}
						variants={mastheadContainer}>
						<motion.p
							className="font-sans text-[10px] font-semibold uppercase tracking-[0.36em] text-kp-muted md:text-[11px]"
							variants={fadeUpItem(reduce)}>
							Notre atelier
						</motion.p>
						<motion.h2
							id="sav-atelier-title"
							className="mt-3 font-serif text-xl font-medium text-kp-accent md:text-2xl"
							variants={fadeUpItem(reduce)}>
							Un espace dédié à l’entretien et à la qualité
						</motion.h2>
						<motion.p
							className="mt-3 text-pretty text-sm leading-relaxed text-kp-muted md:text-[15px]"
							variants={fadeUpItem(reduce)}>
							Réception, zone technique et contrôle : trois vues de nos installations
							pour vous assurer transparence et sérieux à chaque passage.
						</motion.p>
					</motion.div>

					<motion.ul
						className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.15, margin: "0px 0px -6% 0px" }}
						variants={pillarsContainer}>
						{garageImages.map((img) => (
							<motion.li
								key={img.src}
								className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-kp-surface/50 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
								variants={pillarItem(reduce)}>
								<Image
									src={img.src}
									alt={img.alt}
									fill
									sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
									className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
								/>
								<div
									className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent"
									aria-hidden
								/>
								<p className="absolute bottom-0 left-0 right-0 p-4 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95 md:p-5 md:text-xs">
									{img.caption}
								</p>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</section>
		</>
	);
}
