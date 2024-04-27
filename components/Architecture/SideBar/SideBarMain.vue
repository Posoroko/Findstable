<script setup>
const localePath = useLocalePath();
</script>

<template>
    
    <div class="sideBar full flex column justifyEnd">
        <NuxtLink :to="localePath('home')" class="logo fraunces grow mainTC pointer">
            Finds Table
        </NuxtLink>

        <div class="flex column">
            <ArchitectureSideBarAccountCard />

            <div class="flex">
                <WidgetsLogout />
                <WidgetsColorModeToggler />
            </div>
        </div>
    </div>
</template>

<style scoped>
.sideBar {
    background-color: var(--main-dimmed);
    padding: 8px;
}
.logo {
    font-size: 30px;
    font-weight: 700;
}
</style>