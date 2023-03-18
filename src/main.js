import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import clickOutside from './store/clickOutside';
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.css'

const app = createApp(App);
const vuetify = createVuetify({})
app.directive('click-outside', clickOutside);
app.use(router);
app.use(vuetify)
app.mount('#app')
