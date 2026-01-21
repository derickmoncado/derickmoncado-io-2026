"use client";

import styles from "./hero.module.scss";
import Link from "next/link";

export default function Hero() {
	return (
		<section className={styles["hero"]}>
			<div className="container">
				<div className={styles["hero__content"]}>
					<div className={styles["hero__content__details"]}>
						<div className={styles["hero__content__details__collab"]}></div>
						<div className={styles["hero__content__details__text"]}></div>
						<div className={styles["hero__content__details__ctas"]}></div>
					</div>

					<div className={styles["hero__content__image"]}>
						<div className={styles["hero__content__image__frame"]}></div>
					</div>
				</div>
			</div>
		</section>
	);
}
