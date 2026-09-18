import type { PortfolioProject } from "./types";

export const shg: PortfolioProject = {
	slug: "2-shg",
	title: "Sledgehammer Games Studio Site",
	listingStatus: "published",
	year: "2026",
	liveUrl: "https://www.sledgehammergames.com/",
	thumbnail: "/images/featured work/shg/shg-hero-1.jpg",
	description: (
		<>
			The home base for Sledghammer Games, makers of <span>Call of Duty</span>
		</>
	),
	heroImage: {
		src: "/images/featured work/shg/shg-main.png",
		alt: "Sledgehammer Games studio website design",
		width: 3600,
		height: 22798,
	},
	highlights: [
		{ stat: "01", heading: "My role", blurb: "Owner, Designer, and lead developer reporting directly to studio heads" },
		{ stat: "02", heading: "The approach", blurb: "A modernized facelift to replace the old site from 2021" },
		{ stat: "03", heading: "The outcome", blurb: "A clean refresh that represents the studio's culture and energy" },
	],
	sections: [
		{
			heading: "Above the fold",
			text: "A bold, eye-catching hero featuring a full video background to draw in user's curiosity",
			image: {
				src: "/images/featured work/shg/shg-hero-1.jpg",
				alt: "Sledgehammer Games hero section",
				width: 2000,
				height: 1063,
			},
		},
		{
			heading: "Studio culture",
			text: "A 'who we are' section to emphasize studio culture, team dynamics, and overall vibe",
			image: {
				src: "/images/featured work/shg/shg-whoweare-2.jpg",
				alt: "Sledgehammer Games who we are section",
				width: 2000,
				height: 1274,
			},
		},
		{
			heading: "Remote or on-site",
			text: "A section representing a globally distributed and diverse team where talent is ever present",
			image: {
				src: "/images/featured work/shg/shg-aglobalteam-3.jpg",
				alt: "Sledgehammer Games global team section",
				width: 2000,
				height: 1450,
			},
		},
		{
			heading: "Our Games",
			text: "This 'rolladex' section showcasing some of the studio's exceptional work in game development that collapses when scrolled on",
			image: {
				src: "/images/featured work/shg/shg-ourgames-4.jpg",
				alt: "Sledgehammer Games our games section",
				width: 2000,
				height: 1118,
			},
		},
		{
			heading: "Clickable values",
			text: "This component showcases's the company culture with a snazzy horizontal expander powered by JavaScript and CSS",
			image: {
				src: "/images/featured work/shg/shg-ourvalues-5.jpg",
				alt: "Sledgehammer Games our values section",
				width: 2000,
				height: 1070,
			},
		},
		{
			heading: "Closing the experience",
			text: "This component features a talent call to action with footer and legal elements and a slick sledgehemmer graphic to close things out",
			image: {
				src: "/images/featured work/shg/shg-footer-6.jpg",
				alt: "Sledgehammer Games footer section",
				width: 2000,
				height: 1922,
			},
		},
	],
};
