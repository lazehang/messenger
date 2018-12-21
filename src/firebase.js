import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAWtIJ8xxJPb8rwn3ABvp8jVdOh48xSKmg',
  authDomain: 'messenger-966b0.firebaseapp.com',
  databaseURL: 'https://messenger-966b0.firebaseio.com',
  projectId: 'messenger-966b0'
}

firebase.initializeApp(config)

const auth = firebase.auth()
const currentUser = auth.currentUser

export {
    auth,
    currentUser
}
