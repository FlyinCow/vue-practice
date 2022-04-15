<script lang="ts" setup>

import { useDefaultPalette } from '~/composables/usePalette';
const colors = useDefaultPalette()
const clickPos = ref({
  x: '0',
  y: '0',
})
const buttonSize = ref({
  width: '0',
  height: '0',
})
const button = ref()
const activated = ref(false)
const onClick = (e: MouseEvent) => {
  clickPos.value = {
    x: `${e.offsetX}px`,
    y: `${e.offsetY}px`,
  }
  activated.value = true
  setTimeout(() => {
    activated.value = false
  }, 500)
}
onMounted(() => {
  buttonSize.value = {
    width: `${button.value.clientWidth}px`,
    height: `${button.value.clientHeight}px`,
  }
})
</script>

<template>
  <button class="animated-button font-sans relative text-center h-40px pl-24px pr-24px" @click="onClick" ref="button">
    <slot></slot>
    <Transition name="ripple">
      <div class="background" v-if="activated"></div>
    </Transition>
  </button>
</template>

<style scoped>
.animated-button {
  border: 0;
  border-radius: 20px;
  font-size: 1rem;
  color: v-bind('colors.white');
  background-color: v-bind('colors.primary');
  overflow: hidden;
}

.ripple-enter-from {
  width: 0;
  height: 0;
  opacity: 0.5;
}

.ripple-enter-to {
  width: calc(v-bind('buttonSize.width')*3);
  height: calc(v-bind('buttonSize.width')*3);
  opacity: 0;
}

.ripple-enter-active {
  transition: width .5s ease, height .5s ease, opacity 1s ease;
}

.background {
  content: '';
  display: inline-block;
  position: absolute;
  left: v-bind('clickPos.x');
  top: v-bind('clickPos.y');
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: v-bind('colors.brighter');

}
</style>