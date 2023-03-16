import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import clickOutside from './store/clickOutside';

const app = createApp(App);
app.directive('click-outside', clickOutside);
app.use(router);

app.mount('#app')
