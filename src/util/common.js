import CryptoJS from 'crypto-js';

export const aesEncryptModeCFB = function (msg, pwd) {
    let magicNo = generateRandomAlphaNum(32);

    let key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(pwd).toString());
    let iv = CryptoJS.enc.Utf8.parse(magicNo);

    let identifyCode = CryptoJS.AES.encrypt(msg, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    return [magicNo, identifyCode]
};

const generateRandomAlphaNum = function (len) {
    let rdmString = '';
    // toSting接受的参数表示进制，默认为10进制。36进制为0-9 a-z
    for (; rdmString.length < len;) {
        rdmString += Math.random().toString(16).substr(2)
    }
    return rdmString.substr(0, len)
};

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






