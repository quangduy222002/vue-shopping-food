<template>
  <div class="div_class">
    <h3>Payment</h3>
    <div class="alert alert-primary">
      Choose your method for payment
    </div>
    <div>
      <button
        class="btn btn-primary"
        @click="goToCart"
      >
        Cancel
      </button>
      <span>&nbsp;</span>
      <button
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#Payment"
        @click="CheckoutCash"
      >
        Cash
      </button>
      <span>&nbsp;</span>
      <button
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#Payment"
        @click="CheckoutCard"
      >
        Credit Card
      </button>
    </div>
  </div>

  <!-- modal -->
  <div
    class="modal fade"
    id="Payment"
    tabindex="-1"
    role="dialog"
    aria-labelledby="PaymentLabel"
    aria-hidden="true" v-if="this.checkSubmit"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="PaymentLabel">Payment Status</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body"> Payment sucess</div>
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
            @click="goToHistory"
            data-dismiss="modal"
          >
            Go to History
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      checkSubmit: false,
      items: this.$store.state.carts,
      totalCost: this.$store.getters.totalCost,
    };
  },
  name: "Checkout",
  props: ["baseURL"],
  methods: {
    goToCart() {
      this.$router.push({ name: "Cart" });
    },
    goToHistory() {
      this.$router.push({ name: "OrderHistory" });
    },
    continueShopping() {
      this.$router.push({ name: "Product" });
    },
    CheckoutCard() {
      axios.post(`${this.baseURL}cart`, {
        items: this.items,
        total: this.totalCost,
        paid: true,
      }).then((res) => {
          if (res.status == 200) {
            this.checkSubmit = true;
          }
        });
      
    },
    CheckoutCash() {
      axios.post(`${this.baseURL}cart`, {
        items: this.items,
        total: this.totalCost,
        paid: false,
      });
      this.checkSubmit = true;
    },
  },
};
</script>

<style scoped>
.alert {
  width: 50%;
}

.div_class {
  margin-top: 5%;
  margin-left: 30%;
}

.checkout_button {
  background-color: #5d3dec;
  margin: 10px;
}
</style>
