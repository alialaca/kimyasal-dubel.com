<script setup lang="ts">
const products = [
  {
    id: 'v-plus',
    titleMain: 'V-PLUS',
    description: 'Beton, dolu tuğla, delikli tuğla ve ahşapta ağır yüklerin güvenli sabitlenmesi için geliştirilen Bossong epoksiakrilat reçine, stiren içermeyen formülü sayesinde kapalı alanlarda rahatlıkla kullanılabilir. Kokusuz yapısı, yüksek tutunma gücü ve ETA onaylarıyla profesyonel uygulamalarda güvenle tercih edilir. Kuru veya yaş zeminlerde üstün performans sunar.',
    productImage: '/images/v-plus.png',
    buttonText: 'Ürün Detayı',
    buttonLink: 'products/v-plus',
  },
  {
    id: 'e-plus',
    titleMain: 'E-PLUS',
    description: 'Stiren içermeyen, iki bileşenli saf epoksi formülüyle FixPro EPX-100; sismik dayanım, yangına karşı direnç ve 100 yıla varan hizmet ömrü sunar. ETA belgeli bu ürün, çatlaklı/çatlaksız betonlar, su dolu delikler, tuğla ve ahşap gibi zorlu yüzeylerde yüksek tutunma performansı sağlar. Derin ankrajlar, düşük sıcaklıkta uygulamalar ve yapı güçlendirme projeleri için idealdir.',
    productImage: '/images/e-plus.png',
    buttonText: 'Ürün Detayı',
    buttonLink: 'products/e-plus',
  },
  {
    id: 'epoxy21',
    titleMain: 'EPOXY 21',
    description: 'EPOXY 21, ETA onaylı çift CE belgeli yapısıyla; beton, dolu tuğla ve ahşap uygulamalarda yüksek tutunma sağlayan iki bileşenli epoksi reçinedir. C2 sismik uygunluğu, su dolu deliklerde dahi güçlü performansı ve 2500 mm’ye kadar ankrajlama derinliği ile büyük ölçekli projelerde güvenle kullanılır. Elektrik izolasyonu ve tiksotropik yapısıyla da fark yaratır.',
    productImage: '/images/epoxy21.png',
    buttonText: 'Ürün Detayı',
    buttonLink: '/products/epoxy-21',
  },
  {
    id: 'vinil',
    titleMain: 'VINIL',
    description: 'Beton, dolu tuğla, delikli tuğla ve ahşapta ağır yüklerin güvenli sabitlenmesi için geliştirilen Bossong epoksiakrilat reçine, stiren içermeyen formülü sayesinde kapalı alanlarda rahatlıkla kullanılabilir. Kokusuz yapısı, yüksek tutunma gücü ve ETA onaylarıyla profesyonel uygulamalarda güvenle tercih edilir. Kuru veya yaş zeminlerde üstün performans sunar.',
    productImage: '/images/vinil.png',
    buttonText: 'Ürün Detayı',
    buttonLink: 'products/vinil',
  },
]

</script>

<template>
  <div>
    <HeroSection />
    <SectionTitle title="Ürünlerimiz"/>
    <ProductSection
      v-for="(product, index) in products"
      :key="index"
      :titleMain="product.titleMain"
      :description="product.description"
      :productImage="product.productImage"
      :buttonText="product.buttonText"
      :buttonLink="product.buttonLink"
      :variant="index % 2 === 0 ? 'light' : 'dark'"
    />
    <SoftwareSection/>
    <FooterSection/>
  </div>
</template>

<style>
body {
  margin: 0 !important;
}
</style>