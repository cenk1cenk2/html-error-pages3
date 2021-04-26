<template>
  <div class="flex items-center pt-20 lg:pt-0 lg:items-center lg:my-0 lg:pl-48 antialiased">
    <div
      class="w-11/12 lg:max-w-3xl shadow-2xl transition ease-in-out duration-300 bg-gray-50 dark:bg-gray-800 bg-opacity-90 border-2 lg:border-4 border-gray-200 dark:border-gray-700 mx-auto"
    >
      <div class="p-9 lg:p-12">
        <div class="-mt-16 lg:-mt-96 lg:relative lg:top-72 lg:-left-64 lg:mr-64">
          <div
            class="block rounded-full shadow-xl bg-gray-50 dark:bg-gray-800 transition ease-in-out duration-500 border-2 lg:border-4 border-gray-200 dark:border-gray-700 h-48 w-48 lg:h-96 lg:w-96 mx-auto lg:mx-0"
          >
            <p class="text-7xl lg:text-9xl h-full flex justify-center place-items-center text-red-500 font-bold font-mono leading-none">{{ status.code }}</p>
          </div>
        </div>
        <div class="lg:pl-48">
          <h1 class="text-4xl font-bold pt-8 lg:pt-0 text-center font-bold text-primary-500 leading-none uppercase whitespace-nowrap truncate">{{ status.message }}</h1>

          <div class="mx-auto lg:mx-0 pt-3 border-b-2 border-primary-500 opacity-50 mt-12"></div>

          <div class="mt-12 pb-16 lg:pb-0 w-4/5 mx-auto flex flex-wrap items-center justify-between text-5xl">
            <a :href="`mailto:cenk@kilic.dev`"><FontAwesomeIcon :icon="fa.email" class="transition-transform transform hover:scale-110 hover:text-primary-500" /></a>
            <a href="https://kilic.dev"><FontAwesomeIcon :icon="fa.home" class="transition-transform transform hover:scale-110 hover:text-primary-500" /></a>
            <a v-if="from" :href="from"><FontAwesomeIcon :icon="fa.refresh" class="transition-transform transform hover:scale-110 hover:text-primary-500" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { faEnvelope, faHome, faRedo } from '@fortawesome/free-solid-svg-icons'
import { computed, defineComponent, useRoute, useContext, onServerPrefetch } from '@nuxtjs/composition-api'
import { isURL } from 'class-validator'
import httpStatus from 'http-status'

export default defineComponent({
  setup () {
    const route = useRoute()

    const status = computed(() => {
      const query = route.value.query.code

      if (!Array.isArray(query)) {
        const code = parseInt(query, 10)

        if (code && httpStatus[code] && code >= 400 && code < 600) {
          return { code, message: String(httpStatus[code]) }
        }
      }

      return { code: 'WTF', message: 'Nothing to see here' }
    })

    const from = computed<string | undefined>(() => {
      const from = route.value.query.from

      if (!Array.isArray(from) && isURL(from)) {
        return from
      }
    })

    onServerPrefetch(() => {
      // return the status code first
      const context = useContext()
      if (typeof status?.value?.code === 'number') {
        context.res.statusCode = status.value.code
      }
    })

    return {
      status,
      from,
      fa: {
        home: faHome,
        refresh: faRedo,
        email: faEnvelope
      }
    }
  }
})
</script>
