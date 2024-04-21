<script setup>
const colorMode = useColorMode();
const { t, locale } = useI18n();

import global from '@/locales/en/global.json';

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
        <div class="text mainTC grow centered">
            <div>
                <h1>Finds Table</h1>
                <p>{{t('hello') }}</p>
                <p>{{ en_main }}</p>
            </div>
        </div>

        <div class="flex justifyEnd">
            <WidgetsColorModeToggler />
        </div>
    </main>
</template>