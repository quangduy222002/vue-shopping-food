<template>
  <Navbar />
  <router-view
    v-if="products.length > 0"
    style="min-height: 60vh"
    :baseURL="baseURL"
    :products="products"
    :orders="orders"
  >
  </router-view>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      baseURL: "https://63452b03dcae733e8feb11d2.mockapi.io/api/",
      products: [],
      orders: [],
    };
  },
  methods: {
    getProduct() {
      axios
        .get(`${this.baseURL}food`)
        .then((response) => (this.products = response.data));
    },
    getOrder() {
      axios
        .get(`${this.baseURL}cart`)
        .then((response) => (this.orders = response.data));
    },
  },
  mounted() {
    this.getProduct();
    this.getOrder();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
