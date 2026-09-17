type FeaturedProject = {
	slug: string;
	title: string;
	year?: string;
	thumbnail?: string;
};

export const codHubProject = {
	slug: "1-cod-hub",
	title: "Call of Duty Hub",
	year: "2026",
	thumbnail: "/images/featured work/cod-hub/cod-hub-hero-component.jpg",
} as const satisfies FeaturedProject;

export const projects: readonly FeaturedProject[] = [codHubProject, { slug: "project-2", title: "Project 2" }, { slug: "project-3", title: "Project 3" }, { slug: "project-4", title: "Project 4" }, { slug: "project-5", title: "Project 5" }];
