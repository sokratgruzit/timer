<template>
  <div class="container" v-view="visibilityChanged" :id="itemData.id == 1 ? 'discover' : 'discover' + itemData.id" :class="itemData.imgPos">
      <div class="imgContent pT-140">
        <div class="imgContainer">
          <img :src="require(`@/assets/img/${itemData.img}`)" :alt="itemData.title">
        </div>
        <div class="descr">
          <h2 class="medium font-90" v-html="itemData.title" ></h2>
          <p v-html="itemData.text"></p>
          <div class="subTxt" v-html="itemData.text2"></div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props: {
    itemData: {
      type: Object,
      require: true
    }
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 1)
      this.headColor()
      this.$store.commit('setPointer', 'all')
    },
    headColor () {
      this.$store.commit('setHeadColor', 1)
    }
  }
}
</script>
<style scoped>
  .container.right:last-child{
    padding-bottom: 140px;
  }
  .imgContent{
    display: flex;
    width: 100%;
    transition: .4s ease-in-out;
    transform: translateY(10px);
    opacity: 0;
    transition-delay: .6s;
  }
  .is-active .imgContent{
    transform: translateY(0px);
    opacity: 1;
  }
  .imgContainer img{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .imgContainer{
    position: relative;
    width: 50%;
    padding-top: 48%;
  }
  .descr{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    align-items: baseline;
  }
  p{
    font-size: 30px;
    line-height: 40px;
    color: #ffffff;
    text-align: left;
    margin-bottom: 40px;
    transition: .4s ease-in-out;
    transform: translateY(10px);
    opacity: 0;
    transition-delay: .7s;
  }
  .subTxt{
    font-size: 20px;
    line-height: 32px;
    color: rgba(255,255,255,.6);
    margin-bottom: 40px;
    transition: .4s ease-in-out;
    transform: translateY(10px);
    opacity: 0;
    transition-delay: .8s;
  }
  h2{
    color: #3BD065;
    margin-bottom: 30px;
    text-align: center;
    transition: .4s ease-in-out;
    transform: translateY(10px);
    opacity: 0;
    transition-delay: .6s;
  }
  .is-active h2,.is-active p,.is-active .subTxt{
    transform: translateY(0px);
    opacity: 1;
  }
  .container.right .imgContent{
    flex-direction: row-reverse;
  }
  .container.right .imgContent .descr{
    padding-left: 0px;
    padding-right: 20px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    p{
      font-size: 25px;
      line-height: 35px;
      margin-bottom: 20px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    p{
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 20px;
    }
    .subTxt{
      font-size: 18px;
      line-height: 30px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    h2{
      margin-bottom: 15px;
    }
    .imgContent,.container.right .imgContent{
      flex-direction: column-reverse;
    }
    .descr{
      width: 100%;
    }
    .imgContainer{
      width: 100%;
      padding-top: 100%;
      margin-top: 40px;
    }
    .subTxt[data-v-4b9e1266] {
      font-size: 16px;
      line-height: 26px;
    }
  }
</style>
