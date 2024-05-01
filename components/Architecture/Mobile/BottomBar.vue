<script setup>
const appState = useAppState();
const localePath = useLocalePath();

const route = useRoute();

watch(() => route.fullPath, () => {
    if(appState.value.showSideBar) {
        console.log('watching')
        appState.value.showSideBar = false;
    }
});

function toggleSideBar() {
    appState.value.showSideBar = !appState.value.showSideBar;
}

</script>

<template>
    <div class="full flex justifyCenter alignCenter gap20">
        <NuxtLink 
            :to="localePath('home')" 
            class="pointer"
        >
            <WidgetsIconsMain name="home" size="medium" />
        </NuxtLink>

        <WidgetsIconsMain 
            name="menu" 
            size="medium"
            class="pointer" 
            @click="toggleSideBar" 
        />
    </div>
</template>