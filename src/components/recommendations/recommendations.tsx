"use client";

import styles from "./recommendations.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Recommendations() {
	const recommendations = [
		{
			name: "Shawn Feeney",
			title: "Former Activision | Microsoft | Apple",
			quote: "I had the pleasure of working closely with Derick in his role as a developer on our marketing, studio, and corporate websites at Activision. I can’t speak highly enough of his work ethic and dedication. Derick was incredibly easy to work with, always approaching each task with a positive and collaborative attitude. What truly sets Derick apart is his willingness to go the extra mile to ensure that every project is completed to the highest standard. No matter the challenge or deadline, he consistently delivered high-quality work and was always ready to lend a hand to get tasks across the finish line. I highly recommend Derick for any role—his combination of technical skill, reliability, and commitment makes him an invaluable asset to any team.",
			image: "/images/recommendations/shawn-feeney.jpg",
			url: "https://www.linkedin.com/in/shawncfeeney/",
		},
		{
			name: "Corbin Crutchley",
			title: "VP of Software Engineering | GitHub Star | Microsoft MVP",
			quote: "Working with Derick has been an absolute pleasure during the 8 months I spent with him at CooperVision. During our time together, I helped mentor him through the best practices in Angular. While our codebase included fairly complex abstractions that can be difficult to grasp without prior usage, Derick seemingly always knew the right questions to ask. His thirst for knowledge drove him to inquire not just about the task at hand, but diving deeper into the fundamentals and the 'why' behind the best practices. Guaranteed, if you find yourself with the opportunity to work with Derick, you'll see first-hand how quickly he's able to learn, grow, and thrive with new environments and codebases.",
			image: "/images/recommendations/corbin-crutchley.jpg",
			url: "https://www.linkedin.com/in/corbincrutchley/",
		},
		{
			name: "Evan Dunham",
			title: "UX Engineer | Designer",
			quote: "I am honored to have worked alongside Derick early on in his development career. Derick is brave and isn’t afraid to dive in head first into challenges. His determination to always be improving his skillset is something to be admired. I respected this trait about him, as he was always eager to learn and put his best foot forward. Derick and I collaborated on numerous projects during his time at blueriver—and what a joy it was to watch him grow and sharpen his front-end skillset. In addition to his development skills—Derick has a strong background in graphic design and videography. His eye for design influenced his pursuit of excellence in his craft and gave him a unique perspective in how to tackle various projects. One fun fact about Derick—he is quite the whiteboard artist and could bring perfectly timed comic relief to an often stressful environment. His sense of humor and lighthearted attitude helped build team camaraderie. Any team would be privileged to have Derick. I look forward to seeing where his career takes him in the years ahead!",
			image: "/images/recommendations/evan-dunham.jpg",
			url: "https://www.linkedin.com/in/evandunham/",
		},
		{
			name: "Jason Prickett",
			title: "Senior Software Engineer at Mozilla",
			quote: "I had the pleasure of working with Derick at Blueriver for several months. Although our time working together was short-lived, Derick demonstrated a go-getter attitude, and an unmatched drive to improve his skillset. His background in design allows him to be a multifaceted frontend developer that would be a valuable asset to any team. Derick also has some of the best comedic timing of anyone I’ve worked with, and I truly miss sharing an office with him. I would recommend him to any team looking for a solid developer to add value!",
			image: "/images/recommendations/jason-prickett.jpg",
			url: "https://www.linkedin.com/in/jasonprickett/",
		},
		{
			name: "Michael Xin Sun",
			title: "Software Engineer at Google",
			quote: "Derick has been a very exceptional colleague of mine and I've been so honored working with him in the same group! Derick is the most amazing UI engineer that I've been working with. His masterpieces are the web version and mobile version of our app DinnerWire.com. He's constantly helping us with UI visual design and web design, bug solving, planning and many other things. It's not so easy to find a UI graphical designer that is very into the programming world, and Derick is a perfect example for that. Derick is fast in coding, always ready to reach out to help us, and very professional in both visual design and coding. His code is highly organized, very caring about frontend-backend integration, the easiest and the most bug-proof to tweak with by backend engineers, and, as I later discovered, very conforming with the existing Google HTML/CSS Style Guide. Being a man who's very willing to give, Derick has been in a long term helping colleague UI designers and web designers about coding standards, template reuse, resolving name collisions, etc. Derick is also very famously known inside our company for being very precise in technical presentation and writing, which helps all of us and is also part of his work ethics. The most impressive thing about Derick is that he has a very high mentality and EQ and very modest, which makes working with him such a charm and pleasant experience. You're always enjoy working with Derick, and Derick is an invaluable asset.",
			image: "/images/recommendations/michael-xinsun.jpg",
			url: "https://www.linkedin.com/in/michaelxinsun/",
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
					<div className={styles["recommendations__content__carousel__inner"]}>
						{recommendations.map((recommendation) => (
							<article key={recommendation.name} className={styles["slide"]}>
								<div className={styles["slide__meta"]}>
									<a className={styles["slide__meta__profile"]} href={recommendation.url} target="_blank">
										<div className={styles["slide__meta__profile__img"]} style={{ backgroundImage: `url(${recommendation.image})` }}></div>
										<div className={styles["slide__meta__profile__name"]}>
											<p className={styles["name"]}>
												{recommendation.name}
												<ArrowUpRight />
											</p>
											<p className={styles["title"]}>{recommendation.title}</p>
										</div>
									</a>
								</div>
								<p className={styles["slide__quote"]}>&ldquo;{recommendation.quote}&rdquo;</p>
							</article>
						))}
					</div>

					<div className={styles["recommendations__content__carousel__controls"]}>
						<button type="button" onClick={scrollPrev} disabled={!prevBtnEnabled} aria-label="Previous recommendation">
							<ArrowLeft />
						</button>
						<button type="button" onClick={scrollNext} disabled={!nextBtnEnabled} aria-label="Next recommendation">
							<ArrowRight />
						</button>
					</div>
				</div>

				<div className={styles["recommendations__content__dots"]}>
					{scrollSnaps.map((_, index) => (
						<button key={index} type="button" onClick={() => scrollTo(index)} className={`${styles["recommendations__content__dots__dot"]} ${index === selectedIndex ? styles["recommendations__content__dots__dot--active"] : ""}`} aria-label={`Go to recommendation ${index + 1}`} />
					))}
				</div>
			</div>
		</section>
	);
}
