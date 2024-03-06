// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { 
        enabled: false 
    },

    css: [
        '@/css/posoroko.css'
    ],

    modules: [
        '@nuxt/ui'
    ],

    ui: {
        icons: ['mdi', 'simple-icons']
    }
})
