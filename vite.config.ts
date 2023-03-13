import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    },
  },
  server: {
    proxy: {
      '/v1': {
        target: 'https://api.openai.com/'
      }
    }
  }
})
