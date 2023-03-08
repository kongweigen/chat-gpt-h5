/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-03-06 23:02:54
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-03-07 22:23:59
 * @FilePath: \pg-kite:\webProject\chat-gpt-h5\src\utils\request.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import axios from 'axios'
import { showToast } from 'vant'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer -----',
    'OpenAI-Organization': '-----'
  }
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  (res) => {
    console.log('res', res)
    if (res.data && res.data.code === 0) {
      return res.data.data
    } else {
      showToast(res.data.msg)

      return Promise.reject(res)
    }
  },
  (err) => {
    console.log('err', err)
  }
)

export default instance
