import {
    createDirectus,
    rest,
    authentication,
    readMe
} from '@directus/sdk';

const runtimeConfig = useRuntimeConfig();
const directusBaseUrl = runtimeConfig.DIRECTUS_URL;
const directus = createDirectus(directusBaseUrl)
    .with(rest())
    .with(authentication('json'));

async function userLogin(email, password) {
    try {
        const response = await directus.login(email, password);

        return response;

    } catch (error) {

        console.log(error);
    }
}

async function refreshToken(refresh_token) {

    try {
        const response = await $fetch(`${directusBaseUrl}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                mode: 'json',
                refresh_token: refresh_token
            }
        })

        return response.data;

    } catch (error) {

        console.log(error);
        return error;
    }

}

async function getUserData() {
    try {
        const response = await directus.request(
            readMe({
                fields: ['id', 'userName', 'email', 'role.name'],
            }));

        return response;

    } catch (error) {
        console.log(error);
        return error;
    }
}

export {
    directus,
    userLogin,
    refreshToken,
    getUserData,
    directusBaseUrl
}