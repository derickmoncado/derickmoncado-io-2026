"use client";

import styles from "./contact-me.module.scss";

export default function ContactMe() {
	return (
		<section className={styles["contact-me"]}>
			<div className={styles["contact-me__content"]}>
				<div className={styles["contact-me__content__heading"]}>
					<h2>Contact Me</h2>
				</div>

				<div className={styles["contact-me__content__form"]}>
					<form>
						<div className={styles["field-group"]}>
							<div className={`${styles.field} ${styles["field--half"]}`}>
								<label htmlFor="full-name">Full Name</label>
								<input id="full-name" name="fullName" type="text" placeholder="Enter your full name" autoComplete="name" required />
							</div>

							<div className={`${styles.field} ${styles["field--half"]}`}>
								<label htmlFor="email">Email</label>
								<input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
							</div>

							<div className={styles.field}>
								<label htmlFor="subject">Subject</label>
								<input id="subject" name="subject" type="text" placeholder="Enter subject" required />
							</div>

							<div className={styles.field}>
								<label htmlFor="message">Message</label>
								<textarea id="message" name="message" placeholder="Enter your message" rows={6} required />
							</div>
						</div>

						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</section>
	);
}
