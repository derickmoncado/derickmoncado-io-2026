import { NextResponse } from "next/server";

const KIT_API_BASE = "https://api.kit.com/v4";
const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_FORM_ID = process.env.KIT_FORM_ID;

type KitSubscriberResponse = {
	subscriber?: {
		id: number;
		email_address: string;
		state: string;
	};
	message?: string;
	errors?: string[];
};

function isValidEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function postToKit<T>(path: string, body: Record<string, unknown>) {
	const response = await fetch(`${KIT_API_BASE}${path}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Kit-Api-Key": KIT_API_KEY!,
		},
		body: JSON.stringify(body),
		cache: "no-store",
	});

	const data = (await response.json().catch(() => null)) as T | null;

	if (!response.ok) {
		const fallbackMessage = `Kit API error ${response.status}`;
		const message =
			data && typeof data === "object" && "message" in data && typeof data.message === "string"
				? data.message
				: fallbackMessage;

		throw new Error(message);
	}

	return data;
}

export async function POST(request: Request) {
	if (!KIT_API_KEY || !KIT_FORM_ID) {
		return NextResponse.json(
			{ error: "Missing KIT_API_KEY or KIT_FORM_ID server configuration." },
			{ status: 500 }
		);
	}

	try {
		const body = (await request.json()) as { email?: string; referrer?: string };
		const email = body.email?.trim().toLowerCase();
		const referrer = body.referrer?.trim() || request.headers.get("origin") || undefined;

		if (!email || !isValidEmail(email)) {
			return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
		}

		// Create or update the subscriber first, then attach them to the form that powers your lead magnet flow.
		await postToKit<KitSubscriberResponse>("/subscribers", {
			email_address: email,
			state: "inactive",
		});

		const subscription = await postToKit<KitSubscriberResponse>(`/forms/${KIT_FORM_ID}/subscribers`, {
			email_address: email,
			referrer,
		});

		return NextResponse.json({
			ok: true,
			subscriber: subscription?.subscriber ?? null,
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unable to save subscriber.";
		return NextResponse.json({ error: message }, { status: 500 });
	}
}
