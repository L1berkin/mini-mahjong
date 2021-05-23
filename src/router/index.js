import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '../views/Start.vue';
import Game from '../views/Game.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/results',
    name: 'Results',
    component: () => import('../views/Results.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
