<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const navLinks = [
  { label: 'Products', href: '/catalog', hasDropdown: false },
  { label: 'Latest Cases', href: '/cases', hasDropdown: false },
  { label: 'Workflow', href: '/#features', hasDropdown: false },
  { label: 'Educational', href: '/#about', hasDropdown: false },
  { label: 'Contact', href: '/#contact', hasDropdown: true },
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
      <!-- Logo Left -->
      <RouterLink to="/" class="navbar__logo">
        <img src="https://res.cloudinary.com/dpimsaaa4/image/upload/v1771789038/Logo_fondo_transparente_xwkvet.png" alt="Opus Dental Lab" />
        <span>OPUS DENTAL LAB</span>
      </RouterLink>

      <!-- Links Center -->
      <ul class="navbar__links">
        <li v-for="link in navLinks" :key="link.label">
          <RouterLink :to="link.href" class="navbar__link">
            {{ link.label }}
            <i v-if="link.hasDropdown" class="fa-solid fa-chevron-down navbar__dropdown-icon"></i>
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

    <!-- Mobile menu -->
    <Transition name="slide">
      <div v-if="isMobileOpen" class="navbar__mobile">
        <RouterLink v-for="link in navLinks" :key="link.label" :to="link.href" @click="isMobileOpen = false">
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
    display: grid;
    grid-template-columns: 1fr auto 1fr;
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
    gap: 2.5rem;
    justify-content: center;

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
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  &__dropdown-icon {
    font-size: 0.65rem;
    opacity: 0.6;
  }

  &__menu-btn {
    justify-self: end;
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
    gap: 1.5rem;
    padding: 2rem 3rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    a {
      font-size: 1.5rem;
      font-weight: 300;
      color: $white;
      transition: color 0.2s;

      &:hover {
        color: rgba($white, 0.7);
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

    &__inner {
      grid-template-columns: 1fr 1fr;
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
