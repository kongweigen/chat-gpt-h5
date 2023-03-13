/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-03-06 21:49:13
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-03-13 23:18:03
 * @FilePath: \pg-kite:\webProject\chat-gpt-h5\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createApp } from 'vue'
import 'vant/lib/index.css'
import './style.css'
import Components from './config/components'
import router from './router'

import App from './App.vue'
const app = createApp(App)
Components.forEach((c) => app.use(c))

app.use(router)
app.mount('#app')
