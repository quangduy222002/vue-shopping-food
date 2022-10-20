<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">
          Card
        </h3>
      </div>
    </div>

    <div
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      class="row mt-2 pt-3 justify-content-around"
    >
      <div class="col-2"></div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            <router-link
              :to="{ name: 'ShowDetails', params: { id: cartItem.id } }"
            >
              {{ cartItem.name }}
            </router-link>
          </h6>

          <p class="mb-0 font-weight-bold" id="item-price">
            $ {{ cartItem.price }} per unit
          </p>
          <p class="mb-0" style="float:left">
            Quantity:{{ cartItem.quantity }}
          </p>
        </div>
        <p class="mb-0" style="float:right">
          Total:
          <span class="font-weight-bold">
            $ {{ cartItem.price * cartItem.quantity }}
          </span>
        </p>
        <br />
        <a href="#" class="text-right" @click="deleteItem(cartItem)"
          >Remove from cart
        </a>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>

    <div class="total-cost pt-2 text-right">
      <button type="button" class="btn btn-primary confirm" @click="checkout">
        Confirm order
      </button>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert'
export default {
  data() {
    return {
      cartItems: this.$store.state.carts,
    };
  },
  props: ["baseURL"],
  methods: {
    deleteItem(item){
      this.$store.commit('deleteItem', item);
    },
    checkout() {
      if(this.cartItems.length==0){
        swal({
          icon: "warning",
          text: "Please add product"
        })
      } else {
        this.$router.push({
        name: "Checkout",
      });
      }
      
    },
  },
};
</script>
<style scoped>
h4,
h5 {
  color: #484848;
  font-size: 700;
}
</style>
