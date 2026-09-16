import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import styles from "./featured-work.module.scss";

const projects = [
	{ slug: "project-1", title: "Project 1" },
	{ slug: "project-2", title: "Project 2" },
	{ slug: "project-3", title: "Project 3" },
	{ slug: "project-4", title: "Project 4" },
	{ slug: "project-5", title: "Project 5" },
] as const;

export default function FeaturedWork() {
	return (
		<section className={styles["featured-work"]}>
			<div className={styles["featured-work__heading"]}>
				<h2>
					Featured Work <BriefcaseBusiness aria-hidden="true" />
				</h2>
				<p>A selection of projects exploring development, design, and creativity. More details coming soon.</p>
			</div>
			<div className={styles["featured-work__body"]}>
				{projects.map((project) => (
					<Link key={project.slug} href={`/featured-work/${project.slug}`} className={styles["project-card"]}>
						<div className={styles["project-card__thumb"]} aria-hidden="true">
							<div className={styles["project-card__thumb-placeholder"]} />
						</div>
						<div className={styles["project-card__meta"]}>
							<h3>{project.title}</h3>
							<p>Details coming soon</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
