<template>
  <div class="home">
    <Header />
    <!-- 轮播图 -->
    <div class="hero-section">
      <el-carousel :interval="4000" height="600px">
        <el-carousel-item>
          <div class="carousel-content">
            <img
              src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Global Trade" class="banner-image">
            <div class="banner-text">
              <h1>Global Trade Solutions</h1>
              <p>Connecting businesses worldwide with quality products and services</p>
              <el-button type="primary" size="large" @click="$router.push('/products')">Explore Products</el-button>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="carousel-content">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Quality Products" class="banner-image">
            <div class="banner-text">
              <h1>Premium Quality Products</h1>
              <p>Sourcing the finest products from around the globe</p>
              <el-button type="primary" size="large" @click="$router.push('/products')">Explore Products</el-button>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="carousel-content">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Worldwide Service" class="banner-image">
            <div class="banner-text">
              <h1>Reliable International Trade</h1>
              <p>Your trusted partner in global commerce</p>
              <el-button type="primary" size="large" @click="$router.push('/products')">Explore Products</el-button>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 产品中心 -->
    <div class="featured-products">
      <div class="section-header">
        <div class="section-tag">Products</div>
        <h2>Product Center</h2>
        <p>Selected products from our main categories</p>
        <div class="section-divider"></div>
      </div>
      <el-row :gutter="30">
        <el-col :span="6" v-for="product in featuredProducts" :key="product.id">
          <el-card :body-style="{ padding: '0px' }" class="product-card">
            <div class="product-image-container">
              <img :src="product.image" class="product-image">
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="more-button-wrapper">
        <el-button type="primary" size="large" @click="$router.push('/products')">
          View More Products
        </el-button>
      </div>
    </div>

    <!-- 公司简介 -->
    <div class="company-intro">
      <div class="section-header company-header">
        <div class="section-tag">About</div>
        <h2>Global Trade Excellence</h2>
        <p>More than 20 years of experience in international trade and global partnerships.</p>
        <div class="section-divider"></div>
      </div>
      <el-row :gutter="40">
        <el-col :span="12">
          <div class="intro-content">
            <p class="intro-text">We are a leading international trading company with over 20 years of experience in
              global commerce. Our commitment to quality and customer satisfaction has made us a trusted partner for
              businesses worldwide.</p>
            <div class="stats-container">
              <div class="stat-item">
                <span class="stat-number">20+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Countries</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">1000+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
            </div>
            <el-button type="primary" size="large" @click="$router.push('/about')">Learn More About Us</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="intro-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Company Image" class="company-image">
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 合作品牌 -->
    <section class="partner-brands">
      <div class="brands-inner">
        <div class="section-header brands-header">
          <div class="section-tag">Partners</div>
          <h2>Our Partner Brands</h2>
          <p>We collaborate with trusted global brands to deliver high-quality products and services.</p>
          <div class="section-divider"></div>
        </div>
        <!-- 单行无缝滚动品牌带（悬停暂停） -->
        <div class="brands-scroll">
          <div class="brands-track brands-track--left">
            <div class="brand-item" v-for="(brand, index) in partnerBrands" :key="'row-1-' + index">
              <div class="brand-card">
                <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
              </div>
            </div>
            <div class="brand-item" v-for="(brand, index) in partnerBrands" :key="'row-2-' + index">
              <div class="brand-card">
                <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
              </div>
            </div>
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
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: '1',
      currentLanguage: 'English',
      banners: [
        {
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
          title: 'Global Trade Solutions',
          description: 'Connecting businesses worldwide with quality products and services'
        },
        {
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
          title: 'Premium Quality Products',
          description: 'Sourcing the finest products from around the globe'
        },
        {
          image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
          title: 'Reliable International Trade',
          description: 'Your trusted partner in global commerce'
        }
      ],
      partnerBrands: [
        { name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
        { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
        { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
        { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
        { name: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com' },
        { name: 'Intel', logo: 'https://logo.clearbit.com/intel.com' },
        { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
        { name: 'Oracle', logo: 'https://logo.clearbit.com/oracle.com' },
        { name: 'Cisco', logo: 'https://logo.clearbit.com/cisco.com' },
        { name: 'Sony', logo: 'https://logo.clearbit.com/sony.com' },
        { name: 'LG', logo: 'https://logo.clearbit.com/lg.com' },
        { name: 'Panasonic', logo: 'https://logo.clearbit.com/panasonic.com' },
        { name: 'HP', logo: 'https://logo.clearbit.com/hp.com' },
        { name: 'Dell', logo: 'https://logo.clearbit.com/dell.com' },
        { name: 'Lenovo', logo: 'https://logo.clearbit.com/lenovo.com' },
        { name: 'Nike', logo: 'https://logo.clearbit.com/nike.com' },
        { name: 'Adidas', logo: 'https://logo.clearbit.com/adidas.com' },
        { name: 'Puma', logo: 'https://logo.clearbit.com/puma.com' },
        { name: 'Coca-Cola', logo: 'https://logo.clearbit.com/coca-cola.com' },
        { name: 'Toyota', logo: 'https://logo.clearbit.com/toyota.com' }
      ]
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    featuredProducts() {
      // 首页产品中心展示 3 行，每行 4 个，共 12 个产品
      return this.getProducts.slice(0, 12)
    }
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case '1':
          this.$router.push('/')
          break
        case '2':
          this.$router.push('/products')
          break
        case '3':
          this.$router.push('/about')
          break
        case '4':
          this.$router.push('/contact')
          break
      }
    },
    handleLanguageChange(command) {
      this.currentLanguage = command === 'en' ? 'English' :
        command === 'zh' ? '中文' : 'Español'
      // 这里可以添加语言切换的逻辑
    },
    viewProduct(id) {
      this.$router.push(`/product/${id}`)
    }
  }
}
</script>

<style>
/* 全局样式 */
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* 隐藏滚动条但保留滚动功能 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.home {
  padding: 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

/* 轮播图样式 */
.hero-section {
  margin-top: 80px;
  width: 100%;
  position: relative;
}

.carousel-content {
  position: relative;
  height: 100%;
  width: 100%;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 80%;
  max-width: 800px;
  z-index: 1;
}

.banner-text h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: bold;
}

.banner-text p {
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 1.4;
}

.banner-text .el-button {
  padding: 12px 30px;
  font-size: 18px;
  border-radius: 4px;
}

/* 添加半透明遮罩 */
.carousel-content::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

/* 产品展示样式 */
.featured-products {
  padding: 80px 100px;
  background-color: #f9f9f9;
  width: 100%;
  box-sizing: border-box;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-tag {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  background: rgba(64, 158, 255, 0.08);
  color: #409eff;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-header h2 {
  font-size: 30px;
  margin: 0 0 10px;
  color: #303133;
}

.section-header p {
  margin: 0 auto;
  max-width: 520px;
  color: #606266;
  font-size: 14px;
}

.section-divider {
  width: 72px;
  height: 3px;
  margin: 28px auto 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #409eff, #67c23a);
}

.section-title h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 15px;
}

.section-title p {
  font-size: 18px;
  color: #666;
}

.product-card {
  margin-bottom: 30px;
  border: none;
  box-shadow: none;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.product-image-container {
  position: relative;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.product-info {
  padding: 10px 10px 16px;
  text-align: center;
}

.product-name {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  line-height: 1.3;
}

.more-button-wrapper {
  margin-top: 40px;
  text-align: center;
}

/* 公司简介样式 */
.company-intro {
  padding: 80px 20px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}

.intro-content {
  padding-right: 40px;
  box-sizing: border-box;
}

.intro-text {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 30px 0;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: #409EFF;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.intro-image {
  position: relative;
}

.company-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  content: url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
}

.partner-brands {
  background: radial-gradient(circle at top left, #f5f7fa 0, #ecf0f3 35%, #f9fbff 100%);
  padding: 90px 0 80px;
  overflow: hidden;
  position: relative;
}

.partner-brands::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    repeating-linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.06) 0,
      rgba(0, 0, 0, 0.06) 1px,
      rgba(255, 255, 255, 0.0) 1px,
      rgba(255, 255, 255, 0.0) 10px
    );
  opacity: 0.25;
}

.brands-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 100px;
}

.brands-header {
  text-align: center;
  margin-bottom: 40px;
}

.brands-tag {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  background: rgba(64, 158, 255, 0.08);
  color: #409eff;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.brands-header h2 {
  font-size: 30px;
  margin: 0 0 10px;
  color: #303133;
}

.brands-header p {
  margin: 0 auto;
  max-width: 520px;
  color: #606266;
  font-size: 14px;
}

.brands-divider {
  width: 72px;
  height: 3px;
  margin: 28px auto 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #409eff, #67c23a);
}

.brands-scroll {
  position: relative;
  overflow: hidden;
  margin-top: 20px;
}

/* 去掉滚动区域两侧渐隐遮罩，避免出现白色渐变背景 */

.brands-track {
  display: flex;
  align-items: center;
  gap: 56px;
}

.partner-brands:hover .brands-track {
  animation-play-state: paused;
}

.brands-scroll .brands-track--left {
  animation: brands-scroll-left 42s linear infinite;
}

.brand-item {
  text-align: center;
  padding: 18px 0;
  flex: 0 0 auto;
}

.brand-logo {
  max-width: 100%;
  height: 130px;
  object-fit: contain;
  transition: all 0.3s ease;
}

.brand-card {
  padding: 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 14px 40px rgba(15, 35, 52, 0.10);
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;
}

.brand-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 48px rgba(15, 35, 52, 0.16);
}

.brand-logo:hover {
  opacity: 1;
}

/* 顶部品牌带：从右向左 */
@keyframes brands-scroll-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}


/* 响应式设计 */
@media (max-width: 768px) {
  .banner-text h1 {
    font-size: 32px;
  }

  .banner-text p {
    font-size: 18px;
  }

  .banner-text .el-button {
    padding: 10px 20px;
    font-size: 16px;
  }

  .el-col {
    width: 100%;
  }

  .intro-content {
    padding-right: 0;
    margin-bottom: 30px;
  }
}
</style>