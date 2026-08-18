"use client";

import styles from "./navigation.module.scss";
import Link from "next/link";
import Image from "next/image";
import CodecademyLogo from "../../../public/images/codecademy-logo.jpg";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { House, ChevronRight, CircleUser, Mail, Linkedin, Instagram, Youtube, ArrowUpRight, AtSign, Download } from "lucide-react";

const SECTION_HASHES = ["#home", "#about-me", "#downloads", "#contact-me"] as const;
const PROFILE_TITLES = ["Software Engineer", "Visual Designer", "Creator"] as const;
const PROFILE_TITLE_INTERVAL = 6000;

export default function Navigation() {
	const currentPath = usePathname();
	const [activeHash, setActiveHash] = useState<string>("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [profileTitleIndex, setProfileTitleIndex] = useState(0);
	const menuToggleRef = useRef<HTMLButtonElement>(null);
	const navigationRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const titleInterval = window.setInterval(() => {
			setProfileTitleIndex((currentIndex) => (currentIndex + 1) % PROFILE_TITLES.length);
		}, PROFILE_TITLE_INTERVAL);

		return () => window.clearInterval(titleInterval);
	}, []);

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

	useEffect(() => {
		if (!isMenuOpen) {
			return;
		}

		const closeOnOutsideClick = (event: PointerEvent) => {
			const target = event.target;

			if (!(target instanceof Node) || navigationRef.current?.contains(target) || menuToggleRef.current?.contains(target)) {
				return;
			}

			setIsMenuOpen(false);
		};

		document.addEventListener("pointerdown", closeOnOutsideClick);

		return () => {
			document.removeEventListener("pointerdown", closeOnOutsideClick);
		};
	}, [isMenuOpen]);

	const getActiveClass = (hash: string) => (currentPath === "/" && activeHash === hash ? styles["is-active"] : undefined);
	const getPathActiveClass = (path: string) => (currentPath === path ? styles["is-active"] : undefined);
	const getDownloadsActiveClass = () => getPathActiveClass("/downloads") || getActiveClass("#downloads");
	const getSectionHref = (hash: (typeof SECTION_HASHES)[number]) => `/${hash}`;

	// condensed version just for reference
	// const getActiveClass = (path: string) => (currentPath === path ? styles["is-active"] : undefined);

	return (
		<div className={styles["navigation"]}>
			<div className={styles["navigation__inner"]}>
				<Link href="/" className={styles["navigation__inner__profile"]}>
					<div className={styles["navigation__inner__profile__img"]}></div>
					<div className={styles["navigation__inner__profile__name"]}>
						<h1>Derick Moncado</h1>
						<p key={PROFILE_TITLES[profileTitleIndex]} className={styles["profile-title"]}>
							{PROFILE_TITLES[profileTitleIndex]}
						</p>
					</div>
				</Link>

				<button ref={menuToggleRef} type="button" className={styles["navigation__inner__toggle"]} onClick={() => setIsMenuOpen((prev) => !prev)} aria-expanded={isMenuOpen} aria-controls="site-navigation" aria-label="Toggle navigation menu">
					<span></span>
					<span></span>
					<span></span>
				</button>

				<nav ref={navigationRef} id="site-navigation" className={`${styles["navigation__inner__nav"]} ${isMenuOpen ? styles["is-open"] : ""}`}>
					<ul className={styles["main-nav"]}>
						<li className={getActiveClass("#home")}>
							<Link href={getSectionHref("#home")} onClick={() => setIsMenuOpen(false)}>
								<House />
								<p>Home</p>
								<ChevronRight />
							</Link>
						</li>
						<li className={getActiveClass("#about-me")}>
							<Link href={getSectionHref("#about-me")} onClick={() => setIsMenuOpen(false)}>
								<CircleUser />
								<p>About</p>
								<ChevronRight />
							</Link>
						</li>
						<li className={getDownloadsActiveClass()}>
							<Link href="/downloads" onClick={() => setIsMenuOpen(false)}>
								<Download />
								<p>Downloads</p>
								<ChevronRight />
							</Link>
						</li>
						<li className={getActiveClass("#contact-me")}>
							<Link href={getSectionHref("#contact-me")} onClick={() => setIsMenuOpen(false)}>
								<Mail />
								<p>Contact</p>
								<ChevronRight />
							</Link>
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
								<AtSign />
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
