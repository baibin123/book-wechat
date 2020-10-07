const cdn = (process.env.NODE_ENV === 'production' ||  process.env.NODE_ENV === 'uat') ?
{
    css: ['https://unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css'],
    js:[
        'https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js',
        'https://cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js',
        'https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js',
        'https://unpkg.com/element-ui@2.13.1/lib/index.js',
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
                args[0].title = `密书圈`;
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
            };
        }
    },
    devServer: {
        host: "localhost", //如果是真机测试，就使用这个IP
        port: 8081,
        https: false,
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
        proxy: {
            //配置跨域
            '/api': {
                target: "http://59.111.97.208:8008",
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
};
