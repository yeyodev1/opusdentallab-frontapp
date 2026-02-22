<script setup lang="ts">
import { computed, ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'

// Reusing the rich product data from the gallery
const products = [
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
  { name: 'Schwartz Expander', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787008/Schwartz_Expander_dhjugh.png', category: 'Appliances' },
  { name: 'Space Regaining', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787009/Space_Regaining_rwx4d0.png', category: 'Appliances' },
  { name: 'Spring Aligner', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787008/Spring_Aligner_rvq5ex.png', category: 'Appliances' },
  { name: 'NTI Appliance', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787007/NTI_Appliance_ynloz8.png', category: 'Appliances' },
  { name: 'Thumb Habit', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787009/Thumb_Habit_xvxiu0.png', category: 'Appliances' },
  { name: 'SnoreX', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787013/SnoreX_b74j9p.png', category: 'Appliances' },
  { name: 'Frankel', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787013/Frankel_f3yphl.png', category: 'Appliances' },
  { name: 'Palatal Expander', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787017/Palatal_Expander_gff81q.png', category: 'Appliances' },
  { name: 'Lip Bumper', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787017/Lip_Bumper_mjsdep.png', category: 'Appliances' },
  // Retainers
  { name: 'Hawley Retainers', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787008/Hawley_Retainers_vpldgg.png', category: 'Retainers' },
  { name: 'Essix Retainers', image: 'https://res.cloudinary.com/dpimsaaa4/image/upload/v1771787007/Essix_Retainers_lcc4a9.png', category: 'Retainers' },
]

const categories = ['All', 'Removables', 'Appliances', 'Retainers']
const activeCategory = ref('All')
const selectedImage = ref<string | null>(null)

const filteredProducts = computed(() => {
  if (activeCategory.value === 'All') return products
  return products.filter(p => p.category === activeCategory.value)
})

function openZoom(img: string) {
  selectedImage.value = img
}

function closeZoom() {
  selectedImage.value = null
}

function getWhatsappLink(productName: string) {
  const message = encodeURIComponent(`Hi Opus Dental Lab! I'm interested in learning more about the ${productName} I saw in your catalog.`)
  return `https://wa.me/14076189334?text=${message}`
}
</script>

<template>
  <div class="catalog-page">
    <NavBar />
    
    <!-- Hero / Header -->
    <header class="catalog-header">
      <div class="catalog-header__content">
        <h1>Premium Dental Catalog</h1>
        <p>Explore our comprehensive range of high-precision restorations and orthodontic appliances, crafted for excellence and patient comfort.</p>
      </div>
    </header>

    <!-- Catalog Main Area -->
    <main class="catalog-main">
      <!-- Filters -->
      <div class="catalog-filters">
        <button 
          v-for="cat in categories" 
          :key="cat"
          class="catalog-filter-btn"
          :class="{ 'catalog-filter-btn--active': activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <div class="catalog-grid">
        <TransitionGroup name="fade-list">
          <div 
            v-for="(product, idx) in filteredProducts" 
            :key="product.name"
            class="product-card"
            :style="{ animationDelay: `${idx * 0.05}s` }"
          >
            <div class="product-card__image-wrap" @click="openZoom(product.image)">
              <img :src="product.image" :alt="product.name" loading="lazy" />
              <div class="product-card__overlay">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>
            <div class="product-card__info">
              <span class="product-card__category">{{ product.category }}</span>
              <h3 class="product-card__name">{{ product.name }}</h3>
              <div class="product-card__actions">
                <a :href="getWhatsappLink(product.name)" target="_blank" class="product-card__btn product-card__btn--wa">
                  <i class="fa-brands fa-whatsapp"></i> WhatsApp
                </a>
                <a href="tel:+14076189334" class="product-card__btn product-card__btn--phone">
                  <i class="fa-solid fa-phone"></i> Call
                </a>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </main>

    <!-- Fullscreen Image Zoom (Lightbox) -->
    <Transition name="fade">
      <div v-if="selectedImage" class="lightbox" @click="closeZoom">
        <button class="lightbox__close" aria-label="Close" @click.stop="closeZoom">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img :src="selectedImage" alt="Zoomed Product" @click.stop />
      </div>
    </Transition>

    <ContactSection />
    <FooterSection />
  </div>
</template>

<style lang="scss" scoped>
.catalog-page {
  min-height: 100vh;
  background: $surface-dark;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

// ─── Header ───
.catalog-header {
  padding: 12rem 2rem 6rem; // Accounts for fixed navbar
  background: linear-gradient(180deg, rgba($primary, 0.08) 0%, transparent 100%);
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);

  &__content {
    max-width: 800px;
    margin: 0 auto;

    h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 700;
      color: $text-light;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 1.1rem;
      color: $text-secondary;
      line-height: 1.7;
    }
  }
}

// ─── Main Content ───
.catalog-main {
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem 8rem;
  width: 100%;
}

// ─── Filters ───
.catalog-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
}

.catalog-filter-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: $text-secondary;
  padding: 0.6rem 1.75rem;
  border-radius: 99px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: $text-light;
  }

  &--active {
    background: rgba($primary, 0.15);
    border-color: $primary;
    color: $primary;
  }
}

// ─── Grid ───
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

// ─── Product Card ───
.product-card {
  background: $surface-card;
  border: 1px solid $border-dark;
  border-radius: 1.25rem;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
  display: flex;
  flex-direction: column;
  animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba($primary, 0.3);

    .product-card__image-wrap {
      background: linear-gradient(145deg, rgba($primary, 0.08) 0%, transparent 100%);
    }

    .product-card__image-wrap img {
      transform: scale(1.08);
      filter: brightness(1.1) contrast(1.1);
    }

    .product-card__overlay {
      opacity: 1;

      i {
        transform: scale(1);
      }
    }
  }

  &__image-wrap {
    width: 100%;
    aspect-ratio: 1.2;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, transparent 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    transition: background 0.4s;
    position: relative;
    cursor: zoom-in;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s;
      filter: brightness(0.95) contrast(1.05);
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    i {
      font-size: 2.5rem;
      color: $white;
      opacity: 0.8;
      transform: scale(0.8);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &__info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.03);
    flex: 1;
  }

  &__category {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: $primary;
    font-weight: 600;
  }

  &__name {
    font-size: 1.1rem;
    font-weight: 600;
    color: $text-light;
    line-height: 1.3;
  }

  &__actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-top: auto;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.6rem;
    border-radius: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.3s, color 0.3s, transform 0.3s;

    i {
      font-size: 1rem;
    }

    &--wa {
      background: rgba(#25D366, 0.1);
      color: #25D366;
      border: 1px solid rgba(#25D366, 0.2);

      &:hover {
        background: #25D366;
        color: $white;
        transform: translateY(-2px);
      }
    }

    &--phone {
      background: rgba($primary, 0.1);
      color: $primary;
      border: 1px solid rgba($primary, 0.2);

      &:hover {
        background: $primary;
        color: $white;
        transform: translateY(-2px);
      }
    }
  }
}

// ─── Lightbox ───
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  &__close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: $white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s, transform 0.3s;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }

  img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 1rem;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    animation: zoomIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

// ─── Animations ───
@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-list-enter-active,
.fade-list-leave-active {
  transition: all 0.4s ease;
}

.fade-list-enter-from,
.fade-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-list-leave-active {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
