<template>
  <button
    class="focus:outline-none transition ease-in-out duration-150"
    aria-label="Color Mode"
    @click="$colorMode.value === 'dark' ? ($colorMode.preference = 'light') : ($colorMode.preference = 'dark')"
  >
    <client-only>
      <div
        class="transition-all text-sm text-gray-800 dark:text-gray-300 leading-none border-2 border-gray-100 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-400 bg-gray-100 dark:bg-gray-500 inline-flex overflow-hidden focus:outline-none"
      >
        <span
          class="inline-flex items-center transition-all duration-300 ease-in focus:outline-none px-4 py-2 focus:outline-none"
          :class="{ 'bg-gray-200 dark:bg-gray-700': $colorMode.value === 'light' }"
        >
          <FontAwesomeIcon :icon="faLightbulb" class="text-xl focus:outline-none" />
        </span>
        <span
          class="inline-flex items-center transition-all duration-300 ease-in focus:outline-none px-4 py-2 focus:outline-none"
          :class="{ 'bg-gray-200 dark:bg-gray-700': $colorMode.value === 'dark' }"
        >
          <FontAwesomeIcon :icon="faMoon" class="text-xl focus:outline-none" />
        </span>
      </div>
    </client-only>
  </button>
</template>

<script>
import { faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons'

export default {
  computed: {
    faLightbulb () {
      return faLightbulb
    },
    faMoon () {
      return faMoon
    }
  }
}
</script>
