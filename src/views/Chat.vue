<template>
  <main id="chat" class="flex flex-column">
    <header class="title-bar flex flex-row flex-center">
      <div class="title-wrapper block center-element">
        <img
          class="logo"
          src="http://feathersjs.com/img/feathers-logo-wide.png"
          alt="Feathers Logo"
        />
        <span class="title">Chat</span>
      </div>
    </header>
    <div v-if="user" class="flex flex-row flex-1 clear">
      <UserList :users="users" @logout="logout" />

      <MessageList :messages="messages" />
    </div>
  </main>
</template>

<script>
import { useFind } from 'feathers-vuex'
import { computed } from '@vue/composition-api'
import UserList from '../components/Users'
import MessageList from '../components/Messages'

export default {
  name: 'Chat',
  components: {
    UserList,
    MessageList
  },
  setup(props, context) {
    const { Message, User } = context.root.$FeathersVuex.api
    const { $store } = context.root

    // Users
    const user = computed(() => $store.state.auth.user)
    const usersParams = computed(() => {
      return {
        query: {
          $sort: { email: 1 },
          $limit: 25
        }
      }
    })
    const { items: users } = useFind({ model: User, params: usersParams })

    // Messages
    const messagesParams = computed(() => {
      return {
        query: {
          $sort: { createdAt: 1 },
          $limit: 25
        }
      }
    })
    const { items: messages } = useFind({
      model: Message,
      params: messagesParams
    })

    // Logout
    function logout() {
      return $store.dispatch('auth/logout')
    }

    return {
      user,
      users,
      messages,
      logout
    }
  }
}
</script>
