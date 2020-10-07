const cdn = (process.env.NODE_ENV === 'production' ||  process.env.NODE_ENV === 'uat') ?
{
    css: ['https://unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css'],
    js:[
        'https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js',
        'https://cdn.bootcdn.net/ajax/libs/vuex/3.1.3/vuex.min.js',
        'https://cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js',
        'https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js',
        'https://unpkg.com/element-ui@2.13.1/lib/index.js',
        'https://cdn.bootcdn.net/ajax/libs/crypto-js/4.0.0/crypto-js.min.js',
        'https://cdn.bootcdn.net/ajax/libs/moment.js/2.26.0/moment.min.js',
        'https://cdn.bootcdn.net/ajax/libs/rxjs/6.5.5/rxjs.umd.min.js',
        'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js'
        ]
} : {css: [], js: []};

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    filenameHashing: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].cdn = cdn;
                if (process.env.NODE_ENV === 'uat') {
                    args[0].hash = true;
                }
                args[0].title = `二维码管理系统`;
                return args
            })
    },
    configureWebpack: config => { 
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'uat') {
            config.externals = {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios',
                vuex: 'Vuex',
                'element-ui': 'ELEMENT',
                'crypto-js': 'CryptoJS',
                moment: 'moment',
                jquery: 'jQuery'
            };
        }
    }
};
