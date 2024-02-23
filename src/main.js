import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
<script src="https://www.youtube.com/iframe_api"></script>

createApp(App).use(store).use(router).mount('#app')
