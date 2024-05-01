<script setup>
const { $autoLogin, $userIsloggedIn} =  useNuxtApp();
const appState = useAppState();
const localePath = useLocalePath();

onMounted( async () => {
    const refreshTokenCookie = useCookie('directus_refresh_token');
    if(!$userIsloggedIn() && refreshTokenCookie.value) {
        await $autoLogin();
    }
})
</script>

<template>
    <div class="full flex column justifyEnd">
        <div class="flex w100 grow relative">
            <div 
                class="sideBarBox relative"
                :class="{ 'active' : appState.showSideBar }"
            >
                <ArchitectureSideBarMain />
            </div>
            
            <main class="pageBox grow relative">
                <ArchitectureMainWidth>
                    <NuxtPage />
                </ArchitectureMainWidth>
            </main>
        </div>

        <div class="mobile_bottomBar">
            <ArchitectureMobileBottomBar />
        </div>
    </div>
</template>

<style scoped>
main {
    padding: 0 10px;
}
.sideBarBox {
    width: 200px;
}
.mobile_bottomBar {
    height: 50px;
    border-top: 1px solid var(--main-dimmed);
}

@media (min-width: 769px) {
    .mobile_bottomBar {
        display: none;
    }
}

@media (max-width: 768px) {
    .mobile_bottomBar {
        display: flex;
    }
    .sideBarBox {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        z-index: 1000;
    }
    .sideBarBox.active {
        transform: translateX(0%);
    }
}
</style>
