import Vue from 'vue'
import Vuex from 'vuex'
const fs = require('fs')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    payments: []
  },
  mutations: {
    ab2str (buf) {
      return String.fromCharCode.apply(null, new Uint16Array(buf))
    },
    setUsers (state, payload) {
      state.users.push(payload)
    },
    setPayments (state, payload) {
      state.payments.push(payload)
    }
  },
  actions: {
    createUser ({ commit }, payload) {
      console.log(JSON.stringify(payload))
      fs.appendFile('Users.txt', JSON.stringify(payload) + '\r\n', function (err) {
        if (err) throw err
      })
    },
    getUser ({ commit }) {
      fs.readFile('Users.txt', (err, data) => {
        if (err) {
          throw err
        }
        data = String.fromCharCode.apply(null, new Uint16Array(data)).split('\n')
        for (var i = 0; i < data.length; i++) {
          if (data[i].length !== 0) {
            commit('setUsers', JSON.parse(data[i]))
          }
        }
      })
    },
    submitPayment ({ commit }, payload) {
      console.log(JSON.stringify(payload))
      fs.appendFile('Payments.txt', JSON.stringify(payload) + '\r\n', function (err) {
        if (err) throw err
      })
    },
    getPayments ({ commit, state }) {
      state.payments = []
      fs.readFile('Payments.txt', (err, data) => {
        if (err) {
          throw err
        }
        data = String.fromCharCode.apply(null, new Uint16Array(data)).split('\n')
        for (var i = 0; i < data.length; i++) {
          if (data[i].length !== 0) {
            commit('setPayments', JSON.parse(data[i]))
          }
        }
      })
    }
  },
  modules: {
  }
})
