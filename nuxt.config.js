import theme from "@nuxt/content-theme-docs";

export default theme({
    target: 'static',
    telemetry: false,
    ssr: false,
    content: {
        liveEdit: true
    },
});
