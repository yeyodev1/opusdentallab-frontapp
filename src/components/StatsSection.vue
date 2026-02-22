<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = [
  {
    value: 5000,
    suffix: '+',
    label: 'Dentists trust us for exceptional quality, reliable service, and lasting partnerships',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Restorations delivered with precision and care — trusted by leading dentists nationwide',
  },
  {
    value: 85,
    suffix: '%',
    label: 'Cases Submitted Digitally — Trusted by Tech-Forward Practices Using iTero, TRIOS, Medit, and More',
  },
]

const counters = ref(stats.map(() => 0))
const sectionRef = ref<HTMLElement | null>(null)

function formatNumber(n: number): string {
  return n.toLocaleString('en-US')
}

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
      if (entry?.isIntersecting) {
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
      <p class="stats__subtitle">
        Not just restorations — precision-engineered results, seamless support,
        and partnerships that elevate your practice
      </p>

      <div class="stats__grid">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="stats__card"
        >
          <span class="stats__number">
            {{ formatNumber(counters[i] ?? 0) }}{{ stat.suffix }}
          </span>
          <p class="stats__label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stats {
  padding: 6rem 2rem;
  background: $primary-dark;

  &__inner {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 300;
    color: $text-light;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
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
    gap: 1rem;
  }

  // ─── Dark gradient card matching dentallab.com ───
  &__card {
    background:
      linear-gradient(145deg,
        rgba(255, 255, 255, 0.04) 0%,
        rgba(255, 255, 255, 0.01) 50%,
        transparent 100%);
    border: 1px solid $border-dark;
    border-radius: 1.5rem;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 280px;
    text-align: left;
    transition: border-color 0.3s, transform 0.3s;

    &:hover {
      border-color: rgba($primary, 0.2);
      transform: translateY(-3px);
    }
  }

  &__number {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 300;
    color: $text-light;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  &__label {
    color: $text-secondary;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: auto;
    padding-top: 2rem;
  }
}

@media (max-width: 1024px) {
  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .stats__grid {
    grid-template-columns: 1fr;
  }
}
</style>
