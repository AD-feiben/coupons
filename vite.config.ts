const { resolve } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/scss/mixin";'
      }
    }
  },
  plugins: [
    vue()
    // eslintPlugin({
    //   cache: false
    // })
  ]
})
