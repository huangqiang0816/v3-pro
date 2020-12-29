import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import usePlugin from '@/plugins'
import '@/router/permission'

const app = createApp(App)
usePlugin(app)

app
  .use(store, key)
  .use(router)
  .mount('#app')
