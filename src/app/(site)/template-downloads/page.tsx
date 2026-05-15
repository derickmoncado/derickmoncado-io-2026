import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";

import styles from "./page.module.scss";
import TemplateImagePreview from "./template-image-preview";
import TemplateViewSwitch from "./template-view-switch";

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
						Choose which software engineer&rsquo;s resume template to download below, toggle by <span>Junior</span> or <span>Mid/Senior</span> level layouts, then select a template and it's style.
					</p>
					<p>
						This is <u>your</u> starter template, tweak it, customize it, move things around as you see fit. All are fully editable and optimized for ATS scanners in systems like <i>Workday</i>. Enjoy 🤝 you&rsquo;ve got this.
					</p>
				</div>

				<TemplateViewSwitch
					junior={
						<div className={styles["template-downloads__content__body"]}>
							<div className={styles["template-downloads__content__body__row"]}>
								<h3>Stanford Classic — Serif</h3>
								<div className={styles["template-downloads__content__body__row__content"]}>
									<div className={styles["template-downloads__content__body__row__content__image"]}>
										<TemplateImagePreview src="/images/clean-and-modern-serif.jpg" alt="Stanford Classic Serif resume preview" thumbnailWidth={140} thumbnailHeight={220} previewWidth={1244} previewHeight={1604} />
									</div>
									<div className={styles["template-downloads__content__body__row__content__ctas"]}>
										<ul>
											<li>
												<a href="#" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src="/images/clean-and-modern-serif.jpg" alt="Resume preview" width={140} height={220} />
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
														<Image src="/images/clean-and-modern-serif.jpg" alt="Resume preview" width={140} height={220} />
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
														<Image src="/images/clean-and-modern-serif.jpg" alt="Resume preview" width={140} height={220} />
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
						</div>
					}
					midSenior={<div className={styles["template-downloads__placeholder"]}>other stuff</div>}
				/>
			</div>
		</section>
	);
}
