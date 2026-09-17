import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { project4 } from "@/data/featured-work/project-4";

export const metadata: Metadata = {
	title: `${project4.title} | Derick Moncado`,
};

export default function Project4Page() {
	return <ProjectDetailPage project={project4} />;
}
