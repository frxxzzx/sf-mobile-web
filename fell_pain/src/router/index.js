import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import store from '@/vuex/store.js';
Vue.use (Router);
const router = new Router ({
  routes: [
    {
      path: '/',
      component: () => import ('@/index'),
      meta: {
        name: '7号楼',
      },
    },
    {
      path: '/player',
      name: 'player',
      meta: {
        name: '手脑通',
      },
      component: () => import ('@/components/tools/player'),
    },
    {
      path: '/compass',
      name: 'compass',
      meta: {
        name: '指南针',
      },
      component: () => import ('@/components/tools/compass'),
    },
  ],
});
router.beforeEach ((to, form, next) => {
  store.commit ('setTitle', to.meta.name);
  next ();
});
export default router;
