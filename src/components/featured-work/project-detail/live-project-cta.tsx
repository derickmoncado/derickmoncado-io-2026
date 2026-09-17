import { ArrowUpRight } from "lucide-react";
import LiveProjectNote from "./live-project-note";
import styles from "./project-detail.module.scss";

export default function LiveProjectCta({ href, align = "left" }: { href: string; align?: "left" | "center" }) {
	return (
		<div className={styles["project-detail__live-actions"]} data-align={align}>
			<a href={href} className={styles["project-detail__live-link"]} target="_blank" rel="noopener noreferrer">
				View project live <ArrowUpRight aria-hidden="true" />
			</a>
			<LiveProjectNote />
		</div>
	);
}
