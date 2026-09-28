import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { warzoneTacAtlas } from "@/data/featured-work/5-tac-atlas";

export const metadata: Metadata = {
	title: `${warzoneTacAtlas.title} | Derick Moncado`,
};

export default function WarzoneTacAtlasPage() {
	return <ProjectDetailPage project={warzoneTacAtlas} />;
}
