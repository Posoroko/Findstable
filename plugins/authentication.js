export default defineNuxtPlugin(() => {
    return {
        provide: {
            createUser,
            updateMe,
            loginWithEmailAndPassword,
            logout,
            getUserData,
            accessTokenIsExpired,
            refreshToken,
            userIsloggedIn,
            autoLogin,
            refreshTokenCookieExists
        },
    }
})

async function createUser(invitationCode, username, email, password) {
    try {
        const userData = await $fetch(
            '/api/signup',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    invitationCode,
                    username,
                    email,
                    password
                }
            }
        )

        if (userData.data.id) {
            return {
                status: 'success',
                body: userData.data
            }
        }

    } catch (error) {
        console.log(error);
    }
}

async function updateMe(newData) {
    console.log(newData);

    const userState = useUserState();
    const response = await $fetch('/api/update-me',
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + userState.value.accessToken.value
            },
            body: JSON.stringify(newData)
        }
    )

    console.log(response);
}

async function loginWithEmailAndPassword(email, password) {
    const userState = useUserState();

    try {
        const response = await $fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                email,
                password
            }
        });

        console.log(response);
        if (!response || !response.body || !response.body.access_token || !response.body.expires_at) {
            throw new Error('Invalid login data');
        }

        userState.value.accessToken.value = response.body.access_token;
        userState.value.accessToken.expires_at = response.body.expires_at;

        await getUserData(true, false);

        return "success"

    } catch (error) {

        console.log(error);
        return error;
    }
}

async function logout() {
    console.log('logging out')
    const response = await $fetch(
        '/api/logout',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )

    if(response.status === 200) {
        const router = useRouter();
        const localePath = useLocalePath();
        const userState = useUserState();
        userState.value.accessToken.value = '';
        userState.value.accessToken.expires_at = 0;
        userState.value.username = '';
        userState.value.email = '';
        userState.value.userIsLoggedIn = false;

        document.cookie = 'directus_refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        
        router.push(localePath('/'));
    }
    
}

async function getUserData(loadData = true, returnData = false) {
    
    const userState = useUserState();

    try {
        const data = await $fetch(
            'http://localhost:3000/api/me', {
                method: 'GET',
                headers: {
                    'authorization': 'Bearer ' + userState.value.accessToken.value,
                }
            }
        );

        if (loadData && data.status === 200) {
            userState.value.username = data.body.username;
            userState.value.email = data.body.email;
        }

        if (returnData && data.status === 200) return data;

    } catch (error) {
        console.log(error);
    }
}

async function refreshToken() {
    try {
        const response = await $fetch('http://localhost:3000/api/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                content: 'refresh'
            }
        });
        console.log(response.status);
        if (response.status === 200) {
            console.log('status = 200')
            const userState = useUserState();
            userState.value.accessToken = response.body;

            return "success";
        }
    } catch (error) {
        console.log(error);
    }
}

function accessTokenIsExpired() {
    const userState = useUserState();
    console.log(Date.now(), userState.value.accessToken.expires_at);
    return Date.now() >= userState.value.accessToken.expires_at;
}

const userIsloggedIn = () => {
    const userState = useUserState();

    return userState.value.userIsLoggedIn;
}

async function autoLogin() {
    
    if(userIsloggedIn()) {
        console.log('already logged in')
        return;
    }

    const tokenRefreshed = await refreshToken();

    if(tokenRefreshed !== 'success') {    
        return 'failed';
    }

    const userData = await getUserData(true, true);

    if(userData) {
        return 'success';
    }
}

let autoRefreshCounter = 0;
function activateAutoRefresh() {
    if (userIsloggedIn) {
        setInterval(async () => {
            autoRefreshCounter++;
            await refreshToken();

            console.log('Auto refreshed token ', autoRefreshCounter, ' times')
        }, 870000);
    }
}

function refreshTokenCookieExists() {
    return document.cookie.includes("directus_refresh_token");
}
activateAutoRefresh();