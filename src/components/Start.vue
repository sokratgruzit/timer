<template>
  <div :class="firstAnimation ? 'ready' : ''" class="start-container" v-if="false">
    <div class="start-container__inner">
      <div class="left">
        <a href="##" class="logo">
          <svg width="85" height="120" viewBox="0 0 85 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 21.84C19.3883 17.5862 23.758 14.2179 28.7342 12.024C33.7104 9.83008 39.1445 8.87609 44.5704 9.24384C49.9963 9.6116 55.252 11.2901 59.8867 14.1354C64.5213 16.9808 68.3966 20.9079 71.1799 25.58L74.3299 23.76L79.0799 20.93C75.2894 14.5514 69.9054 9.26803 63.4563 5.59859C57.0073 1.92915 49.7149 -0.000267029 42.2949 -0.000267029C34.875 -0.000267029 27.5826 1.92915 21.1336 5.59859C14.6845 9.26803 9.30048 14.5514 5.50994 20.93L3.18994 24.88L7.12994 27.22L19.3299 34.46C17.3866 39.8107 17.3712 45.6719 19.2865 51.0328C21.2018 56.3936 24.9277 60.9181 29.8217 63.8261C34.7156 66.734 40.4709 67.8431 46.095 66.9621C51.7192 66.0811 56.8596 63.2652 60.6299 59L68.6299 63.74C65.238 67.9961 60.8637 71.3653 55.8828 73.5585C50.9019 75.7517 45.4631 76.7032 40.0335 76.3315C34.6038 75.9597 29.3454 74.2758 24.7099 71.4242C20.0744 68.5726 16.2002 64.6386 13.4199 59.96L5.53994 64.63C9.33048 71.0086 14.7145 76.292 21.1636 79.9614C27.6126 83.6309 34.905 85.5603 42.3249 85.5603C49.7449 85.5603 57.0373 83.6309 63.4863 79.9614C69.9354 76.292 75.3194 71.0086 79.1099 64.63L81.4599 60.68L77.5099 58.34L75.4499 57.12L57.1399 46.54C56.8912 47.4691 56.5564 48.373 56.1399 49.24C54.7026 52.3225 52.2778 54.8373 49.2498 56.3862C46.2217 57.935 42.7635 58.4293 39.4228 57.7907C36.0821 57.1522 33.0499 55.4173 30.8066 52.8608C28.5632 50.3044 27.2369 47.0726 27.0378 43.6772C26.8386 40.2819 27.7779 36.9172 29.707 34.116C31.6361 31.3148 34.4446 29.2373 37.6877 28.2125C40.9308 27.1877 44.4231 27.2743 47.6115 28.4584C50.7999 29.6426 53.502 31.8567 55.2899 34.75L63.2899 30.17C61.3125 26.8738 58.5855 24.0906 55.3304 22.0463C52.0752 20.0019 48.3838 18.7542 44.556 18.4045C40.7281 18.0547 36.8717 18.6128 33.3 20.0333C29.7283 21.4538 26.542 23.6968 23.9999 26.58L15.9999 21.84Z" fill="#FF7152"/>
            <path d="M12.14 120C8.18667 120 5.18667 119 3.14 117C1.09333 115 0.0466667 112.177 0 108.53C0 104.757 1 101.843 3 99.79C5 97.7367 8.02333 96.71 12.07 96.71C13.3104 96.696 14.5493 96.7998 15.77 97.02C16.8357 97.2231 17.8852 97.5038 18.91 97.86V102.86C16.8745 102.019 14.6923 101.591 12.49 101.6C10.15 101.6 8.43667 102.16 7.35 103.28C6.27 104.4 5.72 106.17 5.72 108.58C5.72 110.99 6.3 112.58 7.44 113.58C8.87588 114.756 10.7097 115.332 12.56 115.19C13.6564 115.189 14.7505 115.092 15.83 114.9C16.9156 114.713 17.9782 114.411 19 114V119C17.9809 119.335 16.938 119.592 15.88 119.77C14.6421 119.953 13.3909 120.03 12.14 120Z" fill="white"/>
            <path d="M32.0598 120C28.3865 120 25.5931 119.063 23.6798 117.19C21.7665 115.317 20.8065 112.407 20.7998 108.46C20.7998 104.27 21.7998 101.27 23.6798 99.46C25.5598 97.65 28.3898 96.73 32.0598 96.73C35.7298 96.73 38.5298 97.64 40.4498 99.46C42.3698 101.28 43.3198 104.29 43.3198 108.46C43.3198 112.407 42.3631 115.317 40.4498 117.19C38.5365 119.063 35.7398 120 32.0598 120ZM32.0598 115.19C32.8321 115.26 33.61 115.148 34.332 114.866C35.054 114.583 35.7003 114.136 36.2198 113.56C37.0998 112.48 37.5298 110.77 37.5298 108.46C37.5298 105.93 37.0998 104.15 36.2198 103.11C35.6868 102.556 35.0365 102.128 34.3167 101.858C33.5968 101.588 32.8257 101.483 32.0598 101.55C31.2893 101.481 30.5132 101.586 29.7882 101.856C29.0633 102.126 28.4078 102.554 27.8698 103.11C26.9898 104.11 26.5598 105.93 26.5598 108.46C26.5598 110.77 26.9898 112.46 27.8698 113.56C28.3954 114.136 29.047 114.583 29.7738 114.866C30.5007 115.149 31.283 115.26 32.0598 115.19Z" fill="white"/>
            <path d="M46.2 119.65V97.06H57.49C60.1566 97.06 62.1233 97.76 63.3899 99.16C64.7095 100.738 65.3846 102.756 65.2799 104.81C65.317 106.209 64.9274 107.586 64.1628 108.757C63.3983 109.929 62.2951 110.84 61 111.37C61.3115 111.608 61.5788 111.899 61.79 112.23C62.0402 112.653 62.2576 113.094 62.4399 113.55L65.0999 119.65H59.18L56.65 113.9C56.4894 113.475 56.2121 113.104 55.8499 112.83C55.425 112.577 54.9335 112.458 54.4399 112.49H51.8499V119.65H46.2ZM51.8499 108.14H56C56.9321 108.197 57.8521 107.905 58.58 107.32C58.9075 106.994 59.1604 106.601 59.321 106.167C59.4815 105.734 59.546 105.271 59.5099 104.81C59.5099 102.537 58.4233 101.403 56.25 101.41H51.8499V108.14Z" fill="white"/>
            <path d="M68.1599 119.65V97.06H84.8199V101.41H73.8199V106.14H83.5299V110.56H73.8099V115.3H84.8099V119.65H68.1599Z" fill="white"/>
          </svg>
        </a>
        <h1>Welcome!</h1>
        <div class="description">
          Here soon will be a site about the newest product in the world of cryptocurrencies — Core.
        </div>
        <div class="subscribe">
          <div class="text">Stay up to date on the launch of our project</div>
          <div class="input-container">
            <input type="text" placeholder="myname@example.com">
            <div class="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8701 4.5135L11.8866 6.51766L16.3495 10.9805L2.11377 10.9805L2.11377 13.7905L16.3495 13.7905L11.8866 18.2533L13.8701 20.2575L21.7421 12.3855L13.8701 4.5135Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <video muted loop autoplay class="start-container__video">
          <source :src="require(`@/assets/img/start.mp4`)" type="video/mp4">
        </video>
        <img :src="require(`@/assets/img/gradientChart.png`)" alt="" class="start-container__gradient">
        <div class="timer">
          <div class="timer-col">
            <div class="num">7</div>
            <div class="desc">Days</div>
          </div>
          <div class="timer-col">
            <div class="num">18</div>
            <div class="desc">Hours</div>
          </div>
          <div class="timer-col">
            <div class="num">46</div>
            <div class="desc">Minutes</div>
          </div>
          <div class="timer-col">
            <div class="num">06</div>
            <div class="desc">Seconds</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="copy">© Core App, 2020</div>
      <div class="nav">
        <div>Terms of Service</div>
        <div>Privacy</div>
      </div>
      <div class="share">
        <a href="##" target="_blank">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5488 20V10.8777H14.6096L15.0688 7.32156H11.5488V5.05147C11.5488 4.0222 11.8335 3.32076 13.3111 3.32076L15.1926 3.31999V0.13923C14.8673 0.0969453 13.7503 0 12.4503 0C9.73573 0 7.87727 1.65697 7.87727 4.69927V7.32156H4.80725V10.8777H7.87727V20H11.5488Z" fill="white"/>
          </svg>
        </a>
        <a href="##" target="_blank">
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
  </div>
</template>

<script>

export default {
  name: 'StartContainer',
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
  }
}
</script>
<style scoped>
  .copy{
    opacity: .6;
  }
  .nav{
    display: flex;
    margin-left: 80px;
  }
  .nav div{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
    margin-right: 40px;
  }
  .nav div:hover{
    color: #ff7152;
  }
  .footer{
    display: flex;
    padding: 0px 150px;
    z-index: 10;
    position: absolute;
    bottom: 50px;
    left: 0px;
    width: 100%;
    align-items: center;
  }
  .share{
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .share a{
    margin-right: 16px;
  }
  .share a path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .share a:hover path{
    fill: #ff7152;
  }
  .logo{
    margin-top: 50px;
    margin-bottom: 70px;
  }
  .subscribe{
    display: flex;
    flex-direction: column;
    margin-top: 65px;
    margin-bottom: auto;
  }
  .subscribe .text{
    font-size: 20px;
    opacity: .6;
    margin-bottom: 25px;
  }
  .button svg{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
  }
  .button svg path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .button svg:hover path{
    fill: #ff7152;
  }
  .button svg:hover{
    transform: translateX(5px);
  }
  .input-container .button{
    position: absolute;
    display: flex;
    align-items: center;
    top: 0px;
    right: 20px;
    height: 100%;
    z-index: 2;
  }
  .input-container input{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: transparent;
    border: 2px solid rgba(255,255,255,.1);
    padding: 0px 25px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  input:focus{
    border-color: #0400DD;
  }
  .input-container{
    position: relative;
    width: 360px;
    height: 64px;
  }
  .left{
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 100%;
    position: relative;
    z-index: 2;
  }
  .description{
    font-size: 40px;
    line-height: 50px;
  }
  h1{
    font-size: 96px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
    color: transparent;
    margin-bottom: 30px;
  }
  .start-container__inner{
    max-width: 1920px;
    padding: 0px 100px;
    margin: auto;
    display: flex;
    height: 100%;
  }
  .start-container{
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #00050F;
    z-index: 9999;
  }
  .right{
    display: flex;
    width: calc(100% - 600px);
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .timer{
    display: flex;
    position: relative;
    z-index: 10;
  }
  .timer-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
  }
  .timer-col .num{
    font-size: 100px;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,113,82,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .timer-col .desc{
    font-size: 20px;
  }
  .start-container__video{
    position: absolute;
    height: 100%;
    z-index: 1;
    top: 0px;
  }
  .start-container__gradient{
    position: absolute;
    height: 100%;
    z-index: 2;
    top: 0px;
    left: 0px;
    width: 100%;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){}
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
