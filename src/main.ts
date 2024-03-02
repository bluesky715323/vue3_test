import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import '@/assets/iconfont/iconfont.js'

createApp(App).use(router).mount('#app')
