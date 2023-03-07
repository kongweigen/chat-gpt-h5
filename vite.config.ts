import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/v1': {
        target: 'https://api.openai.com'
      }
    }
  }
})
