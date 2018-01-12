<template lang="pug">
  section.container
    main-screen
</template>

<script>
import MainScreen from '~/components/MainScreen.vue'

export default {
  components: {
    MainScreen
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
