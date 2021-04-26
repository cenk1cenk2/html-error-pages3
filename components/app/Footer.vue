<template>
  <footer class="h-16 relative w-full pt-2 pb-2 lg:pt-8 lg:pb-8">
    <div class="h-full w-full lg:container mx-auto px-4 lg:px-8 flex items-center justify-center">
      <div class="flex items-center space-x-4">
        <a
          href="https://kilic.dev"
          rel="noopener noreferrer"
          title="kilic.dev"
          name="kilic.dev"
          class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4"
        >
          <span class="rounded-lg bg-gray-200 dark:bg-gray-800 p-1">
            <FontAwesomeIcon :icon="fa.terminal" class="text-primary-500 text-lg pt-1" />
          </span>
          <span class="text-xl ml-1/2">kilic.dev</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    return {
      fa: {
        terminal: faTerminal
      }
    }
  }
})
</script>
