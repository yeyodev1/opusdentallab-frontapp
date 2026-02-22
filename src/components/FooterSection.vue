<script setup lang="ts">
const productLinks = [
  { label: 'Fixed', href: '/catalog' },
  { label: 'Implants', href: '/catalog' },
  { label: 'Removables', href: '/catalog' },
  { label: 'Retainers', href: '/catalog' },
]

const rxLinks = [
  { label: "Dr's Digital Scan Instructions", href: 'https://drive.google.com/file/d/1pNuZY2g0qaOor931vNi2jY8Jegqc4Fwf/view?usp=sharing' },
  { label: "Doctor Digital Scan Instructions", href: 'https://drive.google.com/file/d/1lqp2sdszi-yy18Qit_1ZDAQTNaylXrvw/view?usp=sharing' },
  { label: "Fixed RX", href: 'https://drive.google.com/file/d/1ZmNF3upDEIQN9DMOV4ud2yLSvADgvrMV/view?usp=sharing' },
  { label: "Implant Rx", href: 'https://drive.google.com/file/d/1aqdUVZHN1SRyB7d01QzMuDYiwMHozyRm/view?usp=sharing' },
  { label: "Removable Rx", href: 'https://drive.google.com/file/d/113jxjkCaCNIj9RaOr7vtKxfs0OrEq3lA/view?usp=sharing' },
]

const socialLinks = [
  { icon: 'fa-brands fa-facebook-f', href: 'https://facebook.com/opusdentallab' },
  { icon: 'fa-brands fa-instagram', href: 'https://instagram.com/opusdentallab' },
  { icon: 'fa-brands fa-tiktok', href: 'https://tiktok.com/@opusdentallab' },
]
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="#" class="footer__logo">
            <img src="https://res.cloudinary.com/dpimsaaa4/image/upload/v1771789038/Logo_fondo_transparente_xwkvet.png" alt="Opus Dental Lab" />
            <span>OPUS DENTAL LAB</span>
          </a>
          <p>Ready to smile</p>
          <div class="footer__address">
            <i class="fa-solid fa-location-dot"></i>
            <span>7726 Winegard Rd, Suite 38, Orlando, FL 32809</span>
          </div>
          <div class="footer__social">
            <a v-for="s in socialLinks" :key="s.icon" :href="s.href" target="_blank" aria-label="Social">
              <i :class="s.icon"></i>
            </a>
          </div>
        </div>

        <div class="footer__col">
          <h4>Products</h4>
          <RouterLink v-for="link in productLinks" :key="link.label" :to="link.href">{{ link.label }}</RouterLink>
        </div>

        <div class="footer__col">
          <h4>Forms & RX</h4>
          <a v-for="link in rxLinks" :key="link.label" :href="link.href" target="_blank">{{ link.label }}</a>
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
        <p>OPUS DENTAL LAB — ALL RIGHTS RESERVED — © {{ new Date().getFullYear() }}</p>
        <p class="footer__dev">
          Developed by <a href="https://yeyo.dev/" target="_blank">yeyo.dev</a>
        </p>
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

    .footer__address {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-top: 1rem;
      color: $text-muted;
      font-size: 0.8rem;
      line-height: 1.4;

      i {
        color: $primary;
        font-size: 0.85rem;
        margin-top: 0.2rem;
      }

      span {
        max-width: 200px;
      }
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: $white;

    img {
      height: 28px;
      width: auto;
    }

    span {
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.05em;
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
      margin-bottom: 0.5rem;
    }

    .footer__dev {
      font-size: 0.7rem;
      color: rgba($text-muted, 0.6);
      letter-spacing: 0.05em;

      a {
        display: inline;
        color: rgba($text-light, 0.4);
        font-weight: 500;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: $primary;
        }
      }
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
