<template>
  <Loading :active="isLoading"></Loading>
   <div class="cart-banner"></div>
   <div class="container">
      <div class="row mb-5">
        <div class="col-md-10 offset-md-1">
          <div class="row d-flex justify-content-center mb-4">
            <div class="col-md-4 mb-2 mb-md-4">
              <div class="step">購物車列表</div>
            </div>
            <div class="col-md-4 mb-2 mb-md-4">
              <div class="step">確認訂單</div>
            </div>
            <div class="col-md-4 mb-2 mb-md-4">
              <div class="step active">訂單完成</div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-5 row justify-content-center">
        <form class="col-md-6" @submit.prevent="payOrder">
          <table class="table align-middle">
            <thead>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>{{ item.product.title }}</td>
                <td>{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="text-end">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-end">總計</td>
                <td class="text-end">{{ order.total }}</td>
              </tr>
            </tfoot>
          </table>
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-end" v-if="order.is_paid === false">
            <button class="btn btn-danger">確認付款去</button>
          </div>
        </form>
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
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.order = response.data.order
          console.log(this.order)
        }
      })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url).then((response) => {
        console.log(response)
        if (response.data.success) {
          this.getOrder()
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId // 取得路由的orderId
    console.log(this.orderId)
    this.getOrder()
  }
}
</script>
