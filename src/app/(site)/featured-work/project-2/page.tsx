import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { project2 } from "@/data/featured-work/project-2";

export const metadata: Metadata = {
	title: `${project2.title} | Derick Moncado`,
};

export default function Project2Page() {
	return <ProjectDetailPage project={project2} />;
}
