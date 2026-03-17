import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    categories: ["Machinery", "Textile", "Electronics", "Food", "Chemicals"],
  },
  getters: {
    getProducts: (state) => state.products,
    getCategories: (state) => state.categories,
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
  },
  actions: {
    async loadProducts({ commit }) {
      try {
        // 这里使用模拟数据，实际项目中可替换为 API 返回的数据
        const mockProducts = [
          {
            id: 1,
            name: "Shield Woven Label",
            category: "Woven Label",
            series: "系列一",
            price: 0,
            description: "Custom shield woven label for garments and uniforms",
            image:
              "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 2,
            name: "Garment Woven Label",
            category: "Woven Label",
            series: "系列一",
            price: 0,
            description: "High quality woven label for fashion garments",
            image:
              "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 3,
            name: "Neck Woven Label",
            category: "Woven Label",
            series: "系列一",
            price: 0,
            description: "Soft woven neck label for clothing brands",
            image:
              "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 4,
            name: "Folded Woven Label",
            category: "Woven Label",
            series: "系列二",
            price: 0,
            description: "Two-side folded woven label for garments",
            image:
              "https://images.unsplash.com/photo-1529927066849-66e1abc70a2e?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 5,
            name: "Brand Woven Patch",
            category: "Woven Patch",
            series: "系列二",
            price: 0,
            description: "Durable woven patch for branding",
            image:
              "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 6,
            name: "Rectangle Woven Label",
            category: "Woven Label",
            series: "系列二",
            price: 0,
            description: "Rectangle woven label for bags and apparel",
            image:
              "https://images.unsplash.com/photo-1512163143273-bde0e3cc7400?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 7,
            name: "Kids Garment Label",
            category: "Woven Label",
            series: "系列三",
            price: 0,
            description: "Colorful woven label for kidswear",
            image:
              "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 8,
            name: "Sportswear Label",
            category: "Woven Label",
            series: "系列三",
            price: 0,
            description: "Breathable woven label for sportswear",
            image:
              "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 9,
            name: "Denim Woven Patch",
            category: "Woven Patch",
            series: "系列三",
            price: 0,
            description: "Classic woven patch for denim products",
            image:
              "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 10,
            name: "Luxury Garment Label",
            category: "Woven Label",
            series: "系列一",
            price: 0,
            description: "Fine woven label for luxury garments",
            image:
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 11,
            name: "Minimal Woven Label",
            category: "Woven Label",
            series: "系列二",
            price: 0,
            description: "Simple and elegant woven label design",
            image:
              "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
          {
            id: 12,
            name: "Custom Shape Label",
            category: "Woven Label",
            series: "系列三",
            price: 0,
            description: "Custom shaped woven label for special designs",
            image:
              "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
            specifications: {},
          },
        ];
        commit("setProducts", mockProducts);
      } catch (error) {
        console.error("Error loading products:", error);
        throw error;
      }
    },
    addNewProduct({ commit }, product) {
      commit("addProduct", product);
    },
  },
});
