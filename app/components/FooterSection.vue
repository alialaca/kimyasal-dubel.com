<script setup lang="ts">
const quickLinks = [
  { label: 'Hakkımızda', href: '#' },
  { label: 'Ürünler', href: '#' },
  { label: 'İndirmeler', href: '#' },
  { label: 'İletişim', href: '#' }
]

const serviceLinks = [
  { label: 'Teknik Servis', href: '#' },
  { label: 'Bayilik Başvurusu', href: '#' },
  { label: 'Kurumsal Satış', href: '#' },
  { label: 'Destek', href: '#' }
]

const socialLinks = [
  { icon: 'mdi:instagram', href: 'https://www.instagram.com/fixpro_tr/', label: 'Instagram' },
  { icon: 'mdi:facebook', href: 'https://www.facebook.com/fixprotr', label: 'Facebook' },
  { icon: 'ic:baseline-tiktok', href: 'https://www.tiktok.com/@fixpro_tr', label: 'TikTok' },
  { icon: 'mdi:youtube', href: 'https://www.youtube.com/@FixPro_tr', label: 'YouTube' },
  { icon: 'mdi:twitter', href: 'https://twitter.com', label: 'Twitter' },
  { icon: 'mdi:linkedin', href: 'https://tr.linkedin.com/company/fixpro-tr', label: 'LinkedIn' }
]
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer__container">
      <!-- Main Content -->
      <div class="footer__content">
        <!-- Company Info -->
        <div class="footer__company">
          <NuxtImg
            src="/images/fixpro-white.png"
            alt="FixPro"
            class="footer__logo"
          />
          <p class="footer__description">
            Türkiye'nin güvenilir teknik distribütörü. Kaliteli ürünler, profesyonel hizmet ve uzman destek.
          </p>

          <!-- Contact Info -->
          <div class="footer__contact">
            <a href="tel:+902327002484" class="footer__contact-item">
              <Icon name="mdi:phone" size="24" />
              <span>+90 232 700 24 84</span>
            </a>
            <a href="mailto:satis@fixpro.com.tr" class="footer__contact-item">
              <Icon name="mdi:email" size="24" />
              <span>satis@fixpro.com.tr</span>
            </a>
            <a href="https://www.fixpro.com.tr" target="_blank" class="footer__contact-item">
              <Icon name="mdi:web" size="24" />
              <span>www.fixpro.com.tr</span>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="footer__links">
          <!-- Quick Links -->
          <div class="footer__links-col">
            <h3 class="footer__links-title">Hızlı Linkler</h3>
            <ul class="footer__links-list">
              <li v-for="link in quickLinks" :key="link.href">
                <NuxtLink :to="link.href" class="footer__link">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer__links-col">
            <h3 class="footer__links-title">Hizmetler</h3>
            <ul class="footer__links-list">
              <li v-for="link in serviceLinks" :key="link.href">
                <NuxtLink :to="link.href" class="footer__link">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="footer__social">
        <a
          v-for="social in socialLinks"
          :key="social.icon"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__social-link"
          :aria-label="social.label"
        >
          <Icon :name="social.icon" size="28" />
        </a>
      </div>

      <!-- Divider -->
      <div class="footer__divider"></div>

      <!-- Copyright -->
      <div class="footer__copyright">
        <p>© 2025 FixPro. Tüm hakları saklıdır.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #183f78;
  padding: 60px 0 30px;
  font-family: 'DM Sans', sans-serif;
}

.footer__container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Main Content */
.footer__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  margin-bottom: 40px;
}

/* Company Info */
.footer__company {
  max-width: 350px;
}

.footer__logo {
  height: 78px;
  width: auto;
  margin-bottom: 26px;
}

.footer__description {
  font-size: 14px;
  line-height: 20px;
  color: #f5f7fa;
  margin: 0 0 16px 0;
}

/* Contact */
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.footer__contact-item:hover {
  opacity: 0.8;
}

/* Links */
.footer__links {
  display: flex;
  gap: 30px;
}

.footer__links-col {
  min-width: 160px;
}

.footer__links-title {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 24px 0;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.footer__links-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__link {
  font-size: 14px;
  line-height: 20px;
  color: #f5f7fa;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer__link:hover {
  opacity: 0.8;
}

/* Social Links */
.footer__social {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
}

.footer__social-link {
  color: #ffffff;
  transition: opacity 0.2s;
}

.footer__social-link:hover {
  opacity: 0.8;
}

/* Divider */
.footer__divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
}

/* Copyright */
.footer__copyright {
  text-align: center;
}

.footer__copyright p {
  font-size: 14px;
  line-height: 20px;
  color: #f5f7fa;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer__content {
    gap: 40px;
  }

  .footer__company {
    max-width: 300px;
  }

  .footer__links {
    gap: 24px;
  }

  .footer__links-col {
    min-width: 140px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 24px;
  }

  .footer__content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
  }

  .footer__company {
    max-width: 100%;
  }

  .footer__contact {
    align-items: center;
  }

  .footer__links {
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }

  .footer__links-col {
    text-align: center;
  }

  .footer__social {
    justify-content: center;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .footer__links {
    flex-direction: column;
    gap: 32px;
  }

  .footer__social {
    flex-wrap: wrap;
    gap: 16px;
  }

  .footer__logo {
    height: 60px;
  }

  .footer__links-title {
    font-size: 18px;
  }
}
</style>
