import type { PortfolioProject } from "./types";

export const bo7LandingPage: PortfolioProject = {
	slug: "3-bo7-lp",
	title: "Call of Duty: Black Ops 7",
	listingStatus: "published",
	year: "2025",
	liveUrl: "https://www.callofduty.com/blackops7",
	thumbnail: "/images/featured work/bo7-LP/bo7-LP-hero-1.jpg",
	description: "A closer look at the Call of Duty: Black Ops 7 landing page.",
	heroImage: {
		src: "/images/featured work/bo7-LP/bo7-LP-main.jpg",
		alt: "Call of Duty: Black Ops 7 landing page",
		width: 2000,
		height: 9238,
	},
	highlights: [
		{ stat: "01", heading: "My role", blurb: "Owner and lead developer reporting directly to studio stakeholders" },
		{ stat: "02", heading: "The approach", blurb: "Developer a compelling landing page showcasing the AAA title" },
		{ stat: "03", heading: "The outcome", blurb: "A media landing page with dynamic components marketing the game" },
	],
	sections: [
		{
			heading: "Above the fold",
			text: "A video component with play/stop accessibility features and a static fallback asset for slower internet connections",
			image: {
				src: "/images/featured work/bo7-LP/bo7-LP-hero-1.jpg",
				alt: "Black Ops 7 hero section",
				width: 2000,
				height: 1310,
			},
		},
		{
			heading: "Vault Edition",
			text: "A perks grid featuring what gamers will get if they purchase the premium Vault Edition",
			image: {
				src: "/images/featured work/bo7-LP/bo7-LP-vaultedition-2.jpg",
				alt: "Black Ops 7 Vault Edition section",
				width: 2000,
				height: 1026,
			},
		},
		{
			heading: "Game modes",
			text: "Reusable image/text components highlighting the 3 main games modes of the title",
			image: {
				src: "/images/featured work/bo7-LP/bo7-LP-gamemodes-3.jpg",
				alt: "Black Ops 7 game modes section",
				width: 2000,
				height: 1831,
			},
		},
		{
			heading: "Progression and media gallery",
			text: "More re-usable media based components featuring rich key art, and video content served from a CDN",
			image: {
				src: "/images/featured work/bo7-LP/bo7-LP-progressionmediagallery-4.jpg",
				alt: "Black Ops 7 progression and media gallery section",
				width: 2000,
				height: 1974,
			},
		},
		{
			heading: "A call to action",
			text: "A global component and call to action to entice visitors to select an edition of the game to purchase, data comes from the backend",
			image: {
				src: "/images/featured work/bo7-LP/bo7-LP-getthegame-5.jpg",
				alt: "Black Ops 7 get the game section",
				width: 2000,
				height: 1300,
			},
		},
		{
			heading: "Closing the experience",
			text: "Closing things out with a component that dynamically fetches the 3 latest blog articles along with the site's global footer component",
			image: {
				src: "/images/featured work/bo7-LP/bo7-LP-footer-6.jpg",
				alt: "Black Ops 7 footer section",
				width: 2000,
				height: 1956,
			},
		},
	],
};
