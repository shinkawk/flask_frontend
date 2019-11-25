import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {},
    token: null
  },
  getters: {
    getUsers: state => { return state.users },
    getToken: state => { return state.token },
    isAuthenticated: () => { return false }
  },
  mutations: {
    setUsers: (state, users) => { state.users = users },
    setToken: (state, token) => { state.token = token }
  },
  actions: {
  },
  modules: {
  }
})
