<script lang="ts" setup>
import { useDefaultPalette } from '~/composables/usePalette';
const props = withDefaults(defineProps<{
  type: 'elevated' | 'filled' | 'outline',
}>(), {
  type: 'elevated',
})
const colors = useDefaultPalette()
</script>

<template>
  <button class="m-button flex items-center text-center h-40px pl-16px pr-24px font-sans" :class="props.type">
    <div class="m-button-icon">
      <slot name="icon"></slot>
    </div>
    <div class="m-button-text ml-8px">
      <slot></slot>
    </div>
  </button>
</template>

<style scoped>
.m-button {
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 24px;
  font-size: 1rem;
  color: v-bind('colors.white');
  background-color: v-bind('colors.primary');
  transition: background-color .1s;
}

.m-button:hover {
  background-color: v-bind('colors.bright');
}

.filled {
  border: 0;
}

.elevated {
  border: 0;
  box-shadow: 2px 2px 5px v-bind('colors.grey');
}

.outline {
  box-sizing: border-box;
  border: 2px solid v-bind('colors.black');
}
</style>