<template>
  <div class="container"  id="reviews" v-view="visibilityChanged">
    <div class="reviewsContainer pT-140" data-aos="fade-up">
      <div class="ttlContainer">
        <h3 class="medium font-90">Reviews</h3>
        <div class="navigationContainer">
          <div class="navPrev">
            <svg width="58" height="44" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3911 0.0571289L29.1193 5.64363L16.2308 18.0837L57.3428 18.0837V25.9163L16.2308 25.9163L29.1193 38.3563L23.3911 43.9428L0.657104 22L23.3911 0.0571289Z" fill="#060315"/>
            </svg>
          </div>
          <div class="navNext">
            <svg width="58" height="44" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.6089 0.0571579L28.8806 5.64366L41.7692 18.0837L0.657103 18.0837L0.657104 25.9163L41.7692 25.9163L28.8806 38.3564L34.6089 43.9429L57.3428 22L34.6089 0.0571579Z" fill="#060315"/>
            </svg>
          </div>
        </div>
      </div>
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide
          v-for="slide in itemData"
          :key="slide.id"
        >
          <div class="review">
            <p>{{slide.text}}</p>
            <div class="name">{{slide.name}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    itemData: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      swiperOptions: {
        speed: 700,
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 2000
        },
        navigation: {
          nextEl: '.navNext',
          prevEl: '.navPrev'
        }
      }
    }
  },
  methods: {
    visibilityChanged () {
      if (this.$route.name !== 'About') {
        console.log(this.$route.name)
        this.$store.commit('setMenuStatus', 2)
        this.$store.commit('setHeadColor', 0)
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>
<style scoped>
  #reviews{
    background: #EFEDF4;
    margin-top: 140px;
    padding-bottom: 160px;
  }
  .name{
    font-size: 20px;
    text-transform: uppercase;
    color: #060315;
    opacity: .7;
  }
  p{
    color: #060315;
    font-size: 30px;
    line-height: 40px;
    width: 80%;
  }
  .swiper-container{
    margin-top: 65px;
  }
  .review{
    width: 100%;
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 230px;
  }
  .swiper-slide{
    width: 100%;
    padding-right: 30px;
  }
  .reviewsContainer{
    width: 100%;
  }
  .ttlContainer{
    display: flex;
    align-items: center;
    width: 100%;
  }
  h3{
    color: #060315;
    margin-right: 25px;
  }
  .navigationContainer{
    display: flex;
  }
  .navigationContainer div{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 56px;
    cursor: pointer;
    transition: .4s ease-in-out;
    margin-left: 35px;
  }
  .navigationContainer div path{
    transition: .4s ease-in-out;
  }
  .navPrev:hover{
    transform: translateX(-8px);
  }
  .navNext:hover{
    transform: translateX(8px);
  }
  .navigationContainer div:hover path{
    fill: #0500FF;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    #reviews{
      padding-bottom: 80px;
    }
    p{
      font-size: 16px;
      line-height: 22px;
    }
    .review{
      height: 275px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .swiper-container{
      margin-top: 40px;
    }
    p{
      width: 100%;
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 16px;
    }
    .name{
      font-size: 16px;
      margin-bottom: 40px;
    }
    .swiper-slide{
      padding-right: 10px;
    }
    #reviews{
      padding-bottom: 0px;
    }
    .navigationContainer{
      transform: scale(.8);
    }
    .navigationContainer div{
      margin-left: 15px;
    }
    .ttlContainer{
      justify-content: space-between;
    }
    h3{
      margin-right: 0px;
    }
  }
</style>
