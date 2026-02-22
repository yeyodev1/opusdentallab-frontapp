<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Product {
  name: string
  image: string
  category: string
}

const products: Product[] = [
  // Removables
  { name: 'Flexi Partial', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771786901/Flexi_Partial_kcb1o7.png', category: 'Removables' },
  { name: 'Acrylic Partials', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771786901/Acrylic_Partials_wqlg5x.png', category: 'Removables' },
  { name: 'Full Denture', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771786902/Full_Denture_trhwob.png', category: 'Removables' },
  // Appliances
  { name: 'Nance Appliance', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787007/Nance_Appliance_tujfjk.png', category: 'Appliances' },
  { name: 'Sport Guard', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787007/Sport_Guard_vreplk.png', category: 'Appliances' },
  { name: 'Soft Inside Hard Outside', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787007/Soft_inside_Hard_Outside_mvunn7.png', category: 'Appliances' },
  { name: 'Haas Expander', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787008/Haas_Expander_li1qzb.png', category: 'Appliances' },
  { name: 'Cetlin Acco', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787008/Cetlin_Acco_tm3ojs.png', category: 'Appliances' },
  // Retainers
  { name: 'Hawley Retainers', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787008/Hawley_Retainers_vpldgg.png', category: 'Retainers' },
  { name: 'Essix Retainers', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787007/Essix_Retainers_lcc4a9.png', category: 'Retainers' },
  // More Appliances
  { name: 'Schwartz Expander', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787008/Schwartz_Expander_dhjugh.png', category: 'Appliances' },
  { name: 'Space Regaining', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787009/Space_Regaining_rwx4d0.png', category: 'Appliances' },
  { name: 'Spring Aligner', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787008/Spring_Aligner_rvq5ex.png', category: 'Appliances' },
  { name: 'NTI Appliance', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787007/NTI_Appliance_ynloz8.png', category: 'Appliances' },
  { name: 'Thumb Habit', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787009/Thumb_Habit_xvxiu0.png', category: 'Appliances' },
  { name: 'SnoreX', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787013/SnoreX_b74j9p.png', category: 'Appliances' },
  { name: 'Frankel', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787013/Frankel_f3yphl.png', category: 'Appliances' },
  { name: 'Palatal Expander', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787017/Palatal_Expander_gff81q.png', category: 'Appliances' },
  { name: 'Lip Bumper', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787017/Lip_Bumper_mjsdep.png', category: 'Appliances' },
]

const trackRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
let startX = 0
let scrollLeft = 0
let pointerDownX = 0

function onPointerDown(e: PointerEvent) {
  if (!trackRef.value) return
  isDragging.value = true
  startX = e.clientX - trackRef.value.offsetLeft
  scrollLeft = trackRef.value.scrollLeft
  pointerDownX = e.clientX
  trackRef.value.setPointerCapture(e.pointerId)
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging.value || !trackRef.value) return
  e.preventDefault()
  const x = e.clientX - trackRef.value.offsetLeft
  trackRef.value.scrollLeft = scrollLeft - (x - startX) * 1.5
}

function onPointerUp() {
  isDragging.value = false
}

function onCardClick(e: MouseEvent) {
  if (Math.abs(e.clientX - pointerDownX) > 5) {
    e.preventDefault()
  }
}

// Auto-scroll animation
let autoScrollId = 0
const isPaused = ref(false)
let scrollDirection = 1

function autoScroll() {
  if (!trackRef.value || isDragging.value || isPaused.value) {
    autoScrollId = requestAnimationFrame(autoScroll)
    return
  }

  // Calculate movement based on direction
  trackRef.value.scrollLeft += 0.8 * scrollDirection

  // Bounce/Alternate effect when reaching ends
  const maxScroll = trackRef.value.scrollWidth - trackRef.value.clientWidth

  // If we hit the right boundary, reverse to move left
  if (trackRef.value.scrollLeft >= maxScroll - 1) {
    scrollDirection = -1
  }
  // If we hit the left boundary (start), reverse to move right
  else if (trackRef.value.scrollLeft <= 0) {
    scrollDirection = 1
  }

  autoScrollId = requestAnimationFrame(autoScroll)
}

onMounted(() => {
  autoScrollId = requestAnimationFrame(autoScroll)
})

onUnmounted(() => {
  cancelAnimationFrame(autoScrollId)
})
</script>

<template>
  <section id="catalog" class="gallery">
    <div class="gallery__inner">
      <div class="gallery__header">
        <h2>Explore Our Catalog</h2>
        <div class="gallery__header-right">
          <p>
            From removables and retainers to precision orthodontic appliances —
            browse our complete line of premium dental products.
          </p>
          <RouterLink to="/catalog" class="gallery__btn">
            View Full Catalog <i class="fa-solid fa-arrow-right"></i>
          </RouterLink>
        </div>
      </div>

      <div class="gallery__hint">
        <i class="fa-solid fa-hand-pointer"></i>
        <span>Drag to explore</span>
      </div>
    </div>

    <div
      ref="trackRef"
      class="gallery__track"
      :class="{ 'gallery__track--dragging': isDragging }"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointerleave="onPointerUp"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <RouterLink
        v-for="(product, i) in products"
        :key="i"
        to="/catalog"
        class="gallery__card"
        draggable="false"
        @dragstart.prevent
        @click="onCardClick"
      >
        <div class="gallery__card-image">
          <img
            :src="product.image"
            :alt="product.name"
            loading="lazy"
            draggable="false"
            @dragstart.prevent
          />
        </div>
        <div class="gallery__card-info">
          <span class="gallery__card-category">{{ product.category }}</span>
          <h3 class="gallery__card-name">{{ product.name }}</h3>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery {
  padding: 6rem 0;
  background: $surface-dark;
  overflow: hidden;

  &__inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 1.5rem;

    h2 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 300;
      color: $text-light;
      flex-shrink: 0;
      letter-spacing: -0.02em;
    }

  }

  &__header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.25rem;
    max-width: 420px;

    p {
      font-size: 0.95rem;
      color: $text-secondary;
      line-height: 1.7;
      text-align: right;
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
    text-decoration: none;
    transition: background 0.3s, border-color 0.3s;

    &:hover {
      background: rgba($primary, 0.15);
      border-color: $primary;
    }
  }

  &__hint {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: $text-muted;
    font-size: 0.8rem;
    margin-bottom: 2rem;

    i {
      font-size: 0.85rem;
      color: $primary;
    }
  }

  // ─── Horizontal scroll track ───
  &__track {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 0 2rem 2rem;
    scroll-behavior: auto;
    -webkit-overflow-scrolling: touch;
    user-select: none;

    // Hide scrollbar but keep functionality
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &--dragging {
      cursor: grabbing;
      scroll-behavior: auto;
    }

    cursor: grab;
  }

  // ─── Product card ───
  &__card {
    flex: 0 0 280px;
    display: flex;
    flex-direction: column;
    border-radius: 1.25rem;
    overflow: hidden;
    background: $surface-card;
    border: 1px solid $border-dark;
    transition: border-color 0.3s, transform 0.3s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      border-color: rgba($primary, 0.25);
      transform: translateY(-4px);

      .gallery__card-image img {
        transform: scale(1.08);
      }
    }
  }

  &__card-image {
    width: 100%;
    height: 240px;
    overflow: hidden;
    background: linear-gradient(145deg,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      transition: transform 0.4s ease;
      filter: brightness(0.95) contrast(1.05);
    }
  }

  &__card-info {
    padding: 1rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  &__card-category {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: $primary;
    font-weight: 600;
  }

  &__card-name {
    font-size: 0.95rem;
    font-weight: 600;
    color: $text-light;
    line-height: 1.3;
  }
}

@media (max-width: 768px) {
  .gallery {
    &__header {
      flex-direction: column;
      gap: 1rem;

    }

    &__header-right {
      align-items: flex-start;
      max-width: 100%;

      p {
        text-align: left;
      }
    }

    &__card {
      flex: 0 0 240px;
    }

    &__card-image {
      height: 200px;
    }
  }
}
</style>
