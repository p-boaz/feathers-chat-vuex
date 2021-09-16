<template>
  <body class="bg-white">
    <HomeNav />
    <header>
      <!-- Section Hero -->
      <div
        class="container flex items-center mx-auto bg-gray-400 rounded-md h-96"
      >
        <div class="text-center sm:ml-20 text-gray-50 sm:text-left">
          <h1 class="mb-4 text-5xl font-bold">
            Book saunas <br />
            everywhere.
          </h1>
          <p class="inline-block text-lg sm:block">
            The largest online community to rent saunas in Finland.
          </p>
          <button class="px-4 py-2 mt-8 bg-gray-600 rounded">
            Browse
          </button>
        </div>
      </div>
    </header>
    <main class="container px-6 py-16 mx-auto md:px-0">
      <section>
        <h1 class="mb-10 text-3xl font-bold text-gray-600">
          Explore exotic locations in Finland
        </h1>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <div class="bg-gray-300 h-44"></div>
            <h3 class="mt-2 text-lg font-semibold text-gray-500">
              Saunas in <span class="text-gray-700">Helsinki</span>
            </h3>
          </div>
          <div>
            <div class="bg-gray-300 h-44"></div>
            <h3 class="mt-2 text-lg font-semibold text-gray-500">
              Saunas in <span class="text-gray-700">Rovaniemi</span>
            </h3>
          </div>
          <div>
            <div class="bg-gray-300 h-44"></div>
            <h3 class="mt-2 text-lg font-semibold text-gray-500">
              Saunas in <span class="text-gray-700">Ruka</span>
            </h3>
          </div>
        </div>
        <hr class="w-40 mx-auto border-4 rounded-md my-14 sm:mx-0" />
      </section>
      <section>
        <h1 class="inline-block text-3xl font-bold text-gray-600">
          The holy sauna ritual <br />
          (or how does Saunatime work).
        </h1>

        <div class="grid grid-cols-3 gap-4 mt-10">
          <div>
            <h3 class="mt-2 text-lg font-semibold text-gray-500">
              1. Browse and book
            </h3>
            <p class="text-gray-400 text">
              Start by searching for a location. Once you find a sauna you like,
              simply check the availability, book it, and make a secure payment
              right away.
            </p>
          </div>
          <div>
            <h3 class="mt-2 text-lg font-semibold text-gray-500">
              2. Have a great bath
            </h3>
            <p class="text-gray-400 text">
              Meet your host on the date you chose and enjoy the home sauna
              experience. We'll handle the payment to the host after your
              experience.
            </p>
          </div>
          <div>
            <h3 class="mt-2 text-lg font-semibold text-gray-500">
              3. Review the host
            </h3>
            <p class="text-gray-400 text">
              If you enjoyed the experience, let others know by giving a review
              to your sauna host. This way others will know where to go.
            </p>
          </div>
        </div>
      </section>
      <div class="mt-14">
        <p>Ps. You can also become a Saunatime host in few clicks!</p>
      </div>
    </main>
  </body>
</template>

<script>
import HomeNav from '../components/HomeNav'

export default {
  components: {
    HomeNav
  }
}
</script>
