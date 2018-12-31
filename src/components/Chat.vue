<template>
  <div>
    <beautiful-chat
      :agentProfile="agentProfile"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :participants="participants" />
      <a href="#" @click.prevent="openChat()">Open the chat window</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      agentProfile: {
        teamName: 'Vue Beautiful Chat',
        imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
      },
      messageList: [],
      newMessagesCount: 0,
      isChatOpen: false,
      participants: [
            // {
            //     id: 'mattmezza',
            //     name: 'Matteo',
            //     imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
            // },
            {
                id: 'support',
                name: 'Support',
                imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
            }
        ]
    }
  },
  methods: {
    sendMessage (msg) {
      if (msg.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.$store.commit('addMessage', msg)
      }
    },
    onMessageWasSent (msg) {
        this.$store.commit('addMessage', msg)
    },
    openChat () {
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      this.isChatOpen = false
    }
  },
  created () {
      this.messageList = this.$store.getters.getMessageList
  }
}
</script>
