import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

import { env as publicEnv } from '$env/dynamic/public';
import { env as privateEnv } from '$env/dynamic/private';

export let app = getApps().at(0);

if (
	!app &&
	publicEnv.PUBLIC_FB_PROJECT_ID &&
	privateEnv.PRIVATE_FB_CLIENT_EMAIL &&
	privateEnv.PRIVATE_FB_PRIVATE_KEY
) {
	app = initializeApp({
		credential: cert({
			projectId: publicEnv.PUBLIC_FB_PROJECT_ID,
			clientEmail: privateEnv.PRIVATE_FB_CLIENT_EMAIL,
			privateKey: privateEnv.PRIVATE_FB_PRIVATE_KEY
		})
	});
}

/* AUTH */

export const ccdCreateSessionCookie = async (idToken: string) => {
	// Set session expiration to 5 days.
	const expiresIn = 60 * 60 * 24 * 5 * 1000;
	const auth = getAuth(app);
	const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
	// Set cookie policy for session cookie.
	const options = { maxAge: expiresIn, httpOnly: true, secure: true };

	return {
		name: 'session',
		sessionCookie,
		options
	};
};

export const ccdValidateSessionCookie = async (session: string) => {
	const auth = getAuth(app);
	return await auth.verifySessionCookie(session, true);
};
