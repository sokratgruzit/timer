<template>
  <div class="body-container">
    <StartContainer/>
    <template v-if="false">
    <MainContainer/>
    <Community :itemData="$store.state.community"/>
    <About/>
    <Statistic :statData="$store.state.statistic"/>
    <Reviews/>
    <Faq :itemData="$store.state.faq"/>
    <CommunityPopup :itemData="$store.state.community"/>
    </template>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'
import Community from '@/components/Community.vue'
import CommunityPopup from '@/components/CommunityPopup.vue'
import About from '@/components/About.vue'
import Faq from '@/components/Faq.vue'
import Reviews from '../components/Reviews'
import Statistic from '../components/Statistic'
import StartContainer from '../components/Start'

export default {
  name: 'Home',
  components: {
    StartContainer,
    Statistic,
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
