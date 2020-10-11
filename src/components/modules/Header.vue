<template>
  <div :class="activeBurger ? 'activeBurger' : ''">
    <header :class="firstAnimation ? 'animHead' : ''" class="container">
      <nav :class="'color' + $store.state.activeMenu">
        <router-link
          v-for="nav in routes"
          :key="nav.id"
          :to="nav.route"
          class="medium"
          :class="$store.state.activeMenu == nav.id ? 'active' : ''"
          @click.native="closeBurger(),activeLinkFunc(nav.id)"
        >
          {{nav.title}}
        </router-link>
      </nav>
      <div class="downloadBtnContainer">
        <a href="##" class="dwnlBtn medium"><span class="medium">Download</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0834 20C12.7774 20 13.3826 19.4168 13.3826 18.7481V15.8245H14.2501C14.7706 15.8245 15.1176 15.49 15.1176 14.9886V6.63818H4.71582V14.9886C4.71582 15.4902 5.06282 15.8245 5.58332 15.8245H6.45089V18.7482C6.45089 19.4169 7.05595 20 7.75009 20C8.44402 20 9.04915 19.4169 9.04915 18.7482V15.8245H10.7842V18.7482C10.7842 19.4168 11.3894 20 12.0834 20Z" fill="white"/>
            <path d="M17.2843 14.9886C17.9783 14.9886 18.5834 14.4055 18.5834 13.7368V7.88952C18.5834 7.22434 17.9783 6.63818 17.2843 6.63818C16.5902 6.63818 15.9851 7.22434 15.9851 7.88952V13.7368C15.9851 14.4055 16.5902 14.9886 17.2843 14.9886Z" fill="white"/>
            <path d="M2.54906 14.9886C3.24313 14.9886 3.84827 14.4055 3.84827 13.7368V7.88952C3.84827 7.22434 3.2432 6.63818 2.54906 6.63818C1.85507 6.63818 1.25 7.22434 1.25 7.88952V13.7368C1.25 14.4055 1.85507 14.9886 2.54906 14.9886Z" fill="white"/>
            <path d="M14.0765 0.126135C13.9031 -0.0420448 13.6448 -0.0420448 13.4714 0.126135L12.3079 1.24353L12.2542 1.29518C11.5643 0.962293 10.7908 0.796049 9.9294 0.794447C9.92517 0.794447 9.92102 0.794314 9.91679 0.794314H9.91665C9.91229 0.794314 9.90827 0.794447 9.90391 0.794447C9.04257 0.796049 8.26906 0.962293 7.57922 1.29518L7.52541 1.24353L6.36195 0.126135C6.18838 -0.0420448 5.93032 -0.0420448 5.75689 0.126135C5.58332 0.29338 5.58332 0.541578 5.75689 0.708689L6.88238 1.79338C6.51973 2.0267 6.19088 2.3122 5.9049 2.63875C5.22025 3.42072 4.78356 4.4384 4.72351 5.54104C4.72295 5.55252 4.72178 5.56387 4.72122 5.57535C4.71755 5.65043 4.71582 5.72591 4.71582 5.80165H15.1176C15.1176 5.72591 15.1157 5.65043 15.1122 5.57535C15.1116 5.56387 15.1104 5.55252 15.1097 5.54104C15.0498 4.4384 14.613 3.42065 13.9283 2.63881C13.6425 2.31227 13.3135 2.02676 12.9509 1.79345L14.0765 0.708756C14.2501 0.541578 14.2501 0.29338 14.0765 0.126135ZM7.74843 4.34216C7.38951 4.34216 7.09855 4.0618 7.09855 3.71596C7.09855 3.37013 7.38951 3.08976 7.74843 3.08976C8.10734 3.08976 8.39831 3.37013 8.39831 3.71596C8.39831 4.0618 8.10734 4.34216 7.74843 4.34216ZM12.0849 4.34216C11.726 4.34216 11.4351 4.0618 11.4351 3.71596C11.4351 3.37013 11.726 3.08976 12.0849 3.08976C12.4439 3.08976 12.7348 3.37013 12.7348 3.71596C12.7348 4.0618 12.4439 4.34216 12.0849 4.34216Z" fill="white"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.40071 20C4.37654 19.9829 1.875 13.9066 1.875 10.8121C1.875 5.75728 5.7276 4.65064 7.21236 4.65064C7.88148 4.65064 8.59596 4.90927 9.22614 5.13814C9.66683 5.29779 10.1226 5.46259 10.3761 5.46259C10.5278 5.46259 10.8853 5.3224 11.201 5.19939C11.8742 4.9356 12.7119 4.60775 13.6874 4.60775C13.6892 4.60775 13.6915 4.60775 13.6932 4.60775C14.4216 4.60775 16.6302 4.76509 17.958 6.72775L18.269 7.18779L17.8214 7.52025C17.1819 7.99517 16.0151 8.8615 16.0151 10.5776C16.0151 12.61 17.3365 13.3917 17.9714 13.7676C18.2516 13.9335 18.5417 14.1046 18.5417 14.4788C18.5417 14.7232 16.5604 19.9697 13.6833 19.9697C12.9793 19.9697 12.4817 19.7614 12.0428 19.5777C11.5986 19.3918 11.2155 19.2316 10.5824 19.2316C10.2615 19.2316 9.8557 19.3809 9.42609 19.5394C8.839 19.7551 8.17448 20 7.42048 20H7.40071Z" fill="white"/>
            <path d="M13.9922 0C14.0672 2.65922 12.135 4.50406 10.2051 4.38836C9.8871 2.26621 12.1348 0 13.9922 0Z" fill="white"/>
          </svg>
        </a>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeLink: 1,
      mobileMode: null,
      activeBurger: false,
      firstAnimation: false,
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
    mobileModeFunc () {
      if (window.innerWidth >= 768) {
        this.mobileMode = false
      } else {
        this.mobileMode = true
      }
    },
    myEventHandler (e) {
      this.mobileModeFunc()
    },
    openBurger () {
      this.activeBurger = true
    },
    closeBurger () {
      this.activeBurger = false
    },
    activeLinkFunc (id) {
      setTimeout(() => {
        this.activeLink = id
        this.$store.commit('setMenuStatus', id)
      }, 100)
      console.log(id)
    }
  },
  mounted () {
    this.mobileModeFunc()
    setTimeout(() => {
      this.firstAnimation = true
      this.$store.commit('setMenuStatus', null)
    }, 500)
  },
  created () {
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  }
}
</script>
<style scoped>
  .logo{
    transition: .4s ease-in-out;
    transform: translateY(5px);
    opacity: 0;
  }
  .animHead .logo{
    transform: translateY(0px);
    opacity: 1;
  }
  header{
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 0px;
    left: 0px;
  }
  nav{
      transition: .4s ease-in-out;
      transform: translateY(5px);
      opacity: 0;
      transition-delay: .1s;
    }
  .animHead nav{
    transform: translateY(0px);
    opacity: 1;
  }
  header .downloadBtnContainer{
    transition: .4s ease-in-out;
    transform: translateY(5px);
    opacity: 0;
    transition-delay: .1s;
  }
  header.animHead  .downloadBtnContainer{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .2s;
  }
  nav a{
    text-transform: uppercase;
    font-size: 13px;
    color: rgba(255,255,255,.6);
    transition: .4s ease-in-out;
    margin-right: 30px;
    position: relative;
  }
  nav.color2 a,nav.color3 a{
    color: #060315;
  }
  nav a:after{
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
  nav a:hover:after,nav a.active:after{
    transform: scaleX(1);
  }
  nav a:hover,nav a.active{
    color: #ffffff;
  }
  nav.color2 a:hover,nav.color2 a.active,nav.color3 a:hover,nav.color3 a.active{
    color: #0500FF;
  }
  .downloadBtnContainer{
    display: flex;
    margin-left: auto;
  }
  .dwnlBtn{
    transition: .4s ease-in-out;
    height: 52px;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0px 25px;
    position: relative;
    overflow: hidden;
    background: #0500FF;
  }
  .dwnlBtn:hover{
    background: #2C27FF;
  }
  .dwnlBtn svg{
    margin-left: 10px;
  }
  .dwnlBtn span{
    position: relative;
    z-index: 3;
    color: #fff;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    nav a {
      margin-right: 25px;
    }
    nav{
      margin-left: 60px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    header{
      height: 70px;
    }
    .logo svg{
      transform: scale(.7);
      transform-origin:left;
    }
    nav{
      margin-left: 0px;
    }
    nav a{
      margin-right: 20px;
    }
    .dwnlBtn{
      height: 40px;
      font-size: 13px;
      padding: 0px 15px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    header{
      display: none;
    }
    .close{
      transform: scale(0);
      pointer-events: none;
    }
    .activeBurger .open{
      transform: scale(0);
      pointer-events: none;
    }
    .activeBurger .close{
      transform: scale(1);
      pointer-events: all;
    }
    header{
      padding: 0px 16px;
    }
    .burger{
      margin-left: auto;
      margin-top: 5px;
      height: 32px;
      width: 32px;
      position: relative;
    }
    .burger div{
      position: absolute;
      right: 0px;
      top: 0px;
      transition: .4s ease-in-out;
    }
    .fixedMenu{
      position: fixed;
      width: 100%;
      height: calc(100vh - 70px);
      left: 0px;
      top: 70px;
      background: #020B1D;
      z-index: 100;
      padding: 25px 16px;
      transition: .4s ease-in-out;
      opacity: 0;
      pointer-events: none;
    }
    .activeBurger .fixedMenu{
      opacity: 1;
      pointer-events: all;
    }
    nav{
      flex-direction: column;
      display: flex;
      transition: .4s ease-in-out;
      transform: translateY(10px);
      opacity: 0;
    }
    .activeBurger nav{
      transform: translateY(0px);
      opacity: 1;
    }
    .downloadBtnContainer{
      transition: .4s ease-in-out;
      transform: translateY(10px);
      opacity: 0;
      transition-delay: .1s;
    }
    .activeBurger .downloadBtnContainer{
      transform: translateY(0px);
      opacity: 1;
    }
    nav a{
      margin-right: auto;
      font-size: 40px;
      margin-bottom: 15px;
    }
    .dwnlBtn{
      height: 48px;
      padding: 0px 30px;
      margin-top: 20px;
    }
  }
</style>
