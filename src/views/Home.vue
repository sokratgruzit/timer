<template>
  <div>
    <div class="slideContainer" :style="{
              pointerEvents: $store.state.pointer ? 'all' : 'none'
            }">
      <hooper @slide="checkLastSlide" :shortDrag="false" :vertical="true" style="height: 100vh;outline: none" :itemsToShow="1" :transition="1000">
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
      slide: null,
      direction: false
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
    scrollDirection () {
      console.log('hi')
    },
    checkLastSlide (slide) {
      console.log(this.slide)
      if (this.slide === 1) {
        this.$store.commit('setDirection', 0)
      }
      if (this.slide === 2) {
        const body = document.body
        body.classList.remove('scrl')
        this.$store.commit('setPointer', true)
        window.scrollTo(0, 0)
        console.log('==2')
      }
      if (this.slide === 3) {
        // this.$store.commit('setPointer', false)
        if (this.$store.state.activeDir === 0) {
          this.$store.commit('setPointer', false)
          const body = document.body
          body.classList.add('scrl')
          console.log('==3')
          // this.$store.commit('setDirection', 1)
        } else {
          const body = document.body
          setTimeout(() => {
            body.classList.remove('scrl')
            this.$store.commit('setPointer', true)
          }, 1400)
        }
      }
      this.slide = slide.currentSlide
    },
    created () {
      window.addEventListener('scroll', this.scrollDirection)
    }
  }
}
</script>
