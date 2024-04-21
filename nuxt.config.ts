import i18n from './i18n.config';

export default defineNuxtConfig({
    devtools: { 
        enabled: false 
    },
    css: [
        '@/css/base.css',
        '@/css/posoroko.css'
    ],
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n
})
