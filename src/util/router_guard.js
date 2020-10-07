import router from '../router';
import VueCookie from 'vue-cookie';
import ElementUI from 'element-ui';
import { isMobile } from './common'


router.beforeEach((to, from, next) => {
    if (isMobile() && (to.path === '/' || to.path === '/sign-in')) {
        next('/mobile-sign-in');
        return;
    }
    const noAuth = ['/sign-in', '/qr/', '/mobile-sign-in'];
    if (!noAuth.some(r => to.path === r || to.path.indexOf(r) > -1)){
        //判断有没有token
        const token = VueCookie.get('auth-token');
        if (!token) {
            next('/sign-in');
            ElementUI.Message({
                message: `请先登录`,
                type: "error",
            });
            return
        } else {
            //判断如果是移动端。 如果不是跳到移动端的路由。则统一跳转到移动端的登录页
            if (isMobile()) {
                const mobileRouter = ['/mobile-sign-in', '/mobile-qr', '/mobile-edit-qr/'];
                if (!mobileRouter.some(r => to.path === r || to.path.indexOf(r) > -1)){
                    next('/mobile-sign-in');
                }
            }
        }
        next();
    } else {
        next();
    }
});

