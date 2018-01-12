<template lang="pug">
  nav.navigation
    .navigation__item(v-for="item in menuItems")
      nuxt-link.navigation__link(:to="item.link") {{item.name}}
</template>

<script>

export default {
  name: 'navigation-component',
  data () {
    return {
      menuItems: [
        {name: 'Главная', link: '/'},
        {name: 'Каталог', link: '/#catalog'},
        {name: 'О нас', link: '/#about'},
        {name: 'Акции', link: '/#sale'},
        {name: 'Контакты', link: '/#contacts'}
      ]
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
    font-size: 22px;

  }
  .nuxt-link-exact-active {
    color: $red;
  }
}

</style>
