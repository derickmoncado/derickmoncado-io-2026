import type { Metadata } from "next";
import Project from "@/components/project/project";

export const metadata: Metadata = {
	title: "Project 5 | Derick Moncado",
};

export default function ProjectFivePage() {
	return <Project title="Project 5" />;
}
