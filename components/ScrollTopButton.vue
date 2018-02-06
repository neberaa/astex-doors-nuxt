<template lang="pug">
  button.scroll-top(id="scroll-top")
    .icon.i-arrow(@click="topFunction()")
</template>

<script>

export default {
  name: 'scroll-top-button',
  data () {
    return {
    }
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

<style lang="scss" scoped>
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
</style>
