<script setup>
const toggleColorMode = useToggleColorMode();
const colorMode = useColorMode();

const colorModeCookie = useCookie('colorMode');

colorModeCookie.value = colorModeCookie.value || colorMode.value;

defineProps({
    floating: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <button 
        @click="colorModeCookie = colorModeCookie === 'darkMode' ? 'lightMode' : 'darkMode'"
        class="pointer"
    >
        <WidgetsIconsMain 
            :name="colorMode === 'darkMode' ? 'darkMode' : 'lightMode'"
            size="small"
        />
    </button>
</template>

<style scoped>
button {
    padding: 5px;
}
</style>