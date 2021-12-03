<template>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top position-fixed"  v-bind:style="{'position':titlePositon,'background-color': titleColor,'border-bottom':titleBorder }">
        <div class="container position-relative">
          <button class="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="logo">
            <router-link class="
                navbar-brand mx-5 px-5 me-0 me-lg-1
                flex-fill text-center text-lg-start" to="/">
              <img src="../../assets/images/myfarm.png" class="myfarm" alt="Happy Farm" />
              <span class="farm-text text-success">Happy Farm</span>
            </router-link>
          </div>
          <div class="d-flex align-items-center dropdown">
            <router-link class="nav-link d-inline-block favorite-icon position-relative text-success fs-4"
              to="/user/favorite">
              <i class="bi bi-bookmark-heart"></i>
              <div class="favorite-number rounded-pill bg-danger text-white position-absolute px-2 fs-6" v-if="favorites">
                {{ favorites.length }}
              </div>
            </router-link>
            <router-link class="nav-link d-inline-block cart-icon position-relative text-success fs-4"
              to="/user/cartTable">
              <i class="bi bi-cart3"></i>
              <div class="cart-number rounded-pill bg-danger text-white position-absolute px-2 fs-6" v-if="cart">
                {{ cart.length }}
              </div>
            </router-link>
            <!-- <DropDown :cart="cart" @get-cart="getCart"></DropDown> -->
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav align-items-center">
            <router-link class="nav-link nav-page border-bottom mx-2" to="/user/Home">HOME</router-link>
            <router-link class="nav-link nav-page border-bottom mx-2" to="/user/About">ABOUT</router-link>
            <router-link class="nav-link nav-page border-bottom mx-2" to="/user/products">農產品</router-link>
            <router-link class="nav-link nav-page border-bottom mx-2"  to="/login"><i class="bi bi-door-open-fill"></i></router-link>
          </div>
        </div>
      </nav>

</template>

<style lang="scss" scoped>
.myfarm {
  width: 50px;
}
.farm-text {
  vertical-align: sub;
}
.nav-page:hover{
  background: rgba(136, 136, 136, 0.726);
  padding: 10px;
  border-radius: 5%;
}

</style>
<script>
import favoriteMethods from '@/methods/favoriteStorage'
// import DropDown from '@/components/Front/DropDownModal.vue'

export default {
  data () {
    return {
      cart: {
        // carts: {}
      },
      // ratio: 0.05,
      // positionX: '50%',
      // positionY1: 30,
      // positionY2: 100,
      // positionY3: 150,
      // Y1: 0,
      // Y2: 0,
      // Y3: 0,
      titlePositon: 'static',
      titleColor: 'transparent',
      titleBorder: '0',
      favorites: favoriteMethods.get() || []
    }
  },
  // components: {
  //   DropDown
  // },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((response) => {
        // this.cart = response.data.data.carts
        if (response.data.success) {
          this.cart = response.data.data.carts
        }
      })
    },
    scrollFunction () {
      const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop
      console.log(scrollTop)
      // this.positionY1 = this.Y1 - scrollTop * this.ratio
      // this.positionY2 = this.Y2 - scrollTop * this.ratio
      // this.positionY3 = this.Y3 - scrollTop * this.ratio

      if (scrollTop > 80) {
        this.titlePositon = 'fixed'
        this.titleColor = '#a0faac'
        this.titleBorder = '1px solid #e5e5e5'
      } else {
        this.titlePositon = 'static'
        this.titleColor = 'transparent'
        this.titleBorder = '0'
      }
    }
  },
  mounted () {
    this.getCart()
    this.emitter.on('update-cart', () => {
      this.getCart()
    })
    this.emitter.on('favorite', () => {
      this.favorites = favoriteMethods.get()
    })
    window.addEventListener('scroll', this.scrollFunction)
    // window.onload = () => {
    //   const pic1 = document.getElementById('pic1')
    //   const pic2 = document.getElementById('pic2')
    //   const pic3 = document.getElementById('pic3')
    //   this.positionY1 = this.Y1 = pic1.offsetTop * this.ratio
    //   this.positionY2 = this.Y2 = pic2.offsetTop * this.ratio
    //   this.positionY3 = this.Y3 = pic3.offsetTop * this.ratio
    // }
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollFunction)
    this.emitter.off('update-cart')
    this.emitter.off('favorite', () => {
      this.favorites = favoriteMethods.get()
    })
  }
}
</script>
