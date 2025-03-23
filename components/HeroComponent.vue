<template>
  <div class="hero__component">
    <div class="hero__component__text px-12">
      <h1 class="koulen text-8xl leading-none tracking-wide">Wo <span class="literata literata-400 text-9xl tracking-tighter text-yellow-400">Sauberkeit</span><br><span class="font-outline-1 text-transparent">zur</span> <span class="text-9xl">Kunst</span> wird<span class="text-yellow-400">.</span></h1>
      <p class="literata literata-200 text-lg">Wir sind dein Luxus-Autoaufbereiter in Osnabrück.</p>
    </div>
    <NuxtImg src="/test_wallpaper.jpg" class="w-full"></NuxtImg>
  </div>
</template>

<style lang="scss" scoped>
.hero__component {
  position: relative;
  &:before, &:after {
    position: absolute;
    width: 100%;
    height: 45%;
    content: '';
  }
  &:before {
    background: linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0));
    bottom: 0;
  }
  &:after {
    background: linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0));
    top: 0;
  }
  &__text {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
}
</style>
<script setup lang="ts">
</script>