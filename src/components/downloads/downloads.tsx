"use client";

import { Check, Download } from "lucide-react";
import { useState } from "react";
import styles from "./downloads.module.scss";

export default function Downloads() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (status === "submitting") {
			return;
		}

		setStatus("submitting");
		setErrorMessage("");

		try {
			const response = await fetch("/api/kit/downloads", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					referrer: window.location.href,
				}),
			});

			const data = (await response.json().catch(() => null)) as { error?: string } | null;

			if (!response.ok) {
				throw new Error(data?.error || "Unable to sign up right now.");
			}

			setStatus("submitted");
			setEmail("");
		} catch (error) {
			setStatus("error");
			setErrorMessage(error instanceof Error ? error.message : "Unable to sign up right now.");
		}
	};

	const isSubmitted = status === "submitted";
	const isSubmitting = status === "submitting";

	return (
		<section className={styles["downloads"]} id="downloads">
			<div className={styles["downloads__content"]}>
				<div className={styles["downloads__content__heading"]}>
					<h2>Downloads</h2>
				</div>

				<div className={styles["downloads__content__form"]}>
					<p>
						Get my <u>free</u> <b>Software Engineer Resume Templates</b> below—no spam, I promise
					</p>

					<form onSubmit={handleSubmit}>
						<input
							id="downloads-email"
							name="email"
							type="email"
							placeholder="Enter email"
							autoComplete="email"
							required
							value={email}
							onChange={(event) => {
								setEmail(event.target.value);
								if (status !== "idle") {
									setStatus("idle");
									setErrorMessage("");
								}
							}}
							disabled={isSubmitting}
						/>
						<button type="submit" className={isSubmitted ? styles["is-submitted"] : undefined} disabled={isSubmitting}>
							<span className={styles["button-sizer"]} aria-hidden="true">
								Download
								<Download />
							</span>
							<span className={styles["button-content"]}>
								{isSubmitted ? "Sent!" : isSubmitting ? "Sending..." : "Download"}
								{isSubmitted ? <Check /> : <Download />}
							</span>
						</button>
					</form>

					{status === "error" ? <p className={styles["error-message"]}>🔴 {errorMessage}: Something went wrong :(</p> : null}
					{isSubmitted ? <p className={styles["success-message"]}>All yours 🤝 Check your inbox for the download link! If you don't see it, double check your spam or junk folder.</p> : null}
				</div>
			</div>
		</section>
	);
}
