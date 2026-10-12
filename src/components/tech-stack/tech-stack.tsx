"use client";

import Image from "next/image";
import { useId } from "react";
import styles from "./tech-stack.module.scss";

export type TechStackIcon = {
	name: string;
	src: string;
};

export type TechStackProps = {
	icons: readonly TechStackIcon[];
	scrolling?: boolean;
	title?: string;
	className?: string;
};

export default function TechStack({ icons, scrolling = true, title = "My tech stack", className }: TechStackProps) {
	const headingId = `${useId()}-heading`;

	return (
		<section className={[styles["tech-stack"], !scrolling && styles["tech-stack--static"], className].filter(Boolean).join(" ")} aria-labelledby={headingId}>
			<div className={styles["tech-stack__heading"]}>
				<h3 id={headingId}>{title}</h3>
			</div>
			<div className={styles["tech-stack__marquee"]} tabIndex={scrolling ? 0 : undefined} role="region" aria-label="Technology logos">
				<div className={styles["tech-stack__track"]}>
					{/* Matching groups, including the trailing gap, keep the loop seamless. */}
					{(scrolling ? [false, true] : [false]).map((duplicate) => (
						<ul key={String(duplicate)} className={styles["tech-stack__logos"]} aria-hidden={duplicate || undefined}>
							{icons.map(({ name, src }) => (
								<li key={src} title={name}>
									<Image src={src} alt={duplicate ? "" : name} width={35} height={35} loading="eager" draggable={false} />
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
		</section>
	);
}
