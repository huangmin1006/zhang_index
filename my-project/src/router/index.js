import Vue from 'vue';
import Router from 'vue-router';

import Indev from '@/components/index/index'; // 分页1 首页
import Production from '@/components/production/production'; // 分页2 作品主页
import Detail1 from '@/components/detail1/detail1'; // 分页2 详情1
import Detail2 from '@/components/detail2/detail2'; // 分页2 详情2
import AboutMe from '@/components/aboutMe/aboutMe'; // 分页3 关于我
import CallMe from '@/components/callMe/callMe'; // 分页4 联系我
import Menu from '@/components/menu/menu'; // 菜单

import LoginPage from '@/components/loginPage/loginPage'; // 加载页

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/index',
        name: 'Indev',
        component: Indev
    }, {
        path: '/production',
        name: 'Production',
        component: Production
    }, {
        path: '/detail1',
        name: 'Detail1',
        component: Detail1
    }, {
        path: '/detail2',
        name: 'Detail2',
        component: Detail2
    }, {
        path: '/callMe',
        name: 'CallMe',
        component: CallMe
    }, {
        path: '/aboutMe',
        name: 'AboutMe',
        component: AboutMe
    }, {
        path: '/menu',
        name: 'Menu',
        component: Menu
    }, {
        path: '/loginPage',
        name: 'LoginPage',
        component: LoginPage
    }]
});
