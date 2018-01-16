<template lang="pug">
  section.container
    main-screen
    products
    sale-page
    advantages
    destributors
    partners
    button.scroll-top
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
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border: none;
  }
}

</style>
