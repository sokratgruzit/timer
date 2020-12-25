import Vue from 'vue'
import Vuex from 'vuex'
import items from '@/items.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenu: null,
    navMenu: items.navigation,
    community: items.community,
    faq: items.faq,
    communityNum: 0
  },
  getters: {
  },
  mutations: {
    setMenuStatus (state, data) {
      state.activeMenu = data
    },
    setCommunity (state, num) {
      state.communityNum = num
    }
  },
  actions: {
  },
  modules: {
  }
})
