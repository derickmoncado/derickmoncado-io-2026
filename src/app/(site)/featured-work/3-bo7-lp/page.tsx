import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { bo7LandingPage } from "@/data/featured-work/3-bo7-lp";

export const metadata: Metadata = {
	title: `${bo7LandingPage.title} | Derick Moncado`,
};

export default function Bo7LandingPage() {
	return <ProjectDetailPage project={bo7LandingPage} />;
}
