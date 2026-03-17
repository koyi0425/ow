<template>
  <div class="about">
    <Header />

    <section class="hero">
      <div class="hero__inner">
        <div class="hero__content">
          <div class="hero__tag">About</div>
          <h1 class="hero__title">WJL Label Trade Co.</h1>
          <p class="hero__subtitle">
            We focus on high-quality label products and reliable global delivery, helping brands communicate better.
          </p>
          <div class="hero__cta">
            <el-button type="primary" size="medium" @click="$router.push('/products')">Explore Products</el-button>
            <el-button size="medium" @click="$router.push('/contact')">Contact Us</el-button>
          </div>
        </div>
        <div class="hero__card" aria-hidden="true">
          <div class="hero__cardTitle">Trusted Partner</div>
          <div class="hero__cardGrid">
            <div class="hero__stat">
              <div class="hero__statNum">10+</div>
              <div class="hero__statLabel">Years</div>
            </div>
            <div class="hero__stat">
              <div class="hero__statNum">20+</div>
              <div class="hero__statLabel">Countries</div>
            </div>
            <div class="hero__stat">
              <div class="hero__statNum">1000+</div>
              <div class="hero__statLabel">Clients</div>
            </div>
            <div class="hero__stat">
              <div class="hero__statNum">7×24h</div>
              <div class="hero__statLabel">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section intro">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Company</div>
          <h2>Who we are</h2>
          <p>From sampling to mass production, we provide a consistent quality experience for your brand.</p>
          <div class="section-divider"></div>
        </div>

        <div class="intro__grid">
          <div class="intro__text">
            <p>
              We specialize in woven labels, patches, and customized label solutions. With efficient workflows and
              stable production capacity, we help customers reduce lead time and improve product consistency.
            </p>
            <p>
              Our team emphasizes communication, clear specifications, and reliable logistics. We believe long-term
              cooperation comes from predictable quality and responsive service.
            </p>
          </div>

          <div class="intro__panel" aria-hidden="true">
            <div class="intro__panelRow">
              <div class="intro__chip">Quality Control</div>
              <div class="intro__chip">Fast Sampling</div>
              <div class="intro__chip">On-time Delivery</div>
            </div>
            <div class="intro__panelRow">
              <div class="intro__chip">OEM / ODM</div>
              <div class="intro__chip">Custom Design</div>
              <div class="intro__chip">Global Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section advantages">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Advantages</div>
          <h2>Our Advantages</h2>
          <p>Clear strengths, consistent quality, and reliable delivery—designed for long-term cooperation.</p>
          <div class="section-divider"></div>
        </div>

        <div class="advantages__grid">
          <div class="adv-card" v-for="item in advantages" :key="item.title">
            <div class="adv-card__icon">
              <i :class="item.icon"></i>
            </div>
            <div class="adv-card__title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      advantages: [
        { title: 'Strong Capability', icon: 'el-icon-s-data' },
        { title: 'Complete Equipment', icon: 'el-icon-monitor' },
        { title: 'Fast Sampling', icon: 'el-icon-date' },
        { title: 'On-time Delivery', icon: 'el-icon-box' },
        { title: 'Professional Production', icon: 'el-icon-edit-outline' },
        { title: 'Reasonable Pricing', icon: 'el-icon-coin' }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  padding-top: 80px;
  min-height: 100vh;
  background: #f7f9fc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-tag {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  background: rgba(64, 158, 255, 0.10);
  color: #409eff;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-header h2 {
  font-size: 30px;
  margin: 0 0 10px;
  color: #111827;
}

.section-header p {
  margin: 0 auto;
  max-width: 680px;
  color: #5b6472;
  font-size: 14px;
  line-height: 1.6;
}

.section-divider {
  width: 72px;
  height: 3px;
  margin: 26px auto 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #409eff, #67c23a);
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 70px 0 60px;
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
    repeating-linear-gradient(135deg,
      rgba(255, 255, 255, 0.04) 0,
      rgba(255, 255, 255, 0.04) 1px,
      rgba(0, 0, 0, 0.12) 1px,
      rgba(0, 0, 0, 0.12) 9px);
  opacity: 0.12;
  mix-blend-mode: overlay;
}

.hero__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: center;
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
  font-size: 44px;
  line-height: 1.15;
}

.hero__subtitle {
  margin: 0;
  max-width: 680px;
  color: rgba(236, 240, 241, 0.9);
  line-height: 1.7;
}

.hero__cta {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero__card {
  border-radius: 18px;
  padding: 18px 18px 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
}

.hero__cardTitle {
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-bottom: 14px;
  color: rgba(255, 255, 255, 0.92);
}

.hero__cardGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.hero__stat {
  border-radius: 14px;
  padding: 12px 12px 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
}

.hero__statNum {
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(90deg, #409eff, #67c23a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__statLabel {
  margin-top: 3px;
  font-size: 12px;
  color: rgba(236, 240, 241, 0.78);
}

.intro__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  align-items: start;
}

.intro__text p {
  margin: 0 0 14px;
  color: #4b5563;
  line-height: 1.9;
}

.intro__panel {
  border-radius: 18px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(17, 24, 39, 0.06);
  box-shadow: 0 18px 50px rgba(15, 35, 52, 0.08);
}

.intro__panelRow {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.intro__panelRow:last-child {
  margin-bottom: 0;
}

.intro__chip {
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(17, 24, 39, 0.78);
  background: rgba(64, 158, 255, 0.10);
  border: 1px solid rgba(64, 158, 255, 0.16);
}

.advantages {
  background:
    radial-gradient(circle at 20% 20%, rgba(64, 158, 255, 0.06), transparent 55%),
    radial-gradient(circle at 80% 35%, rgba(103, 194, 58, 0.05), transparent 60%),
    #f7f9fc;
}

.advantages__grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
}

.adv-card {
  position: relative;
  border-radius: 26px;
  padding: 26px 18px 22px;
  text-align: center;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(17, 24, 39, 0.06);
  box-shadow: 0 18px 52px rgba(15, 35, 52, 0.10);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  backdrop-filter: blur(10px);
}

.adv-card::before {
  content: '';
  position: absolute;
  inset: -40%;
  background:
    radial-gradient(circle at 30% 25%, rgba(64, 158, 255, 0.5), transparent 55%),
    radial-gradient(circle at 70% 80%, rgba(103, 194, 58, 0.14), transparent 60%);
  transform: rotate(8deg);
  opacity: 0.8;
  pointer-events: none;
}

.adv-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 56px rgba(15, 35, 52, 0.14);
}

.adv-card__icon {
  position: relative;
  z-index: 1;
  width: 66px;
  height: 66px;
  margin: 0 auto 14px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(17, 24, 39, 0.06);
  box-shadow: 0 12px 26px rgba(15, 35, 52, 0.10);
}

.adv-card__icon i {
  font-size: 28px;
  background: linear-gradient(90deg, #409eff, #67c23a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.adv-card__title {
  position: relative;
  z-index: 1;
  font-weight: 700;
  color: #0a2764;
  letter-spacing: 0.02em;
  font-size: 16px;
}

@media (max-width: 992px) {
  .advantages__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hero__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 64px 0;
  }

  .hero__title {
    font-size: 34px;
  }

  .intro__grid {
    grid-template-columns: 1fr;
  }

  .advantages__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>