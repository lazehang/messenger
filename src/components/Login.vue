<template>
  <div class="login">
    <transition name="fade">
        <div v-if="performingRequest" class="loading">
            <p>Loading...</p>
        </div>
    </transition>
    <h2>Login</h2>
    
    <input type="email" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">Login</button>
    <small><router-link to="/register">Register</router-link></small>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      performingRequest: false
    }
  },
  methods: {
    login: function () {
      this.performingRequest = true
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          if (user) {
            console.log(user)
            this.$store.commit('setCurrentUser', user.user)
            this.performingRequest = false
            this.$router.push('/hello')
          }
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorMessage = error.message
          this.performingRequest = false
          alert(errorMessage)
          // ...
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.login {
    margin-top: 40px;
}

input {
    margin: 10px 0;
    width: 300px;
    padding: 15px;
}

button {
    margin-top: 20px;
    width: 160px;
    cursor: pointer;
    padding: 10px;
    color: #4DBA87;
    background-color: #fff;
    border: 1px solid #4DBA87;
}
</style>
