<template>
 <div class="sakuraHome">
    <router-link to="/user/Home" class="longinLink">
        <button type="button" class="btn btn-outline-teal border-2">
          <span>
            <i class="bi bi-tree-fill"></i>
          </span>
          由此進入
        </button>
      </router-link>
      <section>
      <h2>HAPPY FARM</h2>
      <h3 class="slogan">生活的綠色<span class="text-success fw-bold">「食」</span>尚，健康的生態<span class="text-success fw-bold">「享」</span>壽。</h3>
      <div class="set">
        <!-- 中 -->
        <div><img src="../assets/images/f1.png"></div>
        <div><img src="../assets/images/f2.png"></div>
        <div><img src="../assets/images/f3.png"></div>
        <div><img src="../assets/images/f4.png"></div>
        <div><img src="../assets/images/f1.png"></div>
        <div><img src="../assets/images/f2.png"></div>
        <div><img src="../assets/images/f3.png"></div>
        <div><img src="../assets/images/f4.png"></div>
      </div>
      <div class="set set2">
        <!-- 前 -->
        <div><img src="../assets/images/f1.png"></div>
        <div><img src="../assets/images/f2.png"></div>
        <div><img src="../assets/images/f3.png"></div>
        <div><img src="../assets/images/f4.png"></div>
        <div><img src="../assets/images/f1.png"></div>
        <div><img src="../assets/images/f2.png"></div>
        <div><img src="../assets/images/f3.png"></div>
        <div><img src="../assets/images/f4.png"></div>
      </div>
      <div class="set set3">
        <!-- 後 -->
        <div><img src="../assets/images/f1.png"></div>
        <div><img src="../assets/images/f2.png"></div>
        <div><img src="../assets/images/f3.png"></div>
        <div><img src="../assets/images/f4.png"></div>
        <div><img src="../assets/images/f1.png"></div>
        <div><img src="../assets/images/f2.png"></div>
        <div><img src="../assets/images/f3.png"></div>
        <div><img src="../assets/images/f4.png"></div>
      </div>
      </section>

 </div>
</template>

<style lang="scss" scoped>
// 顏色變數
$AtlanticBlue:  #265D7E;
$OrchidFlower: #A0346C;
$text-fill-color:  rgba(255, 255, 255, 0);
$white: #ffffff;
$Gray20: #333;
$Black: #000;

section {
    position: relative;
    /* 相對定位 */
    // width: 100%;
    // height: 100%;
    background: radial-gradient($Gray20, $Black);
    /* 徑向漸變 */
    background-image: url(https://i.imgur.com/yQAjCQx.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    min-height: 100vh;
}
  h2 {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    /*居中*/
    margin: 0;
    color: $white;
    /*字體顏色*/
    padding: 0;
    font-size: 8em;
    /*字體大小*/
    font-family: sans-serif;
    /*字體*/
    z-index: 1;
    /*Z軸順序*/
    user-select: none;
    overflow: hidden;
    background: linear-gradient(90deg, $AtlanticBlue, $OrchidFlower, $AtlanticBlue);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 6s linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: $text-fill-color;
  }
  .btn {
    backdrop-filter: blur(30px);
  }
  .btn:hover{
    color: $white;
    border: 2px solid $white;
  }
</style>
