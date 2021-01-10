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
        <div class="left">Decentralized <br> Blockchain Platform</div>
        <div class="follow-container">
          <div class="ttl">Follow us</div>
          <a href="##">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5488 20V10.8777H14.6096L15.0688 7.32156H11.5488V5.05147C11.5488 4.0222 11.8335 3.32076 13.3111 3.32076L15.1926 3.31999V0.13923C14.8673 0.0969453 13.7503 0 12.4503 0C9.73573 0 7.87727 1.65697 7.87727 4.69927V7.32156H4.80725V10.8777H7.87727V20H11.5488Z" fill="white"/>
            </svg>
          </a>
          <a href="##">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="##">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M19.9951 20V19.9992H20.0001V12.6642C20.0001 9.07583 19.2276 6.31166 15.0326 6.31166C13.0159 6.31166 11.6626 7.41833 11.1101 8.4675H11.0517V6.64666H7.07422V19.9992H11.2159V13.3875C11.2159 11.6467 11.5459 9.96333 13.7017 9.96333C15.8259 9.96333 15.8576 11.95 15.8576 13.4992V20H19.9951Z" fill="white"/>
                <path d="M0.3302 6.6475H4.47687V20H0.3302V6.6475Z" fill="white"/>
                <path d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="##">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M9.99875 0.000205994C4.4775 0.000205994 0 4.59077 0 10.2536C0 14.7829 2.865 18.6254 6.84 19.9824C7.34 20.0769 7.5225 19.7603 7.5225 19.4884C7.5225 19.2446 7.51375 18.5999 7.50875 17.7446C4.7275 18.3637 4.14 16.3697 4.14 16.3697C3.68625 15.1851 3.03 14.8697 3.03 14.8697C2.12125 14.234 3.0975 14.2468 3.0975 14.2468C4.10125 14.3195 4.62875 15.3038 4.62875 15.3038C5.52125 16.8701 6.97 16.4182 7.54 16.1553C7.63 15.4927 7.88875 15.0408 8.175 14.7842C5.955 14.5251 3.62 13.6455 3.62 9.71749C3.62 8.59793 4.01 7.68263 4.65 6.9652C4.54625 6.70605 4.20375 5.66309 4.7475 4.25247C4.7475 4.25247 5.5875 3.97674 7.4975 5.3031C8.295 5.07587 9.15 4.96225 10.0013 4.95842C10.85 4.96353 11.7062 5.07587 12.505 5.30437C14.4137 3.97801 15.2525 4.25375 15.2525 4.25375C15.7975 5.66564 15.455 6.70733 15.3525 6.96647C15.9937 7.68391 16.38 8.59921 16.38 9.71877C16.38 13.657 14.0425 14.5238 11.815 14.7778C12.1737 15.0944 12.4937 15.7199 12.4937 16.6761C12.4937 18.0471 12.4812 19.1526 12.4812 19.4884C12.4812 19.7629 12.6613 20.082 13.1687 19.9811C17.1375 18.6229 20 14.7817 20 10.2536C20 4.59077 15.5225 0.000205994 9.99875 0.000205994Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
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
    fill: #3BD065;
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
