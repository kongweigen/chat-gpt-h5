import { createApp } from 'vue'
import 'vant/lib/index.css'
import './style.css'
import Components from './config/components'

import App from './App.vue'
const app = createApp(App)
Components.forEach((c) => app.use(c))

app.mount('#app')
