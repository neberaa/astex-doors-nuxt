<template lang="pug">
  nav.navigation(id="navigation")
    .navigation__item(v-for="item in menuItems" v-if="!smallScreen")
      nuxt-link.navigation__link(:to="item.link" v-bind:class="{'nuxt-link-exact-active': item.nameId === scrollState}") {{item.name}}
    .burger(v-if="smallScreen")
      .icon X
      .menu-list
        .icon X
        .navigation__item(v-for="item in menuItems")
          nuxt-link.navigation__link(:to="item.link") {{item.name}}
</template>

<script>
import menuItems from '~/static/data/menuItems.json'
export default {
  name: 'navigation-component',
  data () {
    return {
      menuItems,
      smallScreen: false,
      scrollState: ''
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.transformMenu)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.transformMenu, this.setActiveLink())
  },
  mounted () {
    this.onResize()
  },
  methods: {
    onResize () {
      let width = document.documentElement.clientWidth
      if (width < 960) {
        this.smallScreen = true
        // let burger = document.querySelector('.navigation-container')
        // nav.style.display = 'none'
      }
    },
    transformMenu () {
      let nav = document.getElementById('navigation')
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    },
    // removeActiveClass () {
    //   let els = document.querySelectorAll('.nuxt-link-exact-active')
    //   for (let i = 0; i < els.length; i++) {
    //     els[i].classList.remove('nuxt-link-exact-active')
    //   }
    // },
    setActiveLink () {
      // let main = document.getElementById('main').getBoundingClientRect().top
      // let catalog = document.getElementById('catalog').getBoundingClientRect().top
      // let aboutTop = document.getElementById('about').getBoundingClientRect().top
      // let aboutBottom = document.getElementById('about').getBoundingClientRect().bottom
      // let sale = document.getElementById('sale').getBoundingClientRect().top
      // console.log(parseInt(aboutTop, 10), parseInt(aboutTop, 10) === 0)
      // if (parseInt(aboutTop, 10) === 0) {
      //   console.log('!!!!!!!!!!')
      //   this.removeActiveClass()
      //   this.scrollState = 'about'
      // }
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
  &.scrolled {
    display: flex;
    position: fixed;
    justify-content: center;
    background: rgba(51, 52, 54, .7);
    z-index: 90;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
  }
  .burger {
    .menu-list {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: (255, 255, 255, .7);
    }
  }
}

</style>
