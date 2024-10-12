import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router) // Make sure this is present
  .mount('#app');
