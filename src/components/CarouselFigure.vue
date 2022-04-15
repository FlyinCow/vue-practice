<script lang="ts" setup>
const props = withDefaults(defineProps<{
  width?: number,
  autopaly?: boolean,
  imageOption: {
    src: string,
    alt?: string
  }[]
}>(), {
  width: 640,
})

const { imageOption, autopaly } = toRefs(props)

const currentIndex = ref(0)

let timer: number | null;

const setCurrentIndex = (index: number) => {
  const remain = index % imageOption.value.length
  currentIndex.value = remain >= 0 ? remain : remain + imageOption.value.length
}

if (autopaly?.value) {
  timer = setInterval(() => {
    setCurrentIndex(currentIndex.value + 1)
  }, 3500)
}

</script>

<template>
  <div relative overflow-hidden :style="{ width: `${props.width}px` }">
    <div
      class="img-wrapper"
      flex
      :style="{
        transform: `translateX(${- currentIndex * props.width}px)`
      }"
    >
      <img v-for="img, index in imageOption" :src="img.src" :alt="img.alt ?? 'img'" :key="img.src" />
    </div>
    <div class="leftarrow i-carbon-chevron-left" @click="setCurrentIndex(currentIndex - 1)"></div>
    <div class="rightarrow i-carbon-chevron-right" @click="setCurrentIndex(currentIndex + 1)"></div>
    <div class="dot-wrapper" flex>
      <div
        class="dot i-carbon-dot-mark?mask"
        v-for="i in imageOption.length"
        :class="{ active: currentIndex === i - 1 }"
        @click="setCurrentIndex(i - 1)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.img-wrapper {
  transition: transform ease-in-out 0.5s;
}

.leftarrow,
.rightarrow {
  position: absolute;
  width: 3rem;
  height: 3rem;
  background-color: #00000011;
  top: calc(50% - 1.5rem);
  transition: background-color ease-in-out 0.2s;
}

.leftarrow:hover,
.rightarrow:hover {
  background-color: #00000033;
}
.rightarrow {
  right: 0;
}

.dot-wrapper {
  transform: translateX(-50%);
  border-radius: 1rem;
  transition: background-color ease-in-out 0.2s;
  position: absolute;
  left: 50%;
  bottom: 0.2rem;
}

.dot-wrapper:hover {
  background-color: #00000033;
}
.dot {
  color: #00000011;
}

.dot-wrapper:hover .dot:hover {
  color: #00000055;
}

.active {
  color: black;
}
</style>