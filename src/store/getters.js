export default {
    loggedIn (state) {
        return localStorage.getItem('token')
    }
}
