<template>
<!-- season sale 使用 swiper-->
    <section class="container mb-md-10 my-4">
      <span class="mb-3 mt-3 bg-teal border-2 border-top-0 border-warning border">
        <span class="divider-separator-text text-success fs-1 ">Popular Farm Products</span>
      </span>
      <div class="row py-3 bg-teal bg-gradient bg-opacity-50">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <span class="h3 fw-bold bg-danger text-warning mt-2 px-2">Special offers</span>
          <p class="my-3 mb-lg-3">回饋季 感謝有您</p>
          <p>
            <strong>在地人的農作物</strong>，感謝您的支持造就了我們的栽植及培養<br />
            我們準備了一系列的熱銷農產品回饋給您，更多農產品請歡迎入內選購。
          </p>
        </div>
        <div class="col-lg-6 mt-2">
          <router-link class="btn btn-outline-success float-lg-end" to="/user/products"
            >觀看更多</router-link
          >
        </div>
      </div>
      <!-- Swiperjs 輪播 -->
      <div class="container">
        <swiper :autoplay="autoplay" :loop="true" :breakpoints="breakpoints" class="mySwiper my-5">
          <template v-for="item in products" :key="item.id">
            <swiper-slide class="d-flex justify-content-center align-items-center"  v-if="item.price < 1200">
              <div class="card box-shadow border-0">
                  <img :src="item.imageUrl" style="border-radius: 5%;" class="card-img-top" />
                  <span
                    class="badgeSale bg-warning text-success border border-success border-1 box-shadow rounded-circle p-2 position-absolute"
                    style="top:5px; right:10px;"
                    >特價</span
                  >
                <div class="card-body text-center">
                  <h5 class="card-title"><strong>{{ item.title }}</strong></h5>
                  <!-- <div class="h5" v-if="item.price">{{ $filters.currency (item.origin_price )}} 元</div> -->
                  <del class="h6 me-sm-2" v-if="item.price">NT. {{ $filters.currency (item.origin_price )}} </del>
                  <div class="h5 fw-bold card-text text-danger fs-5" v-if="item.price">優惠價
                    {{ $filters.currency (item.price )}} 元</div>
                </div>
                <div class="card-footer border-top-0">
                  <div class="card-header favorites">
                    <a href="#" @click.prevent="addMyFavorite(item)">
                      <i class="i bi-bookmark-heart-fill clickFavorite fs-2 text-atlanticBlue"
                        v-if="favorites.includes(item.id)"></i>
                      <i class="i bi-bookmark-heart fs-2 text-atlanticBlue" v-else></i>
                    </a>
                    <button type="button" class="btn btn-many btn-block btn-sm p-2 ml-3 " @click="getProduct(item.id)">
                      <i class="fas fa-cookie-bite"></i> <span class="ml-2 fs-5">產品資訊</span></button>
                    <button type="button" class="btn btn-finish btn-block btn-sm p-2 ml-3"
                      @click.prevent="addToCart(item.id)">
                      <i class="bi bi-cart3 fs-4"></i></button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </template>
        </swiper>
      </div>
    </section>
</template>
<style lang="scss" scoped>
.h5 {
  text-decoration: none;
}
.card-footer{
  border-radius: 3.5%;
}
@media (max-width: 1400px) {
  // 產品資訊
  .btn-many {
    top: 4rem;
    left: 1.5rem;
  }
  // 加入購物車
  .btn-finish {
    left: 1.5rem;
  }
}
@media (max-width: 576px) {
  // 產品資訊
  .btn-many {
    top: 10rem;
    left: 3rem;
  }
  // 加入購物車
  .btn-finish {
    left: 3rem;
  }
}
</style>
<script>
import favoriteMethods from '@/methods/favoriteStorage'

export default {
  data () {
    return {
      products: [],
      // swiperjs設定
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      isLoading: false, // 讀取效果
      favorites: favoriteMethods.get() || []
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((response) => {
        this.isLoading = false
        this.products = response.data.products
      })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`) // 進入特定頁面
    },
    // 新增品項
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
            title: '加入購物車'
          })
        }
      })
    },
    setup () {
      const onSwiper = (swiper) => {
        console.log(swiper)
      }
      const onSlideChange = () => {
        console.log('slide change')
      }
      return {
        onSwiper,
        onSlideChange
      }
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
  mounted () {
    this.getProducts()
  }
}
</script>
