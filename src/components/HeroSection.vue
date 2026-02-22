<script setup lang="ts">
const features = [
  { icon: 'fa-solid fa-bolt', text: 'Fast Turnaround Time' },
  { icon: 'fa-solid fa-scanner-touchscreen', text: 'We Accept All Digital Scans' },
  { icon: 'fa-solid fa-truck-fast', text: 'Nationwide Shipping' },
]
</script>

<template>
  <section class="hero">
    <div class="hero__overlay"></div>

    <div class="hero__content">
      <p class="hero__subtitle">FASTEST GROWING</p>
      <h1 class="hero__title">OPUS DENTAL<br />LAB LLC</h1>
    </div>

    <div class="hero__sidebar">
      <div v-for="feat in features" :key="feat.text" class="hero__feature">
        <i :class="feat.icon"></i>
        <span>{{ feat.text }}</span>
      </div>

      <a href="#contact" class="hero__cta">
        First Case Credit <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 8rem 3rem 4rem;
  background: linear-gradient(135deg, $primary-dark 0%, $surface-dark 40%, $primary-dark 100%);
  overflow: hidden;

  &__overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 60% 50%, rgba($primary, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__subtitle {
    font-size: clamp(1.2rem, 3vw, 2rem);
    font-weight: 400;
    color: $text-secondary;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }

  &__title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.03em;
    color: $text-light;
  }

  &__sidebar {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.75rem;
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.9rem;
    color: $text-secondary;

    i {
      color: $primary;
      font-size: 0.8rem;
    }
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    padding: 0.85rem 2rem;
    border: 1px solid rgba($white, 0.25);
    border-radius: 99px;
    font-size: 0.9rem;
    font-weight: 500;
    color: $text-light;
    transition: background 0.3s, border-color 0.3s;

    &:hover {
      background: rgba($primary, 0.15);
      border-color: $primary;
    }
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    padding: 7rem 1.5rem 3rem;

    &__sidebar {
      align-items: flex-start;
    }
  }
}
</style>
