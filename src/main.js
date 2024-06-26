import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import "./style/index.css"; //在此引入tailwind
import axios from 'axios'


const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(axios)
app.mount('#app')
