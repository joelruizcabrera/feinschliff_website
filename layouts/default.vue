<template>
  <div>
    <AppNavigation></AppNavigation>
    <div class="app__wrapper">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import AppNavigation from "~/components/AppNavigation.vue";
</script>