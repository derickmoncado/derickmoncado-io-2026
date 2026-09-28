import type { PortfolioProject } from "./types";

export const warzoneTacAtlas: PortfolioProject = {
	slug: "5-tac-atlas",
	title: "Warzone Tac Atlas",
	listingStatus: "published",
	year: "2025",
	thumbnail: "/images/featured work/tac-atlast/tac-atlas-main.jpg",
	description: (
		<>
			A closer look at the Warzone Tac Atlas for players to explore the map <span>Verdansk</span>
		</>
	),
	heroImage: {
		src: "/images/featured work/tac-atlast/tac-atlas-main.jpg",
		alt: "Warzone Tac Atlas overview",
		width: 1800,
		height: 2023,
	},
	highlights: [
		{ stat: "01", heading: "My role", blurb: "Designer and supporting engineer, most of development was done by our lead frontend engineer" },
		{ stat: "02", heading: "The approach", blurb: "Design a interactive map to inform players of major POIs, vehicles, buy stations, and other important details" },
		{ stat: "03", heading: "The outcome", blurb: "An infromation rich page showcasing areas of the map giving competitive players an advantage" },
	],
	sections: [
		{
			heading: "Exploring the menus",
			text: "To the left of the map we have expandable accordion dropdowns detailing that specific POI (points of interest) on the map along with some associated key art",
			image: {
				src: "/images/featured work/tac-atlast/tac-atlas-menus-1.jpg",
				alt: "Warzone Tac Atlas menus",
				width: 1800,
				height: 3855,
			},
		},
		{
			heading: "Navigating the map",
			text: "Using JavaScript, we have the map focus in on the associated fragment letting users explore said POI in more detail",
			image: {
				src: "/images/featured work/tac-atlast/tac-atlas-menu-map-2.jpg",
				alt: "Warzone Tac Atlas map and menu overview",
				width: 1553,
				height: 1417,
			},
		},
		{
			heading: "A closer look at the map",
			text: "The map component features an interactive legend that let's users toggle certain overlays to get a better idea of what's around that particular POI on the map",
			image: {
				src: "/images/featured work/tac-atlast/tac-atlas-menu-map-3.jpg",
				alt: "Warzone Tac Atlas map and menu detail",
				width: 917,
				height: 675,
			},
		},
		{
			heading: "The map legend",
			text: "A closer look at the legend, users can toggle the map boundaries, major points of interest, and player accessible vehicles that are scattered throughout",
			image: {
				src: "/images/featured work/tac-atlast/tac-atlas-menu-map-4.jpg",
				alt: "Warzone Tac Atlas map and menu close-up",
				width: 600,
				height: 467,
			},
		},
	],
};
