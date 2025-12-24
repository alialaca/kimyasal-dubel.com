<script setup lang="ts">
function trackQrClick() {
  umTrackEvent('software_qr_click', { target: 'bossong_fix_download' })
}
</script>

<template>
  <section class="software-section">
    <!-- Decorative Element -->
    <div class="software-section__decorator"></div>

    <div class="software-section__container">
      <!-- Header -->
      <div class="software-section__header">
        <h2 class="software-section__title">Hesaplama Programı</h2>
        <p class="software-section__description">
          Kimyasal ankrajlar ve sonradan yerleştirilen donatılar için geliştirilmiş, ETA ve Eurocode 2 uyumlu
          profesyonel hesaplama programı. Yapısal tasarımlarınız için hızlı, güvenilir ve detaylı çözümler sunar.
        </p>
      </div>

      <!-- Software Preview -->
      <div class="software-section__preview">
        <div class="software-section__laptop">
          <NuxtImg
            src="/images/software.svg"
            alt="Bossong Hesaplama Programı"
            class="software-section__laptop-img"
          />
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="software-section__bottom">
        <!-- FIX Logo -->
        <div class="software-section__brand">
          <NuxtImg
            src="/images/bossong-fix.png"
            alt="Bossong FIX"
            class="software-section__brand-img"
          />
        </div>

        <!-- QR Code Card -->
        <a
          href="https://www.bossong.com.tr/new-software-bossong-fix-40.html"
          target="_blank"
          rel="noopener noreferrer"
          class="software-section__qr-card"
          @click="trackQrClick"
        >
          <div class="software-section__qr-code">
            <NuxtImg
              src="/images/qr-code.png"
              alt="QR Kod"
              class="software-section__qr-img"
            />
          </div>
          <div class="software-section__qr-text">
            <span>Programı indirmek için</span>
            <strong>QR Kodu</strong>
            <span>okutun!</span>
          </div>
        </a>

        <!-- REB Logo -->
        <div class="software-section__brand">
          <NuxtImg
            src="/images/bossong-reb.png"
            alt="Bossong REB"
            class="software-section__brand-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.software-section {
  position: relative;
  padding: 100px 0 60px;
  background-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}

/* Decorative Half Circle */
.software-section__decorator {
  position: absolute;
  left: -87px;
  top: 226px;
  width: 174px;
  height: 348px;
  background-color: #7fbfb3;
  border-radius: 0 174px 174px 0;
  opacity: 0.3;
}

.software-section__container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.software-section__header {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 60px;
}

.software-section__title {
  font-size: 85px;
  font-weight: 700;
  color: #313131;
  margin: 0 0 24px 0;
  line-height: 1;
  letter-spacing: -3px;
}

.software-section__description {
  font-size: 18px;
  line-height: 1.6;
  color: #575757;
  margin: 0;
}

/* Software Preview */
.software-section__preview {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.software-section__laptop {
  max-width: 780px;
  width: 100%;
}

.software-section__laptop-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Bottom Section */
.software-section__bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
}

/* Brand Logos */
.software-section__brand {
  width: 84px;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.software-section__brand-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* QR Card */
.software-section__qr-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #123c69;
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: 0 20px 50px rgba(49, 49, 49, 0.05);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.software-section__qr-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 60px rgba(49, 49, 49, 0.1);
}

.software-section__qr-code {
  width: 120px;
  height: 120px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.software-section__qr-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.software-section__qr-text {
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-size: 30px;
  line-height: 1.3;
  text-align: center;
}

.software-section__qr-text span {
  font-weight: 400;
}

.software-section__qr-text strong {
  font-weight: 700;
}

/* Slider Navigation */
.software-section__nav {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.software-section__nav-btn {
  width: 50px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #313131;
  opacity: 0.5;
  transition: opacity 0.2s;
}

.software-section__nav-btn:hover {
  opacity: 1;
}

/* Responsive */
@media (max-width: 1024px) {
  .software-section__title {
    font-size: 60px;
  }

  .software-section__decorator {
    display: none;
  }
}

@media (max-width: 768px) {
  .software-section {
    padding: 60px 0 40px;
  }

  .software-section__title {
    font-size: 42px;
    letter-spacing: -1px;
  }

  .software-section__description {
    font-size: 16px;
  }

  .software-section__bottom {
    flex-direction: column;
    gap: 24px;
  }

  .software-section__qr-card {
    flex-direction: column;
    padding: 24px;
  }

  .software-section__qr-text {
    font-size: 24px;
  }

  .software-section__brand {
    display: none;
  }
}

@media (max-width: 480px) {
  .software-section__title {
    font-size: 32px;
  }

  .software-section__qr-text {
    font-size: 20px;
  }

  .software-section__qr-code {
    width: 100px;
    height: 100px;
  }
}
</style>