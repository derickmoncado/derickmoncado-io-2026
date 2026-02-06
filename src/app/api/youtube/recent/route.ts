import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

const YT_API_BASE = "https://www.googleapis.com/youtube/v3";
const MIN_DURATION_SECONDS = 61; // exclude shorts (<= 60s)

function durationToSeconds(iso: string): number {
	// ISO 8601 duration like PT1H2M10S
	const match = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso);
	if (!match) return 0;
	const hours = Number(match[1] || 0);
	const minutes = Number(match[2] || 0);
	const seconds = Number(match[3] || 0);
	return hours * 3600 + minutes * 60 + seconds;
}

async function fetchJson<T>(url: string): Promise<T> {
	const res = await fetch(url, { next: { revalidate: 300 } });
	if (!res.ok) {
		throw new Error(`YouTube API error ${res.status}`);
	}
	return res.json() as Promise<T>;
}

export async function GET() {
	if (!API_KEY || !CHANNEL_ID) {
		return NextResponse.json(
			{ error: "Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID" },
			{ status: 500 }
		);
	}

	try {
		const channelUrl = `${YT_API_BASE}/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;
		const channelData = await fetchJson<{
			items: { contentDetails: { relatedPlaylists: { uploads: string } } }[];
		}>(channelUrl);

		const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
		if (!uploadsPlaylistId) {
			return NextResponse.json({ error: "Uploads playlist not found" }, { status: 404 });
		}

		const playlistUrl = `${YT_API_BASE}/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=12&key=${API_KEY}`;
		const playlistData = await fetchJson<{
			items: {
				contentDetails: { videoId: string };
				snippet: { publishedAt: string };
			}[];
		}>(playlistUrl);

		const videoIds = playlistData.items.map((item) => item.contentDetails.videoId).filter(Boolean);
		if (!videoIds.length) {
			return NextResponse.json({ items: [] });
		}

		const videosUrl = `${YT_API_BASE}/videos?part=snippet,contentDetails&id=${videoIds.join(",")}&key=${API_KEY}`;
		const videosData = await fetchJson<{
			items: {
				id: string;
				snippet: {
					title: string;
					publishedAt: string;
					thumbnails: {
						maxres?: { url: string };
						standard?: { url: string };
						high?: { url: string };
						medium?: { url: string };
						default?: { url: string };
					};
				};
				contentDetails: { duration: string };
			}[];
		}>(videosUrl);

		const byId = new Map(videosData.items.map((item) => [item.id, item]));

		const ordered = videoIds
			.map((id) => byId.get(id))
			.filter((item): item is NonNullable<typeof item> => Boolean(item));

		const filtered = ordered.filter((item) => {
			const durationSeconds = durationToSeconds(item.contentDetails.duration);
			const title = item.snippet.title.toLowerCase();
			return durationSeconds >= MIN_DURATION_SECONDS && !title.includes("#shorts");
		});

		const items = filtered.slice(0, 3).map((item) => ({
			id: item.id,
			title: item.snippet.title,
			publishedAt: item.snippet.publishedAt,
			thumbnail:
				item.snippet.thumbnails.maxres?.url ||
				item.snippet.thumbnails.standard?.url ||
				item.snippet.thumbnails.high?.url ||
				item.snippet.thumbnails.medium?.url ||
				item.snippet.thumbnails.default?.url ||
				`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`,
			url: `https://www.youtube.com/watch?v=${item.id}`,
		}));

		return NextResponse.json({ items });
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		return NextResponse.json({ error: message }, { status: 500 });
	}
}
