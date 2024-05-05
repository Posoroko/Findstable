interface accessToken {
    value: string,
    expires_at: number
}


export const useUserState = () => {
    return useState<{
        userIsLoggedIn: boolean,
        avatarFileId: string,
        username: string,
        email: string,
        role: string,
        id: string,
        accessToken: accessToken,
    }>('userState',
        () => ({
            userIsLoggedIn: false,
            avatarFileId: '',
            username: '',
            email: '',
            role: '',
            id: '',
            accessToken: {
                value: '',
                expires_at: 0
            },
        })
    );
}