"use client";

import { Download } from "lucide-react";
import styles from "./downloads.module.scss";

export default function Downloads() {
	return (
		<section className={styles["downloads"]}>
			<div className={styles["downloads__content"]}>
				<div className={styles["downloads__content__heading"]}>
					<h2>Downloads</h2>
				</div>

				<div className={styles["downloads__content__form"]}>
					<p>
						Get my free <b>Software Engineer Resume Template</b> below!—no spam, I promise
					</p>

					<form>
						<input id="downloads-email" name="email" type="email" placeholder="Enter email" autoComplete="email" required />
						<button type="submit">
							Download
							<Download />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
