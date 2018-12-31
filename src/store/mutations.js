export default {
    setCurrentUser (state, payload) {
        state.currentUser = payload
    },
    setUserProfile (state, payload) {
        state.userProfile = payload
    },
    addMessage (state, payload) {
        state.messageList.push(payload)
    },
    seedDb (state, payload) {
        state.db = payload
    }
}
