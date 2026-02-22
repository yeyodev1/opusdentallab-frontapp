<script setup lang="ts">
const cards = [
  {
    id: 'partners',
    title: 'Our Partners',
    content:
      'We work closely with dentists who demand excellence in materials, results, and ongoing support. From zirconia and lithium disilicate to PEEK and titanium bars, we use only clinically proven materials from trusted brands to ensure every restoration meets the highest standards. Beyond restorations, we invest in your growth. Our CE-accredited courses and clinical resources help partners stay current with the latest techniques in digital dentistry, full-arch restorations, and material selection.',
  },
  {
    id: 'technicians',
    title: 'Our Technicians',
    content:
      'Our technicians are certified experts with extensive training in digital design, esthetic restorations, and full-arch workflows. With a deep understanding of clinical priorities, they approach every case with precision, consistency, and a commitment to excellence. Through continuous education and collaboration with doctors, they ensure restorations are delivered ready to seat — reducing chair time and elevating the quality of every outcome.',
  },
]
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner">
      <!-- Header: title left, description right -->
      <div class="about__header">
        <h2>About us</h2>
        <p>
          We are a full-service dental laboratory committed to delivering
          high-quality, state-of-the-art dental restorations with exceptional
          value.
        </p>
      </div>

      <!-- 3-column grid: image | partners | technicians -->
      <div class="about__grid">
        <!-- Left: Image card -->
        <div class="about__image-card">
          <img
            src="https://res.cloudinary.com/dpimsaaa4/image/upload/v1771786902/Full_Denture_trhwob.png"
            alt="Opus Dental Lab showcase"
          />
          <button class="about__image-btn" aria-label="View more">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>

        <!-- Middle & Right: Info cards -->
        <div
          v-for="card in cards"
          :key="card.id"
          class="about__card"
        >
          <h3>{{ card.title }}</h3>
          <p>{{ card.content }}</p>
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
    max-width: 1400px;
    margin: 0 auto;
  }

  // ─── Header: title left, description right ───
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 2.5rem;

    h2 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 300;
      color: $text-light;
      flex-shrink: 0;
      letter-spacing: -0.02em;
    }

    p {
      max-width: 450px;
      font-size: 0.95rem;
      color: $text-secondary;
      line-height: 1.7;
      text-align: right;
    }
  }

  // ─── 3-column grid ───
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }

  // ─── Image card (left) ───
  &__image-card {
    position: relative;
    border-radius: 1.25rem;
    overflow: hidden;
    border: 1px solid $border-dark;
    background: $surface-card;
    min-height: 320px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__image-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    color: $text-light;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.25s, border-color 0.25s;

    &:hover {
      background: rgba($primary, 0.3);
      border-color: rgba($primary, 0.5);
    }
  }

  // ─── Info cards (middle & right) ───
  &__card {
    background:
      linear-gradient(145deg,
        rgba(255, 255, 255, 0.04) 0%,
        rgba(255, 255, 255, 0.01) 50%,
        transparent 100%);
    border: 1px solid $border-dark;
    border-radius: 1.25rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    min-height: 320px;
    transition: border-color 0.3s;

    &:hover {
      border-color: rgba($primary, 0.2);
    }

    h3 {
      font-size: clamp(1.3rem, 2vw, 1.75rem);
      font-weight: 400;
      color: $text-light;
      letter-spacing: -0.01em;
    }

    p {
      font-size: 0.82rem;
      color: $text-secondary;
      line-height: 1.75;
      margin-top: 1.5rem;
    }
  }
}

@media (max-width: 1024px) {
  .about__grid {
    grid-template-columns: 1fr 1fr;
  }

  .about__image-card {
    grid-column: 1 / -1;
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .about {
    &__header {
      flex-direction: column;
      gap: 1rem;

      p {
        text-align: left;
      }
    }

    &__grid {
      grid-template-columns: 1fr;
    }

    &__image-card {
      grid-column: auto;
      min-height: 260px;
    }
  }
}
</style>
