import type { Metadata } from "next";
import FeaturedWorkGrid from "@/components/featured-work/featured-work-grid";

export const metadata: Metadata = {
	title: "Featured Work | Derick Moncado",
};

export default function FeaturedWorkPage() {
	return <FeaturedWorkGrid />;
}
