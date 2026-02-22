<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import TrustBanner from '@/components/TrustBanner.vue'
import FeaturesGrid from '@/components/FeaturesGrid.vue'
import StatsSection from '@/components/StatsSection.vue'
import ProductShowcase from '@/components/ProductShowcase.vue'
import ProductGallery from '@/components/ProductGallery.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProductsGrid from '@/components/ProductsGrid.vue'
import ContactSection from '@/components/ContactSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="opus-site">
    <NavBar />
    <HeroSection />
    <TrustBanner />
    <FeaturesGrid />
    <StatsSection />
    <ProductShowcase />
    <ProductGallery />
    <AboutSection />
    <ProductsGrid />
    <ContactSection />
    <TestimonialsSection />
    <FooterSection />
  </div>
</template>

<style lang="scss" scoped>
.opus-site {
  min-height: 100vh;
  background: $primary-dark;
  overflow-x: hidden;
}
</style>
