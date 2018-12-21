<template>
  <div class="login">
    <h2>Login</h2>
    
    <input type="email" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">Login</button>
    <p><router-link to="/register">Register</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          if (user) {
            console.log(user)
            const data = {
                            id: user.user.uid,
                            email: user.user.email,
                            token: user.user.uid
                          }
            localStorage.setItem('token', data.token)

            this.$store.commit('setUser', data)
            this.$router.push('/hello')
          }
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorMessage = error.message
          alert(errorMessage)
          // ...
      })
    }
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

.login {
    margin-top: 40px;
}

input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}

button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
    padding: 10px;
}
</style>
