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
					<h2>
						Downloads <Download />
					</h2>
					<p>
						Choose which software engineer's resume template to download below, either a clean and modern <span>sans-serif</span>, or a classic and professional <span>serif</span>.
					</p>
					<p>
						This is your starter template, tweak it, customize it, rename and move things around as you see fit. All are fully editable and optimized for ATS scanners in systems like <i>Workday</i>. Enjoy 🤝 you've got this.
					</p>
				</div>

				<div className={styles["template-downloads__content__body"]}>
					<div className={styles["template-downloads__content__body__row"]}>
						<h3>
							&ldquo;Tried and true&rdquo; <span>Stanford Classic</span>
						</h3>
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
						<h3>
							Clean and modern <span>Serif</span>
						</h3>
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
						<h3>
							Modern and professional <span>Sans Serif</span>
						</h3>
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
