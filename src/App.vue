<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { onMounted, watch } from '@vue/composition-api'
export default {
  name: 'App',
  setup(props, context) {
    const { $store, $router } = context.root

    // Redirect to dashboard page if there's a user, otherwise to login page.
    watch(
      () => $store.state.auth.user,
      user => {
        const toRouteName = user ? 'DashboardHome' : 'Login'
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

<style></style>
