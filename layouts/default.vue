<template>
  <div class="bg-white dark:bg-gray-900 overflow-x-hidden">
    <span class="absolute top-5 right-5">
      <ThemeSelector />
    </span>
    <div class="h-screen w-screen flex flex-col lg:justify-center">
      <Nuxt />
      <AppFooter></AppFooter>
    </div>
  </div>
</template>
