import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";

import styles from "./page.module.scss";
import TemplateImagePreview from "./template-image-preview";
import TemplateViewSwitch from "./template-view-switch";

const templatePreviewImages = {
	juniorCleanModernSansSerif: "/images/resumes/junior_clean-modern_sans-serif_preview.jpg",
	juniorCleanModernSerif: "/images/resumes/junior_clean-modern_serif_preview.jpg",
	juniorStanfordSansSerif: "/images/resumes/junior_stanford-template_sans-serif_preview.jpg",
	juniorStanfordSerif: "/images/resumes/junior_stanford-template_serif_preview.jpg",
	seniorCleanModernSansSerif: "/images/resumes/senior_clean-modern_sans-serif_preview.jpg",
	seniorCleanModernSerif: "/images/resumes/senior_clean-modern_serif_preview.jpg",
	seniorStanfordSansSerif: "/images/resumes/senior_stanford-template_sans-serif_preview.jpg",
	seniorStanfordSerif: "/images/resumes/senior_stanford-template_serif_preview.jpg",
} as const;

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
						Choose which software engineer&rsquo;s resume template to download below, toggle by <span>Junior</span> or <span>Mid/Senior</span> level layouts, then select a template and its style.
					</p>
					<p>
						This is <u>your</u> starter template, tweak it, customize it, move things around as you see fit. All are fully editable and optimized for ATS scanners in systems like <i>Workday</i>. Enjoy 🤝 you&rsquo;ve got this.
					</p>
				</div>

				<TemplateViewSwitch
					junior={
						<div className={styles["template-downloads__content__body"]}>
							<div className={styles["template-downloads__content__body__row"]}>
								<h3>
									Stanford Classic — <span>Serif</span> | Junior
								</h3>
								<div className={styles["template-downloads__content__body__row__content"]}>
									<div className={styles["template-downloads__content__body__row__content__image"]}>
										<TemplateImagePreview src={templatePreviewImages.juniorStanfordSerif} alt="Stanford Classic Serif resume preview" thumbnailWidth={140} thumbnailHeight={220} previewWidth={1244} previewHeight={1604} />
									</div>
									<div className={styles["template-downloads__content__body__row__content__ctas"]}>
										<ul>
											<li>
												<a href="/downloadables/junior_stanford-template_serif.docx" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorStanfordSerif} alt="Resume preview" width={140} height={220} />
														<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
															<Download />
														</div>
													</div>
													<span>.docx</span>
												</a>
											</li>
											<li>
												<a href="/downloadables/junior_stanford-template_serif.pages" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorStanfordSerif} alt="Resume preview" width={140} height={220} />
														<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
															<Download />
														</div>
													</div>
													<span>.pages</span>
												</a>
											</li>
											<li>
												<a href="/downloadables/junior_stanford-template_serif.pdf" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorStanfordSerif} alt="Resume preview" width={140} height={220} />
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

							<div className={styles["template-downloads__content__body__row"]}>
								<h3>
									Stanford Classic — <span>Sans Serif</span> | Junior
								</h3>
								<div className={styles["template-downloads__content__body__row__content"]}>
									<div className={styles["template-downloads__content__body__row__content__image"]}>
										<TemplateImagePreview src={templatePreviewImages.juniorStanfordSansSerif} alt="Stanford Classic Serif resume preview" thumbnailWidth={140} thumbnailHeight={220} previewWidth={1244} previewHeight={1604} />
									</div>
									<div className={styles["template-downloads__content__body__row__content__ctas"]}>
										<ul>
											<li>
												<a href="/downloadables/junior_stanford-template_sans-serif.docx" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorStanfordSansSerif} alt="Resume preview" width={140} height={220} />
														<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
															<Download />
														</div>
													</div>
													<span>.docx</span>
												</a>
											</li>
											<li>
												<a href="/downloadables/junior_stanford-template_sans-serif.pages" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorStanfordSansSerif} alt="Resume preview" width={140} height={220} />
														<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
															<Download />
														</div>
													</div>
													<span>.pages</span>
												</a>
											</li>
											<li>
												<a href="/downloadables/junior_stanford-template_sans-serif.pdf" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorStanfordSansSerif} alt="Resume preview" width={140} height={220} />
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

							<div className={styles["template-downloads__content__body__row"]}>
								<h3>
									Clean and Modern — <span>Serif</span> | Junior
								</h3>
								<div className={styles["template-downloads__content__body__row__content"]}>
									<div className={styles["template-downloads__content__body__row__content__image"]}>
										<TemplateImagePreview src={templatePreviewImages.juniorCleanModernSerif} alt="Stanford Classic Serif resume preview" thumbnailWidth={140} thumbnailHeight={220} previewWidth={1244} previewHeight={1604} />
									</div>
									<div className={styles["template-downloads__content__body__row__content__ctas"]}>
										<ul>
											<li>
												<a href="/downloadables/junior_clean-modern_serif.docx" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorCleanModernSerif} alt="Resume preview" width={140} height={220} />
														<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
															<Download />
														</div>
													</div>
													<span>.docx</span>
												</a>
											</li>
											<li>
												<a href="/downloadables/junior_clean-modern_serif.pages" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorCleanModernSerif} alt="Resume preview" width={140} height={220} />
														<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
															<Download />
														</div>
													</div>
													<span>.pages</span>
												</a>
											</li>
											<li>
												<a href="/downloadables/junior_clean-modern_serif.pdf" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorCleanModernSerif} alt="Resume preview" width={140} height={220} />
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

							<div className={styles["template-downloads__content__body__row"]}>
								<h3>
									Clean and Modern — <span>Sans Serif</span> | Junior
								</h3>
								<div className={styles["template-downloads__content__body__row__content"]}>
									<div className={styles["template-downloads__content__body__row__content__image"]}>
										<TemplateImagePreview src={templatePreviewImages.juniorCleanModernSansSerif} alt="Stanford Classic Serif resume preview" thumbnailWidth={140} thumbnailHeight={220} previewWidth={1244} previewHeight={1604} />
									</div>
									<div className={styles["template-downloads__content__body__row__content__ctas"]}>
										<ul>
											<li>
												<a href="/downloadables/junior_clean-modern_sans-serif.docx" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorCleanModernSansSerif} alt="Resume preview" width={140} height={220} />
														<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
															<Download />
														</div>
													</div>
													<span>.docx</span>
												</a>
											</li>
											<li>
												<a href="/downloadables/junior_clean-modern_sans-serif.pages" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorCleanModernSansSerif} alt="Resume preview" width={140} height={220} />
														<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
															<Download />
														</div>
													</div>
													<span>.pages</span>
												</a>
											</li>
											<li>
												<a href="/downloadables/junior_clean-modern_sans-serif.pdf" download>
													<div className={styles["template-downloads__card__media"]}>
														<Image src={templatePreviewImages.juniorCleanModernSansSerif} alt="Resume preview" width={140} height={220} />
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
					midSenior={
						<div className={styles["template-downloads__placeholder"]}>
							<div className={styles["template-downloads__content__body"]}>
								<div className={styles["template-downloads__content__body__row"]}>
									<h3>
										Stanford Classic — <span>Serif</span> | Mid/Senior
									</h3>
									<div className={styles["template-downloads__content__body__row__content"]}>
										<div className={styles["template-downloads__content__body__row__content__image"]}>
											<TemplateImagePreview src={templatePreviewImages.seniorStanfordSerif} alt="Stanford Classic Serif resume preview" thumbnailWidth={140} thumbnailHeight={220} previewWidth={1244} previewHeight={1604} />
										</div>
										<div className={styles["template-downloads__content__body__row__content__ctas"]}>
											<ul>
												<li>
													<a href="/downloadables/senior_stanford-template_serif.docx" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorStanfordSerif} alt="Resume preview" width={140} height={220} />
															<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
																<Download />
															</div>
														</div>
														<span>.docx</span>
													</a>
												</li>
												<li>
													<a href="/downloadables/senior_stanford-template_serif.pages" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorStanfordSerif} alt="Resume preview" width={140} height={220} />
															<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
																<Download />
															</div>
														</div>
														<span>.pages</span>
													</a>
												</li>
												<li>
													<a href="/downloadables/senior_stanford-template_serif.pdf" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorStanfordSerif} alt="Resume preview" width={140} height={220} />
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

								<div className={styles["template-downloads__content__body__row"]}>
									<h3>
										Stanford Classic — <span>Sans Serif</span> | Mid/Senior
									</h3>
									<div className={styles["template-downloads__content__body__row__content"]}>
										<div className={styles["template-downloads__content__body__row__content__image"]}>
											<TemplateImagePreview src={templatePreviewImages.seniorStanfordSansSerif} alt="Stanford Classic Serif resume preview" thumbnailWidth={140} thumbnailHeight={220} previewWidth={1244} previewHeight={1604} />
										</div>
										<div className={styles["template-downloads__content__body__row__content__ctas"]}>
											<ul>
												<li>
													<a href="/downloadables/senior_stanford-template_sans-serif.docx" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorStanfordSansSerif} alt="Resume preview" width={140} height={220} />
															<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
																<Download />
															</div>
														</div>
														<span>.docx</span>
													</a>
												</li>
												<li>
													<a href="/downloadables/senior_stanford-template_sans-serif.pages" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorStanfordSansSerif} alt="Resume preview" width={140} height={220} />
															<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
																<Download />
															</div>
														</div>
														<span>.pages</span>
													</a>
												</li>
												<li>
													<a href="/downloadables/senior_stanford-template_sans-serif.pdf" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorStanfordSansSerif} alt="Resume preview" width={140} height={220} />
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

								<div className={styles["template-downloads__content__body__row"]}>
									<h3>
										Clean and Modern — <span>Serif</span> | Mid/Senior
									</h3>
									<div className={styles["template-downloads__content__body__row__content"]}>
										<div className={styles["template-downloads__content__body__row__content__image"]}>
											<TemplateImagePreview src={templatePreviewImages.seniorCleanModernSerif} alt="Stanford Classic Serif resume preview" thumbnailWidth={140} thumbnailHeight={220} previewWidth={1244} previewHeight={1604} />
										</div>
										<div className={styles["template-downloads__content__body__row__content__ctas"]}>
											<ul>
												<li>
													<a href="/downloadables/senior_clean-modern_serif.docx" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorCleanModernSerif} alt="Resume preview" width={140} height={220} />
															<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
																<Download />
															</div>
														</div>
														<span>.docx</span>
													</a>
												</li>
												<li>
													<a href="/downloadables/senior_clean-modern_serif.pages" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorCleanModernSerif} alt="Resume preview" width={140} height={220} />
															<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
																<Download />
															</div>
														</div>
														<span>.pages</span>
													</a>
												</li>
												<li>
													<a href="/downloadables/senior_clean-modern_serif.pdf" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorCleanModernSerif} alt="Resume preview" width={140} height={220} />
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

								<div className={styles["template-downloads__content__body__row"]}>
									<h3>
										Clean and Modern — <span>Sans Serif</span> | Mid/Senior
									</h3>
									<div className={styles["template-downloads__content__body__row__content"]}>
										<div className={styles["template-downloads__content__body__row__content__image"]}>
											<TemplateImagePreview src={templatePreviewImages.seniorCleanModernSansSerif} alt="Stanford Classic Serif resume preview" thumbnailWidth={140} thumbnailHeight={220} previewWidth={1244} previewHeight={1604} />
										</div>
										<div className={styles["template-downloads__content__body__row__content__ctas"]}>
											<ul>
												<li>
													<a href="/downloadables/senior_clean-modern_sans-serif.docx" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorCleanModernSansSerif} alt="Resume preview" width={140} height={220} />
															<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
																<Download />
															</div>
														</div>
														<span>.docx</span>
													</a>
												</li>
												<li>
													<a href="/downloadables/senior_clean-modern_sans-serif.pages" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorCleanModernSansSerif} alt="Resume preview" width={140} height={220} />
															<div className={styles["template-downloads__card__overlay"]} aria-hidden="true">
																<Download />
															</div>
														</div>
														<span>.pages</span>
													</a>
												</li>
												<li>
													<a href="/downloadables/senior_clean-modern_sans-serif.pdf" download>
														<div className={styles["template-downloads__card__media"]}>
															<Image src={templatePreviewImages.seniorCleanModernSansSerif} alt="Resume preview" width={140} height={220} />
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
						</div>
					}
				/>
			</div>
		</section>
	);
}
