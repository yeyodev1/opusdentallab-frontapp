<script setup lang="ts">
import { ref } from 'vue'

interface Testimonial {
  quote: string
  name: string
  practice: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    quote: "IPro always goes above and beyond for our patients. I've been extremely happy with their service and have referred several colleagues to them.",
    name: 'Nichole Lamb',
    practice: 'Brightview Family Dental',
    initials: 'NL',
  },
  {
    quote: "I've been using Perfect Crown for the past two and a half years, and their products are consistently excellent. My crowns fit like a glove and look lifelike.",
    name: 'Jilbert Neman',
    practice: 'DDS',
    initials: 'JN',
  },
  {
    quote: 'The quality of their zirconia restorations is outstanding. Turnaround is consistently fast and color matching is exceptional.',
    name: 'Michael Torres',
    practice: 'Smile Design Studio',
    initials: 'MT',
  },
]

const activeIdx = ref(0)
</script>

<template>
  <section class="testimonials">
    <div class="testimonials__inner">
      <h2>What Our Clients Say</h2>
      <p class="testimonials__subtitle">— Trusted by Professionals, Proven by Results —</p>

      <div class="testimonials__divider"></div>

      <div v-if="testimonials[activeIdx]" class="testimonials__card">
        <span class="testimonials__quote-icon">"</span>
        <blockquote>{{ testimonials[activeIdx]?.quote }}</blockquote>

        <div class="testimonials__author">
          <div class="testimonials__avatar">{{ testimonials[activeIdx]?.initials }}</div>
          <div>
            <strong>{{ testimonials[activeIdx]?.name }}</strong>
            <p>{{ testimonials[activeIdx]?.practice }}</p>
          </div>
        </div>
      </div>

      <div class="testimonials__dots">
        <button
          v-for="(_, i) in testimonials"
          :key="i"
          class="testimonials__dot"
          :class="{ 'testimonials__dot--active': activeIdx === i }"
          @click="activeIdx = i"
          :aria-label="`Testimonial ${i + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  padding: 6rem 2rem;
  background: $surface-dark;

  &__inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: $text-light;
    margin-bottom: 0.75rem;
  }

  &__subtitle {
    color: $text-secondary;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  &__divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, $border-dark, rgba($primary, 0.3), $border-dark, transparent);
    margin-bottom: 3rem;
  }

  &__card {
    text-align: left;
    padding: 2rem;
  }

  &__quote-icon {
    font-size: 4rem;
    font-family: Georgia, serif;
    color: rgba($white, 0.15);
    line-height: 1;
  }

  blockquote {
    font-size: 1.25rem;
    font-weight: 500;
    color: $text-light;
    line-height: 1.6;
    margin: 1rem 0 2rem;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 1rem;

    strong {
      font-size: 0.95rem;
      color: $text-light;
    }

    p {
      font-size: 0.8rem;
      color: $text-secondary;
      margin-top: 0.2rem;
    }
  }

  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: $primary;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
  }

  &__dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid rgba($white, 0.3);
    background: transparent;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s;

    &--active {
      background: $primary;
      border-color: $primary;
    }
  }
}
</style>
