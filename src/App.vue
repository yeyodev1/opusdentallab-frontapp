<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const cursorRef = ref<HTMLDivElement | null>(null)
let mouseX = 0
let mouseY = 0
let curX = 0
let curY = 0
let rafId = 0

function onMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
}

function animate() {
  // Lerp for smooth lag
  curX += (mouseX - curX) * 0.15
  curY += (mouseY - curY) * 0.15

  if (cursorRef.value) {
    cursorRef.value.style.left = `${curX}px`
    cursorRef.value.style.top = `${curY}px`
  }

  rafId = requestAnimationFrame(animate)
}

function onMouseOver(e: MouseEvent) {
  const target = e.target as HTMLElement
  const isInteractive = target.closest(
    'a, button, input, select, textarea, [role="button"], .features__cta'
  )
  cursorRef.value?.classList.toggle('cursor-circle--hover', !!isInteractive)
}

// Only enable on pointer devices
const isPointer = typeof window !== 'undefined'
  && window.matchMedia('(pointer: fine)').matches

onMounted(() => {
  if (!isPointer) return
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('mouseover', onMouseOver, { passive: true })
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="app-container">
    <div v-if="isPointer" ref="cursorRef" class="cursor-circle"></div>
    <RouterView />
  </div>
</template>

<style lang="scss">
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

