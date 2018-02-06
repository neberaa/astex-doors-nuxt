<template lang="pug">
  section.container(v-if="ready")
    main-screen
    sale-page
    destributors
    partners
    map-component
    footer-component
    scroll-top-button
</template>

<script>
import MainScreen from '~/components/MainScreen.vue'
import Sale from '~/components/Sale.vue'
import Destributors from '~/components/Destributors.vue'
import Partners from '~/components/Partners.vue'
import MapComponent from '~/components/MapComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import ScrollTopButton from '~/components/ScrollTopButton.vue'

export default {
  components: {
    'main-screen': MainScreen,
    'sale-page': Sale,
    'destributors': Destributors,
    'partners': Partners,
    'map-component': MapComponent,
    'footer-component': FooterComponent,
    'scroll-top-button': ScrollTopButton
  },
  data () {
    return {
      ready: false
    }
  },
  mounted () {
    this.ready = true
  }
}
</script>

<style lang="scss">

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

</style>
