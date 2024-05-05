export default defineNuxtPlugin(() => {
    return {
        provide: {
            getItems
        },
    }
})

//  token can be one of : 'userToken', "appToken"

async function getItems(token, collection, paramStringsArray) {
    const userState = useUserState();

    try {
        const items = await $fetch(
            '/api/getItems',
            {
                method: 'POST',
                body: {
                    token: setToken(token),
                    collection,
                    paramStringsArray
                }
            }
        );

        return items;

    } catch (error) {
        console.log(error);
    }
}

function setToken(token) {
    switch (token) {
        case 'userToken':
            const userState = useUserState();
            if (!userState.value.accessToken.value) {
                return {
                    status: 'error',
                    body: 'User not logged in'
                }
            }
            return userState.value.accessToken.value;
        case 'appToken':
            return 'appToken';
    }
}

