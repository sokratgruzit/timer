<template>
  <div class="container"  id="faq" v-view="visibilityChanged" data-aos="fade-up">
    <div class="faqContainer pT-140">
      <h3 class="medium font-90">Answers</h3>
      <div class="faqInner">
        <div class="faqItem" v-for="faq in itemData" :key="faq.id" @click="openFaq(faq.id)" :class="activeFaq == faq.id ? 'active' : ''">
          <div class="ttlContainer">
            <div class="ttl">{{faq.question}}</div>
            <i>
              <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9086 16.6913L19.1314 13.9426L12.9469 20.1271L12.9469 0.399902L9.05305 0.399902L9.05305 20.1271L2.86863 13.9426L0.0913696 16.6913L11 27.5999L21.9086 16.6913Z" fill="#060315"/>
              </svg>
            </i>
          </div>
          <div class="questionContainer">
            <div class="questionInner">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>
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
      activeFaq: null
    }
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 3)
      this.$store.commit('setHeadColor', 0)
    },
    openFaq: function (id) {
      if (this.activeFaq !== id) {
        this.activeFaq = id
      } else {
        this.activeFaq = null
      }
    }
  }
}
</script>
<style scoped>
  #faq{
    background: #F0EDF6;
    padding-bottom: 140px;
  }
  h3{
    color: #060315;
    margin-bottom: 65px;
    text-align: left;
  }
  .questionInner{
    padding-top: 25px;
    opacity: 0;
    transform: translateY(15px);
    transition: .4s ease-in-out;
  }
  .faqItem.active .questionInner{
    opacity: 1;
    transform: translateY(0px);
  }
  .questionInner p{
    font-size: 22px;
    line-height: 32px;
    color: #060315;
  }
  .questionContainer{
    max-height: 0px;
    transition: .4s ease-in-out;
    overflow: hidden;
    width: 60%;
  }
  .faqItem.active .questionContainer{
    max-height: 800px;
  }
  .faqItem{
    padding: 15px 0px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: .4s ease-in-out;
  }
  .ttlContainer{
    display: flex;
  }
  .ttlContainer i{
    margin-left: 20px;
  }
  .ttl{
    transition: .4s ease-in-out;
    color: #060315;
    font-size: 34px;
    line-height: 40px;
  }
  .faqItem.active .ttl,.faqItem:hover .ttl{
    color: #0500FF;
  }
  .ttlContainer i{
    margin-top: 6px;
    transition: .4s ease-in-out;
  }
  .ttlContainer i path{
    transition: .4s ease-in-out;
  }
  .faqItem.active .ttlContainer i{
    transform: rotateZ(180deg) translateY(6px);
  }
  .faqItem.active .ttlContainer i path{
    fill: #0500FF;
  }
  .container{
    position: relative;
    z-index: 2;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .ttl{
      font-size: 25px;
      line-height: 30px;
    }
    .ttl i{
      margin-top: 0px;
    }
    #faq{
      padding-bottom: 80px;
    }
    .questionContainer{
      width: 100%;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .questionInner{
      padding-top: 10px;
    }
    h3{
      margin-bottom: 16px;
    }
    .faqItem{
      padding: 0px;
      padding-top: 8px;
    }
    .ttl{
      font-size: 20px;
      line-height: 26px;
    }
    .questionInner p{
      font-size: 16px;
      line-height: 26px;
    }
    i svg{
      transform: scale(.6);
    }
    .faqItem.active .ttlContainer i {
      transform: rotateZ(180deg) translateY(4px);
    }
    .ttlContainer i{
      margin-top: 0px;
      height: fit-content;
    }
    .ttlContainer{
      justify-content: space-between;
    }
    #faq{
      padding-bottom: 40px;
    }
  }
</style>
