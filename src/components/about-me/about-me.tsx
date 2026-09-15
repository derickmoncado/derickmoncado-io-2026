"use client";

import { Linkedin, Instagram, Youtube, AtSign, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./about-me.module.scss";

const funFacts = [
	{ title: "A random statistic", text: "I have over 800 hours played in Call of Duty: Warzone and Multiplayer matches" },
	{
		title: "New skill unlocked",
		text: (
			<>
				In calisthenics, I can{" "}
				<a href="https://www.google.com/search?sca_esv=89264749a61b36b1&rlz=1C5OZZY_enUS1224US1224&sxsrf=APpeQnu3qLiXQNlwnTBXcWg_K5jywH3A9Q:1789492681190&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832cY0rzciwbWdjW1sV3VNzLxso-ey9S3qvKmp2OvfKTwGXnqiRiLAcb3Xgx8-u8mgVxAMDJFdONarzBGs3du8CoSZYf0ESmBI9jPWuGqAz_toRbI-czKhyl0P2SVTkVoIv0Jqcyg6w2mODAaSLC_kRY-KY_wkK8iac78Hw-_6C154p8X-Eg&q=l-sit&sa=X&ved=2ahUKEwjpmtzci_GWAxWcIEQIHRZcCUgQtKgLegQIHxAB&biw=1800&bih=1009&dpr=2" target="_blank" rel="noopener noreferrer">
					L-sit
				</a>{" "}
				for almost a full 15 seconds (this is much harder to do than you think)
			</>
		),
	},
	{ title: "A true cinephile", text: "I read the Wikipedia page of every new movie I watch while listening to it's film score" },
];

export default function AboutMe() {
	const [revealedFacts, setRevealedFacts] = useState(0);

	return (
		<section className={styles["about-me"]} id="about-me">
			<div className={styles["about-me__content"]}>
				<div className={styles["about-me__content__intro"]}>
					<h2>About Me</h2>
					<p>
						I&apos;m a <span>designer-turned-developer</span> who&apos;s passionate about web <span>development</span>, visual <span>design</span>, user <span>experience</span>, and <span>videography</span>.
					</p>
				</div>

				<div className={styles["about-me__content__blocks"]}>
					<div className={styles["about-me__content__blocks__block"]}>
						<p className={styles.stat}>15+</p>
						<p className={styles.heading}>Years of experience</p>
						<p className={styles.blurb}>From startups, to agencies, to freelance to Big Tech, I’ve done it all.</p>
					</div>

					<div className={styles["about-me__content__blocks__block"]}>
						<p className={styles.stat}>100+</p>
						<p className={styles.heading}>Projects completed</p>
						<p className={styles.blurb}>Websites, web apps, print design, branding & identity, videos... the list goes on.</p>
					</div>

					<div className={styles["about-me__content__blocks__block"]}>
						<p className={styles.stat}>1000s</p>
						<p className={styles.heading}>Lines of code written</p>
						<p className={styles.blurb}>Thousands would definitely be an understatement but who&apos;s counting?</p>
					</div>
				</div>

				<div className={styles["about-me__content__details"]}>
					<div className={styles["about-me__content__details__para1"]}>
						<p>
							Based out of Southern California where I worked in the gaming industry for over 5 years, I enjoy covering topics such as tech, lifestyle, coding, self-development, and anything else I find interesting on my 
							<a href="https://www.youtube.com/@derickmoncado" target="_blank" rel="noopener noreferrer">
								YouTube channel
							</a>
							. Before becoming a software engineer, I was a designer. However after seeing David Fincher&apos;s magnum opus{" "}
							<a href="https://en.wikipedia.org/wiki/The_Social_Network" target="_blank" rel="noopener noreferrer">
								The Social Network
							</a>{" "}
							in 2010, I was inspired to pursue web development and picked up a book from the <em>Head First</em> series by O’Reilly on HTML & CSS. After that, the rest is history.
						</p>
					</div>
					<div className={styles["about-me__content__details__para2"]}>
						<div className={styles["about-me__content__details__para2__text-socials"]}>
							<p>When I&apos;m not debugging or messing around in chatGPT, you can catch me at the gym, a snobby coffee shop, gaming, [attempting] Spanish, or messing with my camera gear.</p>
							<p>
								Interested in working together? Feel free to reach out, happy to connect, collab, or just talk shop. <a href="mailto:hello@derickmoncado.io">hello@derickmoncado.io</a>.
							</p>
							<ul>
								<li>
									<a href="https://www.youtube.com/@derickmoncado" target="_blank" title="YouTube" rel="noopener noreferrer">
										<Youtube />
									</a>
								</li>
								<li>
									<a href="https://www.threads.com/@derickmoncado" target="_blank" title="Threads" rel="noopener noreferrer">
										<AtSign />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/derickmoncado" target="_blank" title="Instagram" rel="noopener noreferrer">
										<Instagram />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/derickmoncado/" target="_blank" title="LinkedIn" rel="noopener noreferrer">
										<Linkedin />
									</a>
								</li>
							</ul>
						</div>
						<div className={styles["about-me__content__details__para2__image"]}>
							<Image className={styles["about-me__content__details__para2__image__media"]} src="/images/headshot.jpg" alt="Derick Moncado" fill sizes="(min-width: 1350px) 40vw, 100vw" />
						</div>
					</div>
					<section className={styles["about-me__content__fun-facts"]} aria-label="Random fun facts about me">
						<button type="button" className={styles["about-me__content__fun-facts__cta"]} aria-controls="about-me-fun-facts" aria-describedby="about-me-fun-facts-status" onClick={() => setRevealedFacts((count) => (count === funFacts.length ? 0 : count + 1))}>
							Random Fun Facts About Me <RefreshCw />
						</button>
						<p id="about-me-fun-facts-status" className={styles["about-me__content__fun-facts__status"]} role="status">
							{revealedFacts === funFacts.length ? "All 3 facts revealed. Click again to hide them." : `${revealedFacts} of 3 facts revealed. Click to reveal the next one.`}
						</p>
						<div id="about-me-fun-facts" className={styles["about-me__content__blocks"]}>
							{funFacts.map((fact, index) => (
								<div key={fact.title} className={styles["about-me__content__blocks__block"]}>
									<div className={styles["about-me__content__fun-facts__text"]} data-revealed={index < revealedFacts} aria-hidden={index >= revealedFacts} inert={index >= revealedFacts}>
										<p className={styles.heading}>{fact.title}</p>
										<p className={styles.blurb}>{fact.text}</p>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}
