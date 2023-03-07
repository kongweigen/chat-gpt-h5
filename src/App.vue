<script setup lang="ts">
import { ref } from 'vue'
import { sendChatMsg } from './api/index'
import { isEmpty } from './utils/index'
const content = ref('')
const sendContent = () => {
  !isEmpty(content.value) && sendChatMsg(content.value)
}
const clearContent = () => {
  content.value = ''
}
</script>

<template>
  <main>
    <header>
      <van-icon name="smile" />
      <div>
        <span>ChatGPT </span><span class="text-gradient">我是三体人</span>
      </div>
    </header>
    <div class="body">
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
