import type { Metadata } from "next";
import ProjectDetailPage from "@/components/featured-work/project-detail/project-detail-page";
import { callOfDutyHub } from "@/data/featured-work/call-of-duty-hub";

export const metadata: Metadata = {
	title: `${callOfDutyHub.title} | Derick Moncado`,
};

export default function CallOfDutyHubPage() {
	return <ProjectDetailPage project={callOfDutyHub} />;
}
