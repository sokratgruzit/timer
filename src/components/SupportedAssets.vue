<template>
  <div class="container" id="assets" v-view="visibilityChanged">
    <div class="titleContainer pT-140" data-aos="fade-up">
      <h2 class="medium font-72">More than  <span>500 tokens</span> <br>
       & currencies</h2>
      <picture>
        <source media="(max-width: 767px)" srcset="@/assets/img/assetsMob.png">
        <img src="@/assets/img/assetsDesk.png" alt="assetsDesk">
      </picture>
    </div>
  </div>
</template>

<script>
import mainMixin from '@/mixins/main'

export default {
  mixins: [mainMixin],
  methods: {
    visibilityChanged (e) {
      console.log(e.percentInView)
      this.$store.commit('setMenuStatus', 2)
      this.$store.commit('setHeadColor', 0)
    }
  }
}
</script>
<style scoped>
  #assets{
    background: #EFEDF4;
    padding-bottom: 140px;
    border-top: 1px solid rgba(6,3,21,.05);
    border-bottom: 1px solid rgba(6,3,21,.05);
  }
  img{
    width: 100%;
  }
  .titleContainer{
    display: flex;
    align-items: center;
    width: 100%;
  }
  h2{
    width: 40%;
    color: #060315;
    font-size: 20px;
    line-height: 32px;
  }
  h2 span{
    color: #0500FF;
    font-size: inherit;
  }
  p{
    width: 50%;
    font-size: 20px;
    line-height: 28px;
    color: rgba(255,255,255,.6);
  }
  picture{
    width: 100%;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    #assets{
      padding-bottom: 80px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    h2{
      width: 50%;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    #assets {
      padding-bottom: 40px;
    }
    h2 br{
      display: none;
    }
    .titleContainer{
      flex-direction: column;
    }
    h2{
      width: 100%;
      margin-bottom: 30px;
    }
    p{
      width: 100%;
    }
  }
</style>
