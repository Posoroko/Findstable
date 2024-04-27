export const useAppState = () => {
    return useState<{
        showSideBar: boolean,
        toaster: Object
    }>('appState',
        () => ({
            showSideBar: false,
            toaster: {
                show: false,
                message: '',
                type: 'success'
            }
        })
    );
}

export const useColorMode = () => {
    return useState<
        string
    >('colorMode',
        () => ( useCookie('colorMode') || 'lightMode')
    );
}

export const useToggleColorMode = () => {
    const toggleColorMode = () => {
        const colorMode = useColorMode();
        colorMode.value = colorMode.value === 'lightMode' ? 'darkMode' : 'lightMode';
    }
    
    return toggleColorMode;
}