import { BriefcaseBusiness, CodeXml } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "@/data/featured-work";
import styles from "./featured-work-grid.module.scss";

export default function FeaturedWorkGrid() {
	return (
		<section className={styles["featured-work"]}>
			<div className={styles["featured-work__heading"]}>
				<h2>
					Featured Work <BriefcaseBusiness aria-hidden="true" />
				</h2>
				<p>
					A selection of recent projects exploring <span>development</span>, <span>design</span>, and <span>implementation</span>
				</p>
			</div>
			<div className={styles["featured-work__body"]}>
				{featuredProjects
					.filter((project) => project.listingStatus !== "hidden")
					.map((project) =>
						project.listingStatus === "coming-soon" ? (
							<article key={project.slug} className={styles["project-card"]} data-coming-soon="true">
								<div className={styles["project-card__thumb"]} aria-hidden="true">
									<CodeXml />
								</div>
								<div className={styles["project-card__meta"]}>
									<h3>More coming soon</h3>
									<p>Work in progress</p>
								</div>
							</article>
						) : (
							<Link key={project.slug} href={`/featured-work/${project.slug}`} className={styles["project-card"]}>
								<div className={styles["project-card__thumb"]} aria-hidden="true">
									{project.thumbnail ? <Image src={project.thumbnail} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className={styles["project-card__thumb-image"]} /> : <div className={styles["project-card__thumb-placeholder"]} />}
								</div>
								<div className={styles["project-card__meta"]}>
									<h3>{project.title}</h3>
									<p>{project.year ?? "Details coming soon"}</p>
								</div>
							</Link>
						),
					)}
			</div>
		</section>
	);
}
