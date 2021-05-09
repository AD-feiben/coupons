import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/scss/index.scss'
import router from '@/router'
import store from '@/store'

const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
if (store.state.isFollowSys) {
  store.commit('updateTheme', darkMode && darkMode.matches ? 'dark' : 'light')
} else {
  store.commit('updateTheme', store.state.theme)
}

// 监听主题切换事件
darkMode &&
  darkMode.addEventListener('change', (e) => {
    store.state.isFollowSys && store.commit('updateTheme', e.matches ? 'dark' : 'light')
  })

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Vant)
app.mount('#app')
