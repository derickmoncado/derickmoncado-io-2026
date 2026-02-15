"use client";

import { Download } from "lucide-react";
import styles from "./contact-me.module.scss";

export default function ContactMe() {
	return (
		<section className={styles["contact-me"]}>
			<div className={styles["contact-me__content"]}>
				<div className={styles["contact-me__content__heading"]}>
					<h2>Contact Me</h2>
				</div>

				<div className={styles["contact-me__content__form"]}>
					<form>
						<input id="contact-me-email" name="email" type="email" placeholder="Enter email" autoComplete="email" required />
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
