<script setup lang="ts">
import { ref, onMounted } from 'vue'

const features = [
  'Fast Turnaround Time',
  'We Accept All Digital Scans',
  'Nationwide Shipping',
]

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      // Autoplay might be blocked, handled by muted attribute
    })
  }
})
</script>

<template>
  <section class="hero">
    <!-- Background Video -->
    <div class="hero__video-container">
      <video
        ref="videoRef"
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        poster="https://res.cloudinary.com/dpimsaaa4/image/upload/v1771786054/cloudinary_all_on_x_image_1771786054682.png"
      >
        <source src="https://framerusercontent.com/assets/5PDfWiHUESEfLeLeaYjPJ5IPOBE.mp4" type="video/mp4" />
      </video>
      <div class="hero__video-overlay"></div>
    </div>

    <!-- UI Overlay: Top Right Features -->
    <div class="hero__features">
      <div v-for="feat in features" :key="feat" class="hero__feature">
        {{ feat }}
      </div>
    </div>

    <!-- UI Overlay: Bottom Left Title -->
    <div class="hero__content">
      <p class="hero__subtitle">FASTEST GROWING</p>
      <h1 class="hero__title hero__title--client">
        Welcome to the First<br />
        Dental Lab with Dentist-Led
      </h1>
    </div>

    <!-- UI Overlay: Bottom Right CTA -->
    <div class="hero__cta-wrapper">
      <a href="#contact" class="hero__cta">
        First Case Credit 
        <span class="hero__cta-icon">↗</span>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
  color: $white;

  // ─── Background Video ───
  &__video-container {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7) contrast(1.1);
  }

  &__video-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
        rgba(0, 0, 0, 0.5) 0%,
        transparent 20%,
        transparent 80%,
        rgba(0, 0, 0, 0.6) 100%);
  }

  // ─── Feature List (Top Right) ───
  &__features {
    position: absolute;
    top: 8rem;
    right: 3rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    text-align: right;

    @media (max-width: 768px) {
      top: 6rem;
      right: 1.5rem;
    }
  }

  &__feature {
    font-size: 0.9rem;
    font-weight: 400;
    color: rgba($white, 0.85);
    letter-spacing: 0.02em;
  }

  // ─── Title Content (Bottom Left) ───
  &__content {
    position: absolute;
    bottom: 4rem;
    left: 3rem;
    z-index: 2;

    @media (max-width: 768px) {
      bottom: 3rem;
      left: 1.5rem;
    }
  }

  &__subtitle {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    color: rgba($white, 0.6);
    margin-bottom: 0.25rem;
  }

  &__title {
    font-size: clamp(3.5rem, 8vw, 7rem);
    font-weight: 700;
    line-height: 0.95;
    color: $white;
    letter-spacing: -0.02em;
    text-transform: uppercase;

    &--client {
      font-size: clamp(2rem, 5vw, 4.5rem); // Significantly smaller
      font-weight: 600; // Slightly lighter for readability
      text-transform: none; // Normal casing as requested
      line-height: 1.1; // Better spacing for sentence-case text
      max-width: 800px;
    }
  }

  // ─── CTA Wrapper (Bottom Right) ───
  &__cta-wrapper {
    position: absolute;
    bottom: 4rem;
    right: 3rem;
    z-index: 2;

    @media (max-width: 768px) {
      position: relative;
      bottom: auto;
      right: auto;
      margin-top: 2rem;
      padding-left: 1.5rem;
    }
  }

  &__cta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 99px;
    font-size: 0.9rem;
    font-weight: 500;
    color: $white;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.6);
      transform: translateY(-2px);
    }
  }

  &__cta-icon {
    font-size: 1.1rem;
    line-height: 1;
    margin-bottom: 2px;
  }
}

@media (max-width: 768px) {
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 3rem;

    &__content {
      position: relative;
      bottom: auto;
      left: auto;
      padding: 0 1.5rem;
    }

    &__cta-wrapper {
      position: relative;
      bottom: auto;
      right: auto;
      padding: 0 1.5rem;
      margin-top: 1.5rem;
    }
  }
}
</style>
