import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state: {
    login: false
  },
  getters: {
    userInfo: state => state.userInfo
  },
  mutations: {
    setParentItem (state, data) {
      state.parentItem = data
    }
  },
  actions: {},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
