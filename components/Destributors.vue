<template lang="pug">
  .destributors
    .content-wrapper
      h2 Желаете сделать крупный заказ или стать представителем нашей компании?
      p
        | Укажите, пожалуйста, Ваш &nbsp;
        span e-mail &nbsp;
        | и наш сотрудник свяжется с Вами в ближайшее время
      form(method="post" @change="formValidate()" @submit.prevent="save()")
        input(type="email" name="email" v-model.trim="email" required="required" maxlength="50" tabindex="3" title="Введите свой email")
        button.button.button--black(type="submit" @click="formValidate(true)") Отправить заявку
</template>

<script>
import FormComponent from '~/components/FormComponent.vue'
export default {
  name: 'destributors',
  mixins: [FormComponent],
  data () {
    return {
      email: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.destributors {
  width: 100vw;
  height: 430px;
  background: url('~/assets/img/trade-bg.jpg') center center no-repeat;
  background-size: cover;

  & .content-wrapper {
    max-width: 1280px;
    margin: auto;
    text-align: center;
    color: $white;

    & h2 {
      font-size: 36px;
      font-family: 'GothamPro-Light';
      margin: 60px 0 40px 0;
    }
    & p {
      font-size: 20px;
      font-family: 'GothamPro-Light';
      margin-bottom: 60px;
      span {
        color: $dark-grey;
      }
    }
    form {
      & input {
        width: 70%;
        height: 47px;
        outline: none;
        color: $dark-grey;
        font-size: 20px;
        font-family: 'GothamPro-Light';
        padding: 0 20px;
        border: none;
        margin-right: 20px;
      }
    }
  }

}
</style>
