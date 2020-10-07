import Vue from 'vue';
import moment from "moment";

Vue.filter('date', function (value, format='YYYY-MM-DD') {
    if (value) return moment(new Date(value)).format(format);
    else return  null;
});

Vue.filter('active', function (value) {
    if (value === '0') return '启用';
    else if (value === '1') return '停用';
    else return '状态错误'
});
