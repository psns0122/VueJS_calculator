import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FirstChild from './components/FirstChild.vue';

// 전역 등록
const app = createApp(App);
// app.component('FirstChild', FirstChild);
app.mount('#app')
