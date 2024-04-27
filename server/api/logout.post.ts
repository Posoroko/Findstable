export default defineEventHandler(async (event) => {

    const runtimeConfig = useRuntimeConfig();

    const headers = getRequestHeaders(event);
    const match = headers.cookie?.match(/directus_refresh_token=([^;]*)/);
    const refresh_token: string | undefined = match ? match[1] : undefined;

    if (!refresh_token) {
        throw new Error('You are not logged in');
    }

    const response : any = await fetch(`${runtimeConfig.DIRECTUS_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refresh_token: refresh_token,
            mode: 'json'
        })
    })
    
    if (response.status >= 200 && response.status < 300) {
        return {
            status: 200,
            body: {
                message: 'Logged out'
            }
        }
    } else {
        throw new Error('Failed to log out');
    }
})