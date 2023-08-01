import { v2 as cloudinary } from "cloudinary";
import type { RequestHandler } from './$types';
import { error, json } from "@sveltejs/kit";


export const GET = (async ({ request }) => {

	const body = await request.json();
	const { paramsToSign } = body;

	try {
		const signature = cloudinary.utils.api_sign_request(
			paramsToSign,
			import.meta.env.CLOUDINARY_API_SECRET
		);
		return json({ signature });
	} catch (e) {
		throw error(500, (e as Error).message)
	}
}) satisfies RequestHandler
