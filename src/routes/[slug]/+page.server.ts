//export const prerender = false;
import { getPost } from '$lib/server/firebase.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { slug } = params;
	const post = getPost(slug);
	if (!post) {
		throw error(404, {
			message: 'Not found'
		});
	}
	return {
		post
	};
};
