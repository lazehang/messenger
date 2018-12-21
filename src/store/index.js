import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
