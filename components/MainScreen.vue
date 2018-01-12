<template lang="pug">
  .main-screen
    header.main-screen__header
      .logo
      .navigation-container
        .row
          .e-mail
            .e-mail__icon.i-envelope
            span.e-mail__text info@astex-group.com.ua
          .phone
            .phone__icon.i-phone
            span.phone__text +38(057) 725 29 95
            a.callback перезвоните мне!
        .row
          navigation-component
    .main-screen__title
      .row
        h1.title Металлические двери
        h4.desc Производство входных металлических дврей. Мы будем рады сотрудничеству.
      .row
        button.button--about Подробнее
    .main-screen__facts
      .fact(v-for="fact in facts")
        .i-checked
        .fact-desc
          p {{fact.text}}
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    'navigation-component': Navigation
  },
  name: 'main-screen',
  data () {
    return {
      facts: [
        {text: 'Производство входных металлических дврей. Мы будем рады сотрудничеству.'},
        {text: 'Производство входных металлических дврей. Мы будем рады сотрудничеству.'},
        {text: 'Производство входных металлических дврей. Мы будем рады сотрудничеству.'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main-screen {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url('~/assets/img/header-bg.jpg') center center no-repeat;
  background-size: cover;
  color: $white;

  &__header {
    display: flex;
    justify-content: center;
    align-items: stretch;
    max-width: 1280px;
    & .logo {
      width: 130px;
      height: 180px;
      background: url('~assets/img/logo.png') center center no-repeat;
      background-size: cover;
    }
    & .navigation-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      & .row {
        display: flex;
      }
    }

  }
}
</style>
