import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { shg } from "@/data/featured-work/2-shg";

export const metadata: Metadata = {
	title: `${shg.title} | Derick Moncado`,
};

export default function ShgPage() {
	return <ProjectDetailPage project={shg} />;
}
