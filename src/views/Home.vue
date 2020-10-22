<template>
  <div>
    <div class="slideContainer" :style="{
              pointerEvents: $store.state.pointer ? 'all' : 'none'
            }">
      <hooper @slide="checkLastSlide" :vertical="true" style="height: 100vh;outline: none" :itemsToShow="1" :transition="1000">
        <slide>
          <MainContainer/>
        </slide>
        <slide v-for="(data, index) in $store.state.imgContainer" :key="data.id" :class="'hooper-main' + index" :ref="'hoopermain' + index">
            <ImgContent
              :itemData="data"
            />
        </slide>
      </hooper>
    </div>
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
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'Home',
  data () {
    return {
      route: {
        name: 'Home',
        params: {
          id: this.$route.params.id
        },
        hash: '#reviews'
      },
      slide: null
    }
  },
  components: {
    Hooper,
    Slide,
    MainContainer,
    ImgContent,
    SupportedAssets,
    Reviews,
    Faq,
    GetStarted
  },
  methods: {
    checkLastSlide (slide) {
      if (this.slide === 3) {
        this.$store.commit('setPointer', false)
      }
      this.slide = slide.currentSlide
    }
  }
}
</script>
