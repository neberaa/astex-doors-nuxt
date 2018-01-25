<template lang="pug">
.sale(id="sale")
  .sale__box
    h2.title
      |
      span Закажи дверь &nbsp;
      | и получи скидку
    h3.desc
      | Успей получить ХИТ продаж со скидкой
      span  - 500 гривен
    .content-container
      .column
        img(src="~/assets/img/door2.png")
        p.desc Пакет "СТАНДАРТ"
        .price
          p
            | 3000 грн &nbsp;
            span 2500 грн
      .column
        .counter
          p.desc
            | До конца акции осталось &nbsp;
            span 11 &nbsp;
            | дней !
        form-component
</template>

<script>
import FormComponent from '~/components/FormComponent.vue'
export default {
  components: {
    'form-component': FormComponent
  },
  name: 'sale',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.sale {
  width: 100vw;
  height: 100vh;
  background: url('~/assets/img/sale-bg.jpg') center center no-repeat;
  background-size: cover;
  position: relative;

  &__box {
    width: 80vw;
    max-width: 940px;
    height: 70vh;
    min-height: 640px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(54,55,57, .7);
    border: 3px solid $white;

    .title {
      font-size: 2.5em;
      text-transform: uppercase;
      color: $white;
      font-family: 'GothamPro-Bold';
      margin: 30px auto 10px;
      padding: 0 20px;
      & span {
        color: $red;
      }
    }

    .desc {
      font-size: 1.5em;
      color: $white;
      font-family: 'GothamPro-Light';
      & span {
        color: $red;
        font-family: GothamPro-Bold;
      }
    }

    .content-container {
      padding: 0 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        width: 110%;
        height: auto;
      }

      & .counter p {
        padding: 40px 0 80px;
      }

      & .price p {
        font-size: 1.5em;
        color: $white;
        font-family: 'GothamPro-Light';
        position: relative;
        &::after {
          display: block;
          content: '';
          background: $red;
          position: absolute;
          bottom: 12px;
          left: 25px;
          width: 40%;
          height: 2px;
        }
        & span {
          color: $red;
        }
      }

    }

  }
}
// =============== Media queries ================
@include notebook {
  .sale {
    min-height: 700px;
    &__box {
      width: 80%;
      max-width: 900px;
      height: 80%;
    }
  }
}
</style>
