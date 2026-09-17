import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { project3 } from "@/data/featured-work/project-3";

export const metadata: Metadata = {
	title: `${project3.title} | Derick Moncado`,
};

export default function Project3Page() {
	return <ProjectDetailPage project={project3} />;
}
