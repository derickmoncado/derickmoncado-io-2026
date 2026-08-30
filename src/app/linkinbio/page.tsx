"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import ContactMe from "@/components/contact-me/contact-me";
import Footer from "@/components/footer/footer";
import { ChevronLeft } from "lucide-react";
import RecentContent from "@/components/recent-content/recent-content";
import Downloads from "@/components/downloads/downloads";
import CodecademyPromo from "@/components/codecademy-promo/codecademy-promo";

export default function LinkInBioPage() {
	return (
		<main className={styles["links"]}>
			<div className={styles["links__content"]}>
				<div className={styles["links__content__back"]}>
					<Link href="/">
						<ChevronLeft /> Back
					</Link>
				</div>

				<div className={styles["links__content__hero"]}>
					<div className={styles["links__content__hero__image"]}>
						<div className={styles["links__content__hero__image__frame"]}>
							<Image className={styles["links__content__hero__image__photo"]} src="/images/headshot.jpg" alt="Derick Moncado" fill sizes="(min-width: 600px) 250px, 180px" priority />
						</div>
					</div>
					<div className={styles["links__content__hero__headline"]}>
						<h1>@derickmoncado</h1>
						<p>Developer, Designer, and Creator</p>
					</div>
				</div>

				<div className={styles["links__content__links"]}>
					<a href="https://www.youtube.com/@derickmoncado" className={styles["links__content__links__youtube"]} target="_blank" rel="noopener noreferrer">
						<Image src="/images/youtube.svg" alt="YouTube icon" width={18} height={18} />
						Subscribe
					</a>
					<a href="https://www.threads.com/@derickmoncado.jpg" className={styles["links__content__links__threads"]} target="_blank" rel="noopener noreferrer">
						<Image src="/images/threads.svg" alt="Threads icon" width={18} height={18} />
						Follow
					</a>
					<a href="https://www.instagram.com/derickmoncado.jpg/" className={styles["links__content__links__instagram"]} target="_blank" rel="noopener noreferrer">
						<Image src="/images/instagram.svg" alt="Instagram icon" width={18} height={18} />
						Follow
					</a>
					<a href="https://www.linkedin.com/in/derickmoncado/" className={styles["links__content__links__linkedin"]} target="_blank" rel="noopener noreferrer">
						<Image src="/images/linkedin.svg" alt="LinkedIn icon" width={18} height={18} />
						LinkedIn
					</a>
				</div>

				<div className={styles["links__content__contact-form"]}>
					<ContactMe />
				</div>

				<div className={styles["links__content__downloads"]}>
					<Downloads />
				</div>

				<div className={styles["links__content__recent-content"]}>
					<RecentContent limit={1} className={styles["links__content__recent-content__feed"]} />
				</div>

				<div className={styles["links__content__codecademy-promo"]}>
					<CodecademyPromo />
				</div>
			</div>
			<Footer />
		</main>
	);
}
