<template>
  <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
    <div class="main-video__container">
      <div class="overlay"></div>
      <img :src="require(`@/assets/img/gradient.png`)" alt="" class="gradient">
      <video muted loop autoplay class="main-video">
        <source :src="require(`@/assets/img/Main.mp4`)" type="video/mp4">
      </video>
    </div>
    <div class="container">
      <div class="main-container__header">
        <div class="left" @click="test">Decentralized <br> Blockchain Platform</div>
        <div class="follow-container">
          <div class="ttl">Follow us</div>
          <a href="##">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5488 20V10.8777H14.6096L15.0688 7.32156H11.5488V5.05147C11.5488 4.0222 11.8335 3.32076 13.3111 3.32076L15.1926 3.31999V0.13923C14.8673 0.0969453 13.7503 0 12.4503 0C9.73573 0 7.87727 1.65697 7.87727 4.69927V7.32156H4.80725V10.8777H7.87727V20H11.5488Z" fill="white"/>
            </svg>
          </a>
          <a href="##">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="white"/>
            </svg>
          </a>
          <a href="##">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99875 0C4.4775 0 0 4.59056 0 10.2534C0 14.7827 2.865 18.6252 6.84 19.9822C7.34 20.0767 7.5225 19.7601 7.5225 19.4882C7.5225 19.2444 7.51375 18.5997 7.50875 17.7444C4.7275 18.3635 4.14 16.3695 4.14 16.3695C3.68625 15.1849 3.03 14.8695 3.03 14.8695C2.12125 14.2338 3.0975 14.2466 3.0975 14.2466C4.10125 14.3193 4.62875 15.3036 4.62875 15.3036C5.52125 16.8699 6.97 16.418 7.54 16.155C7.63 15.4925 7.88875 15.0406 8.175 14.784C5.955 14.5249 3.62 13.6453 3.62 9.71728C3.62 8.59773 4.01 7.68242 4.65 6.96499C4.54625 6.70584 4.20375 5.66288 4.7475 4.25227C4.7475 4.25227 5.5875 3.97653 7.4975 5.30289C8.295 5.07566 9.15 4.96204 10.0013 4.95821C10.85 4.96332 11.7062 5.07566 12.505 5.30417C14.4137 3.97781 15.2525 4.25355 15.2525 4.25355C15.7975 5.66544 15.455 6.70712 15.3525 6.96627C15.9937 7.6837 16.38 8.599 16.38 9.71856C16.38 13.6568 14.0425 14.5236 11.815 14.7776C12.1737 15.0942 12.4937 15.7197 12.4937 16.6759C12.4937 18.0469 12.4812 19.1524 12.4812 19.4882C12.4812 19.7626 12.6613 20.0818 13.1687 19.9809C17.1375 18.6227 20 14.7815 20 10.2534C20 4.59056 15.5225 0 9.99875 0Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="main-container__description">
        <h1>Core</h1>
        <p>
          The newest cryptocurrency. <br>
          Live in your world,<br>
          trade in our.
        </p>
      </div>
      <div class="scroll-down">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.809 16.6354L39.1666 16.675V33.7813L11.8836 6.49828L6.49829 11.8836L33.7813 39.1666L16.675 39.1666L16.6354 46.809H46.809V16.6354Z" fill="#0500FF"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainContainer',
  data () {
    return {
      firstAnimation: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 700)
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 0)
    },
    test () {
      this.$store.commit('setStart', true)
    }
  }
}
</script>
<style scoped>
  .main-video__container{
    position: absolute;
    top: 0%;
    right: -15%;
    padding-top: 75%;
    width: 75%;
    transform: translateY(-40%);
  }
  .main-video__container video{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    transform: scale(.8);
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .main-video__container video{
    transform: scale(1);
    opacity: 1;
    transition-delay: .4s;
  }
  .gradient{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .scroll-down{
    position: absolute;
    z-index: 20;
    bottom: 90px;
    right: 80px;
    cursor: pointer;
  }
  .main-container__description p{
    font-size: 72px;
    line-height: 80px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead p{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .6s;
  }
  .main-container__description h1{
    font-size: 260px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead h1{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .5s;
  }
  .main-container__description{
    position: absolute;
    left: 0px;
    bottom: 85px;
    padding-left: 80px;
    z-index: 5;
  }
  .main-container__header .left{
    font-size: 20px;
    line-height: 28px;
  }
  .follow-container a:hover path{
    fill: #ff7152;
  }
  .follow-container a path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .follow-container .ttl{
    font-size: 20px;
  }
  .follow-container a{
    margin-left: 15px;
  }
  .follow-container{
    display: flex;
    align-items: center;
  }
  #main{
    position: relative;
    height: 100vh;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,.05);
    background: #00050F;
  }
  .main-container__header{
    position: relative;
    z-index: 20;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 75px;
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .main-container__header{
    opacity: 1;
    transition-delay: .4s;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .main-video__container {
      right: -15%;
      padding-top: 75%;
      width: 75%;
    }
    .main-container__description h1 {
      font-size: 210px;
    }
    .main-container__description p{
      font-size: 46px;
      line-height: 54px;
    }
    .main-container__description{
      bottom: 30px;
      padding-left: 40px;
    }
    .main-container__header{
      margin-top: 30px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){}
  /*Ipad 768*/
  @media (max-width: 1023px){
    .main-video__container{
      right: -38%;
      padding-top: 130%;
      width: 130%;
    }
    .main-container__header .left {
      font-size: 13px;
      line-height: 22px;
    }
    .main-container__description p {
      font-size: 32px;
      line-height: 40px;
    }
    .main-container__description h1{
      font-size: 96px;
    }
    .scroll-down{
      display: none;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
