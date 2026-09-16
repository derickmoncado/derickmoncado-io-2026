import type { Metadata } from "next";
import Project from "@/components/project/project";

export const metadata: Metadata = {
	title: "Project 3 | Derick Moncado",
};

export default function ProjectThreePage() {
	return <Project title="Project 3" />;
}
