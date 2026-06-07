import type { Metadata } from "next";
import Image from "next/image";

import Downloads from "@/components/downloads/downloads";
import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Downloads | Derick Moncado",
};

const resumeExamples = [
	{
		title: "Junior Resume Templates",
		images: [
			{
				src: "/images/resumes/junior_stanford-template_serif_preview.jpg",
				alt: "Junior Stanford Classic serif resume template preview",
				label: "Stanford Classic Serif",
			},
			{
				src: "/images/resumes/junior_clean-modern_serif_preview.jpg",
				alt: "Junior clean modern serif resume template preview",
				label: "Clean Modern Serif",
			},
			{
				src: "/images/resumes/junior_stanford-template_sans-serif_preview.jpg",
				alt: "Junior Stanford Classic sans-serif resume template preview",
				label: "Stanford Classic Sans Serif",
			},
			{
				src: "/images/resumes/junior_clean-modern_sans-serif_preview.jpg",
				alt: "Junior clean modern sans-serif resume template preview",
				label: "Clean Modern Sans Serif",
			},
		],
	},
	{
		title: "Senior Resume Templates",
		images: [
			{
				src: "/images/resumes/senior_stanford-template_serif_preview.jpg",
				alt: "Senior Stanford Classic serif resume template preview",
				label: "Stanford Classic Serif",
			},
			{
				src: "/images/resumes/senior_clean-modern_serif_preview.jpg",
				alt: "Senior clean modern serif resume template preview",
				label: "Clean Modern Serif",
			},
			{
				src: "/images/resumes/senior_stanford-template_sans-serif_preview.jpg",
				alt: "Senior Stanford Classic sans-serif resume template preview",
				label: "Stanford Classic Sans Serif",
			},
			{
				src: "/images/resumes/senior_clean-modern_sans-serif_preview.jpg",
				alt: "Senior clean modern sans-serif resume template preview",
				label: "Clean Modern Sans Serif",
			},
		],
	},
] as const;

export default function DownloadsPage() {
	return (
		<>
			<Downloads />

			<section className={styles["examples"]}>
				<h2>Examples</h2>
				<p>
					These are what you will get. All are <span>fully editable</span> and optimized for ATS scanners in job application systems like <em>Workday</em>. Download now with the form above!
				</p>

				{resumeExamples.map((group) => (
					<div className={styles["examples__group"]} key={group.title}>
						<p>{group.title}</p>

						<div className={styles["examples__grid"]}>
							{group.images.map((image) => (
								<figure className={styles["examples__card"]} key={image.src}>
									<Image src={image.src} alt={image.alt} width={2550} height={3300} quality={100} sizes="(width >= 1350px) 30vw, (width >= 768px) 45vw, 100vw" />
									<figcaption>{image.label}</figcaption>
								</figure>
							))}
						</div>
					</div>
				))}
			</section>
		</>
	);
}
