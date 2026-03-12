"use client";

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
						<h1>@derickmoncado</h1>
						<p>Developer, Designer, and Content Creator</p>
					</div>
				</div>

				<div className={styles["links__content__links"]}>
					<a href="https://www.youtube.com/@derickmoncado" className={styles["links__content__links__youtube"]} target="_blank" rel="noopener noreferrer">
						Subscribe
					</a>
					<a href="https://www.threads.com/@derickmoncado.jpg" className={styles["links__content__links__threads"]} target="_blank" rel="noopener noreferrer">
						Follow
					</a>
					<a href="https://www.instagram.com/derickmoncado.jpg/" className={styles["links__content__links__instagram"]} target="_blank" rel="noopener noreferrer">
						Follow
					</a>
					<a href="https://www.linkedin.com/in/derickmoncado/" className={styles["links__content__links__linkedin"]} target="_blank" rel="noopener noreferrer">
						LinkedIn
					</a>
				</div>
			</div>
		</main>
	);
}
