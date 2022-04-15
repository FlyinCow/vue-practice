<script lang="ts" setup>
import { useDefaultPalette } from '~/composables/usePalette';

const props = withDefaults(defineProps<{
  title?: string,
  type: 'elevated' | 'filled' | 'outline',
  width?: number,
  closable?: boolean,
  menu?: boolean,
}>(), {
  type: 'elevated',
})

const colors = useDefaultPalette()

</script>

<template>
  <div class="m-card font-sans" :class="props.type">
    <div class="m-card-title" v-if="props.title">{{ props.title }}</div>
    <div class="m-card-cover">
      <slot name="cover"></slot>
    </div>
    <div class="m-card-content">
      <slot></slot>
    </div>
    <div class="m-card-action flex justify-end items-center">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style scoped>
.m-card {
  width: 320px;
  border-radius: 12px;
  color: v-bind('colors.white');
  background-color: v-bind('colors.brighter');
  padding: 16px;
}

.elevated {
  box-shadow: 2px 2px 5px v-bind('colors.grey');
}

.outline {
  /* box-sizing: border-box; */
  padding: 15px;
  border: 1px solid v-bind('colors.black');
}

.m-card-title {
  font-size: 2rem;
  text-align: left;
}

.m-card-action {
  text-align: right;
  padding-top: 16px;
}
</style>