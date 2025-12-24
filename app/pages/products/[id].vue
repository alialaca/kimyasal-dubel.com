<script setup lang="ts">
interface ProductFeature {
  icon: string
  title: string
  subtitle: string
}

interface ProductContent {
  descriptions: string[]
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
    shortDescription: 'İki bileşenli, stiren içermeyen Bossong epoksiakrilat reçine; beton, dolu tuğla, delikli tuğla ve ahşap yüzeylerde yüksek dayanımlı sabitleme için geliştirilmiştir. Kapalı alanlarda dahi kokusuz, güvenli ve hızlı uygulama imkânı sunar.',
    badge: 'ETA Onaylı',
    image: '/images/products/vinil.png',
    features: [
      { icon: '/images/icons/hizli-sertlesme.png', title: 'Hızlı Sertleşme', subtitle: '15 dakika' },
      { icon: '/images/icons/yuksek-dayanim.png', title: 'Yüksek Dayanım', subtitle: 'C20/25 beton' },
      { icon: '/images/icons/kolay-uygulama.png', title: 'Kolay Uygulama', subtitle: 'Pratik Sistem' }
    ],
    certificationsImage: '/images/certifications/vinil.png',
    technicalPdf: '/docs/vinil-technical.pdf',
    content: {
      descriptions: ['Bossong epoksiakrilat reçine, çatlak olmayan beton ve diğer zorlu yüzeylerde ağır yüklerin sabitlenmesinde üstün performans sağlar. Stiren içermeyen özel formülü sayesinde rahatsız edici koku olmadan, hem iç hem dış mekanlarda güvenle kullanılabilir. ETA-15/0708 sertifikası ile M8–M16 arası dişli çubuklarda ve çeşitli ankraj derinliklerinde kullanım onayına sahiptir. Zorlu sıcaklık koşullarında dahi yüksek performansını korur.'],
      features: [
        'Beton, tuğla, doğal taş ve ahşap gibi çeşitli yüzeylerde kullanım',
        'Stiren içermeyen çevre dostu formül',
        'Yüksek yük taşıma kapasitesi ve uzun ömür',
        'Hızlı sertleşme ve kolay uygulama',
        'Geniş sıcaklık aralığında kullanım (-40°C ile +80°C arası)',
        'Kullanım Durumu: Kuru veya yaş beton'
      ],
      applications: 'Ağır raf sistemleri, çelik konstrüksiyonlar, makine ve ekipman montajları ile ahşap ve metal yapı bağlantılarında, ayrıca betonarme projelerde güvenli ankraj için idealdir.'
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
      descriptions: ['V-Plus Kimyasal Dübel, modern inşaat sektörünün en zorlu gereksinimlerini karşılamak için geliştirilmiş yüksek performanslı bir bağlantı çözümüdür. Stiren içermeyen özel formülü sayesinde çevre dostu bir alternatif sunarken, mükemmel mekanik özellikler ve dayanıklılık sağlar.'],
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
    shortDescription: '',
    badge: 'ETA Onaylı',
    image: '/images/products/e-plus.png',
    features: [
      { icon: '/images/icons/hizli-sertlesme.png', title: 'Hızlı Sertleşme', subtitle: '15 dakika' },
      { icon: '/images/icons/yuksek-dayanim.png', title: 'Yüksek Dayanım', subtitle: 'C20/25 beton' },
      { icon: '/images/icons/kolay-uygulama.png', title: 'Kolay Uygulama', subtitle: 'Pratik Sistem' }
    ],
    certificationsImage: '/images/certifications/e-plus.png',
    technicalPdf: '/docs/e-plus-technical.pdf',
    content: {
      descriptions: [
          'Yüksek performanslı saf epoksi formülüyle üretilen bu kimyasal ankraj, 3:1 formatında 385 ml ve 585 ml kartuşlarda sunulur. EAD 330499-01-0601 ve EAD 330087-01-0601 standartlarına göre ETA onayına sahiptir ve 100 yıllık hizmet ömrüyle büyük ölçekli projeler için idealdir.',
          'M12–M24 çapları için C2 sismik yeterlilik, M8–M30 dişli çubuklar ve 8–32 mm takviyeli çubuklar için statik ve yarı statik sertifikalıdır. Hem delinmiş hem de elmas karotlu deliklerde kullanılabilir, 2500 mm’ye kadar montaj derinliğine uygundur. Yüksek akışkanlığı sayesinde derin deliklerde ve düşük sıcaklıklarda kolay uygulanır, tiksotropik yapısı ise havai montajlarda sarkma yapmaz.  R240 yangın dayanımı, LEED GOLD çevre sertifikası ve CAM uyumluluğu ile hem teknik hem çevresel açıdan üst seviye bir çözümdür.'
      ],
      features: [
        'Stiren içermeyen, saf epoksi formül',
        '100 yıl hizmet ömrü – uzun vadeli projeler için ideal',
        'C2 sismik onay (M12–M24) ve geniş çap aralığı (M8–M30 dişli, 8–32 mm takviyeli çubuk)',
        'Hem çatlaklı hem çatlaksız betonda yüksek bağ performansı',
        '2500 mm’ye kadar montaj derinliği ve derin deliklerde kolay uygulama',
        'R240 yangın dayanımı',
        'LEED GOLD sertifikalı ve CAM gerekliliklerine uygun',
        'Kuru, ıslak ve su dolu deliklerde güvenli sertleşme',
        'Hızlı sıkma süresi ile şantiyede verimlilik',
        'Havai uygulamalarda sarkma yapmayan tiksotropik yapı',
        'Ön karıştırma gerektirmeyen, kartuş içi otomatik karışım sistemi',
        'Onarım ve dolgu macunu olarak da kullanılabilme'
      ],
      applications: 'Büyük ölçekli altyapı projeleri, köprü ve tünel yapıları, yüksek katlı bina montajları, çelik konstrüksiyon sabitleme, sismik güçlendirme çalışmaları, yangına dayanıklı montajlar, duvar ve ahşap sabitleme ile onarım işlerinde kullanıma uygundur.'
    }
  },
  'epoxy-21': {
    id: 'epoxy-21',
    name: 'EPOXY 21 Kimyasal Dübel',
    shortDescription: 'İki bileşenli Bossong EPOXY 21, beton, tuğla ve ahşap yüzeylerde ağır yüklerin güvenli sabitlenmesi için tasarlanmış, sismik onaylı ve yüksek tutunma değerine sahip güçlü bir ankraj sistemidir.',
    badge: 'Eta Onaylı',
    image: '/images/products/epoxy21.png',
    features: [
      { icon: '/images/icons/hizli-sertlesme.png', title: 'Hızlı Sertleşme', subtitle: '15 dakika' },
      { icon: '/images/icons/yuksek-dayanim.png', title: 'Yüksek Dayanım', subtitle: 'C20/25 beton' },
      { icon: '/images/icons/kolay-uygulama.png', title: 'Kolay Uygulama', subtitle: 'Pratik Sistem' }
    ],
    certificationsImage: '/images/certifications/epoxy21.png',
    technicalPdf: '/docs/epoxy21-technical.pdf',
    content: {
      descriptions: [
          'EPOXY 21, çift CE işaretine sahip, C2 kategorisinde sismik onaylı, iki bileşenli epoksi bazlı kimyasal ankraj reçinesidir. Avrupa Teknik Değerlendirmesi (ETA) onayları sayesinde M8–M30 arası dişli çubuklar ve 8–32 mm çapındaki çubuklar için en yüksek güvenilirlik standartlarını karşılar.',
          'Kuru, yaş veya su dolu deliklerde yüke bindirme sürelerini uzatmadan kullanılabilir. Çatlaksız beton için M8–M30, çatlaklı beton için M12–M24 aralığında sertifikalıdır. 2500 mm’ye kadar ankraj derinliğiyle geniş uygulama esnekliği sunar. Elektrik izolasyonu sağlayarak gezici akımların etkisini ortadan kaldırır ve yüksek dielektrik güce sahiptir. Hidrolize karşı dayanıklı yapısı, uzun ömürlü kullanım sağlar.'
      ],
      features: [
        'Beton, tuğla, doğal taş ve ahşap yüzeylerde kullanım',
        'C2 sismik onay ve çift CE sertifikası',
        'Yüksek yük taşıma kapasitesi ve uzun ömürlü dayanım',
        'Kuru, yaş veya su dolu deliklerde güvenli uygulama',
        '2500 mm’ye kadar derin ankraj imkânı',
        'Elektrik izolasyonu sağlayan yüksek dielektrik güç',
        'Genleşmeyen yapı sayesinde taban malzemesinde gerilim oluşturmaz',
        'Hızlı ve kolay uygulama – reçine ve sertleştirici, uygulama sırasında otomatik karışır',
        '-40°C ile +80°C arasında geniş sıcaklık aralığında kullanım'
      ],
      applications: 'Sismik riskli bölgelerde ağır yük montajları, çelik konstrüksiyon sabitleme, makine ve ekipman kurulumu, köprü ve altyapı projeleri, elektrik izolasyonu gereken montajlar ve betonarme onarımlar için idealdir.'
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

onMounted(() => {
  if (product.value) {
    umTrackEvent('product_view', { product: product.value.name, productId })
  }
})

function trackPdfDownload() {
  if (product.value) {
    umTrackEvent('pdf_download', { product: product.value.name, productId })
  }
}

function trackContactClick() {
  if (product.value) {
    umTrackEvent('contact_click', { product: product.value.name, productId })
  }
}
</script>

<template>
  <div class="product-page">
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
              <NuxtLink to="#footer" class="product-hero__btn product-hero__btn--primary" @click="trackContactClick">
                <Icon name="mdi:phone" size="20" />
                <span>Detaylı Bilgi Al</span>
              </NuxtLink>
              <a
                v-if="product.technicalPdf"
                :href="product.technicalPdf"
                target="_blank"
                class="product-hero__btn product-hero__btn--secondary"
                @click="trackPdfDownload"
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
            <p v-for="description in product.content.descriptions" class="product-content__text">{{ description }}</p>
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

    <FooterSection />
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
  margin: 0 0 16px 0;
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