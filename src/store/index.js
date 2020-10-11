import Vue from 'vue'
import Vuex from 'vuex'
import items from '@/items.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headCol: 0,
    activeMenu: null,
    navMenu: items.navigation,
    imgContainer: items.imgContainer,
    reviews: items.reviews,
    faq: items.faq
  },
  getters: {
  },
  mutations: {
    setMenuStatus (state, data) {
      state.activeMenu = data
    },
    setHeadColor (state, data1) {
      state.headCol = data1
    }
  },
  actions: {
  },
  modules: {
  }
})
