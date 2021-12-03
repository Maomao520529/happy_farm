<template>
<Loading :active="isLoading"></Loading>
  <div class="text-end">
    <div class="button btn btn-primary" type="button"
    @click="openModal(true)">
      增加一個產品
    </div>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
             @click="openDelProductModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination"
  @emit-pages="getProducts"></Pagination>
  <ProductModal ref="productModal"
  :product="tempProduct"
  @update-product="updateProduct"></ProductModal>
  <!-- 前內後外 -->
  <DelModal :item="tempProduct" ref="delModal"  @del-item="delProduct"></DelModal>
  <!-- <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/> -->
</template>

<script>
// import ProductModal from '../components/ProductModal.vue'
import ProductModal from '@/components/Back/ProductModal.vue'
import Pagination from '@/components/Share/Pagination.vue'
import DelModal from '@/components/Back/DelModal.vue'
// import { currency } from '../methods/filters'

export default {
  data () {
    return {
      products: [],
      pagination: {}, // 分頁資訊
      tempProduct: {}, // 新增品項
      isNew: false, // 產品資料更新
      isLoading: false // loading狀態
    }
  },
  // 區域註冊
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) { // 多數的產品資訊 (後臺的取得產品 API)
      this.currentPage = page
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.$http.get(api) // 讀取片段
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res.data)
            this.products = res.data.products // 產品資料儲存
            this.pagination = res.data.pagination // 分頁資訊儲存
          }
        })
    },
    openModal (isNew, item) { // isNew它是不是新的 , item編輯品項
      // console.log(isNew, item)
      // 判斷
      if (isNew) { // 假設是新的情況
        this.tempProduct = {} // 空物件
      } else { // 否定 false
        this.tempProduct = { ...item } // 展開形式把資料取出來
      }
      this.isNew = isNew // 狀態儲存
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      // let 宣告 預設形式  不做任何判斷時
      // 新增狀態
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post' // 方法
      let status = '新增產品'
      // 判斷
      // 當不是新增品項狀態時
      // 編輯狀態
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
        status = '更新產品'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        console.log(response)
        this.$httpMessageState(response, status)// 透過 全域方式 可直接 讓新增、更新訊息同時使用
        productComponent.hideModal() // 開起的 Modal 關閉
        this.getProducts(this.currentPage) // 重新取得列表資訊
      })
    },
    // 開啟刪除 Modal
    openDelProductModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        console.log(response.data)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getProducts(this.currentPage)
        if (response.data.success) {
          this.isLoading = false
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '刪除產品資訊'
          })
        }
      })
    }
  },
  created () { // 觸發方法
    this.getProducts()
  }
}
</script>
