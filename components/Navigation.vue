<template lang="pug">
  nav.navigation
    .navigation__item(v-for="item in menuItems")
      nuxt-link.navigation__link(:to="item.link") {{item.name}}
</template>

<script>
import menuItems from '~/static/data/menuItems.json'
export default {
  name: 'navigation-component',
  data () {
    return {
      menuItems
    }
  }
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &__link {
    color: $white;
    text-transform: uppercase;
    padding-left: 20px;
    text-decoration: none;
    font-size: 1.3em;

  }
  .nuxt-link-exact-active {
    color: $red;
  }
}

</style>
