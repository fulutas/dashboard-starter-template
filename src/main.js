import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/main.css';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/tailwind-light/theme.css'       //theme
import 'primevue/resources/primevue.min.css '                //core css
import 'primeicons/primeicons.css '

import DashboardLayout from './layouts/DashboardLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';

const app = createApp(App);

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);

app.use(router);
app.use(PrimeVue);
app.mount('#app');
