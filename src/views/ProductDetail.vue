<template>
  <div class="product-detail">
    <Header />
    <div class="content">
      <el-row :gutter="40">
        <el-col :span="12">
          <div class="image-container">
            <img
              src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              class="product-image">
          </div>
        </el-col>
        <el-col :span="12">
          <div class="product-info">
            <h1>{{ product.name }}</h1>
            <p class="price">${{ product.price }}</p>
            <p class="description">{{ product.description }}</p>

            <div class="specifications">
              <h3>Specifications</h3>
              <el-descriptions :column="1" border>
                <el-descriptions-item v-for="(value, key) in product.specifications" :key="key" :label="key">
                  {{ value }}
                </el-descriptions-item>
              </el-descriptions>
            </div>

            <div class="actions">
              <el-button size="large" @click="goBack">Back to Products</el-button>
            </div>
          </div>
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
  name: 'ProductDetail',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters(['getProductById']),
    product() {
      return this.getProductById(parseInt(this.$route.params.id))
    }
  },
  methods: {
    goBack() {
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
.product-detail {
  padding-top: 80px;
  min-height: 100vh;
  background-color: #f9f9f9;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.image-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 4px;
}

.product-info {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.price {
  font-size: 28px;
  color: #409EFF;
  font-weight: bold;
  margin: 20px 0;
}

.description {
  margin: 20px 0;
  line-height: 1.6;
  color: #666;
}

.specifications {
  margin: 30px 0;
}

.specifications h3 {
  color: #333;
  margin-bottom: 20px;
}

.actions {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .el-col {
    width: 100%;
  }

  .image-container {
    margin-bottom: 20px;
  }
}
</style>