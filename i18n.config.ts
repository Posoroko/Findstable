function translationFiles(locale: string) {
    const files = [
        'global.json',
        'forms.json',
        'pages/index.json',
        'pages/account.json'
    ]

    const arr: string[] = [];

    files.forEach( file => {
        arr.push(`${locale}/${file}`);
    })

    return arr;
}

export default {
    lazy: true,
    locales: [
        {
            code: 'fr',
            name: 'Français',
            iso: 'fr-FR',
            files: translationFiles('fr')
        },
        {
            code: 'en',
            name: 'English',
            iso: 'en-US',
            files: translationFiles('en')
        }
    ],
    defaultLocale: 'en',
    // lazy: true,
    langDir: 'locales/',
    customRoutes: 'config',
    pages: {
        index: {
            en: "/",
            fr: "/"
        },
        home: {
            en: "/home",
            fr: "/accueil"
        },
        account: {
            en: "/my-account",
            fr: "/mon-compte"
        }
    },
    strategy: 'prefix',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_prefered_locale',
        redirectOn: 'root'
    }
};