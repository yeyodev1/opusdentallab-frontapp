<script setup lang="ts">
const categories = [
  { number: '01', name: 'Fixed', icon: 'fa-solid fa-tooth', description: 'High-Precision Crowns & Bridges' },
  { number: '02', name: 'Implants', icon: 'fa-solid fa-screwdriver-wrench', description: 'Customized Implant Solutions' },
  { number: '03', name: 'Removables', icon: 'fa-solid fa-teeth-open', description: 'Comfortable, Durable Dentures' },
  { number: '04', name: 'Retainers', icon: 'fa-solid fa-teeth', description: 'Orthodontic Retention Appliances' },
]
</script>

<template>
  <section id="products" class="products">
    <div class="products__inner">
      <h2>Our Products</h2>
      <p class="products__subtitle">We offer a comprehensive range of dental restorations and appliances, including fixed prosthetics, implants, removables, and retainers</p>

      <div class="products__grid">
        <a v-for="cat in categories" :key="cat.number" href="#catalog" class="products__card">
          <span class="products__number">{{ cat.number }}</span>
          <i :class="cat.icon" class="products__icon"></i>
          <h3>{{ cat.name }}</h3>
          <p>{{ cat.description }}</p>
          <i class="fa-solid fa-arrow-right products__arrow"></i>
        </a>
      </div>

      <div class="products__cta-row">
        <h3>Have a case to discuss?</h3>
        <a href="#contact" class="products__btn">
          Connect with Our Team <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products {
  padding: 6rem 2rem;
  background: $primary-dark;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: $text-light;
    margin-bottom: 1rem;
  }

  &__subtitle {
    color: $text-secondary;
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto 4rem;
    line-height: 1.6;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    margin-bottom: 3rem;
  }

  &__card {
    background: $surface-card;
    border: 1px solid $border-dark;
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: border-color 0.3s, transform 0.3s;

    &:hover {
      border-color: rgba($primary, 0.4);
      transform: translateY(-6px);

      .products__arrow {
        opacity: 1;
        transform: translateX(4px);
      }
    }

    h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: $text-light;
    }

    p {
      font-size: 0.8rem;
      color: $text-secondary;
      line-height: 1.5;
    }
  }

  &__number {
    font-size: 2rem;
    font-weight: 800;
    color: rgba($white, 0.08);
  }

  &__icon {
    font-size: 1.5rem;
    color: $primary;
  }

  &__arrow {
    margin-top: auto;
    color: $primary;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  &__cta-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    background: $surface-card;
    border: 1px solid $border-dark;
    border-radius: 1rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      color: $text-light;
    }
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.5rem;
    border: 1px solid rgba($white, 0.2);
    border-radius: 99px;
    font-size: 0.85rem;
    font-weight: 500;
    color: $text-light;
    transition: background 0.3s, border-color 0.3s;

    &:hover {
      background: rgba($primary, 0.15);
      border-color: $primary;
    }
  }
}

@media (max-width: 1024px) {
  .products__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .products__grid {
    grid-template-columns: 1fr;
  }

  .products__cta-row {
    flex-direction: column;
    text-align: center;
  }
}
</style>
