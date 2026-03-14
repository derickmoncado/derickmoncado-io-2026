"use client";

import AboutMe from "@/components/about-me/about-me";
import ContactMe from "@/components/contact-me/contact-me";
import Hero from "@/components/hero/hero";
import RecentContent from "@/components/recent-content/recent-content";
import Recommendations from "@/components/recommendations/recommendations";

export default function Home() {
	return (
		<>
			<Hero />
			<AboutMe />
			<RecentContent />
			<Recommendations />
			{/* <Downloads /> */}
			<ContactMe />
		</>
	);
}
