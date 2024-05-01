export default defineNuxtPlugin(() => {
    return {
        provide: {
            createUser,
            updateMe
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

        if(userData.data.id) {
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
