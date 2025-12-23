<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  hash: {
    type: String,
    required: false
  }
})
</script>

<template>
  <section :id="hash" class="section">
    <div class="section__container">
      <div class="section__header">
        <h2 class="section__title">{{title}}</h2>
        <p class="section__description">{{description}}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
  padding: 100px 0 0px;
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
  background-color: #f8f9fa;
}

.section__container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.section__header {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 20px;
}

.section__title {
  font-size: 85px;
  font-weight: 900;
  color: #313131;
  margin: 0 0 24px 0;
  line-height: 1;
  letter-spacing: -3px;
}

.section__description {
  font-size: 18px;
  line-height: 1.6;
  color: #575757;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .section__title {
    font-size: 60px;
  }

  .section__decorator {
    display: none;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0 40px;
  }

  .section__title {
    font-size: 42px;
    letter-spacing: -1px;
  }
}

@media (max-width: 480px) {
  .section__title {
    font-size: 32px;
  }
}
</style>