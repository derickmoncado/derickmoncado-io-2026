"use client";

import AboutMe from "@/components/about-me/about-me";
import Hero from "@/components/hero/hero";
import Recommendations from "@/components/recommendations/recommendations";

export default function Home() {
	return (
		<>
			<Hero />
			<AboutMe />
			<Recommendations />
		</>
	);
}
