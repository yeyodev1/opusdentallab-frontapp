<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface Product {
  name: string
  image: string
  description: string
}

const products: Product[] = [
  {
    name: 'Screwed Retained',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771780215/Screwed_Retained_s6rthd.png',
    description: 'Secure, retrievable implant-supported restorations with titanium screws for long-term serviceability.',
  },
  {
    name: 'NeoSnap Denture',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771780216/NeoSnap_Denture_rgohyc.png',
    description: 'Snap-on denture system providing excellent retention and easy maintenance for patients.',
  },
  {
    name: 'NeoPrep Hybrid Solution',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771780216/NeoPrep_Hybrid_Solution_qthmdl.png',
    description: 'Advanced hybrid solution combining strength and esthetics for full-arch rehabilitation.',
  },
  {
    name: 'NeoSolidZir Hybrid',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771780217/NeoSolidZir_Hybrid_abtwrd.png',
    description: 'Solid zirconia hybrid prosthesis offering superior strength and natural translucency.',
  },
  {
    name: 'Surgical Guide',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771780217/Surgical_Guide_z7tekb.png',
    description: 'Digitally designed surgical guides for precise and predictable implant placement.',
  },
  {
    name: 'NeoFix Hybrid',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771780216/NeoFix_Hybrid_c4bapy.png',
    description: 'Fixed hybrid prosthesis with titanium bar substructure for maximum passive fit.',
  },
  {
    name: 'NeoClip Hybrid',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771780217/NeoClip_Hybrid_bodmiq.png',
    description: 'Clip-retained hybrid offering easy retrievability and patient comfort.',
  },
  {
    name: 'Cement Retained',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771780218/Cement_Retained_omjht0.png',
    description: 'Traditional cement-retained implant crowns with exceptional marginal fit and esthetics.',
  },
  {
    name: 'NeoSolidZir ProXzir Bridge',
    image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771780217/NeoSolidZir_ProXzir_Bridge_t6kbe6.png',
    description: 'Full-contour zirconia bridge with outstanding strength and lifelike appearance.',
  },
]

const activeIndex = ref(0)
const wrapperRef = ref<HTMLElement | null>(null)

const currentProduct = computed(() => products[activeIndex.value])
const progress = computed(() =>
  `${String(activeIndex.value + 1).padStart(2, '0')} / ${String(products.length).padStart(2, '0')}`
)

function handleScroll() {
  if (!wrapperRef.value) return

  const rect = wrapperRef.value.getBoundingClientRect()

  // Calculate how far down we've scrolled inside the wrapper
  // The distance between products is roughly 80vh
  const scrollStep = window.innerHeight * 0.8

  // If we haven't reached the wrapper yet, stay on product 0
  if (rect.top > 0) {
    if (activeIndex.value !== 0) activeIndex.value = 0
    return
  }

  const scrolledPx = -rect.top
  let index = Math.floor(scrolledPx / scrollStep)

  // Bound the index
  index = Math.max(0, Math.min(products.length - 1, index))

  if (index !== activeIndex.value) {
    activeIndex.value = index
  }
}

function goToIndex(i: number) {
  if (!wrapperRef.value) return
  const scrollStep = window.innerHeight * 0.8

  // Find absolute top of the wrapper
  const rect = wrapperRef.value.getBoundingClientRect()
  const wrapperTop = window.scrollY + rect.top

  // Scroll slightly past the threshold to firmly land on the index
  const targetScrollY = wrapperTop + (i * scrollStep) + 20

  window.scrollTo({ top: targetScrollY, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Initial calculation on mount
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="showcase-wrapper" ref="wrapperRef" :style="{ height: `calc(100vh + ${products.length - 1} * 80vh)` }">
    <section id="showcase" class="showcase">
      <!-- Blurred background glow -->
      <div class="showcase__bg">
        <img
          v-for="(product, i) in products"
          :key="product.name + '-bg'"
          :src="product.image"
          alt=""
          class="showcase__bg-img"
          :class="{ 'showcase__bg-img--active': activeIndex === i }"
        />
      </div>

      <div class="showcase__content">
        <!-- Counter -->
        <div class="showcase__counter">{{ progress }}</div>

        <!-- Centered product display -->
        <div class="showcase__product">
          <div class="showcase__image-area">
            <img
              v-for="(product, i) in products"
              :key="product.name"
              :src="product.image"
              :alt="product.name"
              class="showcase__image"
              :class="{ 'showcase__image--active': activeIndex === i }"
            />
          </div>

          <div class="showcase__info">
            <Transition name="slide-up" mode="out-in">
              <div v-if="currentProduct" :key="currentProduct.name" class="showcase__info-inner">
                <h2>{{ currentProduct.name }}</h2>
                <p>{{ currentProduct.description }}</p>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Dot navigation --> 
        <div class="showcase__dots">
          <button
            v-for="(_, i) in products"
            :key="i"
            class="showcase__dot"
            :class="{ 'showcase__dot--active': activeIndex === i }"
            @click="goToIndex(i)"
            :aria-label="`Product ${i + 1}`"
          />
        </div>

        <!-- Scroll hint — flush at the very bottom -->
        <div class="showcase__hint">
          <span>Scroll to explore</span>
          <i class="fa-solid fa-chevron-down" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.showcase-wrapper {
  position: relative;
  width: 100%;
}

.showcase {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background: $primary-dark;

  // Blurred background glow
  &__bg {
    position: absolute;
    inset: 0;
    z-index: 0;

    &-img {
      position: absolute;
      inset: -60px;
      width: calc(100% + 120px);
      height: calc(100% + 120px);
      object-fit: cover;
      filter: blur(80px) saturate(0.6);
      opacity: 0;
      transition: opacity 0.8s ease;

      &--active {
        opacity: 0.15;
      }
    }
  }

  // Full-height flex layout
  &__content {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  // Counter — top right
  &__counter {
    position: absolute;
    top: 2rem;
    right: 2.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: $text-secondary;
    letter-spacing: 0.15em;
    font-variant-numeric: tabular-nums;
  }

  // Product block
  &__product {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  &__image-area {
    position: relative;
    width: min(520px, 65vw);
    height: min(420px, 48vh);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    position: absolute;
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.5s ease, transform 0.5s ease;
    filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6));

    &--active {
      opacity: 1;
      transform: scale(1);
    }
  }

  // Text
  &__info {
    text-align: center;
    max-width: 620px;
    min-height: 90px;
    padding: 0 1.5rem;
  }

  &__info-inner {
    h2 {
      font-size: clamp(1.5rem, 3vw, 2.25rem);
      font-weight: 700;
      color: $text-light;
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 1rem;
      color: $text-secondary;
      line-height: 1.6;
    }
  }

  // Dots
  &__dots {
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid rgba($white, 0.25);
    background: transparent;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, transform 0.3s;

    &--active {
      background: $primary;
      border-color: $primary;
      transform: scale(1.3);
    }

    &:hover:not(.showcase__dot--active) {
      border-color: rgba($white, 0.5);
    }
  }

  // Scroll hint — pinned to the VERY BOTTOM of the section
  &__hint {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    padding: 1rem 0;
    color: rgba($white, 0.35);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.4));
    animation: bounce 2s infinite;

    i {
      font-size: 0.6rem;
    }
  }
}

// Text transition
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(6px);
  }
}

@media (max-width: 768px) {
  .showcase {
    &__image-area {
      width: 85vw;
      height: 35vh;
    }

    &__counter {
      top: 1.5rem;
      right: 1.5rem;
    }
  }
}
</style>
