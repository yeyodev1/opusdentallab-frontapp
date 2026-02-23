import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/OpusDentalLabView.vue'),
    meta: {
      title: 'Opus Dental Lab — High-Precision Dental Restorations Orlando',
      description: 'Opus Dental Lab LLC in Orlando, FL. Full-service dental laboratory specializing in high-quality zirconia hybrids, All-on-X, crowns, and digital workflow.'
    },
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/CatalogView.vue'),
    meta: {
      title: 'Premium Dental Product Catalog — Opus Dental Lab',
      description: 'Explore our comprehensive range of high-precision restorations: Fixed, Implants, Removables, and Retainers. Crafted for excellence and patient comfort.'
    },
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('../views/LatestCasesView.vue'),
    meta: {
      title: 'Clinical Case Gallery — Real Results by Opus Dental Lab',
      description: 'See our latest clinical outcomes. High-fidelity cases, All-on-X hybrid restorations, and cosmetic success stories delivered to dentists.'
    },
  },
  {
    path: '/cases/:slug',
    name: 'CaseDetail',
    component: () => import('../views/CaseDetailView.vue'),
    meta: {
      title: 'Case Detail — Opus Dental Lab Clinical Excellence',
      description: 'Detailed view of our precision dental restorations. Evidence of our commitment to marginal fit, esthetics, and technical mastery.'
    },
  },
  {
    path: '/old-home',
    name: 'OldHome',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Old Home' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to, _from, next) => {
  const hasToken = !!localStorage.getItem('access_token')
  const requiresAuth = to.matched.some((record) => record.meta?.requiresAuth)

  if (requiresAuth && !hasToken) {
    return next({ path: '/login', replace: true })
  }

  if (to.path === '/login' && hasToken) {
    return next({ path: '/', replace: true })
  }

  next()
})

router.afterEach((to) => {
  // Update Document Title
  const title = (to.meta?.title as string) || 'Opus Dental Lab — Premium Dental Restorations'
  document.title = title

  // Update Meta Description
  const description = (to.meta?.description as string) || 'Opus Dental Lab LLC — Full-service dental laboratory delivering high-quality, state-of-the-art dental restorations.'
  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', description)
  }

  // Update OG/Twitter Titles and Descriptions
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', title)

  const twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) twitterTitle.setAttribute('content', title)

  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', description)

  const twitterDesc = document.querySelector('meta[name="twitter:description"]')
  if (twitterDesc) twitterDesc.setAttribute('content', description)
})

export default router
