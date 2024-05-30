import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import 'bootstrap-icons/font/bootstrap-icons.css'

import pocketbaseService from '@/services/pocketbase'

const app = createApp(App)

app.use(router)

app.config.globalProperties.pb_service = await pocketbaseService()
app.config.globalProperties.kavio_results = {}

app.mount('#app')
