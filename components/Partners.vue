<template lang="pug">
  .partners
    .content-wrapper
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
  height: 100px;
  background: $grey;

  & .content-wrapper {
    max-width: 1280px;
    margin: auto;
    display: flex;
  }

}
</style>
