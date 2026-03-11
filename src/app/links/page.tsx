"use client";

import { ArrowRight } from "lucide-react";
import styles from "./page.module.scss";

export default function LinksPage() {
	return (
		<section className={styles["links"]}>
			<div className={styles["links__content"]}>
				<div className={styles["links__content__heading"]}>
					<h2>Links</h2>
					<p>photo and stuff here</p>
				</div>

				<div className={styles["links__content__body"]}>body here</div>
			</div>
		</section>
	);
}
