"use client";

import { Check, Download } from "lucide-react";
import { useState } from "react";
import styles from "./downloads.module.scss";

export default function Downloads() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitted(true);
	};

	return (
		<section className={styles["downloads"]} id="downloads">
			<div className={styles["downloads__content"]}>
				<div className={styles["downloads__content__heading"]}>
					<h2>Downloads</h2>
				</div>

				<div className={styles["downloads__content__form"]}>
					<p>
						Get my free <b>Software Engineer Resume Templates</b> below!—no spam, I promise
					</p>

					<form onSubmit={handleSubmit}>
						<input id="downloads-email" name="email" type="email" placeholder="Enter email" autoComplete="email" required />
						<button type="submit" className={isSubmitted ? styles["is-submitted"] : undefined}>
							<span className={styles["button-sizer"]} aria-hidden="true">
								Download
								<Download />
							</span>
							<span className={styles["button-content"]}>
								{isSubmitted ? "Sent!" : "Download"}
								{isSubmitted ? <Check /> : <Download />}
							</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
