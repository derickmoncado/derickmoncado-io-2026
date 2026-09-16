import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import styles from "./project.module.scss";

type ProjectProps = {
	title: string;
};

export default function Project({ title }: ProjectProps) {
	return (
		<section className={styles.project}>
			<div className={styles["project__back"]}>
				<Link href="/featured-work">
					<ChevronLeft aria-hidden="true" /> Back
				</Link>
			</div>
			<div className={styles["project__heading"]}>
				<h2>{title}</h2>
				<p>A closer look at the ideas, process, and details behind this project. More coming soon.</p>
			</div>
			<div className={styles["project__body"]} />
		</section>
	);
}
