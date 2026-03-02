import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 9000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for Vue and Router mapping
          'vendor': ['vue', 'vue-router'],
          // Geographic data should be chunked separately given its size
          'geo-data': ['country-state-city']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['country-state-city']
  }
})
