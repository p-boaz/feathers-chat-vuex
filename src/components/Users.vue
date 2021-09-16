<template>
  <section class="container mx-auto p-6 font-mono">
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr
              class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"
            >
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Age</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="user in users" :key="user._id" class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      :src="user.avatar || dummyUser.avatar"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-black">
                      {{ user.email || dummyUser.email }}
                    </p>
                    <p class="text-xs text-gray-600">Developer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-ms font-semibold border">22</td>
              <td class="px-4 py-3 text-xs border">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
                >
                  Acceptable
                </span>
              </td>
              <td class="px-4 py-3 text-sm border">6/4/2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const dummyUser = [
      {
        email: 'noemail',
        avatar:
          'https://s.gravatar.com/avatar/7eb0f9eac6df7e6be3971144999a2152?s=200'
      }
    ]
    const userOrUsers = computed(() =>
      props.users.length === 1 ? 'user' : 'users'
    )

    return {
      dummyUser,
      userOrUsers
    }
  }
}
</script>
