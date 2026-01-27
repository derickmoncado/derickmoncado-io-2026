"use client";

import Link from "next/link";
import styles from "./page.module.scss";

export default function MyGear() {
	return (
		<section className={styles["my-gear"]}>
			<div className={styles["my-gear__content"]}>
				<div className={styles["my-gear__content__heading"]}>
					<h2>My Gear</h2>
					<p>
						Tech, products, tools, and software that <span>I use daily</span>
					</p>
				</div>

				<div className={styles["my-gear__content__links"]}>
					<Link className={styles["link"]} href="#">
						<div className={styles["link__inner"]}>
							<div className={styles["link__inner__image"]}>image here</div>
							<div className={styles["link__inner__details"]}>details here</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
