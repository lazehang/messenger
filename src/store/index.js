import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import Vue from 'vue'
const firebase = require('@/firebase')

Vue.use(Vuex)

//  handle page reload
firebase.auth.onAuthStateChanged(function (user) {
    if (user) {
        store.commit('setCurrentUser', user)
        store.commit('seedDb', firebase.db)
    }
})

export const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
