"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import styles from "./about-me.module.scss";
import Link from "next/link";

export default function AboutMe() {
	return (
		<section className={styles["about-me"]}>
			<div className={styles["about-me__content"]}>
				<div className={styles["about-me__content__intro"]}>
					<h2>About Me</h2>
					<p>
						I'm Derick, a <span>designer-turned-developer</span> who's passionate about clean <span>code</span>, aesthetic <span>art</span>, gaming and great <span>design</span>.
					</p>
				</div>

				<div className={styles["about-me__content__blocks"]}>
					<div className={styles["about-me__content__blocks__block"]}>
						<p className={styles.stat}>12+</p>
						<p className={styles.heading}>Years of experince</p>
						<p className={styles.blurb}>From startups, to agencies, to freelance to Big Tech, I’ve done it all.</p>
					</div>

					<div className={styles["about-me__content__blocks__block"]}>
						<p className={styles.stat}>100+</p>
						<p className={styles.heading}>Projects completed</p>
						<p className={styles.blurb}>Websites, web apps, print design, packaging, flyers, videos... the list goes on.</p>
					</div>

					<div className={styles["about-me__content__blocks__block"]}>
						<p className={styles.stat}>1000s</p>
						<p className={styles.heading}>Lines of code written</p>
						<p className={styles.blurb}>Thousands would definitely be an understatement but who’s counting?</p>
					</div>
				</div>
			</div>
		</section>
	);
}
