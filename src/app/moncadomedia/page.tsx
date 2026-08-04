import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import styles from "./page.module.scss";

export default function MoncadoMediaPage() {
	return (
		<main className={styles["moncadomedia"]}>
			<div className={styles["moncadomedia__content"]}>
				<div className={styles["moncadomedia__content__back"]}>
					<Link href="/">
						<ChevronLeft /> Back
					</Link>
				</div>

				<h1>moncadomedia</h1>
			</div>
		</main>
	);
}
