import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FirstChild from './components/FirstChild.vue';
import SecondChild from './components/SecondChild.vue';

const app = createApp(App)
app.provide('FirstChild', FirstChild);
app.provide('SecondChild', SecondChild);
app.mount('#app')
