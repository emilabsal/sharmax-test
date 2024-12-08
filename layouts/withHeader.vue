<template>
  <div>
    <div class="h-[122px] relative">
      <TheHeader :class="[targetIsVisible ? 'absolute' : 'fixed']" />
    </div>
    <div ref="target"></div>
    <slot></slot>
  </div>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(target, ([entry], observerElement) => {
  targetIsVisible.value = entry?.isIntersecting || false
})
</script>
