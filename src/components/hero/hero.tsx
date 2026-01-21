"use client";

import styles from "./hero.module.scss";
import Link from "next/link";

export default function Hero() {
	return (
		<section className={styles["hero"]}>
			<div className={styles["hero__content"]}>
				<div className={styles["hero__content__details"]}>
					<div className={styles["hero__content__details__collab"]}>
						<p className={styles.status}>
							<span></span>Open to Collaborations
						</p>
						<p>As of February 2026</p>
					</div>
					<div className={styles["hero__content__details__text"]}></div>
					<div className={styles["hero__content__details__ctas"]}></div>
				</div>

				<div className={styles["hero__content__image"]}>
					<div className={styles["hero__content__image__frame"]}></div>
				</div>
			</div>
		</section>
	);
}
