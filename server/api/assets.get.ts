export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const query = getQuery(event);
    const id = query.id;

    // get the token from the query parameters
    const token = query.token;

    try {
        // fetch the image from Directus
        const response = await fetch(`${runtimeConfig.DIRECTUS_URL}/assets/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        // const base64Image = buffer.toString('base64');

        // const contentType = response.headers.get('content-type');

        // return `data:${contentType};base64,${base64Image}`;
        return buffer;
    } catch (error) {
        console.error(error);
        return error;
    }
});