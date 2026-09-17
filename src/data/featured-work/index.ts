import { callOfDutyHub } from "./call-of-duty-hub";
import { project2 } from "./project-2";
import { project3 } from "./project-3";
import { project4 } from "./project-4";
import { project5 } from "./project-5";
import type { PortfolioProject } from "./types";

// Display order for the /featured-work grid.
export const featuredProjects: readonly PortfolioProject[] = [callOfDutyHub, project2, project3, project4, project5];
