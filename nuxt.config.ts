import i18n from './i18n.config';

export default defineNuxtConfig({
    devtools: { 
        enabled: false 
    },
    ssr: false,
    css: [
        '@/css/base.css',
        '@/css/posoroko.css',
        '@/css/text.css',
        '@/css/uiElements.css',
        '@/css/colors.css',
    ],
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n,
    runtimeConfig: {
        DIRECTUS_URL: process.env.DIRECTUS_URL,
        APP_ACCESS_TOKEN: process.env.APP_ACCESS_TOKEN,
    },
})
