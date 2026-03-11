"use client";

import { ArrowRight } from "lucide-react";
import styles from "./page.module.scss";

export default function DownloadsPage() {
	return (
		<section className={styles["downloads"]}>
			<div className={styles["downloads__content"]}>
				<div className={styles["downloads__content__heading"]}>
					<h2>Downloads</h2>
					<p>
						Choose which template to download below, either a clean and modern <span>sans-serif</span> style, or a classic and professional <span>serif</span>. Both also come in PDF format. Enjoy!
					</p>
				</div>

				<div className={styles["downloads__content__body"]}>resume buttons here</div>
			</div>
		</section>
	);
}
