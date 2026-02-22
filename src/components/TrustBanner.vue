<script setup lang="ts">
const partners = [
  'University of Miami',
  'Prep Doctors',
  'NADL',
  'Jackson Health System',
  'TCS',
  'Henry Schein',
]
</script>

<template>
  <section class="trust-banner">
    <div class="trust-banner__track">
      <span v-for="(partner, i) in [...partners, ...partners]" :key="i" class="trust-banner__item">
        {{ partner }}
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
    letter-spacing: 0.05em;
    text-transform: uppercase;
    opacity: 0.7;
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
