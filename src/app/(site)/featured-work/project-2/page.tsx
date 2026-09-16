import type { Metadata } from "next";
import Project from "@/components/project/project";

export const metadata: Metadata = {
	title: "Project 2 | Derick Moncado",
};

export default function ProjectTwoPage() {
	return <Project title="Project 2" />;
}
