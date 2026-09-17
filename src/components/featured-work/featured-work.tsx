import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import styles from "./featured-work.module.scss";

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
							{project.thumbnail ? (
								<Image src={project.thumbnail} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className={styles["project-card__thumb-image"]} />
							) : (
								<div className={styles["project-card__thumb-placeholder"]} />
							)}
						</div>
						<div className={styles["project-card__meta"]}>
							<h3>{project.title}</h3>
							<p>{project.year ?? "Details coming soon"}</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
