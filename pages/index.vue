<template lang="pug">
  section.container(v-if="ready")
    main-screen
    products
    sale-page
    advantages
    destributors
    partners
    directions
    map-component
    footer-component
    button.scroll-top(id="scroll-top")
      .icon.i-arrow(@click="topFunction()")
</template>

<script>
import MainScreen from '~/components/MainScreen.vue'
import Products from '~/components/Products.vue'
import Sale from '~/components/Sale.vue'
import Advantages from '~/components/Advantages.vue'
import Destributors from '~/components/Destributors.vue'
import Partners from '~/components/Partners.vue'
import Directions from '~/components/Directions.vue'
import MapComponent from '~/components/MapComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'

export default {
  components: {
    'main-screen': MainScreen,
    'products': Products,
    'sale-page': Sale,
    'advantages': Advantages,
    'destributors': Destributors,
    'partners': Partners,
    'directions': Directions,
    'map-component': MapComponent,
    'footer-component': FooterComponent
  },
  data () {
    return {
      ready: false,
      scrolled: false
    }
  },
  mounted () {
    this.ready = true
  },
  beforeMount () {
    window.addEventListener('scroll', this.hideScrollButton)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.hideScrollButton)
  },
  methods: {
    hideScrollButton () {
      let button = document.getElementById('scroll-top')
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        button.style.display = 'block'
      } else {
        button.style.display = 'none'
      }
    },
    topFunction () {
      document.body.scroll({
        top: 0,
        behavior: 'smooth'
      })
      document.documentElement.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
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

  .scroll-top {
    outline: none;
    display: none;
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 95px;
    height: 75px;
    border: none;
    background: $red;
    opacity: 0.7;
    cursor: pointer;
    z-index: 80;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
    & .icon {
      margin: auto;
    }
  }
}

</style>
