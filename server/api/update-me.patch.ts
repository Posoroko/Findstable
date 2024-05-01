export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const authHeader = getRequestHeader(event, 'authorization');
    const accessToken = authHeader?.split('Bearer ')[1];
    
    const body = readBody(event);

    const response = await $fetch(
        `${runtimeConfig.DIRECTUS_URL}/users/me`, 
        {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(body)
        }
    );

    return response;
});
