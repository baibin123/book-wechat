import Vue from 'vue';

Vue.filter('active', function (value) {
    if (value === '0') return '启用';
    else if (value === '1') return '停用';
    else return '状态错误'
});
Vue.filter('category', function (value) {
    if (value === '1') return '总裁';
    else if (value === '2') return '穿越';
    else if (value === '3') return '校园';
    else if (value === '4') return '恐怖';
    else if (value === '5') return '古风';
    else if (value === '6') return '恋爱';
    else if (value === '7') return '奇幻';
    else if (value === '8') return '热血';
    else if (value === '9') return '悬疑';
    else if (value === '10') return '唯美';
    else if (value === '11') return '都市';
    else if (value === '12') return '爆笑';
    else if (value === '13') return '真人';
    else return '未知'
});
