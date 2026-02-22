<script setup lang="ts">
const contactFeatures = [
  {
    icon: 'fa-solid fa-location-dot',
    label: 'Main office - Orlando Fl',
    sub: '7726 winegard rd, 2nd floor suite 38, Orlando, FL 32809'
  },
  { icon: 'fa-solid fa-microscope', label: 'Digital and physical impressions', sub: 'Precision in every scan and mold' },
  { icon: 'fa-solid fa-truck-fast', label: 'Fast delivery - personal drivers', sub: 'Handling with care to your clinic' },
  { icon: 'fa-solid fa-user-doctor', label: 'Personal assistant', sub: 'Dedicated support for every case' },
  { icon: 'fa-solid fa-headset', label: 'Call service/support 24/7', sub: 'We are always here for you' },
]

const phoneNumber = '+1 (407) 618-9334'
const whatsappLink = 'https://wa.me/14076189334'
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__inner">
      <div class="contact__header">
        <span class="contact__tag">CONTACT US</span>
        <h2>Let's Restore Smiles Together</h2>
        <p>Expert restoration and personalized service for leading dental practices.</p>
      </div>

      <div class="contact__grid">
        <!-- Info Column -->
        <div class="contact__info">
          <div v-for="feat in contactFeatures" :key="feat.label" class="contact__feature-card">
            <div class="contact__feature-icon">
              <i :class="feat.icon"></i>
            </div>
            <div class="contact__feature-text">
              <strong>{{ feat.label }}</strong>
              <p>{{ feat.sub }}</p>
            </div>
          </div>
        </div>

        <!-- Call to Action Column -->
        <div class="contact__cta">
          <div class="contact__cta-card">
            <div class="contact__whatsapp-badge">
              <i class="fa-brands fa-whatsapp"></i>
              <span>SUPER CLEAR: THIS IS OUR WHATSAPP</span>
            </div>
            
            <h3>Direct Connection</h3>
            <p>Ready to start your next case? Send us a message or give us a call instantly.</p>

            <div class="contact__numbers">
              <a :href="`tel:${phoneNumber}`" class="contact__number-link">
                <i class="fa-solid fa-phone"></i>
                <span>{{ phoneNumber }}</span>
              </a>
              
              <a :href="whatsappLink" target="_blank" class="contact__whatsapp-btn">
                <i class="fa-brands fa-whatsapp"></i>
                Send WhatsApp Message
              </a>
            </div>

            <div class="contact__extra-info">
              <div class="contact__email">
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:info@opusdentallab.com">info@opusdentallab.com</a>
              </div>
              
              <div class="contact__address-block">
                <i class="fa-solid fa-map-location-dot"></i>
                <address>
                  7726 Winegard Rd, 2nd Floor Suite 38<br>
                  Orlando, Florida, 32809
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding: 8rem 2rem;
  background: $primary-dark;
  position: relative;
  overflow: hidden;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  &__header {
    text-align: center;
    margin-bottom: 5rem;

    .contact__tag {
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.2em;
      color: $primary;
      display: block;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 300;
      color: $text-light;
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
    }

    p {
      color: $text-secondary;
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  // ─── Features Column ───
  &__info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__feature-card {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.5rem;
    background: rgba($surface-card, 0.4);
    border: 1px solid $border-dark;
    border-radius: 1.25rem;
    transition: transform 0.3s, border-color 0.3s;

    &:hover {
      transform: translateX(10px);
      border-color: rgba($primary, 0.3);
    }
  }

  &__feature-icon {
    font-size: 1.5rem;
    color: $primary;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    line-height: 1;
  }

  &__feature-text {
    strong {
      display: block;
      font-size: 1.1rem;
      color: $text-light;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.9rem;
      color: $text-secondary;
    }
  }

  // ─── CTA Card Column ───
  &__cta-card {
    background: linear-gradient(145deg, $surface-card 0%, darken($surface-card, 5%) 100%);
    border: 1px solid $border-dark;
    padding: 3rem;
    border-radius: 2rem;
    text-align: center;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);

    h3 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: $text-light;
    }

    p {
      color: $text-secondary;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 2.5rem;
    }
  }

  &__whatsapp-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: rgba(#25D366, 0.1);
    color: #25D366;
    padding: 0.5rem 1rem;
    border-radius: 99px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 2rem;
    border: 1px solid rgba(#25D366, 0.2);
  }

  &__numbers {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  &__number-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: $text-light;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: $primary;
    }

    i {
      font-size: 1.25rem;
      color: $primary;
    }
  }

  &__whatsapp-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: #25D366;
    color: $white;
    padding: 1.1rem 2rem;
    border-radius: 99px;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.3s, background 0.3s;
    box-shadow: 0 10px 25px rgba(#25D366, 0.3);

    &:hover {
      background: darken(#25D366, 5%);
      transform: translateY(-3px);
    }
  }

  &__extra-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba($border-dark, 0.5);
  }

  &__email {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-size: 0.95rem;
    color: $text-secondary;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: $primary;
        text-decoration: underline;
      }
    }

    i {
      color: $primary;
    }
  }

  &__address-block {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0.8rem;
    text-align: left;
    max-width: 300px;
    margin: 0 auto;

    i {
      color: $primary;
      font-size: 1.1rem;
      margin-top: 0.2rem;
    }

    address {
      font-style: normal;
      font-size: 0.85rem;
      color: $text-secondary;
      line-height: 1.4;
    }
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 5rem 1.5rem;

    &__cta-card {
      padding: 2rem 1.5rem;
    }

    &__number-link {
      font-size: 1.25rem;
    }
  }
}
</style>
