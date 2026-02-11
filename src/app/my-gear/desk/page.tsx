"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { ChevronDown, ChevronLeft } from "lucide-react";

export default function DeskPage() {
	const router = useRouter();

	const handleBack = () => {
		if (window.history.length > 1) {
			router.back();
			return;
		}

		router.push("/my-gear");
	};

	return (
		<section className={styles["desk-setup"]}>
			<div className={styles["desk-setup__content"]}>
				<button className={styles["back-button"]} type="button" onClick={handleBack} aria-label="Go back">
					<ChevronLeft size={18} />
					Back
				</button>

				<div className={styles["desk-setup__content__heading"]}>
					<h2>Desk Setup</h2>
					<p>
						My WFH office space and <span>all the peripherals</span>
					</p>
				</div>

				<div className={styles["desk-setup__content__accordions"]}>
					<div className={styles["accordion"]}>
						<div className={styles["accordion__inner"]}>
							<div className={styles["accordion__inner__image"]}></div>
							<div className={styles["accordion__inner__details"]}>
								<h2>Desk</h2>
								<p>FlexiSpot L Shaped Standing Desk</p>
								<span className={styles["accordion__inner__details__last-updated"]}>Updated Jul 23rd 2026</span>
								<ChevronDown />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
