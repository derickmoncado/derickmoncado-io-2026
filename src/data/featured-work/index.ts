import { callOfDutyHub } from "./call-of-duty-hub";
import { shg } from "./2-shg";
import { bo7LandingPage } from "./3-bo7-lp";
import { project4 } from "./project-4";
import { project5 } from "./project-5";
import type { PortfolioProject } from "./types";

// Display order for the /featured-work grid.
export const featuredProjects: readonly PortfolioProject[] = [callOfDutyHub, shg, bo7LandingPage];
