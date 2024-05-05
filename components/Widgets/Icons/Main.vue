<script setup>
import icons from '@/assets/icons.json';

defineProps({
    name: String,
    size: String,
    active: {
        type: Boolean,
        default: false
    },
    colorMode: {
        type: String,
        required: true,
        default: 'adaptative',
        validator: (value) => {
            return ['light', 'dark', 'adaptative'].includes(value);
        }
    }
})
</script>

<template>
    <svg :viewBox="icons[name].viewBox" 
        :class="[
            size,
            colorMode,
            { 'active' : active }
        ]"
    >
        <path :d="icons[name].path" />
    </svg>
</template>

<style scoped>
svg.adaptative {
    fill: var(--main-text-color);
}
svg.light {
    fill: var(--main-light);
}
svg.dark {
    fill: var(--main-dark);
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
svg.full {
    width: 100%;
    height: 100%;
}
#app.darkMode svg.active {
    fill: rgb(0, 186, 0);
}
#app.lightMode svg.active {
    fill: rgb(0, 112, 0);
}
</style>