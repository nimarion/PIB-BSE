import theme from "@nuxt/content-theme-docs";

export default theme({
    target: 'static',
    telemetry: false,
    ssr: false,
    content: {
        liveEdit: true
    },
    buildModules: [
        'nuxt-ackee'
    ],
    ackee: {
        server: 'https://ackee-niklas.netlify.app',
        domainId: '81458316-3dbb-436c-a19c-f51b60b262cf',
    },
    head: {
        htmlAttrs: {
            lang: 'de'
        },
        title: 'Betriebssystemeinführung',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'Betriebssystemeinführung'
            },
            {
                hid: 'og:url',
                name: 'og:url',
                content: 'https://htw-bse.netlify.app'
            },
            {
                hid: 'og:type',
                name: 'og:type',
                content: 'website'
            }
        ]
    },
});
