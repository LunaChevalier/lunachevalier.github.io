import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter, { RouteConfig } from 'vue-router';
import About from '../views/About.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
