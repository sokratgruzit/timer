<template>
  <footer>
    <div class="container topContainer" data-aos="fade-up">
      <div class="left">
        <div class="navContainer">
          <a href="/" class="logo">
            <img src="@/assets/img/logoFoot.png" alt="">
          </a>
          <div class="nav">
            <router-link
              v-for="nav in routes"
              :key="nav.id"
              :to="nav.route"
              class="medium"
              :class="$store.state.activeMenu == nav.id ? 'active' : ''"
              @click.native="activeLinkFunc(nav.id)"
            >
              {{nav.title}}
            </router-link>
          </div>
          <div class="socs">
            <a href="##">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M15.998 0C7.164 0 0 7.3449 0 16.4055C0 23.6524 4.584 29.8004 10.944 31.9715C11.744 32.1227 12.036 31.6161 12.036 31.1811C12.036 30.791 12.022 29.7595 12.014 28.391C7.564 29.3816 6.624 26.1912 6.624 26.1912C5.898 24.2958 4.848 23.7913 4.848 23.7913C3.394 22.7741 4.956 22.7945 4.956 22.7945C6.562 22.9109 7.406 24.4857 7.406 24.4857C8.834 26.9919 11.152 26.2688 12.064 25.8481C12.208 24.788 12.622 24.065 13.08 23.6544C9.528 23.2398 5.792 21.8325 5.792 15.5477C5.792 13.7564 6.416 12.2919 7.44 11.144C7.274 10.7294 6.726 9.06061 7.596 6.80363C7.596 6.80363 8.94 6.36245 11.996 8.48462C13.272 8.12106 14.64 7.93927 16.002 7.93314C17.36 7.94131 18.73 8.12106 20.008 8.48667C23.062 6.36449 24.404 6.80567 24.404 6.80567C25.276 9.0647 24.728 10.7314 24.564 11.146C25.59 12.2939 26.208 13.7584 26.208 15.5497C26.208 21.8509 22.468 23.2377 18.904 23.6442C19.478 24.1507 19.99 25.1516 19.99 26.6814C19.99 28.8751 19.97 30.6439 19.97 31.1811C19.97 31.6202 20.258 32.1309 21.07 31.9695C27.42 29.7963 32 23.6503 32 16.4055C32 7.3449 24.836 0 15.998 0Z" fill="#060315"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="32" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="##">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM23.3054 12.4751C23.3125 12.6326 23.3159 12.7908 23.3159 12.9497C23.3159 17.8025 19.6221 23.3984 12.8669 23.3987H12.8672H12.8669C10.793 23.3987 8.86304 22.7908 7.23779 21.749C7.52515 21.783 7.81763 21.7998 8.11377 21.7998C9.83447 21.7998 11.418 21.2129 12.675 20.2278C11.0674 20.198 9.71191 19.1362 9.24414 17.677C9.46802 17.72 9.69824 17.7434 9.93433 17.7434C10.2695 17.7434 10.5942 17.6982 10.9028 17.614C9.22241 17.2776 7.95654 15.7925 7.95654 14.0142C7.95654 13.9976 7.95654 13.9827 7.95703 13.9673C8.4519 14.2424 9.01782 14.408 9.62036 14.4265C8.63428 13.7686 7.98608 12.6438 7.98608 11.3696C7.98608 10.6968 8.16797 10.0664 8.4834 9.52368C10.2944 11.7458 13.001 13.2073 16.0532 13.3608C15.9902 13.0918 15.9578 12.8115 15.9578 12.5234C15.9578 10.4961 17.6025 8.85132 19.6306 8.85132C20.687 8.85132 21.6411 9.29785 22.3113 10.0117C23.1479 9.84668 23.9336 9.54102 24.6433 9.12036C24.3687 9.97754 23.7866 10.6968 23.0283 11.1516C23.7712 11.0627 24.4792 10.8657 25.1372 10.5732C24.6458 11.3098 24.0225 11.9568 23.3054 12.4751Z" fill="#060315"/>
              </svg>
            </a>
            <a href="##">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 24.8375 7.1625 32 16 32C16.0938 32 16.1875 32 16.2812 31.9937V19.5438H12.8438V15.5375H16.2812V12.5875C16.2812 9.16875 18.3688 7.30625 21.4188 7.30625C22.8813 7.30625 24.1375 7.4125 24.5 7.4625V11.0375H22.4C20.7437 11.0375 20.4188 11.825 20.4188 12.9812V15.5312H24.3875L23.8687 19.5375H20.4188V31.3813C27.1063 29.4625 32 23.3062 32 16Z" fill="#060315"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="topCont">
          <h4>Sign up <br>to receive updates</h4>
          <div class="inputContainer">
            <input type="text" placeholder="E-mail">
            <button>
              <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4936 0.0177614L13.849 2.68997L19.7994 8.64046L0.818482 8.64046L0.818482 12.3871L19.7994 12.3871L13.849 18.3376L16.4936 21.0098L26.9896 10.5138L16.4936 0.0177614Z" fill="#060315"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container bottomContainer">
      <div class="left btm">
        <p>© Core App, 2020</p>
        <span>All rights reserved</span>
      </div>
      <div class="right btm">
        <a href="##">Terms of Service</a>
        <a href="##">Privacy</a>
      </div>
    </div>
    <div class="btnUpContainer">
      <a href="#main" v-smooth-scroll class="btnUp">
        Up
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      activeLink: 1,
      routes: [
        {
          id: 1,
          title: 'Discover',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#discover'
          }
        },
        {
          id: 2,
          title: 'Reviews',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#reviews'
          }
        },
        {
          id: 3,
          title: 'Answers',
          name: 'Home',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#faq'
          }
        }
      ]
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    activeLinkFunc (id) {
      setTimeout(() => {
        this.activeLink = id
        this.$store.commit('setMenuStatus', id)
      }, 100)
    }
  }
}
</script>
<style scoped>
  .right.btm a{
    color: #060315;
    font-size: 16px;
    margin-right: 60px;
    transition: .4s ease-in-out;
  }
  .right.btm a:hover{
    color: #0500FF;
  }
  .bottomContainer{
    padding-top: 30px;
  }
  .left.btm p{
    color: #060315;
    opacity: .7;
    font-size: 16px;
    width: 160px;
  }
  .left.btm{
    flex-direction: row;
  }
  .left.btm span{
    color: #060315;
    margin-left: 60px;
    font-size: 16px;
  }
  .topContainer{
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid rgba(6,3,21,.05);
    border-bottom: 1px solid rgba(6,3,21,.05);
  }
  footer{
    background: #fff;
  }
  .right{
    width: 40%;
  }
  .btnUpContainer{
    position: fixed;
    height: calc(100vh - 100px);
    right: 0px;
    top: 0px;
    z-index: 1000;
    display: flex;
    align-items: center;
  }
  .btnUp{
    transition: .4s ease-in-out;
    transform: scale(0);
    height: 64px;
    width: 64px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 32px;
    bottom: 12px;
    cursor: pointer;
    border: 2px solid #060315;
    color: #060315;
  }
  .btnUp:hover{
    background: #060315;
    color: #fff;
  }
  .aos-animate ~ .btnUpContainer .btnUp{
    transform: scale(1);
  }
  .secondaryNav a{
    margin-right: 25px;
    color: #fff;
    transition: .4s ease-in-out;
  }
  .secondaryNav a:hover{
    opacity: .6;
  }
  button{
    position: absolute;
    right: 15px;
    top: 14px;
  }
  button path{
    transition: .4s ease-in-out;
  }
  button:hover path{
    fill: #0500FF;
  }
  .inputContainer{
    position: relative;
    width: 56%;
  }
  .topCont{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  input{
    height: 48px;
    width: 100%;
    background: rgba(6,3,21,.05);
    padding: 0px 20px;
    display: flex;
    align-items: center;
    border: 2px solid rgba(255,255,255,0);
    transition: .4s ease-in-out;
  }
  input:focus{
    color: #060315;
  }
  input::placeholder{
    transition: .4s ease-in-out;
  }
  input:focus::placeholder{
    color: #020B1D;
  }
  h4{
    font-size: 16px;
    line-height: 24px;
    color: #060315;
    opacity: .7;
  }

  .left{
    width: 60%;
    display: flex;
    flex-direction: column;
  }
  .navContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 100px;
  }
  .nav{
    margin-left: 90px;
    margin-right: auto;
    display: flex;
    align-items: center;
  }
  .nav a{
    text-transform: uppercase;
    font-size: 16px;
    line-height: 24px;
    color: #060315;
    transition: .4s ease-in-out;
    margin-right: 30px;
    position: relative;
  }
  .nav a:after{
    content: '';
    height: 2px;
    background: #0500FF;
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: -8px;
    transition: .4s ease-in-out;
    transform-origin: left;
    transform: scaleX(0);
  }
  .nav a:hover:after,.nav a.router-link-active:after{
    transform: scaleX(1);
  }
  .nav a:hover,.nav a.router-link-active{
    color: #0500FF;
  }
  .socs{
    display: flex;
  }
  .socs a path{
    transition: .4s ease-in-out;
  }
  .socs a:hover path{
    fill: #0500FF;
  }
  .socs a{
    transition: .4s ease-in-out;
    margin-left: 8px;
  }
  .socs a g{
    transition: .4s ease-in-out;
  }
  .socs a:hover g{
    opacity: 1;
  }
  footer{
    position: relative;
    z-index: 3;
    padding-bottom: 30px;
  }
  .txt2{
    display: none;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .btnUp{
      right: 5px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .left.btm span{
      margin-left: 30px;
    }
    .right.btm a{
      margin-right: 30px;
    }
    .navContainer{
      padding-right: 30px;
    }
    .btnUp{
      right: 30px;
      height: 44px;
      width: 44px;
      bottom: -82px;
    }
    .nav a {
      margin-right: 15px;
    }
    .nav{
      margin-left: 30px;
      align-items: center;
      display: flex;
    }
    .txt{
      width: 90%;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .topContainer.container{
      flex-direction: column;
    }
    .btnUpContainer{
      display: none;
    }
    .secondaryNav a{
      margin-right: 10px;
    }
    .logo img {
      transform: scale(.7);
      transform-origin: left;
    }
    .nav{
      margin-left: -15px;
    }
    .right{
      width: 100%;
    }
    .left{
      width: 100%;
    }
    .nav a {
      margin-right: 15px;
    }
    h4{
      font-size: 16px;
    }
    .txt{
      font-size: 12px;
      line-height: 17px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .container{
      flex-direction: column;
    }
    .left{
      flex-direction: column;
      width: 100%;
    }
    .navContainer {
      padding-right: 0px;
    }
    .nav{
      display: none;
    }
    .logo img{
      transform: scale(1);
      transform-origin: center;
    }
    .right{
      width: 100%;
    }
    h4{
      text-align: left;
      font-size: 20px;
      line-height: 28px;
      margin-top: 20px;
    }
    .socs{
      justify-content: center;
    }
    .secondaryNav a{
      margin: 0px 12px;
    }
    .secondaryNav{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .copy{
      text-align: center;
    }
    .txt2{
      font-size: 12px;
      line-height: 17px;
      margin-top: 40px;
      text-align: center;
      display: flex;
      width: 100%;
    }
    .logo img{
      transform: scale(.8);
      transform-origin: left;
    }
    .topCont{
      flex-direction: column;
    }
    h4 br{
      display: none;
    }
    .inputContainer{
      width: 100%;
      margin-top: 15px;
    }
    .left.btm p{
      font-size: 16x;
      width: auto;
    }
    .left.btm{
      justify-content: space-between;
      margin-bottom: 15px;
    }
    .left.btm span {
      margin-left: 0px;
      font-size: 16px;
    }
  }
</style>
