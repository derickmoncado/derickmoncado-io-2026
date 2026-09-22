import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { treyarchStudios } from "@/data/featured-work/4-treyarch";

export const metadata: Metadata = {
	title: `${treyarchStudios.title} | Derick Moncado`,
};

export default function TreyarchStudiosPage() {
	return <ProjectDetailPage project={treyarchStudios} />;
}
