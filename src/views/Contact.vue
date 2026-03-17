<template>
  <div class="contact">
    <Header />

    <section class="hero">
      <div class="hero__inner">
        <div class="hero__tag">Contact</div>
        <h1 class="hero__title">Contact Us</h1>
        <p class="hero__subtitle">
          Reach out anytime. We’ll respond as soon as possible with clear and helpful information.
        </p>
      </div>
    </section>

    <section class="map-hero" aria-label="Map">
      <div class="map-hero__inner">
        <img :src="mapImage" alt="" class="map-hero__img" />

        <div class="map-hero__pin map-hero__pin--main" aria-hidden="true"></div>
        <div class="map-hero__pin map-hero__pin--a" aria-hidden="true"></div>
        <div class="map-hero__pin map-hero__pin--b" aria-hidden="true"></div>

        <div class="map-hero__popup" aria-hidden="true">
          <div class="map-hero__popupTitle">Zilang Science &amp; Technology City</div>
          <div class="map-hero__popupSub">Nantong, Jiangsu • Building 11A</div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="content">
        <div class="cards">
          <div class="info">
            <div class="info__icon"><i class="el-icon-user"></i></div>
            <div class="info__label">Main Contact</div>
            <div class="info__value">Miles (Manager)</div>
          </div>

          <a class="info info--link" :href="`tel:${phoneTel}`">
            <div class="info__icon"><i class="el-icon-phone"></i></div>
            <div class="info__label">Main Phone</div>
            <div class="info__value">{{ phoneDisplay }}</div>
          </a>

          <a class="info info--link" :href="`mailto:${email}`">
            <div class="info__icon"><i class="el-icon-message"></i></div>
            <div class="info__label">Main Email</div>
            <div class="info__value">{{ email }}</div>
          </a>

          <a class="info info--link" :href="amapUrl" target="_blank" rel="noopener noreferrer">
            <div class="info__icon"><i class="el-icon-location"></i></div>
            <div class="info__label">Main Address</div>
            <div class="info__value">Zilang S&amp;T City 11A, Nantong</div>
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import mapImage from '@/assets/baidu-map.png'

export default {
  name: 'Contact',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      mapImage,
      email: 'info@globaltrade.com',
      phoneDisplay: '+1 (123) 456-7890',
      phoneTel: '+11234567890',
      amapUrl: 'https://uri.amap.com/search?keyword=%E6%B1%9F%E8%8B%8F%E5%8D%97%E9%80%9A%E7%B4%AB%E7%90%85%E7%A7%91%E6%8A%80%E5%9F%8E11A&city=%E5%8D%97%E9%80%9A'
    }
  }
}
</script>

<style scoped>
.contact {
  padding-top: 80px;
  min-height: 100vh;
  background: #ffffff;
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 64px 0 54px;
  background:
    radial-gradient(circle at 20% 20%, rgba(64, 158, 255, 0.25), transparent 55%),
    radial-gradient(circle at 80% 35%, rgba(103, 194, 58, 0.18), transparent 60%),
    linear-gradient(180deg, #0b1522, #0a1220);
  color: #fff;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.04) 0,
      rgba(255, 255, 255, 0.04) 1px,
      rgba(0, 0, 0, 0.12) 1px,
      rgba(0, 0, 0, 0.12) 9px
    );
  opacity: 0.12;
  mix-blend-mode: overlay;
}

.hero__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero__tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.10);
  border: 1px solid rgba(255, 255, 255, 0.16);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero__title {
  margin: 14px 0 10px;
  font-size: 40px;
  line-height: 1.15;
}

.hero__subtitle {
  margin: 0 auto;
  max-width: 720px;
  color: rgba(236, 240, 241, 0.9);
  line-height: 1.7;
}

.map-hero {
  position: relative;
  overflow: hidden;
  background: #f3f5f7;
}

.map-hero__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.map-hero__img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  filter: grayscale(1) contrast(1.05) brightness(1.05);
  opacity: 0.85;
}

.map-hero__inner::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.65)),
    radial-gradient(circle at 50% 60%, rgba(0, 0, 0, 0.0) 55%, rgba(0, 0, 0, 0.10) 100%);
}

.section {
  padding: 46px 0 80px;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.map-hero__pin {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #ff4d4f;
  box-shadow:
    0 0 0 6px rgba(255, 77, 79, 0.18),
    0 12px 24px rgba(0, 0, 0, 0.18);
}

.map-hero__pin::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid #ff4d4f;
  transform: translateX(-50%);
}

.map-hero__pin--main { left: 54%; top: 42%; }
.map-hero__pin--a { left: 76%; top: 34%; transform: scale(0.85); opacity: 0.9; }
.map-hero__pin--b { left: 29%; top: 55%; transform: scale(0.85); opacity: 0.9; }

.map-hero__popup {
  position: absolute;
  left: 58%;
  top: 30%;
  transform: translateX(-10%);
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(17, 24, 39, 0.10);
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: 0 14px 34px rgba(15, 35, 52, 0.18);
}

.map-hero__popupTitle {
  font-weight: 800;
  color: #111827;
  font-size: 13px;
  margin-bottom: 2px;
}

.map-hero__popupSub {
  font-size: 12px;
  color: rgba(75, 85, 99, 0.78);
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
}

.info {
  text-align: center;
  padding: 18px 12px 10px;
  border-radius: 18px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.info--link:hover {
  transform: translateY(-3px);
}

.info__icon {
  width: 54px;
  height: 54px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  margin: 0 auto 12px;
  background: #ffffff;
  border: 1px solid rgba(17, 24, 39, 0.10);
  box-shadow: 0 14px 30px rgba(15, 35, 52, 0.10);
}

.info__icon i {
  font-size: 22px;
  color: #409eff;
}

.info__label {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(75, 85, 99, 0.70);
  margin-bottom: 8px;
}

.info__value {
  font-size: 18px;
  font-weight: 800;
  color: #111827;
  line-height: 1.35;
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero__title {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>