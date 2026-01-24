import type { Metadata } from "next";
import "./main.scss";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "React & Next.js Boilerplate - your page title goes here!",
	description: "This is your meta description",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{/* <Header /> */}
				<main>
					<div className={`${styles["main-body"]} container`}>
						<aside>
							<Navigation />
						</aside>
						<div className={styles["body-content"]}>{children}</div>
					</div>
				</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
