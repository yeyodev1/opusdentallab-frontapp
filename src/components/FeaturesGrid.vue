<script setup lang="ts">
const features = [
  {
    title: 'Your First Case, Backed by $150 Credit',
    description: "Whether it's a single crown or a full-mouth restoration, your first case comes with a $150 lab credit!",
    icon: 'fa-solid fa-gift',
    cta: 'First Case Credit',
    span: 'wide',
  },
  {
    title: 'Cosmetic Excellence',
    icon: 'fa-solid fa-gem',
    description: '',
    span: 'normal',
  },
  {
    title: 'High-Precision Restorations',
    icon: 'fa-solid fa-crosshairs',
    description: '',
    span: 'normal',
  },
  {
    title: 'All-on-X Specialists',
    icon: 'fa-solid fa-teeth',
    description: '',
    span: 'normal',
  },
]
</script>

<template>
  <section id="features" class="features">
    <div class="features__inner">
      <div class="features__header">
        <h2>Our Features</h2>
        <p>Cosmetic excellence, high-precision restorations, and All-on-X expertise, everything crafted with care and technical mastery.</p>
      </div>

      <div class="features__grid">
        <div
          v-for="feat in features"
          :key="feat.title"
          class="features__card"
          :class="{ 'features__card--wide': feat.span === 'wide' }"
        >
          <i :class="feat.icon" class="features__icon"></i>
          <h3>{{ feat.title }}</h3>
          <p v-if="feat.description">{{ feat.description }}</p>
          <a v-if="feat.cta" href="#contact" class="features__cta">
            {{ feat.cta }} <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.features {
  padding: 6rem 2rem;
  background: $primary-dark;

  &__inner {
    max-width: 1400px;
    margin: 0 auto;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 3rem;

    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 300;
      color: $text-light;
      flex-shrink: 0;
    }

    p {
      max-width: 500px;
      font-size: 0.95rem;
      color: $text-secondary;
      line-height: 1.6;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  &__card {
    background: $surface-card;
    border: 1px solid $border-dark;
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: border-color 0.3s, transform 0.3s;

    &:hover {
      border-color: rgba($primary, 0.3);
      transform: translateY(-4px);
    }

    &--wide {
      grid-row: span 2;
    }

    h3 {
      font-size: 1.15rem;
      font-weight: 600;
      color: $text-light;
    }

    p {
      font-size: 0.85rem;
      color: $text-secondary;
      line-height: 1.6;
    }
  }

  &__icon {
    font-size: 1.5rem;
    color: $primary;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
    padding: 0.7rem 1.5rem;
    border: 1px solid rgba($white, 0.2);
    border-radius: 99px;
    font-size: 0.85rem;
    font-weight: 500;
    color: $text-light;
    width: fit-content;
    transition: background 0.3s, border-color 0.3s;

    &:hover {
      background: rgba($primary, 0.15);
      border-color: $primary;
    }
  }
}

@media (max-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features {
    &__header {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
