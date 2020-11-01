<template>
  <div id="discover" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
    <picture>
      <source media="(max-width: 767px)" srcset="@/assets/img/mainBgMobile.jpg">
      <source media="(max-width: 1023px)" srcset="@/assets/img/mainBgLaptop.jpg">
      <img src="@/assets/img/mainBg.jpg" class="mainBg" alt="bg">
    </picture>
    <img src="@/assets/img/mainCrBg.png" class="crptBg" alt="bg">
    <div class="inner container">
      <div class="left">
        <div class="mainName">Core.</div>
        <h1 class="medium">
          Decentralized <br>
          Blockchain <br>
          Platform
        </h1>
        <p>With the tools and technologies required to create
          possibility for the many, as well as the few, and bring
          about positive global change.</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainContainer',
  data () {
    return {
      firstAnimation: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
      this.visibilityChanged()
      this.headColor()
    }, 500)
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 1)
      this.$store.commit('setDirection', 0)
      this.headColor()
    },
    headColor () {
      this.$store.commit('setHeadColor', 1)
    }
  }
}
</script>
<style scoped>
  .crptBg{
    position: absolute;
    left: -18%;
    bottom: -23%;
    height: 100%;
    z-index: 2;
    transition: .4s ease-in-out;
    opacity: 0;
    transition-delay: .4s;
    transform: translateY(10px);
  }
  .animHead .crptBg{
    transform: translateY(0px);
    opacity: 1;
  }
  .inner{
    position: relative;
    z-index: 2;
  }
  .mainBg{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    bottom: 0px;
    z-index: 1;
    transition: .4s ease-in-out;
    opacity: 0;
    object-fit: cover;
  }
  .animHead .mainBg{
    opacity: 1;
  }
  h1{
    font-size: 68px;
    line-height: 80px;
    color: #fff;
    margin-top: 40px;
    transition: .4s ease-in-out;
    transform: translateY(10px);
    opacity: 0;
    transition-delay: .1s;
    text-align: left;
  }
  .animHead h1{
    transform: translateY(0px);
    opacity: 1;
  }
  .mainName{
    font-size: 128px;
    color: #3BD065;
    margin-top: 150px;
    transition: .4s ease-in-out;
    transform: translateY(10px);
    opacity: 0;
  }
  .animHead .mainName{
    transform: translateY(0px);
    opacity: 1;
  }
  .outer{
    height: 100%;
    padding-top: 100px;
    position: relative;
    overflow: hidden;
  }
  .hooper-slide{
    overflow: hidden;
  }
  .container{
    height: 100%;
  }
  .left{
    width: 50%;
    position: relative;
    z-index: 3;
    margin-left: auto;
  }
  .left p{
    color: rgba(255,255,255,.6);
    font-size: 20px;
    line-height: 32px;
    margin-top: 40px;
    transform: translateY(10px);
    transition: .4s ease-in-out;
    opacity: 0;
    transition-delay: .2s;
    text-align: left;
  }
  .animHead .left p{
    transform: translateY(0px);
    opacity: 1;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .mainName{
      margin-top: 30px;
    }
    h1{
      font-size: 48px;
      line-height: 60px;
      margin-top: 20px;
    }
    .left p{
      margin-top: 20px;
      font-size: 18px;
      line-height: 30px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .outer {
      height: 600px;
    }
    .crptBg{
      left: -33%;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .left{
      width: 65%;
    }
    .outer{
      height: 600px;
    }
    h1{
      margin-top: 20px;
      font-size: 46px;
      line-height: 60px;
    }
    .btnContainer a{
      height: 60px;
      padding: 0px 15px;
    }
    .btnContainer a svg {
      margin-right: 10px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px) {
    .crptBg {
      height: auto;
      width: 100%;
      left: 0px;
      bottom: -1%;
    }
    .mainName{
      font-size: 68px;
      line-height: 80px;
      text-align: center;
    }
    .outer{
      height: 100vh;
      min-height: 650px;
      padding-top: 0px;
    }
    .left{
      width: 100%;
    }
    h1{
      font-size: 30px;
      line-height: 40px;
      margin-top: 10px;
      text-align: center;
    }
    .left p{
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      margin-top: 15px;
    }
    .mobileBg{
      top: 0%;
      right: 0px;
      height: 43%;
    }
  }
</style>
