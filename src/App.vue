<template>
  <div id="app">
    <Header v-if="false"/>
    <router-view/>
    <Footer v-if="false"/>
  </div>
</template>

<script>
import Header from './components/modules/Header'
import Footer from './components/modules/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
