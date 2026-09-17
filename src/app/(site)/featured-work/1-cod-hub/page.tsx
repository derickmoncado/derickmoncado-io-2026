import type { Metadata } from "next";
import Project from "@/components/project/project";
import ProjectImagePreview from "@/components/project/project-image-preview";
import { codHubProject } from "@/data/projects";

export const metadata: Metadata = {
	title: "Call of Duty Hub | Derick Moncado",
};

export default function CodHubPage() {
	return <Project year={codHubProject.year} title={codHubProject.title} description="The entry point for the world's best selling first-person shooter: Call of Duty" preview={<ProjectImagePreview src="/images/featured work/cod-hub/cod-hub.jpg" alt="COD Hub website design" width={2000} height={6082} />} />;
}
