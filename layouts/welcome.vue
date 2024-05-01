<script setup>
const { $autoLogin, $refreshTokenCookieExists } = useNuxtApp();
const userState = useUserState();
const router = useRouter();
const localePath = useLocalePath()

onMounted(async () => {
    if($refreshTokenCookieExists()) {
        await $autoLogin();
        console.log('autologin has run')
    }

    if(userState.value.accessToken.value) {
        console.log('redirecting')
        router.push(localePath('/home'));
    }
})
</script>

<template>
    <NuxtPage />
</template>