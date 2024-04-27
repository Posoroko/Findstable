import { userLogin } from '../serverDirectus.js';

export default defineEventHandler(async (event) => {

    const reqBody  = await readBody(event);

    try {
        const loginData = await userLogin(reqBody.email, reqBody.password);

        if(loginData?.refresh_token) {
            setCookie(
                event,
                'directus_refresh_token',
                loginData.refresh_token,
                {
                    httpOnly: false,
                    path: '/',
                    maxAge: 604800, // 7 days, value set in Directus config
                    sameSite: 'strict',
                    secure: true
                }
            )

            // return an object to match the expected type of userState.accessToken
            return {
                value: loginData.access_token,
                expires_at: loginData.expires ? Date.now() + ( loginData.expires * 1000 ) : 0
            };
        }
        
    } catch(e) {
        return new Response(e.message, { status: 401 });
    }  
})