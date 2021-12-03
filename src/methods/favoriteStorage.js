// localStorage轉型
export default {
  // LocalStorage (先定義一個物件 storageMethods 裡面會有兩個方法 : 存檔 save 與讀檔 get。)
  save (favorite) {
    // 存檔:把丟進來的東西先做轉型(物件轉字串)
    const faovrites = JSON.stringify(favorite)
    localStorage.setItem('happyfarmFavorite', faovrites)
  },
  get () {
    // 讀檔:取出 saveFavorite欄位字串內容轉回物件
    return JSON.parse(localStorage.getItem('happyfarmFavorite'))
  }
}
