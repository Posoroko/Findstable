export default defineEventHandler(async (event) => {

    const runtimeConfig = useRuntimeConfig();

    interface RefreshTokenResponse {
        data: {
            access_token: string;
            expires: number;
            refresh_token: string;
        }
    }

    const headers = getRequestHeaders(event);
    const match = headers.cookie?.match(/directus_refresh_token=([^;]*)/);
    const refresh_token: string | undefined = match ? match[1] : undefined;

    if (!refresh_token) {
        throw new Error('Refresh token is missing');
    }

    const response: RefreshTokenResponse = await $fetch(`${runtimeConfig.DIRECTUS_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refresh_token: refresh_token
        })
    })

    if (!response || !response.data) {
        return {
            status: 401,
            body: {
                message: 'Failed to refresh token'
            }
        }
    }

    setCookie(
        event,
        'directus_refresh_token',
        response.data.refresh_token,
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
        status: 200,
        body: {
            value: response.data.access_token,
            expires_at: response.data.expires
        }
    }
})