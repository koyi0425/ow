<template>
  <div class="products">
    <Header />

    <section class="hero">
      <div class="hero__inner">
        <div class="hero__tag">Products</div>
        <h1 class="hero__title">Our Products</h1>
        <p class="hero__subtitle">
          Browse our product series and explore high-quality label solutions for your brand.
        </p>
      </div>
    </section>

    <div class="content">
      <div class="filter-section">
        <el-tabs v-model="activeSeries" type="card" class="series-tabs" @tab-click="filterProducts">
          <el-tab-pane v-for="tab in seriesTabs" :key="tab.value" :label="tab.label" :name="tab.value" />
        </el-tabs>
      </div>

      <el-row :gutter="20">
        <el-col :span="6" v-for="product in filteredProducts" :key="product.id">
          <el-card :body-style="{ padding: '0px' }" class="product-card">
            <div class="product-image-container">
              <img
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                class="product-image">
            </div>
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-footer">
                <span class="price">${{ product.price }}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Products',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      // 这里就是“动态维护”的配置：后续增删系列只改这个数组即可
      seriesTabs: [
        { label: 'All', value: 'all' },
        { label: '系列一', value: '系列一' },
        { label: '系列二', value: '系列二' },
        { label: '系列三', value: '系列三' }
      ],
      activeSeries: 'all',
      filteredProducts: []
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    products() {
      return this.getProducts
    }
  },
  created() {
    this.filteredProducts = this.getProducts
  },
  methods: {
    filterProducts() {
      const active = this.activeSeries
      this.filteredProducts = this.getProducts.filter(product => {
        if (active === 'all') return true
        return product.series === active
      })
    },
    viewProduct(id) {
      this.$router.push(`/product/${id}`)
    }
  }
}
</script>

<style scoped>
.products {
  padding-top: 80px;
  min-height: 100vh;
  background-color: #f9f9f9;
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
  color: #fff;
}

.hero__subtitle {
  margin: 0 auto;
  max-width: 720px;
  color: rgba(236, 240, 241, 0.9);
  line-height: 1.7;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.filter-section {
  margin-bottom: 20px;
  display: block;
}

.series-tabs {
  width: 100%;
}

.series-tabs ::v-deep .el-tabs__header,
.series-tabs /deep/ .el-tabs__header {
  margin: 0;
  border-bottom: none;
}

.series-tabs ::v-deep .el-tabs__nav-wrap,
.series-tabs /deep/ .el-tabs__nav-wrap {
  margin-bottom: 0;
}

.series-tabs ::v-deep .el-tabs__nav-wrap::after,
.series-tabs /deep/ .el-tabs__nav-wrap::after {
  display: none;
}

.series-tabs ::v-deep .el-tabs__nav-scroll,
.series-tabs /deep/ .el-tabs__nav-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.series-tabs ::v-deep .el-tabs__nav-scroll::-webkit-scrollbar,
.series-tabs /deep/ .el-tabs__nav-scroll::-webkit-scrollbar {
  height: 0;
}

.series-tabs ::v-deep .el-tabs__nav,
.series-tabs /deep/ .el-tabs__nav {
  border: none;
  display: inline-flex;
  gap: 10px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 10px 26px rgba(15, 35, 52, 0.08);
  border-radius: 999px;
  backdrop-filter: blur(10px);
}

.series-tabs ::v-deep .el-tabs__item,
.series-tabs /deep/ .el-tabs__item {
  height: 40px;
  line-height: 40px;
  border: none !important;
  border-radius: 999px;
  padding: 0 18px;
  font-weight: 600;
  color: rgba(17, 24, 39, 0.78);
  background: transparent;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.series-tabs ::v-deep .el-tabs__item:hover,
.series-tabs /deep/ .el-tabs__item:hover {
  background: rgba(64, 158, 255, 0.10);
  color: #111827;
}

.series-tabs ::v-deep .el-tabs__item.is-active,
.series-tabs /deep/ .el-tabs__item.is-active {
  background: linear-gradient(90deg, rgba(64, 158, 255, 0.95), rgba(103, 194, 58, 0.95));
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(64, 158, 255, 0.25);
}

.series-tabs ::v-deep .el-tabs__active-bar,
.series-tabs /deep/ .el-tabs__active-bar {
  display: none;
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 32px;
  }
}

.product-card {
  margin-bottom: 30px;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image-container {
  position: relative;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}


.product-card:hover .product-image {
  transform: scale(1.1);
}

.product-info {
  padding: 20px;
}

.product-description {
  color: #666;
  margin: 10px 0;
  height: 40px;
  overflow: hidden;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.price {
  font-size: 20px;
  color: #409EFF;
  font-weight: bold;
}

.button {
  padding: 0;
  float: right;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}
</style>