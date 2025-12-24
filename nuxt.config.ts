// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', 'nuxt-umami'],

    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            title: 'Bossong',
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: 'Bossong yapı kimyasalları'}
            ]
        }
    }
})