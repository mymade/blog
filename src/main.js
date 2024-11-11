import { createApp } from 'vue'
import App from './MyApp.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import routername from './router'

createApp(App).use(routername).mount('#app')
