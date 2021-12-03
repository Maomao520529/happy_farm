<template>
  <Loading :active="isLoading">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </Loading>
  <div class="home-banner"></div>
  <div class="container my-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link class="text-decoration-none text-success fw-bold" to="/user/home">Home</router-link></li>
        <li class="breadcrumb-item"><router-link class="text-decoration-none text-success" to="/user/products">種植產品</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
     <div class="row flex-md-row">
      <div class="col-md-6">
        <div class="col-6 w-100 mb-4">
          <img :src="img" alt="product.title" class="w-100 img-cover" />
        </div>
          <div class="col-md-6 d-flex w-100">
          <img
              class=" img-cover bg-white cursor-pointer shadow-sm mx-1"
              @click="img = product.imageUrl"
              :src="product.imageUrl"
              alt="product.title"
              style="width:30%;">
           <img
              class=" img-cover cursor-pointer shadow-sm mx-1"
               @click="img = product.imageUrl2"
              :src="product.imageUrl2"
              alt="product.title"
              style="width:30%;">
        </div>
      </div>
      <div class="col-md-6 my-5">
        <div class="d-flex justify-content-around mb-3">
          <h2>{{ product.title }}</h2>
           <a href="#" @click.prevent="addMyFavorite(product)">
            <i class="i bi-bookmark-heart-fill clickFavorite fs-2 text-success"
                v-if="favorites.includes(product.id)"></i>
            <i class="i bi-bookmark-heart fs-2 text-success" v-else></i>
          </a>
        </div>
          <div class="mb-3">{{ product.content }}</div>
          <div class="mb-3">{{ product.description }}</div>
          <div class="h5"  :class="[
                product.price !== product.origin_price
              ? ['text-brown-400', 'text-decoration-line-through'] : 'text-dark',
              ]">NT.
              {{ $filters.currency (product.origin_price )}} 元
          </div>
          <div class="h5 fw-bold card-text text-danger fs-5"
            v-if="product.price !== product.origin_price">
            優惠價
            {{ $filters.currency (product.price )}} 元
          </div>
          <hr>
          <button type="button" class="btn btn-outline-success"
                  @click="addToCart(product.id)">
            加到購物車
          </button>
     </div>
      </div>
    </div>
</template>

<script>
import favoriteMethods from '@/methods/favoriteStorage'

export default {
  data () {
    return {
      products: [],
      product: {},
      id: '',
      img: '', // 商品的其他附圖
      isLoading: false, // 讀取效果
      favorites: favoriteMethods.get() || []
    }
  },
  inject: ['emitter'],
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response.data)
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
          this.img = this.product.imageUrl
        }
      })
    },
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((response) => {
        this.isLoading = false
        this.products = response.data.products
        this.pagination = response.data.pagination // 分頁資訊儲存
        this.categories()
        console.log('products:', response)
      })
    },
    addToCart (id, qty = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart }).then((response) => {
        if (response.data.success) {
          this.isLoading = false
          // 當有品項加入購物車，就會重新取得購物車一次 (navbar 的cartIcon)
          this.emitter.emit('update-cart')
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已加入購物車'
          })
        }
      })
    },
    addMyFavorite (item) {
      if (this.favorites.includes(item.id)) {
        this.favorites.splice(this.favorites.indexOf(item.id), 1) // indexOf 取得索引數(判斷索引數)
        this.emitter.emit('push-message', {
          style: 'danger',
          title: '已取消我的最愛'
        })
      } else {
        this.favorites.push(item.id)
        this.emitter.emit('push-message', {
          style: 'success',
          title: '已加入我的最愛'
        })
      }
      favoriteMethods.save(this.favorites)
      this.emitter.emit('favorite')
    }
  },
  created () {
    this.id = this.$route.params.productId // 取得路由的productId
    this.getProduct()
    this.getProducts()
  }
}
</script>
