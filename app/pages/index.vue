<script setup lang="ts">
const products = [
  {
    titleMain: 'V-PLUS',
    description:
      'Beton, dolu tuğla, delikli tuğla ve ahşapta ağır yüklerin güvenli sabitlenmesi için geliştirilen Bossong epoksiakrilat reçine, stiren içermeyen formülü sayesinde kapalı alanlarda rahatlıkla kullanılabilir. Kokusuz yapısı, yüksek tutunma gücü ve ETA onaylarıyla profesyonel uygulamalarda güvenle tercih edilir. Kuru veya yaş zeminlerde üstün performans sunar.',
    productImage: '/images/kimyasal-dubel.png',
    buttonText: 'Ürün Detayı',
    buttonLink: '#',
  },
  {
    titleMain: 'EPOXY',
    description:
      'Stiren içermeyen, iki bileşenli saf epoksi formülüyle FixPro EPX-100; sismik dayanım, yangına karşı direnç ve 100 yıla varan hizmet ömrü sunar. ETA belgeli bu ürün, çatlaklı/çatlaksız betonlar, su dolu delikler, tuğla ve ahşap gibi zorlu yüzeylerde yüksek tutunma performansı sağlar. Derin ankrajlar, düşük sıcaklıkta uygulamalar ve yapı güçlendirme projeleri için idealdir.',
    productImage: '/images/celik-dubel.png',
    buttonText: 'Ürün Detayı',
    buttonLink: '#',
  },
  {
    titleMain: 'V-PLUS',
    description:
        'Beton, dolu tuğla, delikli tuğla ve ahşapta ağır yüklerin güvenli sabitlenmesi için geliştirilen Bossong epoksiakrilat reçine, stiren içermeyen formülü sayesinde kapalı alanlarda rahatlıkla kullanılabilir. Kokusuz yapısı, yüksek tutunma gücü ve ETA onaylarıyla profesyonel uygulamalarda güvenle tercih edilir. Kuru veya yaş zeminlerde üstün performans sunar.',
    productImage: '/images/kimyasal-dubel.png',
    buttonText: 'Ürün Detayı',
    buttonLink: '#',
  },
  {
    titleMain: 'V-PLUS',
    description:
        'Beton, dolu tuğla, delikli tuğla ve ahşapta ağır yüklerin güvenli sabitlenmesi için geliştirilen Bossong epoksiakrilat reçine, stiren içermeyen formülü sayesinde kapalı alanlarda rahatlıkla kullanılabilir. Kokusuz yapısı, yüksek tutunma gücü ve ETA onaylarıyla profesyonel uygulamalarda güvenle tercih edilir. Kuru veya yaş zeminlerde üstün performans sunar.',
    productImage: '/images/kimyasal-dubel.png',
    buttonText: 'Ürün Detayı',
    buttonLink: '#',
  },
]

</script>

<template>
  <div>
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
  </div>
</template>

<style scoped>

</style>