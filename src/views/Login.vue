<template>
  <main class="login container">
    <div class="min-h-screen bg-no-repeat bg-cover bg-center" style="">
      <div class="flex justify-end">
        <div
          class="bg-white min-h-screen w-1/2 flex justify-center items-center"
        >
          <div>
            <div v-if="error" class="error">
              {{ error.message }}
              <a
                class="close"
                href="javascript://"
                @click.prevent="dismissError"
                >dismiss</a
              >
            </div>
            <form
              class="form"
              method="post"
              @submit.prevent="onSubmit(email, password)"
            >
              <div>
                <span class="text-sm text-gray-900">Welcome back</span>
                <h1 class="text-2xl font-bold">Login to your account</h1>
              </div>
              <div class="my-3">
                <label class="block text-md mb-2" for="email">Email</label>
                <input
                  v-model="email"
                  class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  name="email"
                  placeholder="email"
                />
              </div>
              <div class="mt-5">
                <label class="block text-md mb-2" for="password"
                  >Password</label
                >
                <input
                  v-model="password"
                  class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div class="flex justify-between">
                <button
                  type="submit"
                  class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
                >
                  Login
                </button>
              </div>
              <router-link
                as="button"
                :to="{ name: 'Home' }"
                class="button button-secondary block"
                >Back</router-link
              >
            </form>
            <p class="mt-8">
              Dont have an account?
              <span class="cursor-pointer text-sm text-blue-600">
                Join free today</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'Login',
  setup(props, context) {
    const { $store } = context.root
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    function dismissError() {
      error.value = null
    }
    function onSubmit(email, password) {
      $store
        .dispatch('auth/authenticate', { strategy: 'local', email, password })
        // Just use the returned error instead of mapping it from the store.
        .catch(err => {
          // Convert the error to a plain object and add a message.
          let type = err.className
          err = Object.assign({}, err)
          err.message =
            type === 'not-authenticated'
              ? 'Incorrect email or password.'
              : 'An error prevented login.'
          this.error = err
        })
    }
    return {
      email,
      password,
      error,
      dismissError,
      onSubmit
    }
  }
}
</script>
