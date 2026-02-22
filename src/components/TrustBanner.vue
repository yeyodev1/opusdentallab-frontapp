<script setup lang="ts">
const trustItems = [
  { text: 'Premium Dental Lab', icon: 'fa-solid fa-tooth' },
  { text: 'Digital Workflow', icon: 'fa-solid fa-laptop-medical' },
  { text: 'All-on-X Experts', icon: 'fa-solid fa-star' },
  { text: 'Fast Delivery', icon: 'fa-solid fa-truck-fast' },
  { text: 'Cosmetic Excellence', icon: 'fa-solid fa-gem' },
  { text: 'High Precision', icon: 'fa-solid fa-crosshairs' },
]
</script>

<template>
  <section class="trust-banner">
    <div class="trust-banner__track">
      <span v-for="(item, i) in [...trustItems, ...trustItems, ...trustItems]" :key="i" class="trust-banner__item">
        <i :class="item.icon"></i>
        {{ item.text }}
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.trust-banner {
  background: $surface-dark;
  border-top: 1px solid $border-dark;
  border-bottom: 1px solid $border-dark;
  overflow: hidden;
  padding: 1.25rem 0;

  &__track {
    display: flex;
    gap: 4rem;
    white-space: nowrap;
    animation: scroll 25s linear infinite;
    width: max-content;
  }

  &__item {
    font-size: 1rem;
    font-weight: 600;
    color: $text-secondary;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.7;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: opacity 0.3s, color 0.3s;

    &:hover {
      opacity: 1;
      color: $primary;
    }

    i {
      color: $primary;
      font-size: 1.1rem;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
