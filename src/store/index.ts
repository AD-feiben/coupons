import { getLocal, setLocal } from '@/utils'
import { createStore } from 'vuex'

const themeKey = 'Theme'
const isFollowSysKey = 'IsFollowSys'
const localIsFollowSys = getLocal(isFollowSysKey) !== false

export default createStore({
  state: {
    theme: getLocal(themeKey) || 'light',
    isFollowSys: localIsFollowSys
  },
  mutations: {
    updateTheme(state, theme) {
      setLocal(themeKey, theme)
      state.theme = theme
      if (theme === 'dark') {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    },
    updateIsFollowSys(state, isFollowSys) {
      setLocal(isFollowSysKey, isFollowSys)
      state.isFollowSys = isFollowSys
    }
  },
  actions: {
    updateIsFollowSys({ commit }, isFollowSys) {
      commit('updateIsFollowSys', isFollowSys)
      if (isFollowSys) {
        const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
        commit('updateTheme', darkMode && darkMode.matches ? 'dark' : 'light')
      } else {
        commit('updateTheme', 'light')
      }
    }
  }
})
