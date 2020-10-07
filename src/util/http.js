import axios from 'axios';
import ElementUI from 'element-ui';
import VueCookie from 'vue-cookie';

const instance = axios.create({ timeout: 1000 * 12});
//拦截request
instance.interceptors.request.use(
    config => {
        const token = VueCookie.get('auth-token');
        token && (config.headers['auth-token'] = token);
        return config;
    },
    error => Promise.error(error)
);

//拦截response
instance.interceptors.response.use(
    // 请求成功
    res => {
        if (res.data.errno !== 0) ElementUI.Message({
            message: res.data.message,
            type: "warning",
        });
        return res;
    },
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            return Promise.reject(error);
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // store.commit('changeNetwork', false);
        }
    }
);

const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        case 401:
            ElementUI.Message({
                message: `请先登录`,
                type: "error",
            });
            break;
        case 403:
            ElementUI.Message({
                message: `登录过期，请重新登录`,
                type: "error",
            });
            break;
        case 404:
            ElementUI.Message({
                message: `请求的资源不存在`,
                type: "error",
            });
            break;
        case 500:
            ElementUI.Message({
                message: `服务器内部错误`,
                type: "error",
            });
            break;
        default:
            ElementUI.Message({
                message: `未知错误`,
                type: "error",
            });
    }
};

export default {
    POST(url, params= {}) {
        return instance.post(`${process.env.VUE_APP_URL}${url}`, params);
    }
}


