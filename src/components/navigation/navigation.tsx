"use client";

import styles from "./navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, ChevronRight, CircleUser, Mail, Package } from "lucide-react";

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
					<ul>
						<li className={getActiveClass("/")}>
							<Link href="/">
								<House />
								<p>Home</p>
								<ChevronRight />
							</Link>
						</li>
						<li className={getActiveClass("/page-1")}>
							<Link href="/page-1">
								<CircleUser />
								<p>About</p>
								<ChevronRight />
							</Link>
						</li>
						<li className={getActiveClass("/page-2")}>
							<Link href="/page-2">
								<Mail />
								<p>Contact</p>
								<ChevronRight />
							</Link>
						</li>
						<li className={getActiveClass("/page-3")}>
							<Link href="/page-3">
								<Package />
								<p>My Gear</p>
								<ChevronRight />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
