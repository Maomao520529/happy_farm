import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ------- 載入 vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// ------- 載入 Loading
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// ------- 載入 bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// ------- VeeValidate 表單驗證
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
// 匯入 vee-validate 相關規則
import AllRules from '@vee-validate/rules'
// 匯入 vee-validate 多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入 vee-validate 繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// ------- 載入 Swiperjs
import SwiperCore, {
  Navigation, Autoplay, Pagination, Scrollbar, A11y
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

// ------- CKEditor 5 文字編輯器
import CKEditor from '@ckeditor/ckeditor5-vue'

// ------- 時間戳&千分位逗號
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'

// 載入 importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
// 正常來說不建議太多方法掛 Global，這裡可以使用 provide 來處理
app.config.globalProperties.$httpMessageState = $httpMessageState

// 全域
app.use(router)
// 註冊vue axios 全域元件
app.use(VueAxios, axios)

// 註冊Swiperjs 全域元件
SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y])

// 註冊 aos 全域元件
app.use(AOS.init())

// 註冊 CKEditor 全域元件
app.use(CKEditor)

// 註冊Loading全域元件
app.component('Loading', Loading)

// 註冊 Swiperjs 兩個全域元件
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

// 註冊 vee-validate 三個全域元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
