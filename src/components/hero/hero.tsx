"use client";

import { ArrowUpRight, Mail } from "lucide-react";
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
					<div className={styles["hero__content__details__text"]}>
						<h1>Hey, I’m Derick</h1>
						<h2>Developer, Designer, and Content Creator</h2>
						<p>
							I’m based in Southern California and have over 12 years
							<br />
							experience in design, web, and application development
						</p>
					</div>
					<div className={styles["hero__content__details__ctas"]}>
						<Link href="https://www.youtube.com/@derickmoncado">
							Watch Me
							<ArrowUpRight />
						</Link>
						<Link href="">
							Contact Me
							<Mail />
						</Link>
					</div>
				</div>

				<div className={styles["hero__content__image"]}>
					<div className={styles["hero__content__image__frame"]}></div>
				</div>
			</div>
		</section>
	);
}
