<script setup lang="ts">
const featureList = [
  'Submit & Track cases online 24/7',
  'View your account balance & pay invoices',
  'Submit photos fast & easy',
  'Receive email confirmation & further updates',
  'View impression reports',
]

const offices = [
  {
    name: 'New York',
    phone: '866-522-7735',
    email: 'ny@opusdentallab.com',
    address: '5302 68th St, Maspeth, New York 11378',
  },
  {
    name: 'Florida',
    phone: '866-362-4776',
    email: 'fl@opusdentallab.com',
    address: '3752 SW 30th Ave, Fort Lauderdale, FL 33312',
  },
]
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__inner">
      <h2>Let's Restore Smiles Together</h2>

      <div class="contact__features">
        <div v-for="feat in featureList" :key="feat" class="contact__feat">
          <i class="fa-solid fa-check"></i>
          <span>{{ feat }}</span>
        </div>
      </div>

      <div class="contact__offices">
        <div v-for="office in offices" :key="office.name" class="contact__office">
          <h3>
            <i class="fa-solid fa-location-dot"></i>
            Connect with our team in {{ office.name }}
          </h3>
          <a :href="`tel:${office.phone}`" class="contact__link">
            <i class="fa-solid fa-phone"></i> {{ office.phone }}
          </a>
          <a :href="`mailto:${office.email}`" class="contact__link">
            <i class="fa-solid fa-envelope"></i> {{ office.email }}
          </a>
          <p class="contact__address">{{ office.address }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding: 6rem 2rem;
  background: $primary-dark;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: $text-light;
    text-align: center;
    margin-bottom: 3rem;
  }

  &__features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 2rem;
    margin-bottom: 4rem;
  }

  &__feat {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: $text-secondary;

    i {
      color: $primary;
      font-size: 0.75rem;
    }
  }

  &__offices {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  &__office {
    background: $surface-card;
    border: 1px solid $border-dark;
    border-radius: 1rem;
    padding: 2rem;

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: $text-light;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      i {
        color: $primary;
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: $text-secondary;
    margin-bottom: 0.75rem;
    transition: color 0.2s;

    &:hover {
      color: $primary;
    }

    i {
      color: $primary;
      width: 1rem;
      text-align: center;
    }
  }

  &__address {
    font-size: 0.8rem;
    color: $text-muted;
    margin-top: 0.5rem;
  }
}

@media (max-width: 768px) {
  .contact__offices {
    grid-template-columns: 1fr;
  }
}
</style>
