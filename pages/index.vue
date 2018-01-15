<template lang="pug">
  section.container
    main-screen
    products
</template>

<script>
import MainScreen from '~/components/MainScreen.vue'
import Products from '~/components/Products.vue'

export default {
  components: {
    'main-screen': MainScreen,
    'products': Products
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
}

</style>
