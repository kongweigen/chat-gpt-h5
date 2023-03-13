<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-03-13 22:58:56
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-03-13 23:46:28
 * @FilePath: \pg-kite:\webProject\chat-gpt-h5\src\views\home\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import { ref } from 'vue'
import { sendChatMsg } from '@/api/index'
import { isEmpty } from '@/utils/index'
import MsgList from '@/components/msg-list/index.vue'
const content = ref('')
const sendContent = async () => {
  if (!isEmpty(content.value)) {
    setMsgList(content.value)
    let res = await sendChatMsg(messageList.value)
    let newMsg = res.choices[0].message
    messageList.value.push(newMsg)
    console.log('sendContent:', res)
  }
}
const clearContent = () => {
  content.value = ''
}
const messageList = ref<any>([])

const setMsgList = (val: string) => {
  messageList.value.push({
    role: 'user',
    content: val
  })
  return messageList.value
}
</script>

<template>
  <main>
    <header>
      <van-icon name="smile" />
      <div>
        <span>ChatGPT </span><span class="text-gradient">我是您的私人助理</span>
      </div>
    </header>
    <div class="body">
      <MsgList :list="messageList"></MsgList>
      <div class="ask-item">
        <van-field
          class="ask-item__input"
          v-model="content"
          placeholder="请输入问题"
        >
          <template #button>
            <van-button
              class="mr10"
              size="small"
              type="primary"
              @click="sendContent"
              >发送</van-button
            >
            <van-button size="small" type="primary" @click="clearContent"
              >清除</van-button
            >
          </template>
        </van-field>
      </div>
    </div>
    <footer>Made in 三千金</footer>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 96px 32px;
  font-family: system-ui, sans-serif;

  header {
    font-size: 24px;
    font-weight: 800;
    .text-gradient {
      background: linear-gradient(to right, red, blue);
      -webkit-background-clip: text;
      color: transparent;
    }
  }
  .body {
    margin: 24px 0;
    .ask-item {
      display: flex;
      .ask-item__input {
        border-radius: 5px;
      }
    }
  }
}
</style>
