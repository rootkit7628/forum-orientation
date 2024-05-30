import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import 'bootstrap-icons/font/bootstrap-icons.css'

import pocketbaseService from '@/services/pocketbase'
import { state } from '@/utils/store'

async function initApp() {
  const app = createApp(App)

  app.use(router)

  const pbService = await pocketbaseService()
  app.config.globalProperties.pb_service = pbService

  app.provide('state', state)
  app.mount('#app')
}

initApp().catch((error) => {
  console.error('Failed to initialize the app:', error)
})
