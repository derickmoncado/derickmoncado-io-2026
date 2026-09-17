import { ChevronLeft, ImageIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { PortfolioProject } from "@/data/featured-work/types";
import ProjectImageLightbox from "./project-image-lightbox";
import LiveProjectCta from "./live-project-cta";
import styles from "./project-detail.module.scss";

type ProjectDetailPageProps = {
	project: PortfolioProject;
	/** Optional project-specific content after the standard sections. */
	children?: ReactNode;
};

function ImageDescriptionBrace() {
	return (
		<div className={styles["project-detail__brace"]} aria-hidden="true">
			<span />
			<span />
		</div>
	);
}

export default function ProjectDetailPage({ project, children }: ProjectDetailPageProps) {
	const { title, year, description, liveUrl, heroImage, highlights, sections } = project;

	return (
		<section className={styles["project-detail"]}>
			<div className={styles["project-detail__back"]}>
				<Link href="/featured-work">
					<ChevronLeft aria-hidden="true" /> Back
				</Link>
			</div>
			<div className={`${styles["project-detail__intro"]}${heroImage ? ` ${styles["project-detail__hero"]}` : ""}`}>
				<div className={styles["project-detail__heading"]}>
					{year ? <span className={styles["project-detail__year"]}>{year}</span> : null}
					<h2>{title}</h2>
					<p>{description}</p>
					{liveUrl ? <LiveProjectCta href={liveUrl} /> : null}
				</div>
				{heroImage ? (
					<div className={styles["project-detail__visual"]}>
						<ImageDescriptionBrace />
						<ProjectImageLightbox {...heroImage} />
					</div>
				) : null}
			</div>
			<div className={styles["project-detail__body"]}>
				{highlights.length > 0 ? (
					<div className={styles["project-detail__highlights"]}>
						{highlights.map((highlight) => (
							<div key={highlight.stat} className={styles["project-detail__highlight"]}>
								<p className={styles["project-detail__highlight-stat"]}>{highlight.stat}</p>
								<p className={styles["project-detail__highlight-heading"]}>{highlight.heading}</p>
								<p>{highlight.blurb}</p>
							</div>
						))}
					</div>
				) : null}
				{sections.length > 0 ? (
					<div className={styles["project-detail__sections"]}>
						{sections.map((section) => (
							<section key={section.heading} className={styles["project-detail__section"]}>
								<div className={styles["project-detail__section-visual"]} data-has-image={Boolean(section.image)}>
									<ImageDescriptionBrace />
									{section.image ? (
										<ProjectImageLightbox {...section.image} variant="section" />
									) : (
										<>
											<ImageIcon aria-hidden="true" />
											<span>Image placeholder</span>
										</>
									)}
								</div>
								<div className={styles["project-detail__section-copy"]}>
									<h3>{section.heading}</h3>
									<p>{section.text}</p>
								</div>
							</section>
						))}
					</div>
				) : null}
				{children}
				{liveUrl ? <LiveProjectCta href={liveUrl} align="center" /> : null}
			</div>
		</section>
	);
}
