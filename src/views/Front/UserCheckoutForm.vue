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
  <div class="container py-2 py-md-8">
    <div class="container">
      <div class="row d-flex justify-content-center mb-4">
        <div class="col-md-4 mb-2 mb-md-4">
          <div class="step">購物車列表</div>
        </div>
        <div class="col-md-4 mb-2 mb-md-4">
          <div class="step active">確認訂單</div>
        </div>
        <div class="col-md-4 mb-2 mb-md-4">
          <div class="step">訂單完成</div>
        </div>
      </div>
    </div>
    <h1 class="logoText pb-2 mb-6 border-bottom">
      <router-link
        class="h3 fw-bold mb-0 text-decoration-none text-teal"
        to="/"
      >
        Happy Farm
      </router-link>
    </h1>
    <!-- 訂單列表 -->
    <div class="row flex-md-row flex-column-reverse">
      <div class="col-md-6">
        <hr class="d-block d-md-none my-6 my-md-0" />
        <h2 class="h4 fw-bold mb-4 mb-md-6">收件資料</h2>
        <Form ref="form" v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="email" class="form-label h6 text-secondary">
              信箱 (請填寫常用信箱以追蹤出貨狀態)
              <span class="text-danger ms-1">*</span>
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label h6 text-secondary">
              收件人姓名
              <span class="text-danger ms-1">*</span>
            </label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label h6 text-secondary">
              收件人電話
              <span class="text-danger ms-1">*</span>
            </label>
            <Field
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required|min:8|max:10"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label h6 text-secondary">
              收件人地址
              <span class="text-danger ms-1">*</span>
            </label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="payment" class="form-label h6 text-secondary">
              付款方式
              <span class="text-danger ms-1">*</span>
            </label>
            <Field
              as="select"
              id="payment"
              name="付款方式"
              class="form-select"
              :class="{ 'is-invalid': errors['付款方式'] }"
              rules="required"
              v-model="form.user.payment"
            >
              <option value="" disabled>請選擇付款方式</option>
              <option value="信用卡">信用卡</option>
              <option value="貨到付款">貨到付款</option>
              <option value="ATM 轉帳">ATM 轉帳</option>
            </Field>
            <ErrorMessage
              name="付款方式"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label h6 text-secondary">
              留言
            </label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <router-link
              class="btn btn-outline-secondary me-4"
              to="/user/products"
            >
              繼續購物
            </router-link>
            <button type="submit" class="btn btn-warning text-white">
              送出訂單
            </button>
          </div>
        </Form>
      </div>
      <div class="col-md-6">
        <h2 class="h4 fw-bold mb-4 mb-md-6">購物清單</h2>
        <table class="table table-striped mb-4 mb-md-6">
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item" class="align-middle">
                <th>
                  <img
                    :src="item.product.imageUrl"
                    :alt="item.product.title"
                    style="width: 100px;"
                  />
                </th>
                <td>
                  <p class="mb-2 mb-md-0">{{ item.product.title }}</p>
                  <p>數量 : {{ item.qty }}</p>
                </td>
                <td class="text-end">
                  NT ${{ $filters.currency(item.product.price * item.qty) }}
                </td>
              </tr>
            </template>
          </tbody>
        </table>
        <p class="h4 fw-bold text-end mb-3">
          總金額 : NT ${{ $filters.currency(cart.total) }}
        </p>
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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          payment: ''
        },
        message: ''
      },
      cart: {},
      isLoading: false
    }
  },
  methods: {
    // 取得購物車列表 API
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response)
        this.cart = response.data.data
        this.isLoading = false
      })
    },
    createOrder () {
      // 結帳頁面填寫表單
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((response) => {
        if (response.data.success) {
          this.$router.push(`/user/checkout/${response.data.orderId}`)
          this.isLoading = false
          // 輸入完資料按送出訂單，購物車清空 ( 這邊的form 為VForm元件底下的方法clearForm )
          this.$refs.form.resetForm()
          this.isLoading = false
          this.getCart()
        }
      })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
