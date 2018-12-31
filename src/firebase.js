import firebase from 'firebase'
require('firebase/firestore')

var config = {
  apiKey: 'AIzaSyAWtIJ8xxJPb8rwn3ABvp8jVdOh48xSKmg',
  authDomain: 'messenger-966b0.firebaseapp.com',
  databaseURL: 'https://messenger-966b0.firebaseio.com',
  projectId: 'messenger-966b0'
}

firebase.initializeApp(config)

const auth = firebase.auth()
const currentUser = auth.currentUser
const db = firebase.firestore()
db.settings({
  timestampsInSnapshots: true
})
export {
    auth,
    currentUser,
    db
}
