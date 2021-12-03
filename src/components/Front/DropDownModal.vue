<template>
  <div class="dropdown-menu dropdown-menu-end mt-2 p-3" style="min-width: 400px;">
    <div v-if="cartList.carts && cartList.carts.length !== 0">
      <div v-for="cart in cartList.carts" :key="cart.id+'1'" class="mb-3">
        <div class="d-flex justify-content-between align-items-center">
          <div class="cart-content d-flex align-items-center">
            <a href="#" @click.prevent="removeCartItem(cart.id)" class=" d-flex-center align-items-center mx-3"><i class="btn-outline-danger border-0  bi bi-trash p-1"></i></a>
            <div :style="{ 'background-image' : `url(${cart.product.imageUrl}` }" style="background-size: cover; background-position: center center; height: 50px; width: 100px;"></div>
            <div class="cart-item mx-5">
              <router-link :to="{ path: `/user/product/${cart.product.id}`}" class="cartProduct fs-6 m-0">{{ cart.product.title }}</router-link>
              <small class="d-block fs-6">${{ $filters.currency(cart.final_total) }}</small>
            </div>
          </div>
          <div class="input-number-group input-group w-75">
            <div class="input-group" style="width:130px">
            <button class="btn btn-atlanticBlue btn-sm btn-hover rounded-0 border-0" type="button"
            :class="{ disabled: cart.qty <= 1 }"><i class="fas fa-minus"
            @click="updateCart(cart, cart.qty-1)" style="width: 24px;"></i></button>
            <input type="number" min="1" class="form-control text-center" disabled v-model.number="cart.qty">
            <button class="btn btn-atlanticBlue btn-sm btn-hover rounded-0 border-0" type="button"
             @click="updateCart(cart, cart.qty+1)"><i class="fas fa-plus" style="width: 24px;"></i></button>
          </div>
        </div>
        </div>
      </div>
      <div class="d-grid gap-2">
        <router-link to="/user/cartTable" class="btn btn-atlanticBlue">結帳去</router-link>
      </div>
    </div>
    <div v-else>
      <p class="text-center">購物車是空的唷！</p>
      <div class="d-grid gap-2">
        <router-link to="/products" class="btn btn-atlanticBlue">訂餐去</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartList: {},
      isLoading: false
    }
  },
  props: ['cart'],
  emits: ['getCart'],
  inject: ['emitter'],
  methods: {
    updateCart (item, qty) {
      this.isLoading = true
      const data = {
        data: {
          product_id: item.product.id,
          qty
        }
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.put(url, data)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.emitter.emit('update-cart')
          }
        })
    },
    removeCartItem (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.$emit('getCart')
            this.emitter.emit('update-cart')
          }
        })
    }
  },
  watch: {
    cart () {
      this.cartList = this.cart
    }
  }
}
</script>
