import {createApp} from 'vue'
import 'element-plus/dist/index.css'
import router from './router/router'
import App from './App.vue'

createApp(App).use(router).mount(document.getElementById('app'))