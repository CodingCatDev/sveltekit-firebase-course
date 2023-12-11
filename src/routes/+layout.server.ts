import { ccdValidateSessionCookie } from '$lib/server/firebase';
import type { Cookies } from '@sveltejs/kit';

//export const prerender = false;
export const load = async ({ cookies }: { cookies: Cookies }) => {
	try {
		const ccdsession = cookies.get('session');
		if (!ccdsession) {
			return {
				user: undefined
			};
		}
		const user = await ccdValidateSessionCookie(ccdsession);

		return {
			user
		};
	} catch (error) {
		cookies.set('session', '', { expires: new Date(0) });

		console.error(error);
		return {
			user: undefined
		};
	}
};
