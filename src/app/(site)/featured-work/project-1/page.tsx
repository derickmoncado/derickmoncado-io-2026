import type { Metadata } from "next";
import Project from "@/components/project/project";

export const metadata: Metadata = {
	title: "Project 1 | Derick Moncado",
};

export default function ProjectOnePage() {
	return <Project title="Project 1" />;
}
