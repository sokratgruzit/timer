<template>
  <div class="body-container">
    <MainContainer/>
    <Community :itemData="$store.state.community"/>
    <About/>
    <Reviews/>
    <Faq :itemData="$store.state.faq"/>
    <CommunityPopup :itemData="$store.state.community"/>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'
import Community from '@/components/Community.vue'
import CommunityPopup from '@/components/CommunityPopup.vue'
import About from '@/components/About.vue'
import Faq from '@/components/Faq.vue'
import Reviews from '../components/Reviews'

export default {
  name: 'Home',
  components: {
    Reviews,
    MainContainer,
    Community,
    CommunityPopup,
    Faq,
    About
  }
}
</script>
<style scoped>
  .body-container{
    padding-left: 210px;
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .body-container{
      padding-left: 180px;
    }
  }
</style>
