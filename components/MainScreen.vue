<template lang="pug">
  .main-screen(id="main")
    .content-wrapper
      header.main-screen__header
        nuxt-link.logo(to="/")
        .navigation-container
          .row.contacts
            .row-item.e-mail
              .icon.i-envelope
              span.e-mail__text info@astex-group.com.ua
            .row-item.phone
              .icon.i-phone
              ul
                li.phone__text +38(057) 725 29 95
                li.callback
                  a перезвоните мне!
          .row.navigation
            navigation-component
      .main-screen__title
          h1.title Металлические двери
          h4.desc Производство входных металлических дврей. Мы будем рады сотрудничеству.
          nuxt-link.button.button--about(to="/#about") Подробнее
      .main-screen__facts
        .fact(v-for="fact in facts")
          .fact__item
            .i-checked
          .fact__item.fact-desc
            h3 {{fact.title}}
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
        {title: 'Доступность', text: 'Производство входных металлических дврей. Мы будем рады сотрудничеству.'},
        {title: 'Надежность', text: 'Производство входных металлических дврей. Мы будем рады сотрудничеству.'},
        {title: 'Гарантия качества', text: 'Производство входных металлических дврей. Мы будем рады сотрудничеству.'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main-screen {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url('~/assets/img/header-bg.jpg') center center no-repeat;
  background-size: cover;
  color: $white;

  & .content-wrapper {
    width: 80vw;
    max-width: 1280px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
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
        &.contacts {
          flex: 1 1 auto;
          justify-content: flex-end;
        }

        & .row-item {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          &.e-mail {
            margin-right: 30px;
          }
          &.phone {
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
              .phone__text {
                font-size: 19px;
              }
              .callback {
                color: $red;
                text-align: left;
                padding-left: 5px;
                cursor: pointer;
              }
            }
          }
          & .icon {
            margin-right: 20px;
          }
        }
      }
    }

  }

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & .title {
      font-size: 48px;
      font-family: 'GothamPro-Bold';
      text-transform: uppercase;
    }
    & .desc {
      font-size: 24px;
      font-family: 'GothamPro-Light';
    }
    .button--about {
      margin: 80px auto;
    }
  }

  &__facts {
    display: flex;
    justify-content: space-around;

    .fact {
      width: 290px;
      height: 130px;
      background: rgba(250, 25, 25, 0.55);
      display: flex;
      align-items: stretch;
      justify-content: space-between;

      &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        &.fact-desc {
          font-family: 'GothamPro-Light';
          text-align: left;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 20px;
          h3 {
            font-size: 20px;
            margin-bottom: 10px;
          }
          p {
            font-size: 14px;
          }
        }
         & .i-checked {
           margin-left: 20px;
         }
      }

    }
  }
}

// =============== Media queries ======================
.content-wrapper {
  @include desktop {
    height: 100vh;
  }
}
.button--about {
  @include desktop {
    margin: 40px auto;
  }
}
</style>
