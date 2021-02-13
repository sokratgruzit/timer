<template>
  <div id="app">
    <FirstStep/>
    <EmailPopup/>
    <Header v-if="false"/>
    <router-view/>
    <Footer v-if="false"/>
  </div>
</template>

<script>
import Header from './components/modules/Header'
import Footer from './components/modules/Footer'
import FirstStep from './components/FirstStep'
import EmailPopup from './components/EmailPopup'

export default {
  components: {
    Header,
    Footer,
    EmailPopup,
    FirstStep
  }
}
</script>
