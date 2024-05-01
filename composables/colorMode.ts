export const useToggleColorMode = () => {
    const toggleColorMode = async (newColorMode : string) => {
        const colorModeCookie = useCookie('colorMode');
        colorModeCookie.value = newColorMode;
    }
    return toggleColorMode;
}