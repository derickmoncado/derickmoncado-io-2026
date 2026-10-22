import type { PortfolioProject } from "./types";

export const mediaCenter: PortfolioProject = {
	slug: "6-media-center",
	title: "Activision Media Center",
	listingStatus: "published",
	year: "2026",
	liveUrl: "https://press.activision.com/",
	thumbnail: "/images/featured work/media-center/media-center-main.jpg",
	description: "A closer look at the Activision Media Center. This is the press site where all game assets can be downloaded.",
	heroImage: {
		src: "/images/featured work/media-center/media-center-main.jpg",
		alt: "Media Center project overview",
		width: 2000,
		height: 1601,
	},
	highlights: [
		{ stat: "01", heading: "My role", blurb: "Owner and lead developer reporting directly to marketing stakeholders" },
		{ stat: "02", heading: "The approach", blurb: "Worked closely with designers on expectations, functionality, and filtering" },
		{ stat: "03", heading: "The outcome", blurb: "A press site where users can download high-res franchise assets" },
	],
	sections: [
		{
			heading: "Project overview",
			text: "The entry point to the Activision Media Center - highlighting ATVI's 3 most popular and known gaming franchises",
			image: {
				src: "/images/featured work/media-center/media-center-main.jpg",
				alt: "Media Center project overview",
				width: 2000,
				height: 1601,
			},
		},
		{
			heading: "Selecting a franchise",
			text: "Once a gaming franchise is selected, users can choose which game title specifically they would like to browse and download assests for",
			image: {
				src: "/images/featured work/media-center/media-center-franchises-1.jpg",
				alt: "Media center franchises section",
				width: 2000,
				height: 2218,
			},
		},
		{
			heading: "The details page",
			text: "Here users can download high resolution images based on said game title, seasonal key art, and detailed brand guidlines",
			image: {
				src: "/images/featured work/media-center/media-center-landing-2.jpg",
				alt: "Media center landing page overview",
				width: 2000,
				height: 5127,
			},
		},
		{
			heading: "A closer look at the details page",
			text: "Depending on the game title, users can also snag typography, fonts, and seasonal logos based on how the seasonal content has progressed. This is updated every season",
			image: {
				src: "/images/featured work/media-center/media-center-landing-3.jpg",
				alt: "Media center landing page detail",
				width: 2000,
				height: 4337,
			},
		},
		{
			heading: "Filtering functionality",
			text: "The dropdown menus' let users filter by game, title, and assest type. This functionality is powered by JavaScript on the backend utilizing assets stored on a CDN",
			image: {
				src: "/images/featured work/media-center/media-center-filters-4.jpg",
				alt: "Media center filters section",
				width: 2000,
				height: 1003,
			},
		},
		{
			heading: "Refining the details",
			text: "Every assets tile launches a details modal pulling in data from the backend to let users know more about what they're getting including .zip file size",
			image: {
				src: "/images/featured work/media-center/media-center-carousel-5.jpg",
				alt: "Media center carousel section",
				width: 2000,
				height: 1494,
			},
		},
	],
};
