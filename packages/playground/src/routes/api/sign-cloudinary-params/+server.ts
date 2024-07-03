import { CLOUDINARY_API_SECRET } from '$env/static/private';
import { v2 as cloudinary } from 'cloudinary';
import { error, json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	const body = await request.json();
	const { paramsToSign } = body;

	try {
		const signature = cloudinary.utils.api_sign_request(paramsToSign, CLOUDINARY_API_SECRET);
		return json({ signature });
	} catch (e) {
		return error(500, `${error}`);
	}
};
