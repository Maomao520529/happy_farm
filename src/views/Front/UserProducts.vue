<template>
<Loading :active="isLoading">
   <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
 </Loading>
 <div class="content">
   <div class="products-banner"></div>
   <div class="container py-5">
      <div class="row d-flex-center">
        <div class="col-lg-12">
           <div class="d-flex justify-content-center mb-4">
            <div class="search-body mb-3">
              <div class="search" >
                  <input type="text" class="search-txt" placeholder="請輸入關鍵字..."
                    v-model="searchText"
                    @input="searchProduct(searchText)">
                  <button type="button" class="btn btn-outline-teal search-btn"
                    @click="searchText = ''">
                      <i class="bi bi-search"></i>
                  </button>
              </div>
            </div>
          </div>

          <div class="list-group list-group-horizontal fw-bold fs-4 flex-wrap justify-content-center">
            <a href="#" class="list-group-item border-0 px-3 py-2 rounded-pill text-center me-lg-2 me-1mb-1"
              @click.prevent="searchSelect = ''"
              :class="{
                'bg-success': searchSelect === '',
                'text-white': searchSelect === '',
                }">全部
            </a>
            <a href="#" v-for="list in categorieslist" :key="list"
              class="list-group-item border-0 px-3 py-2 rounded-pill text-center me-lg-2 me-1 mb-1"
              @click.prevent="searchSelect = list"
              :class="{
                 'bg-success': searchSelect === list,
                 'text-white': searchSelect === list,
                }">
              {{ list }}
            </a>
          </div>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-4" v-for="item in filterProducts" :key="item.id">
          <div class="container-fluid">
            <div class="card box-shadow border-0 text-center h-100 mb-4" data-aos="zoom-in">
              <div class="card-img">
                 <div style="height: 330px; background-size: cover; background-position: center;border-radius: 5%;"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
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
                <div class="card-body">
                  <h5 class="card-title"><strong>{{ item.title }}</strong></h5>
                  <div class="h5"  :class="[
                          item.price !== item.origin_price
                            ? ['text-brown-400', 'text-decoration-line-through']
                            : 'text-dark',
                        ]">NT. {{ $filters.currency (item.origin_price )}}</div>
                  <!-- <del class="h6 me-sm-2" v-if="item.price">原價 {{ $filters.currency (item.origin_price )}} 元</del> -->
                  <div class="h5 fw-bold card-text text-danger fs-5" v-if="item.price !== item.origin_price">優惠價
                    {{ $filters.currency (item.price )}} 元</div>
                </div>
            </div>
          </div>
        </div>
      </div>
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
      products: [],
      // product: {},
      pagination: {}, // 分頁資訊
      searchSelect: '', // 點選分類的商品
      categorieslist: [], // 分類項目用
      searchText: '', // 搜尋關鍵字
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
        this.pagination = response.data.pagination // 分頁資訊儲存
        this.categories()
        console.log('products:', response)
      })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`) // 進入個別產品頁面
    },
    categories () {
      // this.products.forEach(item => {
      //   if (this.categorieslist.indexOf(item.category) === -1) {
      //     this.categorieslist.push(item.category)
      //   }
      // })
      // 執行程式時要注意順序，先取得所有商品資料 → 取得商品的分類們
      const categorieslist = new Set()
      this.products.forEach((item) => {
        categorieslist.add(item.category)
      })
      this.categorieslist = Array.from(categorieslist)
    },
    // 搜尋
    searchProduct (value) {
      if (
        this.allProducts.filter((item) => item.title.match(value)).length > 0 &&
        value
      ) {
        this.typeProduct = this.allProducts.filter((item) =>
          item.title.match(value)
        )
      } else if (!value) {
        this.typeProduct = this.products.filter((item) => item)
      }
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
  computed: {
    filterProducts () {
      // if (this.searchText) {
      //   return this.products.filter((item) => item.title.match(this.searchText))
      // } else {
      //   return this.products.filter((item) => item.category.match(this.searchSelect))
      // }
      if (this.searchText) {
        return this.products.filter((item) => {
          const data = item.title
            .toLowerCase()
            .includes(this.searchText.toLowerCase())
          return data
        })
      } else {
        return this.products.filter((item) =>
          item.category.includes(this.searchSelect)
        )
      }
    }
  },
  mounted () {
    this.getProducts()
  }
  // created () {
  //   this.getProducts()
  // }
}
</script>
