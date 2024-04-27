export default defineEventHandler(async (event) => {

    const runtimeConfig = useRuntimeConfig();

    const headers = getRequestHeaders(event);
    const authorization = headers['authorization']?.split('Bearer ')[1];

    if (!authorization) {
        throw new Error('Authorization header is missing or not in the expected format');
    }

    interface UserData {
        data: {
            userName: string;
            email: string;
        }
    }

    const fields = ['userName', 'email', 'role.name'].join(',');

    const userData: UserData = await $fetch(`${runtimeConfig.DIRECTUS_URL}/users/me?fields=email,userName,role.name`, {
        headers: {
            'Authorization': `Bearer ${authorization}`
        }
    })

    if (!userData) {
        return {
            status: 401,
            body: {
                message: 'User not found'
            }
        }
    }

    return {
        status: 200,
        body: userData.data
    }
})