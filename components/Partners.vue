<template lang="pug">
  .partners
    .content-wrapper
      .carousel-wrapper
        .partner(v-for="partner in partners")
          .icon(:class="partner.icon")
</template>

<script>
import partners from '~/static/data/partners.json'
export default {
  name: 'partners',
  data () {
    return {
      partners
    }
  }
}
</script>

<style lang="scss" scoped>
.partners {
  width: 100vw;
  height: 200px;
  background: $grey;
  display: flex;

  & .content-wrapper {
    max-width: 1215px;
    width: 80%;
    margin: auto;
    overflow: hidden;

    & .carousel-wrapper {
      width: inherit;
      display: flex;
      position: relative;
      left: 0;

      @keyframes carousel {
        0% {
          left: 0;
        }
        100% {
          left: -1250px;
        }
      }
      &:first-child {
        animation: carousel 15s linear infinite;
      }
      & .partner {
        .icon {
          filter: grayscale(100%);
          transition: all 0.3s ease-in-out;
          &:hover {
            transform: scale(1.1);
            cursor: pointer;
            filter: none;
          }
        }
      }
    }
  }
}

</style>
