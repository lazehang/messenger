export default {
    clearData ({commit}) {
       commit('setCurrentUser', null)
       commit('setUserProfile', {})
    },
    init ({state}) {
        let convoRef = state.db.collection('messageList')
        convoRef.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.data.author = doc.data.author === state.currentUser.email ? 'me' : doc.data.author
            state.messageList.push(doc.data())
          })
        })
        console.log(state.messageList)
    },
    sendMessage ({commit, state}, msg) {
        let convoRef = state.db.collection('messageList')
        msg.author = msg.author === 'me' ? state.currentUser.email : msg.author
        convoRef.add(msg).then(() => {
            msg.author = msg.author === state.currentUser.email ? 'me' : msg.author
            commit('addMessage', msg)
        })
    }
}
