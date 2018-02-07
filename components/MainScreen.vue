<template lang="pug">
  .main-screen(id="main")
    transition(appear name="fade")
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
            h4.desc Производство входных металлических дверей. Мы будем рады сотрудничеству.
            nuxt-link.button.button--about(to="/about" v-if="$route.path === '/'") Подробнее
        .scroll(v-if="$route.path !== '/'")
            a.scroll__button( @click.prevent="scrollToSection")
        .main-screen__facts
          .fact(v-for="fact in facts")
            .fact__item
              .icon.i-checked
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
        {title: 'Доступность', text: 'Производство входных металлических дверей. Мы будем рады сотрудничеству.'},
        {title: 'Надежность', text: 'Производство входных металлических дверей. Мы будем рады сотрудничеству.'},
        {title: 'Гарантия качества', text: 'Производство входных металлических дверей. Мы будем рады сотрудничеству.'}
      ]
    }
  },
  mounted () {
    this.onResize()
    window.scrollTo({
      left: 0,
      top: document.getElementById('main').scrollHeight,
      behavior: 'smooth'
    })
  },
  methods: {
    onResize () {
      let width = document.documentElement.clientWidth
      if (width < 960) {
        let contacts = document.querySelector('.contacts')
        contacts.style.display = 'none'
      }
    },
    scrollToSection () {
      window.scrollTo({
        left: 0,
        top: document.getElementById('main').scrollHeight,
        behavior: 'smooth'
      })
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
    justify-content: flex-start;
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
                font-size: 1.25em;
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
    margin-top: 100px;
    & .title {
      font-size: 3em;
      font-family: 'GothamPro-Bold';
      text-transform: uppercase;
    }
    & .desc {
      font-size: 1.5em;
      font-family: 'GothamPro-Light';
    }
    .button--about {
      margin: 80px auto;
    }
  }

  & .scroll {
    position: relative;
    margin: 60px auto;
    width: 100px;
    height: 80px;
    &__button,
    &__button:before {
      position: absolute;
      left: 50%;
      cursor: pointer;
    }
    &__button {
      width: 40px;
      height: 70px;
      margin-left: -20px;
      top: 50%;
      margin-top: -35px;
      -webkit-box-shadow: inset 0 0 0 1px #fff;
      box-shadow: inset 0 0 0 1px #fff;
      border-radius: 25px;
    }
    &__button:before {
      content: '';
      width: 8px;
      height: 8px;
      background: #fff;
      margin-left: -4px;
      top: 8px;
      border-radius: 4px;
      -webkit-animation-duration: 1.5s;
      animation-duration: 1.5s;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-name: scroll;
      animation-name: scroll;
    }
    @-webkit-keyframes scroll {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        -webkit-transform: translateY(46px);
        transform: translateY(46px);
      }
    }
    @keyframes scroll {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        -webkit-transform: translateY(46px);
        transform: translateY(46px);
      }
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
            font-size: 1.25em;
            margin-bottom: 10px;
          }
          p {
            font-size: 0.88em;
          }
        }
         & .i-checked {
           margin-left: 20px;
         }
      }

    }
  }
}
// ======== Transition ===============
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// =============== Media queries ======================
@include notebook {
  .main-screen {
    min-height: 800px;
    .content-wrapper {
      min-height: 760px;
    }
    &__facts {
      & .fact {
        width: 250px;
      }
    }
  }
}
</style>
