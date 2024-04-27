<script setup>
const { $autoLogin, $userIsloggedIn} =  useNuxtApp();
const appState = useAppState();
const localePath = useLocalePath();

onMounted( async () => {
    if(!$userIsloggedIn()) {
        await $autoLogin();
    }
})
</script>

<template>
    <ArchitectureAppBox>
        <div class="full flex column justifyEnd">
            <div class="flex w100 grow">
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
    </ArchitectureAppBox>
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
        height: 100vh;
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
