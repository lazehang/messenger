export default {
    clearData ({commit}) {
       commit('setCurrentUser', null)
       commit('setUserProfile', {})
    }
}
