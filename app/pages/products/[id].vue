<script setup lang="ts">
interface ProductFeature {
  icon: string
  title: string
  subtitle: string
}

interface ProductContent {
  description: string
  features: string[]
  applications: string
}

interface Product {
  id: string
  name: string
  shortDescription: string
  badge?: string
  image: string
  features: ProductFeature[]
  certificationsImage: string
  technicalPdf?: string
  content: ProductContent
}

const route = useRoute()
const productId = route.params.id as string

// Mock product data - In production, fetch from API or CMS
const products: Record<string, Product> = {
  'vinil': {
    id: 'vinil',
    name: 'VINIL Kimyasal Dübel',
    shortDescription: 'Beton, dolu tuğla, delikli tuğla ve ahşapta ağır yüklerin güvenli sabitlenmesi için geliştirilen Bossong epoksiakrilat reçine, stiren içermeyen formülü sayesinde kapalı alanlarda rahatlıkla kullanılabilir.',
    badge: 'ETA Onaylı',
    image: '/images/products/vinil.png',
    features: [
      { icon: '/images/icons/hizli-sertlesme.png', title: 'Hızlı Sertleşme', subtitle: '20 dakika' },
      { icon: '/images/icons/yuksek-dayanim.png', title: 'Yüksek Dayanım', subtitle: 'C20/25 beton' },
      { icon: '/images/icons/kolay-uygulama.png', title: 'Kolay Uygulama', subtitle: 'Pratik Sistem' }
    ],
    certificationsImage: '/images/certifications/vinil.png',
    technicalPdf: '/docs/vinil-technical.pdf',
    content: {
      description: 'VINIL Kimyasal Dübel, modern inşaat sektörünün en zorlu gereksinimlerini karşılamak için geliştirilmiş yüksek performanslı bir bağlantı çözümüdür. Stiren içermeyen özel formülü sayesinde çevre dostu bir alternatif sunarken, mükemmel mekanik özellikler ve dayanıklılık sağlar.',
      features: [
        'Beton, tuğla, doğal taş ve ahşap gibi çeşitli yüzeylerde kullanım',
        'Stiren içermeyen çevre dostu formül',
        'Yüksek yük taşıma kapasitesi ve uzun ömür',
        'Hızlı sertleşme ve kolay uygulama',
        'Geniş sıcaklık aralığında kullanım (-40°C ile +80°C arası)'
      ],
      applications: 'Yapısal çelik bağlantıları, makine temelleri, korkuluk montajları, asansör rayları, köprü parapet bağlantıları ve endüstriyel ekipman montajları gibi kritik uygulamalarda güvenle kullanılabilir.'
    }
  },
  'v-plus': {
    id: 'v-plus',
    name: 'V-PLUS Kimyasal Dübel',
    shortDescription: 'Beton, tuğla ve doğal taş gibi yüzeylerde güvenilir bağlantı sağlayan, stiren içermeyen formülü ile çevre dostu kimyasal dübel çözümü. Ağır yük taşıma kapasitesi ile endüstriyel uygulamalar için ideal.',
    badge: 'ETA Onaylı',
    image: '/images/products/v-plus.png',
    features: [
      { icon: '/images/icons/hizli-sertlesme.png', title: 'Hızlı Sertleşme', subtitle: '15 dakika' },
      { icon: '/images/icons/yuksek-dayanim.png', title: 'Yüksek Dayanım', subtitle: 'C20/25 beton' },
      { icon: '/images/icons/kolay-uygulama.png', title: 'Kolay Uygulama', subtitle: 'Pratik Sistem' }
    ],
    certificationsImage: '/images/certifications/v-plus.png',
    technicalPdf: '/docs/v-plus-technical.pdf',
    content: {
      description: 'V-Plus Kimyasal Dübel, modern inşaat sektörünün en zorlu gereksinimlerini karşılamak için geliştirilmiş yüksek performanslı bir bağlantı çözümüdür. Stiren içermeyen özel formülü sayesinde çevre dostu bir alternatif sunarken, mükemmel mekanik özellikler ve dayanıklılık sağlar.',
      features: [
        'Beton, tuğla, doğal taş ve ahşap gibi çeşitli yüzeylerde kullanım',
        'Stiren içermeyen çevre dostu formül',
        'Yüksek yük taşıma kapasitesi ve uzun ömür',
        'Hızlı sertleşme ve kolay uygulama',
        'Geniş sıcaklık aralığında kullanım (-40°C ile +80°C arası)'
      ],
      applications: 'Yapısal çelik bağlantıları, makine temelleri, korkuluk montajları, asansör rayları, köprü parapet bağlantıları ve endüstriyel ekipman montajları gibi kritik uygulamalarda güvenle kullanılabilir.'
    }
  },
  'e-plus': {
    id: 'e-plus',
    name: 'E-PLUS Kimyasal Dübel',
    shortDescription: 'Stiren içermeyen, iki bileşenli saf epoksi formülüyle sismik dayanım, yangına karşı direnç ve 100 yıla varan hizmet ömrü sunar. ETA belgeli bu ürün zorlu yüzeylerde yüksek tutunma performansı sağlar.',
    badge: 'ETA Onaylı',
    image: '/images/products/e-plus.png',
    features: [
      { icon: '/images/icons/hizli-sertlesme.png', title: 'Hızlı Sertleşme', subtitle: '12 dakika' },
      { icon: '/images/icons/yuksek-dayanim.png', title: 'Sismik Dayanım', subtitle: 'C2 Sınıfı' },
      { icon: '/images/icons/kolay-uygulama.png', title: 'Yangın Direnci', subtitle: 'R120' }
    ],
    certificationsImage: '/images/certifications/e-plus.png',
    technicalPdf: '/docs/e-plus-technical.pdf',
    content: {
      description: 'E-Plus Kimyasal Dübel, saf epoksi reçine bazlı iki bileşenli formülüyle en yüksek performans gereksinimlerini karşılar. Özellikle sismik bölgelerde ve yangın güvenliğinin kritik olduğu projelerde tercih edilir.',
      features: [
        'Saf epoksi reçine bazlı iki bileşenli formül',
        'C2 sınıfı sismik performans',
        'R120 yangın direnci sınıfı',
        '100 yıla varan hizmet ömrü',
        'Çatlaklı ve çatlaksız betonlarda kullanım'
      ],
      applications: 'Deprem bölgelerindeki yapılar, yüksek güvenlik gerektiren endüstriyel tesisler, köprüler, tüneller ve kritik altyapı projeleri için idealdir.'
    }
  },
  'epoxy-21': {
    id: 'epoxy-21',
    name: 'EPOXY 21 Kimyasal Dübel',
    shortDescription: 'ETA onaylı çift CE belgeli yapısıyla; beton, dolu tuğla ve ahşap uygulamalarda yüksek tutunma sağlayan iki bileşenli epoksi reçinedir. C2 sismik uygunluğu ile büyük ölçekli projelerde güvenle kullanılır.',
    badge: 'Çift CE Belgeli',
    image: '/images/products/epoxy21.png',
    features: [
      { icon: '/images/icons/hizli-sertlesme.png', title: 'Hızlı Sertleşme', subtitle: '10 dakika' },
      { icon: '/images/icons/yuksek-dayanim.png', title: 'Derin Ankraj', subtitle: '2500 mm' },
      { icon: '/images/icons/kolay-uygulama.png', title: 'Su Direnci', subtitle: 'Islak Zemin' }
    ],
    certificationsImage: '/images/certifications/epoxy21.png',
    technicalPdf: '/docs/epoxy21-technical.pdf',
    content: {
      description: 'EPOXY 21, ETA onaylı çift CE belgeli yapısıyla; beton, dolu tuğla ve ahşap uygulamalarda yüksek tutunma sağlayan iki bileşenli epoksi reçinedir. C2 sismik uygunluğu, su dolu deliklerde dahi güçlü performansı ve 2500 mm\'ye kadar ankrajlama derinliği ile büyük ölçekli projelerde güvenle kullanılır.',
      features: [
        'Çift CE belgeli yüksek kalite standardı',
        'C2 sismik performans sınıfı',
        '2500 mm\'ye kadar ankrajlama derinliği',
        'Su dolu deliklerde uygulama imkanı',
        'Elektrik izolasyonu ve tiksotropik yapı'
      ],
      applications: 'Büyük ölçekli altyapı projeleri, barajlar, limanlar, endüstriyel tesisler ve ağır yük taşıyan yapısal bağlantılarda güvenle kullanılır.'
    }
  }
}

const product = computed(() => products[productId] || null)

// SEO
useHead({
  title: () => product.value ? `${product.value.name} | Bossong` : 'Ürün Bulunamadı',
  meta: [
    { name: 'description', content: () => product.value?.shortDescription || '' }
  ]
})
</script>

<template>
  <div class="product-page">
    <!-- Navbar -->
    <Navbar />

    <!-- Product Not Found -->
    <div v-if="!product" class="product-page__not-found">
      <h1>Ürün Bulunamadı</h1>
      <p>Aradığınız ürün mevcut değil.</p>
      <NuxtLink to="/" class="product-page__back-btn">Ana Sayfaya Dön</NuxtLink>
    </div>

    <!-- Product Content -->
    <main v-else class="product-page__main">
      <!-- Hero Section -->
      <section class="product-hero">
        <div class="product-hero__container">
          <!-- Product Image & Certifications -->
          <div class="product-hero__image-wrapper">
            <NuxtImg
              :src="product.image"
              :alt="product.name"
              class="product-hero__image"
            />
            <!-- Certifications -->
            <div class="product-hero__certifications">
              <NuxtImg
                :src="product.certificationsImage"
                :alt="`${product.name} Sertifikalar`"
                class="product-hero__certifications-img"
              />
            </div>
          </div>

          <!-- Product Info -->
          <div class="product-hero__info">
            <!-- Badge -->
            <div v-if="product.badge" class="product-hero__badge">
              <Icon name="mdi:check-decagram" size="14" />
              <span>{{ product.badge }}</span>
            </div>

            <!-- Title -->
            <h1 class="product-hero__title">{{ product.name }}</h1>

            <!-- Short Description -->
            <p class="product-hero__description">{{ product.shortDescription }}</p>

            <!-- Features -->
            <div class="product-hero__features">
              <div
                v-for="feature in product.features"
                :key="feature.title"
                class="product-hero__feature"
              >
                <NuxtImg
                  :src="feature.icon"
                  :alt="feature.title"
                  class="product-hero__feature-icon"
                />
                <div class="product-hero__feature-text">
                  <span class="product-hero__feature-title">{{ feature.title }}</span>
                  <span class="product-hero__feature-subtitle">{{ feature.subtitle }}</span>
                </div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="product-hero__buttons">
              <NuxtLink to="/iletisim" class="product-hero__btn product-hero__btn--primary">
                <Icon name="mdi:phone" size="20" />
                <span>Detaylı Bilgi Al</span>
              </NuxtLink>
              <a
                v-if="product.technicalPdf"
                :href="product.technicalPdf"
                target="_blank"
                class="product-hero__btn product-hero__btn--secondary"
              >
                <Icon name="mdi:file-pdf-box" size="20" />
                <span>Teknik Bilgi PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="product-content">
        <div class="product-content__card">
          <!-- Description -->
          <div class="product-content__section">
            <h2 class="product-content__heading">Ürün Açıklaması</h2>
            <p class="product-content__text">{{ product.content.description }}</p>
          </div>

          <!-- Features -->
          <div class="product-content__section">
            <h2 class="product-content__heading">Özellikler ve Avantajlar</h2>
            <ul class="product-content__list">
              <li v-for="feature in product.content.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Applications -->
          <div class="product-content__section">
            <h2 class="product-content__heading">Uygulama Alanları</h2>
            <p class="product-content__text">{{ product.content.applications }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.product-page {
  min-height: 100vh;
  background-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
}

/* Not Found */
.product-page__not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 24px;
}

.product-page__not-found h1 {
  font-size: 32px;
  font-weight: 700;
  color: #313131;
  margin-bottom: 12px;
}

.product-page__not-found p {
  font-size: 18px;
  color: #575757;
  margin-bottom: 24px;
}

.product-page__back-btn {
  background-color: #183f78;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.product-page__back-btn:hover {
  opacity: 0.9;
}

/* Main */
.product-page__main {
  padding-top: 120px;
}

/* Hero Section */
.product-hero {
  padding: 40px 0 60px;
}

.product-hero__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 60px;
  align-items: flex-start;
}

/* Product Image */
.product-hero__image-wrapper {
  flex: 1;
  max-width: 520px;
}

.product-hero__image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Product Info */
.product-hero__info {
  flex: 1;
  max-width: 560px;
}

/* Badge */
.product-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: rgba(2, 125, 58, 0.2);
  color: #006e32;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
}

/* Title */
.product-hero__title {
  font-size: 48px;
  font-weight: 800;
  color: #313131;
  margin: 0 0 16px 0;
  line-height: 1.1;
}

/* Description */
.product-hero__description {
  font-size: 18px;
  line-height: 1.5;
  color: #575757;
  margin: 0 0 32px 0;
}

/* Features */
.product-hero__features {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}

.product-hero__feature {
  flex: 1;
  background-color: #efefef;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  min-width: 145px;
}

.product-hero__feature-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
}

.product-hero__feature-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.product-hero__feature-title {
  font-size: 16px;
  font-weight: 800;
  color: #313131;
  line-height: 1.2;
}

.product-hero__feature-subtitle {
  font-size: 10px;
  color: #313131;
}

/* Certifications */
.product-hero__certifications {
  margin-top: 24px;
  text-align: center;
}

.product-hero__certifications-img {
  height: 75px;
  width: auto;
  object-fit: contain;
}

/* Buttons */
.product-hero__buttons {
  display: flex;
  gap: 16px;
}

.product-hero__btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.product-hero__btn--primary {
  background-color: #183f78;
  color: #ffffff;
}

.product-hero__btn--primary:hover {
  background-color: #122d56;
}

.product-hero__btn--secondary {
  background-color: transparent;
  color: #183f78;
  border: 1px solid #183f78;
}

.product-hero__btn--secondary:hover {
  background-color: rgba(24, 63, 120, 0.05);
}

/* Content Section */
.product-content {
  padding: 0 24px 80px;
}

.product-content__card {
  max-width: 1160px;
  margin: 0 auto;
  background-color: #fbfbfb;
  border-radius: 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 40px 50px;
}

.product-content__section {
  margin-bottom: 32px;
}

.product-content__section:last-child {
  margin-bottom: 0;
}

.product-content__heading {
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 12px 0;
}

.product-content__text {
  font-size: 18px;
  line-height: 1.6;
  color: #000000;
  margin: 0;
}

.product-content__list {
  margin: 0;
  padding-left: 24px;
}

.product-content__list li {
  font-size: 18px;
  line-height: 1.6;
  color: #000000;
  margin-bottom: 8px;
}

.product-content__list li:last-child {
  margin-bottom: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .product-hero__container {
    gap: 40px;
  }

  .product-hero__title {
    font-size: 40px;
  }

  .product-hero__description {
    font-size: 16px;
  }

  .product-hero__features {
    flex-wrap: wrap;
  }

  .product-hero__feature {
    min-width: calc(50% - 8px);
    flex: unset;
  }
}

@media (max-width: 768px) {
  .product-page__main {
    padding-top: 100px;
  }

  .product-hero__container {
    flex-direction: column;
    align-items: center;
  }

  .product-hero__image-wrapper {
    max-width: 400px;
  }

  .product-hero__info {
    max-width: 100%;
    text-align: center;
  }

  .product-hero__badge {
    margin: 0 auto 12px;
  }

  .product-hero__title {
    font-size: 32px;
  }

  .product-hero__features {
    justify-content: center;
  }

  .product-hero__feature {
    min-width: 140px;
    max-width: 160px;
  }

  .product-hero__certifications {
    text-align: center;
  }

  .product-hero__buttons {
    flex-direction: column;
    align-items: center;
  }

  .product-hero__btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .product-content__card {
    padding: 24px;
  }

  .product-content__heading {
    font-size: 20px;
  }

  .product-content__text,
  .product-content__list li {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .product-hero__title {
    font-size: 28px;
  }

  .product-hero__feature {
    min-width: 100%;
  }
}
</style>