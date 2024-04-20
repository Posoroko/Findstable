<script setup>
const colorMode = useColorMode();
</script>

<template>
    <div id="app" :class="colorMode" class="mainBGC">
        <slot />
    </div>
</template>

<style>
:root {
    --main-light: #f4f4f4;
    --main-dark: #212121;
}

#app {
    height: 100vh;
    overflow: hidden;
}

#app.lightMode{
    --main-background-color: var(--main-light);
    --main-text-color: var(--main-dark);
}

#app.darkMode{
    --main-background-color: var(--main-dark);
    --main-text-color: var(--main-light);
}

.mainBGC {
    background-color: var(--main-background-color);
    transition: 300ms ease;
}

.mainTC {
    color: var(--main-text-color);
    transition: 300ms ease;
}
</style>