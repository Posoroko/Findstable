interface ReqBody {
    username: String;
    email: string;
    password: string;
}


export default defineEventHandler(async (event) => {

    const reqBody: ReqBody = await readBody(event);

    const runtimeConfig = useRuntimeConfig();

    return fetch(
        `${runtimeConfig.DIRECTUS_URL}/users`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }
    ).then(async res => {
        if (!res.ok) {
            const errorData = await res.json(); // Parse the response body as JSON
            throw new Error(errorData?.errors[0]?.message || res.statusText); // Use the specific error message from Directus, if available
        }
        return res.json(); // This will return a Promise that resolves to the result of parsing the body text as JSON.
    }).catch(err => {
        console.error(err);
        return {
            statusCode: 500,
            body: {
                message: err.message,
                date: new Date().toISOString()
            }
        };
    });
})