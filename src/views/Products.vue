<template>
  <div class="products">
    <Header />
    <div class="content">
      <h1>Our Products</h1>
      <div class="filter-section">
        <el-input placeholder="Search products..." v-model="searchQuery" class="search-input" @input="filterProducts">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>

        <el-select v-model="selectedCategory" placeholder="Select Category" @change="filterProducts">
          <el-option v-for="category in categories" :key="category" :label="category" :value="category">
          </el-option>
        </el-select>
      </div>

      <el-row :gutter="20">
        <el-col :span="6" v-for="product in filteredProducts" :key="product.id">
          <el-card :body-style="{ padding: '0px' }" class="product-card">
            <div class="product-image-container">
              <img
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                class="product-image">
              <div class="product-overlay">
                <el-button type="primary" @click="viewProduct(product.id)">View Details</el-button>
              </div>
            </div>
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-footer">
                <span class="price">${{ product.price }}</span>
                <el-button type="text" class="button" @click="viewProduct(product.id)">Learn More</el-button>
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
      searchQuery: '',
      selectedCategory: '',
      filteredProducts: []
    }
  },
  computed: {
    ...mapGetters(['getProducts', 'getCategories']),
    categories() {
      return this.getCategories
    },
    products() {
      return this.getProducts
    }
  },
  created() {
    this.filteredProducts = this.getProducts
  },
  methods: {
    filterProducts() {
      this.filteredProducts = this.getProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory
        return matchesSearch && matchesCategory
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

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.filter-section {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
}

.search-input {
  width: 300px;
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

.product-card:hover .product-overlay {
  opacity: 1;
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