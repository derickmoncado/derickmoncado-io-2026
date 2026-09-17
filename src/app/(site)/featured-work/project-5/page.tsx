import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { project5 } from "@/data/featured-work/project-5";

export const metadata: Metadata = {
	title: `${project5.title} | Derick Moncado`,
};

export default function Project5Page() {
	return <ProjectDetailPage project={project5} />;
}
