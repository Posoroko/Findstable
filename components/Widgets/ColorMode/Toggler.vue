<script setup>
const toggleColorMode = useToggleColorMode();
const colorMode = useColorMode();


defineProps({
    floating: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <button 
        @click="colorMode = colorMode === 'darkMode' ? 'lightMode' : 'darkMode' "
        class="pointer"
    >
        <WidgetsIconsMain 
            :name="colorMode === 'darkMode' ? 'darkMode' : 'lightMode'"
            size="medium"
        />
    </button>
</template>

<style scoped>
button {
    padding: 5px;
}
</style>