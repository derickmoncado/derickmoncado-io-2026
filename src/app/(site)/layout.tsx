import Navigation from "@/components/navigation/navigation";
import styles from "../page.module.scss";

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<div className={`${styles["main-body"]} container`}>
				<aside>
					<Navigation />
				</aside>
				<div className={styles["body-content"]}>{children}</div>
			</div>
		</main>
	);
}
