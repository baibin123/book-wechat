import axios from 'axios';

const APPID = 'wxa10bbaf165b3dc2f';
const APPSECRET = '2719bd1fd97eb538713986063ffe667e';
const REDIRECT_URI = encodeURIComponent(`http://bookwechat.truckloud.com`);

// http://novel.jiusencms.com/index.php?m=&c=Index&a=readHistory

export const getCode = () => {
    const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
    window.location.href = url
    // axios.get(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`)
    //     .then(res => {
    //         console.log('微信返回结果',res);
    //     });
};
