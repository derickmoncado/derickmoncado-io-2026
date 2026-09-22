import type { PortfolioProject } from "./types";

export const treyarchStudios: PortfolioProject = {
	slug: "4-treyarch",
	title: "Treyarch Studios Site",
	listingStatus: "published",
	year: "2026",
	liveUrl: "https://www.treyarch.com/",
	thumbnail: "/images/featured work/treyarch/treyarch-hero-1.jpg",
	description: "A closer look at the home base for Treyarch Studios",
	heroImage: {
		src: "/images/featured work/treyarch/treyarch-main.jpg",
		alt: "Treyarch Studios website",
		width: 2000,
		height: 9541,
	},
	highlights: [
		{ stat: "01", heading: "My role", blurb: "Designer and Lead Developer reporting directly to studio heads" },
		{ stat: "02", heading: "The approach", blurb: "A fresh and modern facelift for the long time Call of Duty developer's website" },
		{ stat: "03", heading: "The outcome", blurb: "A complete refresh to Treyarch's primary site with editable components for content authors" },
	],
	sections: [
		{
			heading: "Above the fold",
			text: "A clean hero section with a background video element and fallback static asset for slow internet connections",
			image: {
				src: "/images/featured work/treyarch/treyarch-hero-1.jpg",
				alt: "Treyarch Studios hero section",
				width: 2000,
				height: 1187,
			},
		},
		{
			heading: "Mission critical",
			text: "An image mosiac featuring a call to action emphasizing the studio's dedication to crafting truly memorable gaming experiences",
			image: {
				src: "/images/featured work/treyarch/treyarch-ourmission-3.jpg",
				alt: "Treyarch Studios our mission section",
				width: 2000,
				height: 1424,
			},
		},
		{
			heading: "Studio values",
			text: "An animation heavy hover section emphasizing each of the studio's values each with their own CTA to another landing page",
			image: {
				src: "/images/featured work/treyarch/treyarch-values-2.jpg",
				alt: "Treyarch Studios values section",
				width: 2000,
				height: 1430,
			},
		},
		{
			heading: "The studio blog",
			text: "An aggregation component that dynamically pulls in the 3 latest articles from the studio's official blog page",
			image: {
				src: "/images/featured work/treyarch/treyarch-blog-4.jpg",
				alt: "Treyarch Studios blog section",
				width: 2000,
				height: 1591,
			},
		},
		{
			heading: "Latest intel",
			text: "Another component that fetches the blog's latest featured article for users to read the latest news from the studio",
			image: {
				src: "/images/featured work/treyarch/treyarch-intel-5.jpg",
				alt: "Treyarch Studios intel section",
				width: 2000,
				height: 1243,
			},
		},
		{
			heading: "Our games",
			text: "A JavaScript powered carousel (Slick.js) that's accessible and showcases the portfolio of the studio's recently shipped titles",
			image: {
				src: "/images/featured work/treyarch/treyarch-games-6.jpg",
				alt: "Treyarch Studios games section",
				width: 2000,
				height: 1369,
			},
		},
		{
			heading: "Closing the experience",
			text: "A final call to action to recruit new industry talent and closing things out with a global site footer component",
			image: {
				src: "/images/featured work/treyarch/treyarch-footer-7.jpg",
				alt: "Treyarch Studios footer section",
				width: 2000,
				height: 1518,
			},
		},
	],
};
