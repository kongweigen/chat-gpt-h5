<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-03-13 23:25:56
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-03-13 23:26:04
 * @FilePath: \pg-kite:\webProject\chat-gpt-h5\src\components\msg-item\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="msg-item">
    <span class="avatar">{{ data.role }}</span>
    <span class="content">{{ data.content }}</span>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'

const props = defineProps<{
  data: object
}>()
</script>
<style scoped></style>
