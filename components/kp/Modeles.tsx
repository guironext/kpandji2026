"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

const MODELES = [
    {
		id: "djetranplus",
		name: "DJETRAN PLUS",
		description:
			"Moteur Turbo Diesel 2,5L, développant 136 chevaux (100 kW) avec un couple 340 Nm. Contrôle électrique Bosch, démarrage sans clé, camera panoramique 360° et système ABS + EBD. Allie économie de carburant, faible bruit et performances exceptionnelles à haute vitesse.",
		media: {
			topImage: "/models/plus/pic1.jpg",
			topVideo: "/video.mp4",
			bottomLeftImage: "/models/plus/plint2.jpg",
			bottomRightImage: "/models/plus/pic3.jpg",
		},
	},
	{
		id: "djetran",
		name: "DJETRAN",
		description:
			"Turbo Diesel 2,3L, développant 163 chevaux  avec un couple 340 Nm, offran puissance et souplesse pour la route comme le tout-terrain. Cockpit intelligent, caméra 360°, contrôle électronique de stabilité et ABS + EBD. Se distingue par sa puissance et sa transmission intégrale. Il offre aussi un haut niveau de sécurité et de confort technologique.",
		media: {
			topImage: "/models/djet/pic2.jpg",
			topVideo: "/video.mp4",
			bottomLeftImage: "/models/djet/pic1.jpg",
			bottomRightImage: "/models/djet/arriere3.jpg",
		},
	},
	{
		id: "lathaye",
		name: "LATHAYE",
		description:
			"Avec un moteur 2.0T GDI Turbo compressé de 165 Kw. Transmission automatique CVT à 8 vitesses pour une vitesse maximale de 210 km/h. C'est un véritable bilide qui redéfinit la performance à chaque voyage.",
		media: {
			topImage: "/models/lath/pic3.jpg",
			topVideo: "/video.mp4",
			bottomLeftImage: "/models/lath/pic4.jpg",
			bottomRightImage: "/models/lath/pic2.jpeg",
		},
	},
    
];

function MediaTile({
	src,
	alt,
	priority = false,
}: {
	src: string;
	alt: string;
	priority?: boolean;
}) {
	return (
		<div className="h-full w-full rounded-[22px] bg-kp-bg/80 p-1.5 ring-1 ring-white/6">
			<div className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)]">
				<Image
					src={src}
					alt={alt}
					fill
					priority={priority}
					sizes="(max-width: 768px) 100vw, 66vw"
					loading={priority ? "eager" : "lazy"}
					className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.02]"
				/>
				<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/35" />
				<div className="pointer-events-none absolute inset-0 ring-1 ring-white/6" />
			</div>
		</div>
	);
}

function ModeleRow({
	item,
	index,
}: {
	item: (typeof MODELES)[number];
	index: number;
}) {
	const flipped = index % 2 === 1;
	const isAboveFold = index < 2;

	return (
		<Reveal delayMs={index * 70} className="w-full">
			<div className="mx-auto max-w-[1600px] px-5 md:px-10">
				<Reveal>
					<header className="mx-auto max-w-2xl text-center">
						<div className="flex flex-col items-center">
							<span
								className="h-px w-28 bg-linear-to-r from-transparent via-kp-gold/90 to-transparent md:w-52"
								aria-hidden
							/>
							<p className="mt-6 font-sans text-[11px] font-semibold uppercase tracking-[0.38em] text-kp-muted">
								Retrouver notre modèle
							</p>
							<h2
								id="derniere-sortie-heading"
								className="mt-5 font-serif text-[clamp(1.875rem,4.8vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em] text-kp-accent">
								{item.name}
							</h2>
						</div>
					</header>
				</Reveal>
			</div>

			<section
				aria-label={`Modèle ${item.name}`}
				className="w-full border-t border-white/6 bg-kp-bg py-10 md:py-14 ">
				<div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
					<div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-5">
						{/* Left: 4/5 media */}
						<div
							className={`lg:col-span-4 ${flipped ? "lg:order-2" : "lg:order-1"}`}>
							<div className="grid h-full gap-4">
								{flipped ? (
									<>
										{/* Bottom side: 1/2 left, 1/2 right */}
										<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
											<div className="aspect-16/10">
												<MediaTile
													src={item.media.bottomLeftImage}
													alt={`${item.name} — intérieur`}
												/>
											</div>
											<div className="aspect-16/10">
												<MediaTile
													src={item.media.bottomRightImage}
													alt={`${item.name} — extérieur`}
												/>
											</div>
										</div>

										{/* Top side: image 1/3, video 2/3 */}
										<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:h-[360px] lg:h-[420px]">
											<div className="aspect-video md:col-span-1 md:aspect-auto md:h-full">
												<MediaTile
													src={item.media.topImage}
													alt={`${item.name} — visuel principal`}
													priority={isAboveFold}
												/>
											</div>

											<div className="aspect-video md:col-span-2 md:aspect-auto md:h-full">
												<div className="h-full w-full rounded-[22px] bg-kp-bg/80 p-1.5 ring-1 ring-white/6">
													<div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)]">
														<video
															className="h-full w-full object-cover"
															src={item.media.topVideo}
															autoPlay
															muted
															loop
															playsInline
															controls
															preload={index === 0 ? "auto" : "metadata"}
														/>
														<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/15 via-transparent to-black/40" />
														<div className="pointer-events-none absolute inset-0 ring-1 ring-white/6" />
													</div>
												</div>
											</div>
										</div>
									</>
								) : (
									<>
										{/* Top side: image 1/3, video 2/3 */}
										<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:h-[360px] lg:h-[420px]">
											<div className="aspect-video md:col-span-1 md:aspect-auto md:h-full">
												<MediaTile
													src={item.media.topImage}
													alt={`${item.name} — visuel principal`}
													priority={isAboveFold}
												/>
											</div>

											<div className="aspect-video md:col-span-2 md:aspect-auto md:h-full">
												<div className="h-full w-full rounded-[22px] bg-kp-bg/80 p-1.5 ring-1 ring-white/6">
													<div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)]">
														<video
															className="h-full w-full object-cover"
															src={item.media.topVideo}
															autoPlay
															muted
															loop
															playsInline
															controls
															preload={index === 0 ? "auto" : "metadata"}
														/>
														<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/15 via-transparent to-black/40" />
														<div className="pointer-events-none absolute inset-0 ring-1 ring-white/6" />
													</div>
												</div>
											</div>
										</div>

										{/* Bottom side: 1/2 left, 1/2 right */}
										<div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-3.5">
											<div className="aspect-16/10">
												<MediaTile
													src={item.media.bottomLeftImage}
													alt={`${item.name} — intérieur`}
												/>
											</div>
											<div className="aspect-16/10">
												<MediaTile
													src={item.media.bottomRightImage}
													alt={`${item.name} — extérieur`}
												/>
											</div>
										</div>
									</>
								)}
							</div>
						</div>

						{/* Right: 1/5 info */}
						<aside
							className={`lg:col-span-1 ${flipped ? "lg:order-1" : "lg:order-2"}`}>
							<div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-kp-elevated/60 p-6 shadow-[0_28px_90px_-38px_rgba(0,0,0,0.95)] ring-1 ring-white/5 backdrop-blur backdrop-brightness-100">
								<div
									aria-hidden
									className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_30%_18%,rgba(201,169,98,0.16),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_55%)]"
								/>
								<div
									aria-hidden
									className="kp-grain pointer-events-none absolute inset-0 opacity-[0.14]"
								/>

								<div className="relative">
									
									<h3 className="font-serif text-3xl font-medium leading-none tracking-[-0.02em] text-kp-accent">
										{item.name}
									</h3>
									
									<p className="mt-4 text-sm leading-relaxed text-kp-muted ">
										{item.description}
									</p>
									<button
										type="button"
										className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-kp-gold/45 bg-white/95 px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-950 shadow-[0_10px_26px_-14px_rgba(0,0,0,0.65)] transition duration-300 ease-out hover:scale-[1.02] hover:border-kp-gold/70 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kp-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-kp-bg active:scale-[0.98]">
										Voir Plus
									</button>
								</div>
								
							</div>
							
						</aside>
					</div>
				</div>
			</section>
		</Reveal>
	);
}

export default function Modeles() {
	return (
		<div aria-label="Modèles" className="w-full">
			{MODELES.map((item, index) => (
				<ModeleRow key={item.id} item={item} index={index} />
			))}
		</div>
	);
}
