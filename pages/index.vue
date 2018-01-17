<template lang="pug">
  section.container
    main-screen
    products
    sale-page
    advantages
    destributors
    partners
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

export default {
  components: {
    'main-screen': MainScreen,
    'products': Products,
    'sale-page': Sale,
    'advantages': Advantages,
    'destributors': Destributors,
    'partners': Partners
  },
  methods: {
    hideScrollButton () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('scroll-top').style.display = 'block'
      } else {
        document.getElementById('scroll-top').style.display = 'none'
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
    display: block;
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 95px;
    height: 75px;
    border: none;
    background: $red;
    opacity: 0.7;
    cursor: pointer;
    z-index: 100;
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
