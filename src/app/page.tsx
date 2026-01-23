"use client";

import AboutMe from "@/components/about-me/about-me";
import Hero from "@/components/hero/hero";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "x", direction: "ltr", loop: true, align: "center" }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

	const onSelect = useCallback((api: typeof emblaApi) => {
		if (!api) return;
		setSelectedIndex(api.selectedScrollSnap());
		setPrevBtnEnabled(api.canScrollPrev());
		setNextBtnEnabled(api.canScrollNext());
	}, []);

	const onInit = useCallback((api: typeof emblaApi) => {
		if (!api) return;
		setScrollSnaps(api.scrollSnapList());
	}, []);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
	const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on("reInit", onInit);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("select", onSelect);
	}, [emblaApi, onInit, onSelect]);

	return (
		<>
			<Hero />
			<AboutMe />
		</>
	);
}
