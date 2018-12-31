<template>
  <div class="hello">
    <h1><br><small>{{$store.state.currentUser['email']}}</small></h1>

    <h2>Essential Links</h2>
    <p v-for="m in msg" :key="m.id">
      {{m}}
    </p>
    <router-link to="/chat">Chat</router-link>   
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      index: 1,
      msg: []
    }
  },
  methods: {
    async get () {
      this.msg.push(this.$store.state.messageList)
    }
  },
  mounted () {
    this.get()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
