import type { Metadata } from "next";
import FeaturedWork from "@/components/featured-work/featured-work";

export const metadata: Metadata = {
	title: "Featured Work | Derick Moncado",
};

export default function FeaturedWorkPage() {
	return <FeaturedWork />;
}
