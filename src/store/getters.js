export default {
    loggedIn (state) {
        return !!state.user.token
    },
    getMessageList (state) {
        return state.messageList
    }
}
