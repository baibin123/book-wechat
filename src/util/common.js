export const getUserInfo = () => {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    else return {}
};

export const isMobile = () => {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return true
    }
    return  false;
};

export const tranformGetParmas = (obj) => {
    let params = '';
    for (const key in obj) {
        if (obj[key]) {
            if (params.length === 0) {
                params = `?${key}=${obj[key]}`;
            } else {
                params = `${params}&${key}=${obj[key]}`;
            }
        }
    }
    return params;
};

export const debounceFun = (fn, delay = 500) => {
    let timer = null;
    return () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        setTimeout(()=> {
            fn.apply(this, arguments);
        }, delay);
    }
};






