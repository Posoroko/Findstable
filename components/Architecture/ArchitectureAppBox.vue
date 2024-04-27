<script setup>
const colorMode = useColorMode();
</script>

<template>
    <div id="app" :class="colorMode" class="mainBGC">
        <slot />
    </div>
</template>

<style>
#app {
    height: 100vh;
    overflow: hidden;
}

#app.lightMode{
    --main-background-color: var(--main-light);
    --main-text-color: var(--main-dark);

    --main-dimmed: #dddddd;
}

#app.darkMode{
    --main-background-color: var(--main-dark);
    --main-text-color: var(--main-light);

    --main-dimmed: #484848;
}

.mainBGC {
    background-color: var(--main-background-color);
    transition: 300ms ease;
}


</style>