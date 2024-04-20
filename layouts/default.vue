<template>
    <ArchitectureAppBox>
        <div class="full flex column justifyEnd b">
            <div class="flex w100 r grow">
                <div class="sideBarBox r relative">

                </div>
                
                <div class="pageBox b grow">
                    <NuxtPage />
                </div>
            </div>

            <div class="mobile_bottomBar b">

            </div>
        </div>
    </ArchitectureAppBox>
</template>

<style scoped>
.sideBarBox {
    width: 150px;
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
}
</style>
