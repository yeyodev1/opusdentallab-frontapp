<script setup lang="ts">
import { reactive } from 'vue'

const contactFeatures = [
  {
    icon: 'fa-solid fa-location-dot',
    label: 'Main office - Orlando Fl',
    sub: '7726 Winegard Rd, 2nd floor suite 38, Orlando, FL 32809'
  },
  { icon: 'fa-solid fa-microscope', label: 'Digital and physical impressions', sub: 'Precision in every scan and mold' },
  { icon: 'fa-solid fa-truck-fast', label: 'Fast Turn Around Time', sub: 'Reliable and punctual shipping' },
  { icon: 'fa-solid fa-user-doctor', label: 'Doctor-to-Doctor Support', sub: 'Dedicated support for every case' },
  { icon: 'fa-solid fa-headset', label: 'Call service/support 24/7', sub: 'We are always here for you' },
]

const phoneNumber = '+1 (407) 618-9334'
const whatsappLink = 'https://wa.me/14076189334'

// Form State
const form = reactive({
  name: '',
  practice: '',
  email: '',
  phone: '',
  message: ''
})

const formFeatures = [
  'Submit & Track cases online 24/7',
  'View your account balance & pay invoices',
  'Submit photos fast & easy',
  'Receive email confirmation & further updates',
  'View impression reports'
]
</script>

<template>
  <section id="contact" class="contact">
    <!-- Background Video for the whole section (especially visible in the lower half) -->
    <div class="contact__video-container">
      <video
        class="contact__video"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="https://framerusercontent.com/assets/vCKhCkTUc2qTJiRCbEn0NhDWRiE.mp4" type="video/mp4" />
      </video>
      <div class="contact__video-overlay"></div>
    </div>

    <div class="contact__inner">
      <!-- 1. Top Section: Direct Connect & Orlando Info -->
      <div class="contact__top-block">
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

      <!-- 2. Divider -->
      <div class="contact__divider"></div>

      <!-- 3. Bottom Section: Form & Checklist -->
      <div class="contact__bottom-block form-section">
        <!-- Form Left -->
        <div class="form-section__card">
          <h3>Have a case to<br>discuss?</h3>
          <form class="form-section__form" @submit.prevent>
            <div class="form-section__group">
              <input type="text" id="name" v-model="form.name" required placeholder="Name" />
            </div>
            <div class="form-section__group">
              <input type="text" id="practice" v-model="form.practice" required placeholder="Practice" />
            </div>
            <div class="form-section__group">
              <input type="email" id="email" v-model="form.email" required placeholder="Email" />
            </div>
            <div class="form-section__group">
              <input type="tel" id="phone" v-model="form.phone" required placeholder="Phone Number" />
            </div>
            <div class="form-section__group">
              <textarea id="message" v-model="form.message" rows="3" placeholder="How can we support your practice?"></textarea>
            </div>
            <button type="submit" class="form-section__submit">
              Connect with Our Team
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>

        <!-- Checklist Right -->
        <div class="form-section__content">
          <h2>Let's Restore Smiles<br>Together</h2>
          
          <ul class="form-section__checklist">
            <li v-for="item in formFeatures" :key="item">
              <div class="check-icon">
                <i class="fa-solid fa-check"></i>
              </div>
              {{ item }}
            </li>
          </ul>

          <div class="form-section__locations">
            <div class="location-col">
              <h4>Connect with our team in Florida</h4>
              <a href="tel:4076189334" class="loc-link"><i class="fa-solid fa-phone"></i> 407-618-9334</a>
              <a href="mailto:info@opusdentallab.com" class="loc-link"><i class="fa-solid fa-envelope"></i> info@opusdentallab.com</a>
              <div class="loc-address">
                <i class="fa-solid fa-location-dot"></i>
                <address>7726 Winegard Rd, Suite 38<br>Orlando, FL 32809</address>
              </div>
            </div>
            <div class="location-col">
              <h4>Connect via WhatsApp</h4>
              <div class="loc-address">
                <i class="fa-brands fa-whatsapp" style="font-size: 1.2rem; margin-top: 0"></i>
                <span>Fastest response guaranteed. Support available 24/7.</span>
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

  // ─── Background Video ───
  &__video-container {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__video-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
        $primary-dark 0%,
        rgba($primary-dark, 0.85) 40%,
        rgba($primary-dark, 0.7) 100%);
  }

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  // ─── Divider ───
  &__divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba($border-dark, 0.5), rgba($primary, 0.3), rgba($border-dark, 0.5), transparent);
    margin: 6rem 0;
  }

  // ─── Top Block Styles ───
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
    backdrop-filter: blur(10px);
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

  &__cta-card {
    background: linear-gradient(145deg, rgba($surface-card, 0.8) 0%, rgba(darken($surface-card, 5%), 0.9) 100%);
    backdrop-filter: blur(12px);
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

// ─── Form Section Styles ───
.form-section {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  &__card {
    background: rgba($surface-dark, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba($white, 0.05);
    border-radius: 1.5rem;
    padding: 3.5rem 3rem;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);

    h3 {
      font-size: 2rem;
      font-weight: 400;
      color: $text-light;
      margin-bottom: 2.5rem;
      line-height: 1.2;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__group {

    input,
    textarea {
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba($white, 0.15);
      padding: 1rem 0;
      color: $text-light;
      font-size: 0.95rem;
      font-family: inherit;
      transition: border-color 0.3s;

      &::placeholder {
        color: rgba($text-muted, 0.7);
      }

      &:focus {
        outline: none;
        border-color: $primary;
      }
    }

    textarea {
      resize: vertical;
      min-height: 80px;
      margin-top: 1rem;
    }
  }

  &__submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: $white;
    color: $primary-dark;
    border: none;
    padding: 1.2rem;
    border-radius: 99px;
    font-size: 0.95rem;
    font-weight: 600;
    margin-top: 2rem;
    cursor: pointer;
    transition: transform 0.3s, background 0.3s;

    &:hover {
      background: $text-secondary;
      transform: translateY(-2px);
    }

    i {
      font-size: 1.1rem;
    }
  }

  &__content {
    h2 {
      font-size: clamp(3rem, 5vw, 4rem);
      font-weight: 300;
      color: $text-light;
      line-height: 1.1;
      margin-bottom: 3rem;
      letter-spacing: -0.02em;
    }
  }

  &__checklist {
    list-style: none;
    padding: 0;
    margin: 0 0 4rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: $text-light;
      font-size: 1.05rem;

      .check-icon {
        background: $white;
        color: $primary-dark;
        width: 24px;
        height: 24px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
      }
    }
  }

  &__locations {
    display: flex;
    gap: 4rem;
    border-top: 1px solid rgba($white, 0.1);
    padding-top: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2.5rem;
    }

    .location-col {
      flex: 1;

      h4 {
        font-size: 1.1rem;
        font-weight: 500;
        color: $text-light;
        margin-bottom: 1.5rem;
      }

      .loc-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: $text-secondary;
        text-decoration: none;
        margin-bottom: 1rem;
        font-size: 0.95rem;
        transition: color 0.3s;

        i {
          color: $text-muted;
          font-size: 1.1rem;
        }

        &:hover {
          color: $primary;
        }
      }

      .loc-address {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        color: $text-muted;
        font-size: 0.9rem;

        i {
          margin-top: 0.2rem;
          font-size: 1.1rem;
        }

        address {
          font-style: normal;
          line-height: 1.5;
        }

        span {
          line-height: 1.5;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 5rem 1.5rem;

    &__divider {
      margin: 4rem 0;
    }

    &__cta-card {
      padding: 2rem 1.5rem;
    }

    &__number-link {
      font-size: 1.25rem;
    }
  }

  .form-section__card {
    padding: 2.5rem 1.5rem;
  }
}
</style>
