"use client";

import { Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react";
import styles from "./about-me.module.scss";
import Link from "next/link";

export default function AboutMe() {
	return (
		<section className={styles["about-me"]} id="about-me">
			<div className={styles["about-me__content"]}>
				<div className={styles["about-me__content__intro"]}>
					<h2>About Me</h2>
					<p>
						A <span>designer-turned-developer</span> who's passionate about clean <span>code</span>, stylish <span>art</span>, and great <span>design</span>.
					</p>
				</div>

				<div className={styles["about-me__content__blocks"]}>
					<div className={styles["about-me__content__blocks__block"]}>
						<p className={styles.stat}>12+</p>
						<p className={styles.heading}>Years of experince</p>
						<p className={styles.blurb}>From startups, to agencies, to freelance to Big Tech, I’ve done it all.</p>
					</div>

					<div className={styles["about-me__content__blocks__block"]}>
						<p className={styles.stat}>100+</p>
						<p className={styles.heading}>Projects completed</p>
						<p className={styles.blurb}>Websites, web apps, print design, packaging, flyers, videos... the list goes on.</p>
					</div>

					<div className={styles["about-me__content__blocks__block"]}>
						<p className={styles.stat}>1000s</p>
						<p className={styles.heading}>Lines of code written</p>
						<p className={styles.blurb}>Thousands would definitely be an understatement but who’s counting?</p>
					</div>
				</div>

				<div className={styles["about-me__content__details"]}>
					<div className={styles["about-me__content__details__para1"]}>
						<p>
							Yo, I’m Derick, based out of Southern California I enjoy covering topics such as coding, tech, lifestyle, and anything else I find interesting on my 
							<a href="https://www.youtube.com/@derickmoncado" target="_blank" rel="noopener noreferrer">
								YouTube channel
							</a>
							. Before programming I was a graphic designer. However after seeing David Fincher's magnum opus The Social Network in 2010, I was inspired to pursue web development and picked up a book from the <em>Head First</em> series by O’Reilly on HTML & CSS. After that, the rest is history.
						</p>
					</div>
					<div className={styles["about-me__content__details__para2"]}>
						<div className={styles["about-me__content__details__para2__text-socials"]}>
							<p>When I'm not debugging or messing around in chatGPT, you can catch me at the gym, a snobby coffee shop, gaming, [attempting] to speak Spanish, or messing with my camera gear.</p>
							<p>
								Interested in working together? Feel free to reach out, happy to connect, collab, or just talk shop. <a href="mailto:hello@derickmoncado.io">hello@derickmoncado.io</a>.
							</p>
							<ul>
								<li>
									<a href="https://www.youtube.com/@derickmoncado" target="_blank" rel="noopener noreferrer">
										<Youtube />
									</a>
								</li>
								<li>
									<a href="https://www.threads.com/@derickmoncado.jpg" target="_blank" rel="noopener noreferrer">
										<MessageCircle />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/derickmoncado.jpg/" target="_blank" rel="noopener noreferrer">
										<Instagram />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/derickmoncado/" target="_blank" rel="noopener noreferrer">
										<Linkedin />
									</a>
								</li>
							</ul>
						</div>
						<div className={styles["about-me__content__details__para2__video"]}>video here</div>
					</div>
				</div>
			</div>
		</section>
	);
}
