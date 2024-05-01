<script setup>
const { t, locale } = useI18n();
const userState = useUserState();


// console.log(global);
definePageMeta({
    title: 'Finds Table',
    description: 'Finds Table, a place to show your share of history.',
    // image: '/images/og-image.jpg',
    // colorMode: colorMode.value,
    layout: 'welcome',
});
</script>

<template>
    <main class="full flex column justifyEnd">
        <div class="text mainTC grow flex column justifyCenter alignCenter gap20">
            <div class="box">
                <h1>Finds Table</h1>

                <p class="text-lg ltr-tight semibold marTop20">
                    {{t('page_account.content.welcomeText') }}
                </p>
                <p>
                    ... {{ userState.accessToken.value.slice(-15) }}
                </p>
            </div>

            <div class="box marTop50">
                <FormsAuthenticationLoginSignup />
            </div>
        </div>

        <div class="bottomBar flex justifyEnd aligncenter gap10">
            <WidgetsLanguageSelector />

            <WidgetsColorModeToggler />
        </div>
    </main>
</template>

<style scoped>
.box {
    width: min(100%, 400px);
    background-color: var(--main-dimmed);
    border-radius: var(--border-radius-l);
    padding: 16px;
}
h1 {
    font-size: 2.8rem;
    letter-spacing: -0.04em;
}
.bottomBar {
    height: 48px;
}
</style>