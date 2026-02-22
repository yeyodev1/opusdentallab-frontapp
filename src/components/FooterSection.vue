<script setup lang="ts">
const productLinks = [
  { label: 'Fixed', href: '#products' },
  { label: 'Implants', href: '#products' },
  { label: 'Removables', href: '#products' },
  { label: 'Retainers', href: '#products' },
]

const resourceLinks = [
  { label: 'Shipping & Logistics', href: '#' },
  { label: 'Remakes & Warranties', href: '#' },
  { label: 'Technical Support', href: '#contact' },
]

const socialLinks = [
  { icon: 'fa-brands fa-facebook-f', href: '#' },
  { icon: 'fa-brands fa-instagram', href: '#' },
  { icon: 'fa-brands fa-youtube', href: '#' },
  { icon: 'fa-brands fa-linkedin-in', href: '#' },
]
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="#" class="footer__logo">
            <i class="fa-solid fa-tooth"></i>
            <span>OPUS DENTAL LAB</span>
          </a>
          <p>Making Teeth Happy</p>
          <div class="footer__social">
            <a v-for="s in socialLinks" :key="s.icon" :href="s.href" target="_blank" aria-label="Social">
              <i :class="s.icon"></i>
            </a>
          </div>
        </div>

        <div class="footer__col">
          <h4>Products</h4>
          <a v-for="link in productLinks" :key="link.label" :href="link.href">{{ link.label }}</a>
        </div>

        <div class="footer__col">
          <h4>Resources</h4>
          <a v-for="link in resourceLinks" :key="link.label" :href="link.href">{{ link.label }}</a>
        </div>

        <div class="footer__col">
          <h4>Newsletter</h4>
          <p class="footer__newsletter-text">Stay updated with our latest cases and technologies.</p>
          <div class="footer__subscribe">
            <input type="email" placeholder="your@email.com" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>OPUS DENTAL LAB LLC — ALL RIGHTS RESERVED — © {{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $surface-dark;
  border-top: 1px solid $border-dark;
  padding: 4rem 2rem 2rem;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__top {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  &__brand {
    p {
      color: $text-secondary;
      font-size: 0.9rem;
      margin-top: 0.75rem;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.1rem;
    color: $primary;

    i {
      font-size: 1.3rem;
    }
  }

  &__social {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.25rem;

    a {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid $border-dark;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $text-secondary;
      font-size: 0.85rem;
      transition: border-color 0.3s, color 0.3s;

      &:hover {
        border-color: $primary;
        color: $primary;
      }
    }
  }

  &__col {
    h4 {
      font-size: 0.9rem;
      font-weight: 600;
      color: $text-light;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    a {
      display: block;
      font-size: 0.85rem;
      color: $text-secondary;
      margin-bottom: 0.6rem;
      transition: color 0.2s;

      &:hover {
        color: $primary;
      }
    }
  }

  &__newsletter-text {
    font-size: 0.8rem;
    color: $text-secondary;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  &__subscribe {
    display: flex;
    gap: 0;
    border-radius: 99px;
    overflow: hidden;
    border: 1px solid $border-dark;

    input {
      flex: 1;
      padding: 0.6rem 1rem;
      background: transparent;
      border: none;
      color: $text-light;
      font-size: 0.8rem;
      outline: none;

      &::placeholder {
        color: $text-muted;
      }
    }

    button {
      padding: 0.6rem 1.25rem;
      background: $primary;
      color: $white;
      border: none;
      font-weight: 600;
      font-size: 0.8rem;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: $secondary;
      }
    }
  }

  &__bottom {
    border-top: 1px solid $border-dark;
    padding-top: 1.5rem;
    text-align: center;

    p {
      font-size: 0.75rem;
      color: $text-muted;
      letter-spacing: 0.1em;
    }
  }
}

@media (max-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
