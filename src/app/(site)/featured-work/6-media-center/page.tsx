import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { mediaCenter } from "@/data/featured-work/6-media-center";

export const metadata: Metadata = {
	title: `${mediaCenter.title} | Derick Moncado`,
};

export default function MediaCenterPage() {
	return <ProjectDetailPage project={mediaCenter} />;
}
