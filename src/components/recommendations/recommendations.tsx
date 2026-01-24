"use client";

import styles from "./recommendations.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function Recommendations() {
	const recommendations = [
		{
			name: "Avery Chen",
			title: "Product Lead, Northwind",
			quote: "Derick elevates every team he joins. Thoughtful, fast, and incredibly reliable.",
		},
		{
			name: "Marcos Silva",
			title: "Staff Engineer, Contoso",
			quote: "Clean architecture, crisp execution, and a true collaborator across disciplines.",
		},
		{
			name: "Priya Nair",
			title: "Founder, Atlas",
			quote: "A rare blend of design sense and engineering rigor. Our launch was stronger for it.",
		},
	];

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "x", direction: "ltr", loop: true, align: "center" });

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
		<section className={styles["recommendations"]}>
			<div className={styles["recommendations__content"]}>
				<div className={styles["recommendations__content__heading"]}>
					<h2>Recommendations</h2>
				</div>
				<div ref={emblaRef} className={styles["recommendations__content__carousel"]}>
					<div className={styles["recommendations__content__carousel__container"]}>
						{recommendations.map((recommendation) => (
							<article key={recommendation.name} className={styles["recommendations__content__carousel__slide"]}>
								<p className={styles["recommendations__content__carousel__quote"]}>&ldquo;{recommendation.quote}&rdquo;</p>
								<div className={styles["recommendations__content__carousel__meta"]}>
									<span className={styles["recommendations__content__carousel__name"]}>{recommendation.name}</span>
									<span className={styles["recommendations__content__carousel__title"]}>{recommendation.title}</span>
								</div>
							</article>
						))}
					</div>
				</div>
				<div className={styles["recommendations__content__controls"]}>
					<button type="button" onClick={scrollPrev} disabled={!prevBtnEnabled} className={styles["recommendations__content__button"]} aria-label="Previous recommendation">
						Prev
					</button>
					<button type="button" onClick={scrollNext} disabled={!nextBtnEnabled} className={styles["recommendations__content__button"]} aria-label="Next recommendation">
						Next
					</button>
				</div>
				<div className={styles["recommendations__content__dots"]}>
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							type="button"
							onClick={() => scrollTo(index)}
							className={`${styles["recommendations__content__dot"]} ${index === selectedIndex ? styles["recommendations__content__dot--active"] : ""}`}
							aria-label={`Go to recommendation ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
