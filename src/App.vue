<script setup lang="ts">
const imageImported = import.meta.globEager("~/assets/img/*")
const images: any[] = []
for (const image in imageImported) {
  images.push({
    src: imageImported[image].default,
    alt: image
  })
}
</script>

<template>
  <!-- <CarouselFigure :image-option="images" autopaly></CarouselFigure> -->
  <div class="flex justify-start justify-evenly">
    <AnimatedButton>click me!</AnimatedButton>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  font-size: 18px;
}
</style>
