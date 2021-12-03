<template>
  <div class="home-banner"></div>
  <div class="container">
    <carousel></carousel>
  </div>
   <Swiper></Swiper>
</template>

<script>
import Swiper from '../../components/Front/Swiper.vue'
import carousel from '../../components/Front/Carousel.vue'
export default {
  components: {
    carousel,
    Swiper
  },
  created () {
  }
}
</script>
