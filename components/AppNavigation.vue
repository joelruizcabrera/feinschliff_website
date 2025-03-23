<script setup lang="ts">
const navigationItems = ref([
  {
    name: "Test 1",
    url: "/test"
  },
  {
    name: "Test 2",
    url: "/test"
  },
  {
    name: "Test 3",
    url: "/test"
  }
])

console.log(navigationItems)
</script>

<template>
  <header class="px-12 py-6 bg-[rgba(0,0,0,0.75)] z-2 backdrop-blur-sm app__navigation flex shadow flex-row items-center justify-between fixed w-full">
    <div class="app__navigation__logo">
      <NuxtImg src="/logo.png" class="h-8"></NuxtImg>
    </div>
    <div class="app__navigation__links flex flex-row gap-x-6">
      <NuxtLink
          class="text-white"
          v-for="item in navigationItems"
          :to="item.url" :text="item.name"
      >
        {{item.name}}
      </NuxtLink>
    </div>
  </header>
</template>