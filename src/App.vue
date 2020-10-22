<template>
  <div id="app" :class="$store.state.pointer ? 'scrl' : ''">
    <Header/>
    <router-view/>
    <Footer/>
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
