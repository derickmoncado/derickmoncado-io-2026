"use client";

import styles from "./navigation.module.scss";
import Link from "next/link";
import Image from "next/image";
import CodecademyLogo from "../../../public/images/codecademy-logo.jpg";
import { usePathname } from "next/navigation";
import { House, ChevronRight, CircleUser, Mail, Package, Linkedin, Instagram, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Navigation() {
	const currentPath = usePathname();

	const getActiveClass = (path: string) => {
		if (currentPath === path) {
			return styles["is-active"];
		}

		return undefined;
	};

	// condensed version just for reference
	// const getActiveClass = (path: string) => (currentPath === path ? styles["is-active"] : undefined);

	return (
		<div className={styles["navigation"]}>
			<div className={styles["navigation__inner"]}>
				<div className={styles["navigation__inner__profile"]}>
					<div className={styles["navigation__inner__profile__img"]}></div>
					<div className={styles["navigation__inner__profile__name"]}>
						<h1>Derick Moncado</h1>
						<p>Software Engineer</p>
					</div>
				</div>

				<nav className={styles["navigation__inner__nav"]}>
					<ul className={styles["main-nav"]}>
						<li className={getActiveClass("/")}>
							<Link href="/">
								<House />
								<p>Home</p>
								<ChevronRight />
							</Link>
						</li>
						<li className={getActiveClass("#about-me")}>
							<a href="#about-me">
								<CircleUser />
								<p>About</p>
								<ChevronRight />
							</a>
						</li>
						<li className={getActiveClass("/page-2")}>
							<Link href="/page-2">
								<Mail />
								<p>Contact</p>
								<ChevronRight />
							</Link>
						</li>
						<li className={getActiveClass("/my-gear")}>
							<Link href="/my-gear">
								<Package />
								<p>My Gear</p>
								<ChevronRight />
							</Link>
						</li>
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

					<div className=""></div>
				</nav>

				<div className={styles["navigation__inner__codecademy"]}>
					<p>Learn to code with</p>
					<Link href="https://www.pntra.com/t/8-12462-377154-213588" target="_blank">
						<Image src={CodecademyLogo} alt="Codecademy Logo" priority />
					</Link>
					<p>Click for 50% OFF of all plans!</p>
				</div>
			</div>
		</div>
	);
}
