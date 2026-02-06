"use client";

import { useEffect, useState } from "react";
import styles from "./recent-content.module.scss";

type RecentVideo = {
	id: string;
	title: string;
	publishedAt: string;
	thumbnail: string;
	url: string;
};

type ApiResponse = {
	items?: RecentVideo[];
	error?: string;
};

export default function RecentContent() {
	const [videos, setVideos] = useState<RecentVideo[]>([]);
	const [status, setStatus] = useState<"idle" | "loading" | "error" | "ready">("idle");

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		async function load() {
			setStatus("loading");
			try {
				const res = await fetch("/api/youtube/recent", {
					signal: controller.signal,
				});
				const data = (await res.json()) as ApiResponse;
				if (!res.ok || data.error) {
					throw new Error(data.error || "Failed to load videos");
				}
				if (isMounted) {
					setVideos(data.items ?? []);
					setStatus("ready");
				}
			} catch (error) {
				if (!isMounted) return;
				if ((error as { name?: string }).name === "AbortError") return;
				setStatus("error");
			}
		}

		load();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, []);

	return (
		<section className={styles["recent-content"]}>
			<div className={styles["recent-content__heading"]}>
				<h2>Recent Content</h2>
			</div>
			<div className={styles["recent-content__videos"]}>
				{status === "loading" && <p>Loading videos...</p>}
				{status === "error" && (
					<p>Could not load videos right now. Try again later.</p>
				)}
				{status === "ready" && videos.length === 0 && (
					<p>No recent videos found.</p>
				)}
				{videos.map((video) => (
					<a
						key={video.id}
						href={video.url}
						target="_blank"
						rel="noreferrer"
						className={styles["recent-content__video-card"]}
					>
						<div className={styles["recent-content__thumb"]}>
							{video.thumbnail ? (
								<img src={video.thumbnail} alt={video.title} />
							) : (
								<div className={styles["recent-content__thumb-placeholder"]} />
							)}
						</div>
						<div className={styles["recent-content__meta"]}>
							<h3>{video.title}</h3>
							<p>{new Date(video.publishedAt).toLocaleDateString()}</p>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
