import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/OpusDentalLabView.vue'),
    meta: { title: 'Opus Dental Lab' },
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/CatalogView.vue'),
    meta: { title: 'Our Catalog' },
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('../views/LatestCasesView.vue'),
    meta: { title: 'Latest Cases' },
  },
  {
    path: '/cases/:slug',
    name: 'CaseDetail',
    component: () => import('../views/CaseDetailView.vue'),
    meta: { title: 'Case Detail' },
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

export default router
