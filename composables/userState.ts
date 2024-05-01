interface accessToken {
    value: string,
    expires_at: number
}


export const useUserState = () => {
    return useState<{
        userIsLoggedIn: boolean,
        avatarFileId: string,
        userName: string,
        email: string,
        role: string,
        id: string,
        accessToken: accessToken,
    }>('userState',
        () => ({
            userIsLoggedIn: false,
            avatarFileId: '',
            userName: '',
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