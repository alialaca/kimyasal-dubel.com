<script setup lang="ts">
interface Props {
  variant?: 'light' | 'dark'
  titleMain: string
  titleSub?: string
  description: string
  productImage: string
  buttonText?: string
  buttonLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'light',
  titleSub: 'Kimyasal Dübel',
  buttonText: 'Ürün Detayı',
  buttonLink: '#'
})

const isReversed = computed(() => props.variant === 'dark')
</script>

<template>
  <section :class="['product-section', `product-section--${variant}`]">
    <div class="product-section__container">
      <div :class="['product-section__content', { 'product-section__content--reversed': isReversed }]">
        <!-- Image Side -->
        <div class="product-section__image-wrapper">
          <div class="product-section__image-bg"></div>
          <NuxtImg
            :src="productImage"
            :alt="titleMain"
            class="product-section__image"
          />
        </div>

        <!-- Text Side -->
        <div class="product-section__text">
          <h2 class="product-section__title">
            <span class="product-section__title-main">{{ titleMain }}</span>
            <span class="product-section__title-sub">{{ titleSub }}</span>
          </h2>
          <p class="product-section__description">{{ description }}</p>
          <NuxtLink :to="buttonLink" class="product-section__button">
            {{ buttonText }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-section {
  padding: 80px 0;
  font-family: 'DM Sans', sans-serif;
}

.product-section--light {
  background-color: #f8f9fa;
}

.product-section--dark {
  background-color: #183f78;
}

.product-section__container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 24px;
}

.product-section__content {
  display: flex;
  align-items: center;
  gap: 80px;
}

.product-section__content--reversed {
  flex-direction: row-reverse;
}

/* Image Side */
.product-section__image-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.product-section__image-bg {
  position: absolute;
  width: 546px;
  height: 352px;
  border-radius: 10px;
  bottom: 0;
}

.product-section--light .product-section__image-bg {
  background-color: #ebebeb;
  left: 0;
}

.product-section--dark .product-section__image-bg {
  background-color: #ffffff;
  right: 0;
}

.product-section__image {
  position: relative;
  z-index: 1;
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

/* Text Side */
.product-section__text {
  flex: 1;
  max-width: 471px;
}

.product-section__title {
  margin: 0 0 24px 0;
  line-height: 1;
}

.product-section__title-main {
  display: block;
  font-size: 55px;
  font-weight: 600;
  margin-bottom: 6px;
}

.product-section__title-sub {
  display: block;
  font-size: 46px;
  font-weight: 600;
}

.product-section--light .product-section__title-main,
.product-section--light .product-section__title-sub {
  color: #000f37;
}

.product-section--dark .product-section__title-main,
.product-section--dark .product-section__title-sub {
  color: #fafafa;
}

.product-section__description {
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  margin: 0 0 32px 0;
}

.product-section--light .product-section__description {
  color: #575757;
}

.product-section--dark .product-section__description {
  color: #fafafa;
}

.product-section__button {
  display: inline-block;
  padding: 17px 43px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.product-section__button:hover {
  opacity: 0.9;
}

.product-section--light .product-section__button {
  background-color: #183f78;
  color: #fafafa;
}

.product-section--dark .product-section__button {
  background-color: #ffffff;
  color: #183f78;
}

/* Responsive */
@media (max-width: 1024px) {
  .product-section__content {
    gap: 40px;
  }

  .product-section__title-main {
    font-size: 42px;
  }

  .product-section__title-sub {
    font-size: 36px;
  }

  .product-section__description {
    font-size: 18px;
    line-height: 28px;
  }

  .product-section__image-bg {
    width: 400px;
    height: 280px;
  }
}

@media (max-width: 768px) {
  .product-section {
    padding: 60px 0;
  }

  .product-section__content,
  .product-section__content--reversed {
    flex-direction: column;
    gap: 40px;
  }

  .product-section__image-wrapper {
    min-height: 400px;
    width: 100%;
  }

  .product-section__image-bg {
    width: 100%;
    max-width: 400px;
    height: 260px;
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%);
  }

  .product-section__image {
    max-height: 400px;
  }

  .product-section__text {
    max-width: 100%;
    text-align: center;
  }

  .product-section__title-main {
    font-size: 36px;
  }

  .product-section__title-sub {
    font-size: 30px;
  }

  .product-section__description {
    font-size: 16px;
    line-height: 26px;
  }
}

@media (max-width: 480px) {
  .product-section__title-main {
    font-size: 28px;
  }

  .product-section__title-sub {
    font-size: 24px;
  }

  .product-section__button {
    padding: 14px 32px;
    font-size: 16px;
  }
}
</style>