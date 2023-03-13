<template>
  <div class="msg-list">
    <template v-for="item in list"> <MsgItem :data="item"></MsgItem></template>
  </div>
</template>

<script setup lang="ts">
import MsgItem from '../msg-item/index.vue'
import { reactive, onMounted } from 'vue'
const props = defineProps<{
  list: object
}>()
</script>
<style scoped></style>
