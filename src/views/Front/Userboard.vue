<template>
<ToastMessages></ToastMessages>
<Navbar></Navbar>
<router-view/>
<Footer></Footer>
</template>

<script>
import emitter from '@/methods/emitter'
import Navbar from '../../components/Front/Nav.vue'
import Footer from '../../components/Front/Footer.vue'
import ToastMessages from '@/components/Share/ToastMessages.vue'
export default {
  components: {
    ToastMessages,
    Navbar,
    Footer
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
  }
}
</script>
