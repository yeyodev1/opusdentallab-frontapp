<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Latest Cases', href: '#showcase' },
  { label: 'Workflow', href: '#features' },
  { label: 'Educational', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__inner">
      <a href="#" class="navbar__logo">
        <i class="fa-solid fa-tooth"></i>
        <span>OPUS DENTAL LAB</span>
      </a>

      <ul class="navbar__links">
        <li v-for="link in navLinks" :key="link.label">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>

      <button class="navbar__hamburger" @click="isMobileOpen = !isMobileOpen" aria-label="Menu">
        <i :class="isMobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div v-if="isMobileOpen" class="navbar__mobile">
        <a v-for="link in navLinks" :key="link.label" :href="link.href" @click="isMobileOpen = false">
          {{ link.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 2rem;
  transition: background 0.3s, backdrop-filter 0.3s, padding 0.3s;

  &--scrolled {
    background: rgba($primary-dark, 0.85);
    backdrop-filter: blur(12px);
    padding: 0.75rem 2rem;
  }

  &__inner {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.1rem;
    color: $primary;
    letter-spacing: 0.05em;

    i {
      font-size: 1.3rem;
    }
  }

  &__links {
    list-style: none;
    display: flex;
    gap: 2rem;

    a {
      font-size: 0.9rem;
      font-weight: 500;
      color: $text-light;
      opacity: 0.85;
      transition: opacity 0.2s, color 0.2s;

      &:hover {
        opacity: 1;
        color: $primary;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__hamburger {
    display: none;
    background: none;
    border: none;
    color: $text-light;
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &__mobile {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 2rem;
    gap: 1rem;

    a {
      font-size: 1.1rem;
      font-weight: 500;
      color: $text-light;
      padding: 0.5rem 0;
      border-bottom: 1px solid $border-dark;

      &:hover {
        color: $primary;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 400px;
  opacity: 1;
}
</style>
