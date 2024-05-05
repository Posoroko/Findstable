export default defineEventHandler(async (event) => {
    interface Body {
        token: string;
        collection: string;
        params: Array<string>
    }
    const runtimeConfig = useRuntimeConfig();
    const body = await readBody(event);

    let token: string = body.token === 'appToken' ? runtimeConfig.DIRECTUS_TOKEN : body.token;

    interface Items {
        data: Array<object>
    }

    const items: Items = await $fetch(
        `${runtimeConfig.DIRECTUS_URL}/items/${body.collection}?${body.paramStringsArray.join('&')}`,
        {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    )
    
    return items.data;

})
