"use client";

import styles from "./navigation.module.scss";
import Link from "next/link";
import Image from "next/image";
import CodecademyLogo from "../../../public/images/codecademy-logo.jpg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { House, ChevronRight, CircleUser, Mail, Linkedin, Instagram, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";

const SECTION_HASHES = ["#home", "#about-me", "#downloads", "#contact-me"] as const;

export default function Navigation() {
	const currentPath = usePathname();
	const [activeHash, setActiveHash] = useState<string>("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (currentPath !== "/") {
			return;
		}

		const updateActiveHash = () => {
			const currentHash = window.location.hash;

			if (SECTION_HASHES.includes(currentHash as (typeof SECTION_HASHES)[number])) {
				setActiveHash(currentHash);
				return;
			}

			// When there is no hash, infer the active section from scroll position.
			const currentScroll = window.scrollY + window.innerHeight * 0.3;
			let fallbackHash = "#home";

			for (const hash of SECTION_HASHES) {
				const section = document.querySelector(hash);

				if (section instanceof HTMLElement && section.offsetTop <= currentScroll) {
					fallbackHash = hash;
				}
			}

			setActiveHash(fallbackHash);
		};

		updateActiveHash();
		window.addEventListener("hashchange", updateActiveHash);
		window.addEventListener("scroll", updateActiveHash, { passive: true });

		return () => {
			window.removeEventListener("hashchange", updateActiveHash);
			window.removeEventListener("scroll", updateActiveHash);
		};
	}, [currentPath]);

	useEffect(() => {
		const closeOnDesktop = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
			}
		};

		closeOnDesktop();
		window.addEventListener("resize", closeOnDesktop);

		return () => {
			window.removeEventListener("resize", closeOnDesktop);
		};
	}, []);

	const getActiveClass = (hash: string) => (currentPath === "/" && activeHash === hash ? styles["is-active"] : undefined);

	// condensed version just for reference
	// const getActiveClass = (path: string) => (currentPath === path ? styles["is-active"] : undefined);

	return (
		<div className={styles["navigation"]}>
			<div className={styles["navigation__inner"]}>
				<Link href="/" className={styles["navigation__inner__profile"]}>
					<div className={styles["navigation__inner__profile__img"]}></div>
					<div className={styles["navigation__inner__profile__name"]}>
						<h1>Derick Moncado</h1>
						<p>Software Engineer</p>
					</div>
				</Link>

				<button
					type="button"
					className={styles["navigation__inner__toggle"]}
					onClick={() => setIsMenuOpen((prev) => !prev)}
					aria-expanded={isMenuOpen}
					aria-controls="site-navigation"
					aria-label="Toggle navigation menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<nav id="site-navigation" className={`${styles["navigation__inner__nav"]} ${isMenuOpen ? styles["is-open"] : ""}`}>
					<ul className={styles["main-nav"]}>
						<li className={getActiveClass("#home")}>
							<a href="#home" onClick={() => setIsMenuOpen(false)}>
								<House />
								<p>Home</p>
								<ChevronRight />
							</a>
						</li>
						<li className={getActiveClass("#about-me")}>
							<a href="#about-me" onClick={() => setIsMenuOpen(false)}>
								<CircleUser />
								<p>About</p>
								<ChevronRight />
							</a>
						</li>
						{/* <li className={getActiveClass("#downloads")}>
							<a href="#downloads">
								<Download />
								<p>Downloads</p>
								<ChevronRight />
							</a>
						</li> */}
						<li className={getActiveClass("#contact-me")}>
							<a href="#contact-me" onClick={() => setIsMenuOpen(false)}>
								<Mail />
								<p>Contact</p>
								<ChevronRight />
							</a>
						</li>
						{/* <li className={getActiveClass("/my-gear")}>
							<Link href="/my-gear">
								<Package />
								<p>My Gear</p>
								<ChevronRight />
							</Link>
						</li> */}
					</ul>

					<ul className={styles["socials"]}>
						<li className={styles["preheading"]}>
							<p>Connect</p>
						</li>
						<li>
							<a href="https://www.youtube.com/@derickmoncado" target="_blank" rel="noopener noreferrer">
								<Youtube />
								<p>YouTube</p>
								<ArrowUpRight />
							</a>
						</li>
						<li>
							<a href="https://www.threads.com/@derickmoncado.jpg" target="_blank" rel="noopener noreferrer">
								<MessageCircle />
								<p>Threads</p>
								<ArrowUpRight />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/derickmoncado.jpg/" target="_blank" rel="noopener noreferrer">
								<Instagram />
								<p>Instagram</p>
								<ArrowUpRight />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/derickmoncado/" target="_blank" rel="noopener noreferrer">
								<Linkedin />
								<p>LinkedIn</p>
								<ArrowUpRight />
							</a>
						</li>
					</ul>

					<div className={styles["navigation__inner__codecademy"]}>
						<p>Learn to code with</p>
						<Link href="https://www.pntra.com/t/8-12462-377154-213588" target="_blank">
							<Image src={CodecademyLogo} alt="Codecademy Logo" priority />
						</Link>
						<p>Click for 50% OFF of all plans!</p>
					</div>
				</nav>
			</div>
		</div>
	);
}
