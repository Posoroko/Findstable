<script setup>
const toggleColorMode = useToggleColorMode();
const colorModeCookie = useCookie('colorMode');

defineProps({
    floating: {
        type: Boolean,
        default: false
    }
})

const availableColorModes = ['lightMode', 'darkMode'];

</script>

<template>
    <button 
        v-for="mode in availableColorModes" :key="mode"
        @click="toggleColorMode(mode)"
        class="pointer"
        :class="{ 'inactive' : colorModeCookie === mode }"
    >
        <WidgetsIconsMain 
            :name="mode"
            size="small"
        />
    </button>
</template>

<style scoped>
button {
    padding: 5px;
}
button.inactive {
    display: none;
}
</style>