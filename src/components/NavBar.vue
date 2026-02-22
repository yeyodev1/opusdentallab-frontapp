<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const navLinks = [
  { label: 'Products', href: '/catalog', isHighlight: false },
  { label: 'Latest Cases', href: '/cases', isHighlight: false },
  { label: 'Workflow', href: '/#features', isHighlight: false },
  { label: 'Educational', href: '/#about', isHighlight: false },
  { label: 'Contact', href: '/#contact', isHighlight: false },
  { label: 'Forms & Rx', href: '/#footer', isHighlight: true, icon: 'fa-solid fa-file-arrow-down' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function handleLinkClick(href: string) {
  isMobileOpen.value = false
  if (href.includes('#')) {
    // Prevent ProductShowcase from locking during the jump
    ; (window as any).__navigating = true
    setTimeout(() => {
      ; (window as any).__navigating = false
    }, 1200)
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__inner">
      <!-- Logo Left -->
      <RouterLink to="/" class="navbar__logo">
        <img src="https://res.cloudinary.com/dpimsaaa4/image/upload/v1771789038/Logo_fondo_transparente_xwkvet.png" alt="Opus Dental Lab" />
        <span>OPUS DENTAL LAB</span>
      </RouterLink>

      <!-- Links Center -->
      <ul class="navbar__links">
        <li v-for="link in navLinks" :key="link.label">
          <RouterLink 
            :to="link.href" 
            class="navbar__link" 
            :class="{ 'navbar__link--highlight': link.isHighlight }"
            @click="handleLinkClick(link.href)"
          >
            <i v-if="link.icon && link.isHighlight" :class="link.icon"></i>
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- Menu Right -->
      <button class="navbar__menu-btn" @click="isMobileOpen = !isMobileOpen" aria-label="Menu">
        <span class="navbar__menu-label">Menu</span>
        <div class="navbar__hamburger">
          <span></span>
          <span></span>
        </div>
      </button>
    </div>

    <Transition name="slide">
      <div v-if="isMobileOpen" class="navbar__mobile">
        <RouterLink 
          v-for="link in navLinks" 
          :key="link.label" 
          :to="link.href" 
          class="navbar__mobile-link" 
          :class="{ 'navbar__mobile-link--highlight': link.isHighlight }"
          @click="handleLinkClick(link.href)"
        >
          <i v-if="link.icon && link.isHighlight" :class="link.icon"></i>
          {{ link.label }}
        </RouterLink>
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
  padding: 1.5rem 3rem;
  transition: background 0.4s, backdrop-filter 0.4s, padding 0.4s;

  &--scrolled {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(15px);
    padding: 1rem 3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  &__inner {
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;

    img {
      height: 32px;
      width: auto;
      object-fit: contain;
    }

    span {
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: $white;
      white-space: nowrap;
    }
  }

  &__links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5rem;
    justify-content: flex-end;

    @media (max-width: 1100px) {
      display: none;
    }
  }

  &__link {
    font-size: 0.85rem;
    font-weight: 400;
    color: $white;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.7;
    }

    &--highlight {
      color: $primary;
      font-weight: 500;
      border: 1px solid rgba($primary, 0.3);
      padding: 0.6rem 1.25rem;
      border-radius: 99px;
      margin-left: 0.5rem;

      &:hover {
        opacity: 1;
        background: rgba($primary, 0.1);
        border-color: $primary;
        transform: translateY(-2px);
      }

      i {
        font-size: 1rem;
      }
    }
  }

  &__dropdown-icon {
    font-size: 0.65rem;
    opacity: 0.6;
  }

  &__menu-btn {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: $white;
    cursor: pointer;
    padding: 0.5rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    @media (min-width: 1101px) {
      display: none;
    }
  }

  &__menu-label {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  &__hamburger {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      display: block;
      width: 18px;
      height: 1.5px;
      background: $white;
      transition: transform 0.3s;
    }
  }

  &__mobile {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    padding: 2rem 3rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    .navbar__mobile-link {
      font-size: 1.5rem;
      font-weight: 300;
      color: $white;
      transition: color 0.2s;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 0.75rem;

      &:hover {
        color: rgba($white, 0.7);
      }

      &--highlight {
        color: $primary;
        font-weight: 400;
        margin-top: 1rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 1.25rem 1.5rem;

    &--scrolled {
      padding: 0.75rem 1.5rem;
    }

    &__menu-label {
      display: none;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
