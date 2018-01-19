<template lang="pug">
  .loading-page
    .logo
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $dark-grey;
  display: flex;
  justify-content: center;
  & .logo {
    margin: auto;
    background: url('~assets/img/logo.png');
    width: 130px;
    height: 180px;
  }
}
</style>
