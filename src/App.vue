<template>
  <div
    id="app"
    class="min-h-100vh overflow-hidden block relative pb-30 mx-auto flex flex-col"
  >
    <NavBar />
    <main class="mx-auto mt-4 min-h-prose w-full lg:max-w-screen-lg">
      <router-view :key="$route.path" />
    </main>
    <Footer />
  </div>
</template>

<script>
import { onMounted, watch } from '@vue/composition-api'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  setup(props, context) {
    const { $store, $router } = context.root

    // Redirect to chat page if there's a user, otherwise to login page.
    watch(
      () => $store.state.auth.user,
      user => {
        const toRouteName = user ? 'Chat' : 'Login'
        $router.replace({ name: toRouteName })
      },
      { lazy: true }
    )

    // Attempt jwt auth when the app mounts.
    onMounted(() => {
      $store.dispatch('auth/authenticate').catch(error => {
        if (!error.message.includes('Could not find stored JWT')) {
          console.error(error)
        }
      })
    })

    return {}
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
