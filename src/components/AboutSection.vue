<script setup lang="ts">
const tabs = [
  {
    id: 'partners',
    title: 'Our Partners',
    content: 'We work closely with dentists who demand excellence in materials, results, and ongoing support. From zirconia and lithium disilicate to PEEK and titanium bars, we use only clinically proven materials from trusted brands to ensure every restoration meets the highest standards. Beyond restorations, we invest in your growth. Our CE-accredited courses and clinical resources help partners stay current with the latest techniques in digital dentistry, full-arch restorations, and material selection.',
  },
  {
    id: 'technicians',
    title: 'Our Technicians',
    content: 'Our technicians are certified experts with extensive training in digital design, esthetic restorations, and full-arch workflows. With a deep understanding of clinical priorities, they approach every case with precision, consistency, and a commitment to excellence. Through continuous education and collaboration with doctors, they ensure restorations are delivered ready to seat — reducing chair time and elevating the quality of every outcome.',
  },
]
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner">
      <div class="about__header">
        <h2>About us</h2>
        <p>We are a full-service dental laboratory committed to delivering high-quality, state-of-the-art dental restorations with exceptional value.</p>
      </div>

      <div class="about__cta-row">
        <p>Need help with a complex case? Our team is ready to support you</p>
        <a href="#contact" class="about__btn">
          Contact us <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div class="about__tabs">
        <div v-for="tab in tabs" :key="tab.id" class="about__tab">
          <h3>{{ tab.title }}</h3>
          <p>{{ tab.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  padding: 6rem 2rem;
  background: $surface-dark;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__header {
    margin-bottom: 3rem;

    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 300;
      color: $text-light;
      margin-bottom: 1rem;
    }

    p {
      color: $text-secondary;
      font-size: 1rem;
      max-width: 600px;
      line-height: 1.6;
    }
  }

  &__cta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;
    background: $surface-card;
    border: 1px solid $border-dark;
    border-radius: 1rem;
    margin-bottom: 3rem;

    p {
      color: $text-secondary;
      font-size: 0.95rem;
    }
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    background: $primary;
    color: $white;
    border-radius: 99px;
    font-weight: 600;
    font-size: 0.9rem;
    white-space: nowrap;
    transition: background 0.3s;

    &:hover {
      background: $secondary;
    }
  }

  &__tabs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  &__tab {
    background: $surface-card;
    border: 1px solid $border-dark;
    border-radius: 1rem;
    padding: 2rem;
    transition: border-color 0.3s;

    &:hover {
      border-color: rgba($primary, 0.3);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: $text-light;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.85rem;
      color: $text-secondary;
      line-height: 1.7;
    }
  }
}

@media (max-width: 768px) {
  .about {
    &__cta-row {
      flex-direction: column;
      text-align: center;
    }

    &__tabs {
      grid-template-columns: 1fr;
    }
  }
}
</style>
