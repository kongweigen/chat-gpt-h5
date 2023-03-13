/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-03-13 21:55:52
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-03-13 23:50:50
 * @FilePath: \pg-kite:\webProject\chat-gpt-h5\src\utils\request.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import axios from 'axios'
import { showToast } from 'vant'

const instance = axios.create({
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer '
  }
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  (res) => {
    console.log('res', res)
    if (res.data && res.data) {
      return res.data
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
