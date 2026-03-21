import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./main.scss";

export const metadata: Metadata = {
	title: "Derick Moncado | Developer, Designer, and Creator",
	description: "Senior Frontend Engineer at Activision Microsoft, Designer, and Creator based in Los Angles. Videos on software engineering, tech, and lifestyle.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
