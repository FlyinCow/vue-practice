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
  <CarouselFigure :image-option="images" autopaly></CarouselFigure>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
