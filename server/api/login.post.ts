import { directus } from '../serverDirectus.js';

interface ReqBody {
    email: string;
    password: string;
}

export default defineEventHandler(async (event) => {

    const reqBody : ReqBody  = await readBody(event);

    try {
        const loginData = await directus.login(reqBody.email, reqBody.password);

        if (loginData?.refresh_token && loginData?.access_token && loginData?.expires) {
            setCookie(
                event,
                'directus_refresh_token',
                loginData.refresh_token,
                {
                    httpOnly: false,
                    path: '/',
                    maxAge: 604800, // 7 days, this value is set in Directus config
                    sameSite: 'strict',
                    secure: true
                }
            )

            return {
                status: 200,
                body: {
                    access_token: loginData.access_token,
                    expires_at: loginData.expires ? Date.now() + (loginData.expires * 1000) : 0
                }
            };
        }
    } catch (error) {
        console.log(error);
    }
})