<script setup>
const { t } = useI18n();
</script>

<template>
    <div class="">
        <h1 class="mainTC marTop150">
            {{ t('page_account.content.title') }}
        </h1>

        <div class="marTop50 flex column gap30">
            <PagesAccountUserData />

            <div>
                <p class="mainTC">
                    {{ t('page_account.content.settings.language') }}
                </p>

                <WidgetsLanguageSelector />
            </div>

            <div>
                <p class="mainTC">
                    {{ t('page_account.content.settings.colorMode') }}
                </p>

                <WidgetsColorModeToggler />
            </div>
        </div>
    </div>
</template>