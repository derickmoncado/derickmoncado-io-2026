"use client";

import { ArrowRight } from "lucide-react";
import styles from "./page.module.scss";

export default function LinksPage() {
	return (
		<main className={styles["links"]}>
			<div className={styles["links__content"]}>
				<div className={styles["links__content__hero"]}>
					<div className={styles["links__content__hero__image"]}>
						<div className={styles["links__content__hero__image__frame"]}>
							<video className={styles["links__content__hero__image__video"]} autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1} disablePictureInPicture>
								<source src="/videos/hero-clip.mp4" />
							</video>
						</div>
					</div>
					<div className={styles["links__content__hero__headline"]}>
						<h2>@derickmoncado</h2>
						<p>Developer, Designer, and Content Creator</p>
					</div>
				</div>

				<div className={styles["links__content__body"]}>body here</div>
			</div>
		</main>
	);
}
