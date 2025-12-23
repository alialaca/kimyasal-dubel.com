<script setup lang="ts">
interface Props {
  title?: string
  titleHighlight?: string
  subtitle?: string
  description?: string
  productsImage?: string
}

withDefaults(defineProps<Props>(), {
  titleHighlight: 'Yüksek Performanslı',
  subtitle: 'Kimyasal Dübel Sistemleri',
  description: 'Güçlü yapılar, güçlü bağlantılarla başlar. Endüstriyel yapılardan altyapı projelerine kadar geniş kullanım alanına sahip kimyasal dübel çözümlerimiz, üstün tutunma performansı ve uzun ömürlü dayanıklılığıyla fark yaratır. Tüm testleri onaylanmış, güvenilir ve profesyonel uygulamalar için idealdir.',
  productsImage: '/images/products.png'
})
</script>

<template>
  <section class="hero">
    <!-- Background Gradient -->
    <div class="hero__background"></div>

    <!-- Decorative Elements -->
    <div class="hero__decorations">
      <!-- Vertical Lines -->
      <div class="hero__line hero__line--1"></div>
      <div class="hero__line hero__line--2"></div>
      <div class="hero__line hero__line--3"></div>
      <div class="hero__line hero__line--4"></div>
      <div class="hero__line hero__line--5"></div>
      <div class="hero__line hero__line--6"></div>

      <!-- Decorative Dots -->
      <div class="hero__dot hero__dot--1"></div>
      <div class="hero__dot hero__dot--2"></div>
      <div class="hero__dot hero__dot--3"></div>
      <div class="hero__dot hero__dot--4"></div>
      <div class="hero__dot hero__dot--5"></div>

      <!-- Large Circle -->
      <div class="hero__circle"></div>
    </div>

    <!-- Main Content Wrapper -->
    <div class="hero__main">
      <!-- Content -->
      <div class="hero__container">
        <div class="hero__content">
          <h1 class="hero__title">
            <span class="hero__title-highlight">{{ titleHighlight }}</span>
            <span class="hero__title-main">{{ subtitle }}</span>
          </h1>
          <p class="hero__description">{{ description }}</p>
        </div>
      </div>

      <!-- Products Image -->
      <div class="hero__products">
        <NuxtImg
          :src="productsImage"
          alt="Bossong Ürünleri"
          class="hero__products-img"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}

/* Main Content Wrapper */
.hero__main {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Background Gradient */
.hero__background {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    #eff6ff 0%,
    #8da2c1 41.35%,
    #183f78 86.54%
  );
  z-index: 0;
}

/* Decorations Container */
.hero__decorations {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

/* Vertical Lines */
.hero__line {
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.08);
  top: 0;
}

.hero__line--1 { left: 13.8%; }
.hero__line--2 { left: 28.1%; }
.hero__line--3 { left: 42.4%; }
.hero__line--4 { left: 56.7%; }
.hero__line--5 { left: 71%; }
.hero__line--6 { left: 85.3%; }

/* Decorative Dots */
.hero__dot {
  position: absolute;
  border-radius: 50%;
  background-color: #0d9e55;
}

.hero__dot--1 {
  width: 29px;
  height: 29px;
  left: 12.8%;
  top: 42%;
}

.hero__dot--2 {
  width: 23px;
  height: 23px;
  left: 27.3%;
  top: 59%;
}

.hero__dot--3 {
  width: 17px;
  height: 17px;
  left: 70.5%;
  top: 56%;
}

.hero__dot--4 {
  width: 23px;
  height: 23px;
  left: 84.6%;
  top: 16%;
}

.hero__dot--5 {
  width: 15px;
  height: 15px;
  left: 56.2%;
  top: 69%;
}

/* Large Circle */
.hero__circle {
  position: absolute;
  width: 174px;
  height: 174px;
  right: -5px;
  top: 22%;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

/* Container - centers text vertically in available space */
.hero__container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 24px 0;
  box-sizing: border-box;
}

/* Content */
.hero__content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero__title {
  margin: 0 0 24px 0;
  line-height: 1.1;
}

.hero__title-highlight {
  display: block;
  font-size: 75px;
  font-weight: 900;
  color: #183f78;
  margin-bottom: 8px;
}

.hero__title-main {
  display: block;
  font-size: 61px;
  font-weight: 600;
  color: #000000;
}

.hero__description {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: #fafafa;
  max-width: 625px;
  margin: 0 auto;
}

/* Products Image */
.hero__products {
  width: 100%;
  max-width: 1305px;
  margin: 40px auto 0;
  padding: 0 24px;
  box-sizing: border-box;
}

.hero__products-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Responsive */
@media (max-width: 1200px) {
  .hero__title-highlight {
    font-size: 60px;
  }

  .hero__title-main {
    font-size: 50px;
  }

  .hero__circle {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 1024px) {
  .hero__title-highlight {
    font-size: 48px;
  }

  .hero__title-main {
    font-size: 40px;
  }

  .hero__description {
    font-size: 16px;
  }

  .hero__dot {
    transform: scale(0.8);
  }

  .hero__circle {
    width: 120px;
    height: 120px;
    right: -20px;
  }
}

@media (max-width: 768px) {
  .hero__container {
    padding-top: 70px;
  }

  .hero__title-highlight {
    font-size: 40px;
  }

  .hero__title-main {
    font-size: 32px;
  }

  .hero__description {
    font-size: 15px;
  }

  .hero__line {
    display: none;
  }

  .hero__dot {
    display: none;
  }

  .hero__circle {
    width: 80px;
    height: 80px;
    right: -30px;
    top: 15%;
  }

  .hero__products {
    max-width: 100%;
    padding: 0;
    margin-top: 24px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  .hero__products-img {
    width: 220%;
    flex-shrink: 0;
  }
}

@media (max-width: 480px) {
  .hero__container {
    padding-top: 90px;
  }

  .hero__title-highlight {
    font-size: 32px;
  }

  .hero__title-main {
    font-size: 26px;
  }

  .hero__description {
    font-size: 14px;
  }

  .hero__circle {
    display: none;
  }

  .hero__products {
    margin-top: 20px;
  }

  .hero__products-img {
    width: 280%;
  }
}
</style>