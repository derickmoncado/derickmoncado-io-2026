import { callOfDutyHub } from "./call-of-duty-hub";
import { shg } from "./2-shg";
import { bo7LandingPage } from "./3-bo7-lp";
import { treyarchStudios } from "./4-treyarch";
import type { PortfolioProject } from "./types";

// Display order for the /featured-work grid.
export const featuredProjects: readonly PortfolioProject[] = [callOfDutyHub, shg, bo7LandingPage, treyarchStudios];
