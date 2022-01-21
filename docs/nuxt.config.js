import theme from '@nuxt/content-theme-docs';

export default theme({
    head: {
        script: [
            {
                async: true,
                defer: true,
                'data-website-id': '381b60e5-15bc-42e2-8b78-22f93e55b8c9',
                src: 'https://media.demiann.dev/umami.js',
            },
        ],
    },
    docs: {
        primaryColor: '#E24F55',
    },
});
