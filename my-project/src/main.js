import Vue from 'vue';
import App from './App';
import router from './router';
import V_Echarts from 'vue-echarts-directive';
import VueI18n from 'vue-i18n';
import './icons'; // icon

Vue.config.productionTip = false;

Vue.use(VueI18n); // 通过插件的形式挂载
const i18n = new VueI18n({
    locale: 'ch', // 语言标识 通过 this.$i18n.locale 来进行语言的切换
    // this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'ch': require('./lang/ch'), // 中文语言包
        'en': require('./lang/en') // 英文语言包
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    directives: {
        'echarts': V_Echarts
    },
    router,
    i18n,
    components: {
        App
    },
    template: '<App/>'
});
