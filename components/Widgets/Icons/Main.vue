<script setup>
import icons from '@/assets/icons.json';
// const colorMode = useColorMode();

defineProps({
    name: String,
    size: String,
    active: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <svg :viewBox="icons[name].viewBox" 
        :class="[
            size,
            { 'active' : active }
        ]"
    >
        <path :d="icons[name].path" />
    </svg>
</template>

<style scoped>
#app.darkMode svg {
    fill: white;
}
#app.lightMode svg {
    fill: black;
}
svg.small {
    width: 16px;
    height: 16px;
}
svg.medium {
    width: 24px;
    height: 24px;
}
svg.large {
    width: 32px;
    height: 32px;
}

#app.darkMode svg.active {
    fill: rgb(0, 186, 0);
}
#app.lightMode svg.active {
    fill: rgb(0, 112, 0);
}
</style>