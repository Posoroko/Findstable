<script setup>
const { $getUserData, $autoLogin } = useNuxtApp();
const localePath = useLocalePath()

const userState = useUserState();

</script>

<template>
    <div class="box">
        <NuxtLink :to="localePath('account')" class="card block pointer relative">
            <ArchitectureTexturePaper file="/textures/paper-150x100.jpg">
                <div class="content">
                    <div class="frame centered">
                        <WidgetsIconsMain name="account" size="large" colorMode="light"/>
                    </div>

                    <p class="userName centered text-lg lightTC">
                        {{ userState.userName }}
                    </p>
                </div>
            </ArchitectureTexturePaper>
        </NuxtLink>
    </div>
</template>

<style scoped>

.card {
    background-color: var(--theme-color);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1px 2px 3px rgb(36, 36, 36);
    transition: 100ms ease;
}
.card:hover {
    filter: brightness(0.9);
    box-shadow: 1px 2px 5px rgb(36, 36, 36);
}
.content {
    padding: 10px 20px;
}
</style>