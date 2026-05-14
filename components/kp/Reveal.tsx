"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import React from "react";

type RevealFrom = "bottom" | "top" | "left" | "right";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	delayMs?: number;
	/** Motion enters from this direction (hidden state offset). */
	from?: RevealFrom;
	/**
	 * How much of the element must be visible before revealing.
	 * Lower = reveals earlier.
	 */
	amount?: number;
	/** @deprecated Use `amount`. Kept for backward compatibility. */
	threshold?: number;
	/** Reveal only once (recommended for landing pages). */
	once?: boolean;
	/** Viewport margin for `whileInView` (IntersectionObserver rootMargin). */
	margin?: string;
	/** @deprecated Use `margin`. Kept for backward compatibility. */
	rootMargin?: string;
	/** Offset distance: subtle for dense layouts, lg for hero blocks. */
	distance?: "md" | "lg";
	/** Staggers direct children if true. */
	staggerChildren?: boolean;
	/** Stagger spacing between children in ms (only when staggerChildren is true). */
	staggerMs?: number;
};

const distancePx: Record<"md" | "lg", number> = { md: 22, lg: 40 };

export function Reveal({
	children,
	className = "",
	delayMs = 0,
	from = "bottom",
	amount = 0.14,
	threshold,
	once = true,
	margin,
	rootMargin,
	distance = "lg",
	staggerChildren = false,
	staggerMs = 70,
}: RevealProps) {
	const reduceMotion = useReducedMotion() === true;
	const resolvedAmount = typeof threshold === "number" ? threshold : amount;
	const resolvedMargin = rootMargin ?? margin;

	const d = distancePx[distance];
	const hiddenOffset =
		from === "bottom"
			? { x: 0, y: d }
			: from === "top"
				? { x: 0, y: -d }
				: from === "left"
					? { x: -d, y: 0 }
					: { x: d, y: 0 };

	const containerVariants: Variants = {
		hidden: {
			opacity: 0,
			...hiddenOffset,
			filter: "blur(10px)",
			scale: 0.992,
		},
		show: {
			opacity: 1,
			x: 0,
			y: 0,
			filter: "blur(0px)",
			scale: 1,
			transition: {
				duration: 0.85,
				ease: [0.22, 1, 0.36, 1],
				delay: delayMs / 1000,
				...(staggerChildren
					? {
							when: "beforeChildren",
							staggerChildren: Math.max(0, staggerMs) / 1000,
						}
					: null),
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
		show: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
		},
	};

	const content = staggerChildren
		? React.Children.toArray(children).map((child, idx) => (
				<motion.div key={idx} variants={itemVariants}>
					{child}
				</motion.div>
			))
		: children;

	return (
		<motion.div
			className={className}
			variants={containerVariants}
			initial={reduceMotion ? false : "hidden"}
			whileInView={reduceMotion ? undefined : "show"}
			viewport={{
				once,
				amount: resolvedAmount,
				...(resolvedMargin ? { margin: resolvedMargin } : null),
			}}
		>
			{content}
		</motion.div>
	);
}
