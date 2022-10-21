<template>
  <Navbar />
  <router-view
    v-if="products.length > 0 && orders.length > 0"
    style="min-height: 60vh"
    :baseURL="baseURL"
    :products="products"
    :orders="orders"
    :order="order"
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
      order: [],
    };
  },
  methods: {
    async getData() {
      await axios
        .get(`${this.baseURL}food`)
        .then((response) => (this.products = response.data))
        .catch((err) => console.log("err", err));
      await axios
        .get(`${this.baseURL}cart`)
        .then((response) => {
          this.orders = response.data;
          this.order = this.orders.find((order) => order.paid === false);
          if (this.order !== undefined) {
            this.$store.commit("addToCart2", this.order.items);
          }
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
