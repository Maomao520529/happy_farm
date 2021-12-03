<template>
 <Loading :active="isLoading">
   <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
 </Loading>
 <div class="products-banner"></div>
   <div class="container pb-6">
      <h3 class="text-center my-5 text-success"><strong data-aos="flip-up" class="border-bottom border-success d-inline-block border-4 pb-4">我的最愛</strong></h3>
      <button v-if="favoriteList && favoriteList.length >=2" class="btn btn-outline-danger border-0 d-flex align-items-center mb-3" @click.prevent="deleteAllFavorite"><i class="bi bi-trash me-2"></i>刪除所有收藏</button>
      <div class="row mt-3" v-if="favoriteList && favoriteList.length !== 0">
        <div class="col-md-4" v-for="favorite in favoriteList" :key="favorite.id">
          <div class="container-fluid">
            <div class="card box-shadow border-0 text-center h-100 mb-4">
              <div class="card-img">
                 <div style="height: 330px; background-size: cover; background-position: center;border-radius: 5%;"
                  :style="{backgroundImage: `url(${favorite.imageUrl})`}"></div>
              </div>
              <div class="card-footer border-top-0">
                <div class="card-header favorites">
                   <a href="#" @click.prevent=" removeMyFavorite(favorite)">
                    <i class="i bi-bookmark-heart-fill clickFavorite fs-2 text-atlanticBlue"
                      v-if="favorites.includes(favorite.id)"></i>
                    <i class="i bi-bookmark-heart fs-2 text-atlanticBlue" v-else></i>
                  </a>
                  <button type="button" class="btn btn-many btn-block btn-sm p-2 ml-3 " @click="getProduct(favorite.id)">
                    <i class="fas fa-cookie-bite"></i> <span class="ml-2 fs-5">產品資訊</span></button>
                  <button type="button" class="btn btn-finish btn-block btn-sm p-2 ml-3"
                    @click.prevent="addToCart(favorite.id)">
                    <i class="bi bi-cart3 fs-4"></i></button>
                </div>
              </div>
                <div class="card-body">
                   <h5 class="card-title"><strong>{{ favorite.title }}</strong></h5>
                  <div class="h5"  :class="[
                          favorite.price !== favorite.origin_price
                            ? ['text-brown-400', 'text-decoration-line-through']
                            : 'text-dark',
                        ]">NT. {{ $filters.currency (favorite.origin_price )}}</div>
                  <div class="h5 fw-bold card-text text-danger fs-5" v-if="favorite.price !== favorite.origin_price">優惠價
                    {{ $filters.currency (favorite.price )}} 元</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="d-flex-center flex-column align-items-center mb-3 py-3 shadow-sm">
        <p class="text-center">收藏清單是空的唷！</p>
        <router-link to="/user/products" class="btn btn-success px-5 py-3">選購農產品</router-link>
      </div>
    </div>
</template>
<style lang="scss" scoped>
.favorites {
  margin-left: 18rem;
}
 @media (max-width: 1400px) {
  .favorites {
  margin-left: 8rem;
  }
 }
 @media (max-width: 1200px) {
  // 產品資訊
  .btn-many {
    left: 1.5rem;
  }
  // 加入購物車
  .btn-finish {
    left: 1.5rem;
  }
 }
@media (max-width: 992px) {
  .favorites {
  margin-left: 5rem;
  }
  // 產品資訊
  .btn-many {
    left: 1rem;
  }
  // 加入購物車
  .btn-finish {
    left: 1rem;
  }
 }
@media (max-width: 768px) {
  .favorites {
  margin-left: 22rem;
  }
  // 產品資訊
  .btn-many {
    left: 3rem;
  }
  // 加入購物車
  .btn-finish {
    left: 3rem;
  }
}
@media (max-width: 576px) {
  .favorites {
  margin-left:20rem;
  }
  .search-body {
    left:20%
  }
}
</style>
<script>
import favoriteMethods from '@/methods/favoriteStorage'

export default {
  data () {
    return {
      favoriteList: [],
      isLoading: false,
      products: [],
      favorites: favoriteMethods.get() || []
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url)
        .then((response) => {
          if (response.data.success) {
            this.isLoading = false
            this.products = response.data.products
            this.getFavorites()
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
          }
        })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`) // 進入特定頁面
    },
    // 我的最愛渲染畫面
    getFavorites () {
      this.favoriteList = []
      this.favorites.forEach(favorite => {
        this.products.forEach(product => {
          if (product.id === favorite) {
            this.favoriteList.push(product)
          }
        })
      })
    },
    // 取消我的最愛
    removeMyFavorite (item) {
      this.favorites.splice(this.favorites.indexOf(item.id), 1)
      favoriteMethods.save(this.favorites)
      this.emitter.emit('favorite')
      this.emitter.emit('push-message', {
        style: 'danger',
        title: '已取消我的最愛'
      })
      this.getFavorites()
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false
        // 當有品項加入購物車，就會重新取得購物車一次 (navbar 的cartIcon)
        this.emitter.emit('update-cart')
        // this.$httpMessageState(response, '加入購物車')
        if (response.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '加入購物車'
          })
        }
        this.$router.push('/user/cartTable')// 購物車頁面
      })
    },
    deleteAllFavorite () {
      this.favorites = []
      favoriteMethods.save(this.favorites)
      this.emitter.emit('favorite')
      this.getFavorites()
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
