import Image from "next/image";
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

				<Image className={styles["moncadomedia__content__logo"]} src="/images/moncadomedia-logo.png" alt="Moncado Media" width={600} height={153} priority />
				<p>
					MoncadoMedia LLC owns and operates a small collection of internet businesses and ventures created by <Link href="/">Derick Moncado</Link>, spanning YouTube, eCommerce, and affiliate marketing. <br />
					<br />
					For partnerships, collabs, or inquiries, reach out at <a href="mailto:hello@derickmoncado.io">hello@derickmoncado.io</a>.
				</p>
			</div>
		</main>
	);
}
