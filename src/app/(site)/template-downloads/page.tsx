import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";

import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Template Downloads | Derick Moncado",
	robots: {
		index: false,
		follow: false,
	},
};

export default function TemplateDownloadsPage() {
	return (
		<section className={styles["template-downloads"]}>
			<div className={styles["template-downloads__content"]}>
				<div className={styles["template-downloads__content__heading"]}>
					<h2>Template Downloads</h2>
					<p>
						Choose which template to download below, either a clean and modern <span>sans-serif</span> style, or a classic and professional <span>serif</span>. All also come in PDF format. Enjoy 🤝
					</p>
				</div>

				<div className={styles["template-downloads__content__body"]}>
					<div className={styles["template-downloads__content__body__row"]}>
						<h3>&ldquo;Tried and true&rdquo; Stanford Classic</h3>
						<ul>
							<li>
								<a href="#" download>
									<div className={styles["template-downloads__card__media"]}>
										<Image src="/images/resume.png" alt="Resume preview" width={140} height={220} />
										<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
											<Download />
										</div>
									</div>
									<span>.docx</span>
								</a>
							</li>
							<li>
								<a href="#" download>
									<div className={styles["template-downloads__card__media"]}>
										<Image src="/images/resume.png" alt="Resume preview" width={140} height={220} />
										<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
											<Download />
										</div>
									</div>
									<span>.pages</span>
								</a>
							</li>
							<li>
								<a href="#" download>
									<div className={styles["template-downloads__card__media"]}>
										<Image src="/images/resume.png" alt="Resume preview" width={140} height={220} />
										<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
											<Download />
										</div>
									</div>
									<span>.pdf</span>
								</a>
							</li>
						</ul>
					</div>

					<div className={styles["template-downloads__content__body__row"]}>
						<h3>Clean and modern Serif</h3>
						<ul>
							<li>
								<a href="#" download>
									<div className={styles["template-downloads__card__media"]}>
										<Image src="/images/resume.png" alt="Resume preview" width={140} height={220} />
										<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
											<Download />
										</div>
									</div>
									<span>.docx</span>
								</a>
							</li>
							<li>
								<a href="#" download>
									<div className={styles["template-downloads__card__media"]}>
										<Image src="/images/resume.png" alt="Resume preview" width={140} height={220} />
										<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
											<Download />
										</div>
									</div>
									<span>.pages</span>
								</a>
							</li>
							<li>
								<a href="#" download>
									<div className={styles["template-downloads__card__media"]}>
										<Image src="/images/resume.png" alt="Resume preview" width={140} height={220} />
										<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
											<Download />
										</div>
									</div>
									<span>.pdf</span>
								</a>
							</li>
						</ul>
					</div>

					<div className={styles["template-downloads__content__body__row"]}>
						<h3>Professional and modern Sans Serif</h3>
						<ul>
							<li>
								<a href="#" download>
									<div className={styles["template-downloads__card__media"]}>
										<Image src="/images/resume.png" alt="Resume preview" width={140} height={220} />
										<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
											<Download />
										</div>
									</div>
									<span>.docx</span>
								</a>
							</li>
							<li>
								<a href="#" download>
									<div className={styles["template-downloads__card__media"]}>
										<Image src="/images/resume.png" alt="Resume preview" width={140} height={220} />
										<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
											<Download />
										</div>
									</div>
									<span>.pages</span>
								</a>
							</li>
							<li>
								<a href="#" download>
									<div className={styles["template-downloads__card__media"]}>
										<Image src="/images/resume.png" alt="Resume preview" width={140} height={220} />
										<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
											<Download />
										</div>
									</div>
									<span>.pdf</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
