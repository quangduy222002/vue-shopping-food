<template>
  <div class="container" v-if="product.length > 0">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <div class="col-md-4 col-12">
        <img :src="`${product[0].image}`" class="img-fluid" />
      </div>
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product[0].name }}</h4>
        <h6 class="font-weight-bold">${{ product[0].price }}</h6>
        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">Quantity</span>
            </div>
            <input type="number" class="form-control" v-model="quantity" />
          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button
              class="btn"
              type="button"
              id="add-to-cart-button"
              data-toggle="modal"
              data-target="#addToCart"
              @click="addToCart"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div class="features pt-3">
          <h5><strong>Description</strong></h5>
          <ul>
            {{
              product[0].description
            }}
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- modal -->
  <div
    class="modal fade"
    id="addToCart"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addToCartLabel"
    aria-hidden="true"
    v-if="product.length > 0"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addToCartLabel">Add To Cart</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">{{ product[0].name }} add to cart sucess</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="continueShopping"
            data-dismiss="modal"
          >
            Continue shopping
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="goToCart"
            data-dismiss="modal"
          >
            Go to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  data() {
    return {
      id: this.$route.params.id,
      product: [],
      quantity: 1,
    };
  },
  props: ["baseURL", "products"],
  methods: {
    findProduct(id) {
      const temp = this.products.filter((product) => {
        return product.id === id;
      });
      this.product = temp;
    },
    addToCart() {
      const newitem = {
        id: parseInt(this.id),
        name: this.product[0].name,
        price: parseFloat(this.product[0].price),
        quantity: this.quantity,
      };
      this.$store.commit("addToCart", newitem);
    },
    continueShopping() {
      this.$router.push({ name: "Product" });
    },
    goToCart() {
      this.$router.push({ name: "Cart" });
    },
  },
  mounted() {
    this.findProduct(this.id);
  },
};
</script>
<style>
.category {
  font-weight: 400;
}

#wishlist-button {
  background-color: #b9b9b9;
}

#add-to-cart-button {
  background-color: #febd69;
}
</style>
