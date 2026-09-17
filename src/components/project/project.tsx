import { ChevronLeft, ImageIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./project.module.scss";
import aboutStyles from "../about-me/about-me.module.scss";

const projectHighlights = [
	{ stat: "01", heading: "My role", blurb: "Owner, maintainer, and Developer as Senior Frontend Engineer @ Activision | Microsoft" },
	{ stat: "02", heading: "The approach", blurb: "Develope global components that can be updated regularly with seasonal content" },
	{ stat: "03", heading: "The outcome", blurb: "An evergreen batch of re-usable components that studios and stakeholders can update regularly" },
];

const projectDetails = [
	{ heading: "Exploring the details", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ipsum a justo tincidunt facilisis. Integer vitae neque sed velit consequat efficitur." },
	{ heading: "Bringing it together", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
	{ heading: "Refining the experience", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna quis sem malesuada tincidunt. Praesent at felis vitae urna consequat facilisis." },
	{ heading: "Looking ahead", text: "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur." },
];

type ProjectProps = {
	title: string;
	year?: string;
	description?: string;
	preview?: ReactNode;
};

export default function Project({ title, year, description = "A closer look at the ideas, process, and details behind this project. More coming soon.", preview }: ProjectProps) {
	return (
		<section className={styles.project}>
			<div className={styles["project__back"]}>
				<Link href="/featured-work">
					<ChevronLeft aria-hidden="true" /> Back
				</Link>
			</div>
			<div className={`${styles["project__intro"]}${preview ? ` ${styles["project__hero"]}` : ""}`}>
				<div className={styles["project__heading"]}>
					{year ? <span className={styles["project__year"]}>{year}</span> : null}
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				{preview ? (
					<div className={styles["project__visual"]}>
						<div className={styles["project__brace"]} aria-hidden="true">
							<span />
							<span />
						</div>
						{preview}
					</div>
				) : null}
			</div>
			<div className={styles["project__body"]}>
				<div className={`${aboutStyles["about-me__content__blocks"]} ${styles["project__highlights"]}`}>
					{projectHighlights.map((highlight) => (
						<div key={highlight.stat} className={aboutStyles["about-me__content__blocks__block"]}>
							<p className={aboutStyles.stat}>{highlight.stat}</p>
							<p className={aboutStyles.heading}>{highlight.heading}</p>
							<p className={aboutStyles.blurb}>{highlight.blurb}</p>
						</div>
					))}
				</div>
				<div className={styles["project__details"]}>
					{projectDetails.map((detail) => (
						<section key={detail.heading} className={styles["project__detail-row"]}>
							<div className={styles["project__detail-image"]}>
								<div className={styles["project__brace"]} aria-hidden="true">
									<span />
									<span />
								</div>
								<ImageIcon aria-hidden="true" />
								<span>Image placeholder</span>
							</div>
							<div className={styles["project__detail-copy"]}>
								<h3>{detail.heading}</h3>
								<p>{detail.text}</p>
							</div>
						</section>
					))}
				</div>
			</div>
		</section>
	);
}
