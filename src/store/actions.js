import firebase from 'firebase'
export default {
    async logout ({commit}) {
        firebase.auth().signOut().then(() => {
            commit('setUser', {
              id: '',
              email: '',
              token: ''
            })
            localStorage.removeItem('token')
        })
    }
}
