<script setup lang="ts">
interface NavLink {
  label: string
  to: string
}

const navLinks: NavLink[] = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Vinil', to: '/products/vinil' },
  { label: 'V-Plus', to: '/products/v-plus' },
  { label: 'E-Plus', to: '/products/e-plus' },
  { label: 'Epoxy 21', to: '/products/epoxy-21' },
  { label: 'İletişim', to: '#footer' }
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar__container">
      <!-- FixPro Logo -->
      <NuxtLink to="/" class="navbar__logo">
        <NuxtImg src="/images/fixpro.png" alt="FixPro" class="navbar__logo-img" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="navbar__menu">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Bossong Logo -->
      <NuxtLink to="/" class="navbar__brand">
        <NuxtImg src="/images/bossong.png" alt="Bossong" class="navbar__brand-img" />
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button class="navbar__mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <Icon :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" size="28" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="navbar__mobile-menu">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="navbar__mobile-link"
          @click="isMobileMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 24px 0;
  font-family: 'DM Sans', sans-serif;
}

.navbar__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  flex-shrink: 0;
}

.navbar__logo-img {
  height: 45px;
  width: auto;
}

.navbar__menu {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #183f78;
  padding: 12px 18px;
  border-radius: 12px;
}

.navbar__link {
  color: #fafafa;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  padding: 5px 16px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.navbar__link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.navbar__brand {
  flex-shrink: 0;
}

.navbar__brand-img {
  height: 53px;
  width: auto;
}

.navbar__mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: #183f78;
  cursor: pointer;
  padding: 8px;
}

.navbar__mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #183f78;
  padding: 16px 24px;
  flex-direction: column;
  gap: 8px;
}

.navbar__mobile-link {
  color: #fafafa;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.navbar__mobile-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 1024px) {
  .navbar__menu {
    padding: 10px 14px;
    gap: 4px;
  }

  .navbar__link {
    font-size: 16px;
    padding: 5px 12px;
  }

  .navbar__logo-img {
    height: 38px;
  }

  .navbar__brand-img {
    height: 45px;
  }
}

@media (max-width: 768px) {
  .navbar__menu {
    display: none;
  }

  .navbar__brand {
    display: none;
  }

  .navbar__mobile-toggle {
    display: block;
  }

  .navbar__mobile-menu {
    display: flex;
  }
}

/* Transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>