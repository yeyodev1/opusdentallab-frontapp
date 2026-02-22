<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import StoryblokService, { type BusinessCaseStory } from '@/services/storyblok.service'

const route = useRoute()
const caseData = ref<BusinessCaseStory | null>(null)
const loading = ref(true)
const selectedImage = ref<string | null>(null)

onMounted(async () => {
  const slug = route.params.slug as string
  if (!slug) {
    loading.value = false
    return
  }

  try {
    caseData.value = await StoryblokService.getCaseBySlug(slug)
  } catch (error) {
    console.error('Failed to load case:', error)
  } finally {
    loading.value = false
  }
})

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

function openZoom(img: string) {
  selectedImage.value = img
}

function closeZoom() {
  selectedImage.value = null
}
</script>

<template>
  <div class="case-detail-page">
    <NavBar />
    
    <div v-if="loading" class="case-loading">
      <div class="spinner"></div>
      <p>Loading case details...</p>
    </div>

    <div v-else-if="!caseData" class="case-empty">
      <i class="fa-solid fa-tooth"></i>
      <p>Case not found.</p>
      <RouterLink to="/cases" class="back-link">Return to Cases</RouterLink>
    </div>

    <template v-else>
      <!-- Hero / Header -->
      <header class="case-header">
        <div class="case-header__content">
          <RouterLink to="/cases" class="case-header__back-btn">
            <i class="fa-solid fa-arrow-left"></i> Back to Cases
          </RouterLink>
          <span class="case-header__date">{{ formatDate(caseData.content.fecha) }}</span>
          <h1>{{ caseData.content.title }}</h1>
        </div>
      </header>

      <!-- Main Content Area: Gallery -->
      <main class="case-main">
        <div v-if="caseData.content.fotos && caseData.content.fotos.length > 0" class="gallery-grid">
          <TransitionGroup name="fade-list">
            <div 
              v-for="(photo, idx) in caseData.content.fotos" 
              :key="photo.id || idx"
              class="gallery-item"
              :style="{ animationDelay: `${idx * 0.1}s` }"
              @click="openZoom(photo.filename)"
            >
              <img :src="photo.filename" :alt="caseData.content.title" loading="lazy" />
              <div class="gallery-item__overlay">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>
          </TransitionGroup>
        </div>
        <div v-else class="case-empty">
          <p>This case has no images available.</p>
        </div>
      </main>
    </template>

    <!-- Fullscreen Image Zoom (Lightbox) -->
    <Transition name="fade">
      <div v-if="selectedImage" class="lightbox" @click="closeZoom">
        <button class="lightbox__close" aria-label="Close" @click.stop="closeZoom">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img :src="selectedImage" alt="Zoomed Case" @click.stop />
      </div>
    </Transition>

    <ContactSection />
    <FooterSection />
  </div>
</template>

<style lang="scss" scoped>
.case-detail-page {
  min-height: 100vh;
  background: $surface-dark;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

// ─── Header ───
.case-header {
  padding: 12rem 2rem 6rem;
  background: linear-gradient(180deg, rgba($primary, 0.08) 0%, transparent 100%);
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);

  &__content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    h1 {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 700;
      color: $text-light;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }
  }

  &__back-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: $text-secondary;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s;
    margin-bottom: 1rem;

    &:hover {
      color: $primary;
    }
  }

  &__date {
    display: inline-block;
    padding: 0.4rem 1rem;
    background: rgba($primary, 0.1);
    color: $primary;
    border-radius: 99px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}

// ─── Main Gallery ───
.case-main {
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem 8rem;
  width: 100%;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

// ─── Gallery Item ───
.gallery-item {
  width: 100%;
  aspect-ratio: 4/3;
  background: $surface-card;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: zoom-in;
  border: 1px solid $border-dark;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s, border-color 0.4s;
  animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba($primary, 0.4);

    img {
      transform: scale(1.05);
      filter: brightness(1.1) contrast(1.1);
    }

    .gallery-item__overlay {
      opacity: 1;

      i {
        transform: scale(1);
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s;
    filter: brightness(0.95);
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    i {
      font-size: 2.5rem;
      color: $white;
      opacity: 0.9;
      transform: scale(0.8);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }
}

// ─── Loading / Empty ───
.case-loading,
.case-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12rem 2rem;
  color: $text-muted;
  text-align: center;

  p {
    font-size: 1.1rem;
    margin-top: 1.5rem;
  }

  i {
    font-size: 3rem;
    color: rgba($primary, 0.5);
  }

  .back-link {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.8rem 2rem;
    background: $primary;
    color: $white;
    text-decoration: none;
    border-radius: 99px;
    font-weight: 600;
    transition: background 0.3s;

    &:hover {
      background: $secondary;
    }
  }
}

.spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba($primary, 0.2);
  border-top-color: $primary;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

// ─── Lightbox ───
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(15px);
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
    z-index: 2;

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
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
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
  transition: all 0.5s ease;
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
