<template>
  <div id="app">
    <header>
      <span>Vue.js PWA FireBase</span>
    </header>
    <main>
      <div>
        <a href="javascript:void(0)" v-if="currentUser" @click="signout">logout</a>
      </div>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import firebase from 'firebase'

export default {
  name: 'app',
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
  },
  methods: {
    signout () {
      firebase.auth().signOut().then(() => {
        this.$store.dispatch('clearData')
        this.$router.replace('/')
      })
    }
  },
  mounted () {
    console.log(this.loggedIn)
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
