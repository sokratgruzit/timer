<template>
  <div class="container" id="about">
    <picture>
      <source media="(max-width: 767px)" srcset="@/assets/img/bg320.jpg">
      <img src="@/assets/img/bg1920.jpg" alt="" class="bg">
    </picture>
    <div class="inner">
      <div class="left">
        <h2 class="font-72" data-aos="fade-up">
          More than <span>500</span> currencies & tokens
        </h2>
        <p data-aos="fade-up">Our platform is universal, which allows it to support all currencies, from popular to the latest, and their list is constantly growing.</p>
      </div>
      <div class="right">
        <hooper :autoPlay="true" :playSpeed="5000" :transition="0" :itemsToShow="1" :infiniteScroll="true">
          <slide>
            <div class="slideInner">
              <img :src="require(`@/assets/img/crypto/1.png`)" alt="" class="img_1">
              <img :src="require(`@/assets/img/crypto/2.png`)" alt="" class="img_2">
            </div>
          </slide>
          <slide>
            <div class="slideInner">
              <img :src="require(`@/assets/img/crypto/3.png`)" alt="" class="img_1">
              <img :src="require(`@/assets/img/crypto/4.png`)" alt="" class="img_2">
            </div>
          </slide>
          <slide>
            <div class="slideInner">
              <img :src="require(`@/assets/img/crypto/5.png`)" alt="" class="img_1">
              <img :src="require(`@/assets/img/crypto/6.png`)" alt="" class="img_2">
            </div>
          </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide
  },
  props: {
    itemData: {
      type: Array
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  p{
    font-size: 21px;
    line-height: 38px;
    margin-top: 40px;
  }
  h2{
    color: #fff;
  }
  h2 span{
    font-size: inherit;
    color: #ff7152;
  }
  .left{
    width: 42%;
  }
  .right{
    width: 58%;
  }
  .inner{
    padding-bottom: 160px;
    display: flex;
    width: 100%;
    padding-top: 200px;
    position: relative;
    z-index: 2;
  }
  .container{
    position: relative;
  }
  .slideInner{
    width: 54%;
    padding-top: 54%;
    position: relative;
  }
  .img_1{
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    height: 66%;
    width: 66%;
    object-fit: contain;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(-20px);
    opacity: 0;
  }
  .img_2{
    position: absolute;
    z-index: 1;
    right: 0px;
    bottom: 0px;
    height: 66%;
    width: 66%;
    object-fit: contain;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(-20px);
    opacity: 0;
  }
  .hooper-slide.is-active img{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .6s;
  }
  .hooper-slide.is-active .img_1{
    transition-delay: .7s;
  }
  .hooper{
    height: 100%;
  }
  .hooper-slide{
    display: flex;
    justify-content: center;
  }
  .right{
    pointer-events: none;
  }
  .hooper-list{
    overflow: visible;
  }
  .bg{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .inner{
      padding-bottom: 100px;
      padding-top: 100px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .inner{
      flex-direction: column;
    }
    .left{
      width: 100%;
    }
    p{
      font-size: 18px;
      line-height: 26px;
      margin-top: 15px;
    }
    .right{
      width: 100%;
      margin-top: 30px;
    }
  }
</style>
