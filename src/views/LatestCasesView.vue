<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import StoryblokService, { type BusinessCaseStory } from '@/services/storyblok.service'

const cases = ref<BusinessCaseStory[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    cases.value = await StoryblokService.getLatestCases()
  } catch (error) {
    console.error('Failed to load cases:', error)
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
</script>

<template>
  <div class="cases-page">
    <NavBar />
    
    <!-- Hero / Header -->
    <header class="cases-header">
      <div class="cases-header__content">
        <h1>Signature Cases</h1>
        <p>A curated gallery of our finest restorations and orthodontic appliances. Witness the precision, aesthetics, and dedication behind Opus Dental Lab.</p>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="cases-main">
      <div v-if="loading" class="cases-loading">
        <div class="spinner"></div>
        <p>Loading gallery...</p>
      </div>

      <div v-else-if="cases.length === 0" class="cases-empty">
        <i class="fa-solid fa-tooth"></i>
        <p>No cases available at the moment. Please check back later.</p>
      </div>

      <div v-else class="cases-grid">
        <TransitionGroup name="fade-list">
          <RouterLink
            v-for="(item, idx) in cases" 
            :key="item.uuid"
            :to="`/cases/${item.slug}`"
            class="case-card"
            :style="{ animationDelay: `${idx * 0.1}s` }"
          >
            <!-- Show the first image if it exists -->
            <div 
              v-if="item.content.fotos && item.content.fotos.length > 0" 
              class="case-card__image-wrap"
            >
              <img :src="item.content.fotos[0]?.filename" :alt="item.content.title" loading="lazy" />
            </div>
            <!-- Fallback if no image -->
            <div v-else class="case-card__image-wrap case-card__image-wrap--fallback">
              <i class="fa-solid fa-image"></i>
            </div>

            <div class="case-card__info">
              <span class="case-card__date">{{ formatDate(item.content.fecha) }}</span>
              <h3 class="case-card__title">{{ item.content.title }}</h3>
              
              <div v-if="item.content.fotos && item.content.fotos.length > 1" class="case-card__badge">
                <i class="fa-solid fa-images"></i> {{ item.content.fotos.length }} Photos
              </div>
            </div>
          </RouterLink>
        </TransitionGroup>
      </div>
    </main>

    <ContactSection />
    <FooterSection />
  </div>
</template>

<style lang="scss" scoped>
.cases-page {
  min-height: 100vh;
  background: $surface-dark;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

// ─── Header ───
.cases-header {
  padding: 12rem 2rem 6rem;
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
.cases-main {
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem 8rem;
  width: 100%;
}

// ─── Loading & Empty States ───
.cases-loading,
.cases-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
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

// ─── Grid ───
.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
}

// ─── Case Card ───
.case-card {
  background: $surface-card;
  border: 1px solid $border-dark;
  border-radius: 1.25rem;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba($primary, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

    .case-card__image-wrap {
      background: linear-gradient(145deg, rgba($primary, 0.08) 0%, transparent 100%);
    }

    .case-card__image-wrap img {
      transform: scale(1.05);
      filter: brightness(1.1) contrast(1.1);
    }
  }

  &__image-wrap {
    width: 100%;
    aspect-ratio: 4/3;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, transparent 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.4s;
    position: relative;
    overflow: hidden;

    &--fallback {
      i {
        font-size: 3rem;
        color: rgba($text-muted, 0.3);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s;
      filter: brightness(0.95);
    }
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

  &__info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.03);
    flex: 1;
    position: relative;
  }

  &__date {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: $primary;
    font-weight: 600;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 400;
    color: $text-light;
    line-height: 1.4;
  }

  &__badge {
    position: absolute;
    top: -1.25rem;
    right: 1.5rem;
    background: $primary-dark;
    color: $primary;
    border: 1px solid rgba($primary, 0.3);
    padding: 0.3rem 0.8rem;
    border-radius: 99px;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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
</style>
