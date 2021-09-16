<template>
  <div id="analytics">
    <!-- breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <router-link class="text-gray-700" to="/">Home</router-link>
          <svg
            class="fill-current w-3 h-3 mx-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </li>
        <li class="flex items-center">
          <router-link class="text-gray-700" to="/dashboard"
            >Dashboard</router-link
          >
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->
    <article class="prose lg:prose-xl">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        {{ response }}
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a series of rabies cases springing up around the country.
      </p>
      <!-- ... -->
    </article>
  </div>
</template>

<script>
import { useFetch } from 'vue-use-web'

export default {
  name: 'DashboardAnalytics',
  setup() {
    const { response } = useFetch(
      'https://ny.barplaybook.com/api/interviews?key=eFYobp9LNH5H33h45NxF9JNBchCSlsX2'
    )

    return {
      response
    }
  }
}
</script>
