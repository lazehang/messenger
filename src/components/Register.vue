<template>
  <div class="login">
    <h2>Register</h2>
    
    <input type="email" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="register">Sign In</button>
    <p><router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'register',
  data () {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
      register: function () {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                alert('User Created !!')
                console.log(user)
                this.$router.push('/login')
            },
            (err) => {
                alert(err.message)
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
