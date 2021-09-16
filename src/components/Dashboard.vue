<template>
  <div id="main-body" class="leading-normal tracking-normal">
    <div class="flex flex-wrap">
      <Sidebar />

      <div
        id="main-content"
        class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
        :class="sideBarOpen ? 'overlay' : ''"
      >
        <NavBar @logout="logout" />

        <div class="p-6 bg-gray-100 mb-20">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import Footer from './Footer'
import { useFind } from 'feathers-vuex'
import { computed } from '@vue/composition-api'

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    NavBar,
    Footer
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
  },
  computed: {
    ...mapState(['sideBarOpen'])
  }
}
</script>
