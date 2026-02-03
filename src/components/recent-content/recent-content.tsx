"use client";

import styles from "./recent-content.module.scss";

export default function RecentContent() {
	return (
		<section className={styles["recent-content"]}>
			<div className={styles["recent-content__heading"]}>
				<h2>Recent Content</h2>
			</div>
			<div className={styles["recent-content__videos"]}>videos here from youtube api</div>
		</section>
	);
}
