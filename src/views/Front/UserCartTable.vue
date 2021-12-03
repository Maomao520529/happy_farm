<template>
  <Loading :active="isLoading">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </Loading>
  <div class="cart-banner"></div>
  <div class="container my-2">
    <div class="row  d-flex justify-content-center mb-4">
      <div class="col-md-4 mb-2 mb-md-4">
        <div class="step active">購物車列表</div>
      </div>
      <div class="col-md-4 mb-2 mb-md-4">
        <div class="step">確認訂單</div>
      </div>
      <div class="col-md-4 mb-2 mb-md-4">
        <div class="step">訂單完成</div>
      </div>
    </div>
       <div class="row d-flex justify-content-center">
       <div class="col-md-12"  v-if="cart.final_total > 0">
       <h3 class="h3 fw-bold mb-4 mb-md-6">購物車</h3>
       <div>
         <table class="table align-middle border">
           <thead>
              <tr class="text-center">
                <th>刪除</th>
                <th>農產品</th>
                <th>品名</th>
                <th style="width:300px">數量</th>
                <th>總單價</th>
              </tr>
           </thead>
           <tbody>
             <template v-if="cart.carts">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td class="text-center">
                      <button type="button" class="btn btn-outline-danger btn-sm mx-4"
                              :disabled="status.loadingItem === item.id"
                              @click="removeCartItem(item.id)">
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                    <td class="text-center">
                      <img :src="item.product.imageUrl" alt="" class="img-fluid mb-3">
                      <p>NT.{{ item.product.price}}</p>
                    </td>
                    <td class="text-center">
                      {{ item.product.title }}
                      <div class="text-success" v-if="item.coupon">
                        已套用優惠券
                      </div>
                    </td>
                    <td>
                      <div class="input-group input-group-sm text-center">
                        <button type="button" class="btn btn-sm minus border border-dark btn-outline-dark"
                        :disabled="status.loadingItem === item.id"
                        @click="item.qty = minusQuantity(item.qty);updateCart(item)">
                        <i class="bi bi-dash-lg"></i></button>
                        <input type="number" class="form-control text-center"
                              min="1"
                              :disabled="status.loadingItem === item.id"
                              @change="item.qty = verifyNumber(item.qty);updateCart(item)"
                              v-model.number="item.qty">
                        <div class="input-group-text bg-success bg-opacity-50"> {{ item.product.unit }}</div>
                        <button type="button" class="btn btn-sm add border border-dark btn-outline-dark"
                        :disabled="status.loadingItem === item.id"
                        @click="item.qty = addQuantity(item.qty);updateCart(item)">
                        <i class="bi bi-plus-lg"></i></button>
                      </div>
                    </td>
                    <td class="text-center">
                      <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
             </template>
           </tbody>
           <tfoot class="border">
              <tr>
                <td colspan="4" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="4" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
           </tfoot>
         </table>
          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                    套用優惠碼
                </button>
              </div>
          </div>
          <div class="text-end">
            <router-link class="btn btn-outline-secondary me-4" to="/user/products">繼續購物</router-link>
            <router-link class="btn btn-warning text-white" to="/user/CheckoutForm">前往結帳</router-link>
          </div>
       </div>
     </div>
      <!-- 購物車無商品 -->
      <div class="container text-center py-7 py-md-9" v-else>
        <p>
          購物車目前尚無商品唷 ! <br />
          歡迎至賣場逛逛
        </p>
        <router-link class="btn btn-success" to="/user/products">商品列表</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$teal: #20c997;
$OrchidFlower: #a0346c;
$text-fill-color: rgba(255, 255, 255, 0);
$white: #ffffff;
$Gray20: #333;
$Black: #000;
.container {
  padding-top: 9vh;
}
.step {
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 3.5;
  text-align: center;
  color: $teal;
  border: 1px solid $teal;
  border-radius: 30px;
  &.active {
    background-color: $teal;
    color: #fff;
  }
}
#accordion {
  width: 100%;
  .btn-link,
  .btn-link:hover {
    text-decoration: none;
  }
  .totalPrice {
    font-weight: bold;
  }
}
textarea {
  resize: none;
}
</style>
<script>
export default {
  data () {
    return {
      isLoading: false, // 讀取效果
      status: {
        loadingItem: '' // 對應品項 id
      },
      cart: {},
      coupon_code: ''
    }
  },
  inject: ['emitter'],
  methods: {
    // 取得購物車列表 API
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.isLoading = false
          this.cart = response.data.data
        }
      })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then((response) => {
        if (response.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新購物車品項'
          })
        }
        console.log(response)
        this.status.loadingItem = ''
        this.getCart()
      })
    },
    addQuantity (num) {
      if (num < 20) {
        num++
      }
      return num
    },
    minusQuantity (num) {
      if (num > 1) {
        num--
      }
      return num
    },
    verifyNumber (num) {
      if (num > 20) {
        num = 20
      }
      if (num < 1) {
        num = 1
      }
      return num
    },
    removeCartItem (id) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        // this.$httpMessageState(response, '移除購物車品項')
        if (response.data.success) {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '移除購物車品項'
          })
        }
        this.status.loadingItem = ''
        this.isLoading = false
        // 當有刪除品項，就會重新取得購物車一次 (navbar 的cartIcon)
        this.emitter.emit('update-cart')
        this.getCart()
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(url, { data: coupon }).then((response) => {
        // this.$httpMessageState(response, '加入優惠券')
        if (response.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已套用優惠券'
          })
        }
        this.getCart()
        this.isLoading = false
      })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
