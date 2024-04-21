export default {
    lazy: true,
    locales: [
        {
            code: 'fr',
            name: 'Français',
            iso: 'fr-FR',
            file: 'fr/fr_main.js'
        },
        {
            code: 'en',
            name: 'English',
            iso: 'en-US',
            file: 'en/en_main.js'
        }
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    customRoutes: 'config',
    pages: {
        index: {
            en: "/",
            fr: "/"
        }
    },
    strategy: 'prefix',
    detectBrowserLanguage: false
};