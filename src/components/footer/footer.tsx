import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
	return (
		<footer className={`${styles["footer"]} container`}>
			<Link href="/moncadomedia">
				© 2026 <span>MoncadoMedia LLC</span>
			</Link>
		</footer>
	);
}
