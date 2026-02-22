<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = [
  { value: 5000, suffix: '+', label: 'Dentists trust us for exceptional quality, reliable service, and lasting partnerships' },
  { value: 98, suffix: '%', label: 'Restorations delivered with precision and care — trusted by leading dentists nationwide' },
  { value: 85, suffix: '%', label: 'Cases Submitted Digitally — Trusted by Tech-Forward Practices Using iTero, TRIOS, Medit, and More' },
]

const counters = ref(stats.map(() => 0))
const sectionRef = ref<HTMLElement | null>(null)

function animateCounters() {
  stats.forEach((stat, i) => {
    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        counters.value[i] = stat.value
        clearInterval(interval)
      } else {
        counters.value[i] = Math.floor(current)
      }
    }, duration / steps)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateCounters()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="stats">
    <div class="stats__inner">
      <h2>Why Top Dentists Trust Us?</h2>
      <p class="stats__subtitle">Not just restorations — precision-engineered results, seamless support, and partnerships that elevate your practice</p>

      <div class="stats__grid">
        <div v-for="(stat, i) in stats" :key="i" class="stats__item">
          <span class="stats__number">{{ counters[i] }}{{ stat.suffix }}</span>
          <p>{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stats {
  padding: 6rem 2rem;
  background: $surface-dark;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: $text-light;
    margin-bottom: 1rem;
  }

  &__subtitle {
    color: $text-secondary;
    font-size: 1rem;
    max-width: 700px;
    margin: 0 auto 4rem;
    line-height: 1.6;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  &__item {
    p {
      color: $text-secondary;
      font-size: 0.9rem;
      line-height: 1.5;
      margin-top: 0.75rem;
    }
  }

  &__number {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    color: $primary;
  }
}

@media (max-width: 768px) {
  .stats__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
