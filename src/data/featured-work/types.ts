import type { ReactNode } from "react";

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
	year?: string;
	thumbnail?: string;
	description: ReactNode;
	liveUrl?: string;
	heroImage?: ProjectImage;
	highlights: readonly ProjectHighlight[];
	sections: readonly ProjectSection[];
};
