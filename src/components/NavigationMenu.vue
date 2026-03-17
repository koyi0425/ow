<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/products">Products</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/about">About</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/contact">Contact</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'NavigationMenu',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key
    }
  }
}
</script>

<style scoped>
.el-menu-demo {
  padding: 0 20px;
}

.el-menu-item a {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>