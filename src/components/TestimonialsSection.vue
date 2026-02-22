<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Testimonial {
  quote: string
  name: string
  practice: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote: "This is our favorite lab. It is clear that they love their work, and our patients couldn't be happier with the results. Their commitment to excellence is evident in every case.",
    name: 'Fatima Butt',
    practice: 'Z FAMILY AND COSMETIC DENTISTRY',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771804384/WhatsApp_Image_Feb_22_2026_ghbxoh.jpg'
  },
  {
    quote: "This is our laboratory of choice. Their exceptional craftsmanship and passion for their work translate into superior clinical outcomes that both our team and our patients truly appreciate.",
    name: 'Dr. Saad',
    practice: 'Z FAMILY AND COSMETIC DENTISTRY',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771804394/WhatsApp_Image_yarmxw.jpg'
  }
]

const activeIdx = ref(0)
const currentTestimonial = computed(() => testimonials[activeIdx.value])

// --- Auto-Rotation Logic ---
let timer: ReturnType<typeof setInterval> | null = null

function startAutoRotation() {
  stopAutoRotation()
  timer = setInterval(() => {
    activeIdx.value = (activeIdx.value + 1) % testimonials.length
  }, 7000) // 7 seconds is ideal for reading shorter quotes
}

function stopAutoRotation() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function handleManualEntry(index: number) {
  activeIdx.value = index
  startAutoRotation() // Reset timer on manual click
}

onMounted(() => {
  startAutoRotation()
})

onUnmounted(() => {
  stopAutoRotation()
})
</script>

<template>
  <section class="testimonials">
    <div class="testimonials__inner">
      <div class="testimonials__header">
        <h2>What Our Clients Say</h2>
        <p class="testimonials__subtitle">— Trusted by Professionals, Proven by Results —</p>
      </div>

      <div class="testimonials__content-grid">
        <!-- Left Column: Active Content -->
        <div class="testimonials__active-pane">
          <Transition name="fade-slide" mode="out-in">
            <div :key="activeIdx" class="testimonials__card">
              <span class="testimonials__quote-icon">“</span>
              <blockquote class="testimonials__quote">
                {{ currentTestimonial?.quote }}
              </blockquote>
              
              <div class="testimonials__author">
                <div class="testimonials__author-info">
                  <strong>{{ currentTestimonial?.name }}</strong>
                  <span>{{ currentTestimonial?.practice }}</span>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Right Column: Avatar Navigation -->
        <div class="testimonials__nav">
          <div class="testimonials__avatars-reel">
            <button
              v-for="(t, i) in testimonials"
              :key="t.name"
              class="testimonials__avatar-btn"
              :class="{ 'testimonials__avatar-btn--active': activeIdx === i }"
              @click="handleManualEntry(i)"
              :aria-label="`View testimonial from ${t.name}`"
            >
              <img :src="t.image" :alt="t.name" class="testimonials__avatar-img" />
              <div class="testimonials__avatar-overlay"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  padding: 8rem 2rem;
  background: $surface-dark;
  overflow: hidden;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__header {
    text-align: center;
    margin-bottom: 5rem;

    h2 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 300;
      color: $text-light;
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
    }

    &__subtitle {
      color: $text-secondary;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }
  }

  &__content-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  // ─── Active Content Pane ───
  &__active-pane {
    position: relative;
    min-height: 400px;
    display: flex;
    align-items: center;
  }

  &__card {
    text-align: left;
  }

  &__quote-icon {
    font-size: 6rem;
    line-height: 1;
    color: rgba($primary, 0.4);
    font-family: serif;
    display: block;
    margin-bottom: -1rem;
    margin-left: -0.5rem;
  }

  &__quote {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 500;
    color: $text-light;
    line-height: 1.5;
    margin-bottom: 2.5rem;
    font-style: italic;
  }

  &__author-info {
    strong {
      display: block;
      font-size: 1.25rem;
      color: $text-light;
      margin-bottom: 0.25rem;
    }

    span {
      font-size: 0.9rem;
      color: $text-secondary;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  // ─── Avatar Navigation ───
  &__nav {
    display: flex;
    justify-content: center;
  }

  &__avatars-reel {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    max-width: 400px;

    @media (max-width: 1024px) {
      flex-direction: row;
      max-width: none;
    }
  }

  &__avatar-btn {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid transparent;
    padding: 0;
    background: none;
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }

    &::after {
      content: '';
      position: absolute;
      inset: -4px;
      border: 1px solid rgba($primary, 0.3);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &--active {
      transform: scale(1.2);
      border-color: $primary;
      box-shadow: 0 10px 25px rgba($primary, 0.3);

      &::after {
        opacity: 1;
      }

      .testimonials__avatar-overlay {
        opacity: 0;
      }

      .testimonials__avatar-img {
        filter: grayscale(0);
      }
    }

    &:hover:not(&--active) {
      transform: translateY(-5px);

      .testimonials__avatar-overlay {
        opacity: 0.2;
      }
    }
  }

  &__avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    transition: filter 0.3s;
  }

  &__avatar-overlay {
    position: absolute;
    inset: 0;
    background: $primary-dark;
    opacity: 0.4;
    transition: opacity 0.3s;
  }
}

// ─── Transitions ───
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
