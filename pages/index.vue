<template lang="pug">
  section.container(v-if="ready")
    main-screen
</template>

<script>
import MainScreen from '~/components/MainScreen.vue'

export default {
  components: {
    'main-screen': MainScreen
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
