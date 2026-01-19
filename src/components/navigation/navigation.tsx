"use client";

import styles from "./navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, ChevronRight } from "lucide-react";

export default function Navigation() {
	const currentPath = usePathname();
	const getActiveClass = (path: string) => (currentPath === path ? styles.active : undefined);

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
						<li>
							<Link href="/" className={getActiveClass("/")}>
								<House />
								<p>Home</p>
								<ChevronRight />
							</Link>
						</li>
						<li>
							<Link href="/page-1" className={getActiveClass("/page-1")}>
								<p>About</p>
							</Link>
						</li>
						<li>
							<Link href="/page-2" className={getActiveClass("/page-2")}>
								<p>Contact</p>
							</Link>
						</li>
						<li>
							<Link href="page-3" className={getActiveClass("page-3")}>
								<p>My Gear</p>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
