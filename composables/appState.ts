type ColorMode = 'lightMode' | 'darkMode';

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