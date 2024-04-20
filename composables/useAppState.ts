export const useColorMode = () => {
    return useState<
        String
    >('colorMode',
        () => ( 'lightMode')
    );
}



export const useToggleColorMode = () => {
    const toggleColorMode = () => {
        const colorMode = useColorMode();
        colorMode.value = colorMode.value === 'lightMode' ? 'darkMode' : 'lightMode';
    }
    
    return toggleColorMode;
}