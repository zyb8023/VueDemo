import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import home from './components/home.vue';
import about from './components/about.vue';
import productList from './components/productList.vue';
import contcat from './components/contCat.vue';
import productview from './components/productView.vue';
import newsList from './components/newsList.vue';
import error from './components/error.vue';
import newsView from './components/newsView.vue';

export default new Router({
    routes: [
        { path: '/home', component: home },
        { path: "/about", component: about },
        { path: '/productlist', component: productList },
        { path: '/newslist', component: newsList },
        { name: "newsview", path: '/newsview/:id', component: newsView },
        { name: "productview", path: '/productview/:id', component: productview, props: true },
        { path: '/contcat', component: contcat },
        { path: '/', redirect: '/home' },
        { path: '*', component: error }
    ]
})
