<template>
  <div>
    <MainContainer/>
      <ImgContent
        v-for="data in $store.state.imgContainer"
        :key="data.id"
        :itemData="data"
      />
    <Reviews :itemData="$store.state.reviews"/>
    <SupportedAssets/>
    <Faq :itemData="$store.state.faq"/>
    <GetStarted/>
  </div>
</template>
<script>
import MainContainer from '@/components/MainContainer.vue'
import ImgContent from '@/components/ImgContent.vue'
import SupportedAssets from '@/components/SupportedAssets.vue'
import Reviews from '@/components/Reviews.vue'
import Faq from '@/components/Faq.vue'
import GetStarted from '@/components/GetStarted.vue'

export default {
  name: 'Home',
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
  components: {
    MainContainer,
    ImgContent,
    SupportedAssets,
    Reviews,
    Faq,
    GetStarted
  }
}
</script>
