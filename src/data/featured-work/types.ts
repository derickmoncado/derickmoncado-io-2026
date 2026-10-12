import type { ReactNode } from "react";
import type { TechStackIcon } from "@/components/tech-stack/tech-stack";

export type ProjectImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type ProjectHighlight = {
	stat: string;
	heading: string;
	blurb: string;
};

export type ProjectSection = {
	heading: string;
	text: string;
	image?: ProjectImage;
};

export type PortfolioProject = {
	slug: string;
	title: string;
	/** Controls only the listing card; the project's detail route remains available. */
	listingStatus: "published" | "coming-soon" | "hidden";
	year?: string;
	thumbnail?: string;
	description: ReactNode;
	liveUrl?: string;
	heroImage?: ProjectImage;
	highlights: readonly ProjectHighlight[];
	/** Icons shown below this project's highlights. */
	techStack?: readonly TechStackIcon[];
	sections: readonly ProjectSection[];
};
