import { v2 as cloudinary } from "cloudinary";
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { error, json } from "@sveltejs/kit";

export const POST = (async ({ request }) => {
	const body = await request.json()
	const { paramsToSign } = body;

	try {
		const signature = await cloudinary.utils.api_sign_request(
			paramsToSign,
			env.CLOUDINARY_API_SECRET
		);
		return json({ signature })
	} catch (e) {
		return error(500, e.message)
	}
}) satisfies RequestHandler;

