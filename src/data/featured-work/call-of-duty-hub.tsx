import type { PortfolioProject } from "./types";

export const callOfDutyHub: PortfolioProject = {
	slug: "1-cod-hub",
	title: "Call of Duty Homepage",
	listingStatus: "published",
	year: "2026",
	liveUrl: "https://www.callofduty.com/",
	thumbnail: "/images/featured work/cod-hub/cod-hub-hero-1.jpg",
	description: (
		<>
			The entry point for the world&apos;s best selling first-person shooter: <span>Call of Duty</span>
		</>
	),
	heroImage: {
		src: "/images/featured work/cod-hub/cod-hub-main.jpg",
		alt: "Call of Duty Homepage",
		width: 2000,
		height: 6082,
	},
	highlights: [
		{ stat: "01", heading: "My role", blurb: "Owner, maintainer, and developer as Senior Frontend Engineer at Activision | Microsoft" },
		{ stat: "02", heading: "The approach", blurb: "Develop global components that can be updated regularly with seasonal content" },
		{ stat: "03", heading: "The outcome", blurb: "An evergreen batch of re-usable components that studios and stakeholders can update regularly" },
	],
	sections: [
		{
			heading: "Welcome, gamerz 🎮",
			text: "A global component to be used across any of the COD pages the features the key art, franchise logo, and a call to action",
			image: {
				src: "/images/featured work/cod-hub/cod-hub-hero-1.jpg",
				alt: "Call of Duty Hub hero section",
				width: 2000,
				height: 891,
			},
		},
		{
			heading: "Visuals that matter",
			text: "This reusable video component can house a local .mp4 file, YouTube embedd, or a CDN hosted video file if it's long with a large file size",
			image: {
				src: "/images/featured work/cod-hub/cod-hub-video-2.jpg",
				alt: "Call of Duty Hub video section",
				width: 2000,
				height: 878,
			},
		},
		{
			heading: "Call to action",
			text: "This simple component serves as a mid-roll call to action to entice users to order the premium Vault Edition of the game",
			image: {
				src: "/images/featured work/cod-hub/cod-hub-preorder-3.jpg",
				alt: "Call of Duty Hub preorder section",
				width: 2000,
				height: 892,
			},
		},
		{
			heading: "Multimedia carousel",
			text: "A JavaScript powered accessible carousel that can host both static images, video, or 3rd party hosted content such as YouTube or Vimeo, it was build with Slick.js",
			image: {
				src: "/images/featured work/cod-hub/cod-hub-fromtheward-4.jpg",
				alt: "Call of Duty Hub From the Ward section",
				width: 2000,
				height: 1247,
			},
		},
		{
			heading: "The finishing touches",
			text: "This component is an aggregate that dynamically pulls in the 3 latest blog articles and data from the Call of Duty Store to inform users they can purchase the game",
			image: {
				src: "/images/featured work/cod-hub/cod-hub-newsandstore-5.jpg",
				alt: "Call of Duty Hub news and store section",
				width: 2000,
				height: 1392,
			},
		},
	],
};
