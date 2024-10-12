import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue'; // Ensure this line references Home.vue
import UserDetails from '../views/UserDetails.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
