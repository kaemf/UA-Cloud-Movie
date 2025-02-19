import { createRouter, createWebHistory } from 'vue-router';
import Register from './views/Register.vue';
import Home from './views/Home.vue';
import MovieDetail from './views/MovieDetail.vue';

const routes = [
  { path: '/', component: Register },
  { path: '/home', component: Home },
  { path: '/movie/:id', component: MovieDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;