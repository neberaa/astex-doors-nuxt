<template lang="pug">
  .form-container
    form(method="post" @change="formValidate()" @submit.prevent="save()")
      p Заполните форму и наш менеджер свяжется с Вами в ближайшее время
      input(type="text" name="name" placeholder="Ваше имя" v-model.trim="userName" required="required" maxlength="50" tabindex="1" pattern="[^@<>]+" title="Введите свое имя")
      input(type="tel" name="email" placeholder="Ваш номер телефона" v-model="userPhone" required="required" tabindex="2" pattern="^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$" title="Введите номер телефона")
      button.button.button--red(type="submit" @click="formValidate(true)") Отправить заявку
</template>

<script>
import axios from 'axios'
export default {
  name: 'form',
  data () {
    return {
      isSubmitted: false,
      userName: '',
      userPhone: ''
    }
  },
  methods: {
    formValidate: function (needSubmit) {
      if (needSubmit === true) {
        this.isSubmitted = true
      }
      if (!this.isSubmitted) {
        return false
      }
      let form = document.querySelector('form')
      let invalid = form.querySelectorAll('input:invalid,:required:empty,:required[val=""]')
      let valid = form.querySelectorAll('input:valid')

      invalid.forEach(function (item) {
        item.className = 'invalid'
      })
      valid.forEach(function (item) {
        item.className = 'valid'
      })
    },
    save () {
      axios.post(' ', {
        title: 'Заявка на покупку дверей',
        user_name: this.userName,
        user_phone: this.userPhone
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  width: 400px;
  height: 400px;
  p {
    font-family: 'GothamPro-Light';
    font-size: 16px;
    color: $white;
    padding-bottom: 20px;
  }
  input {
    outline: none;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid $white;
    height: 50px;
    color: $white;
    padding: 0 3%;
    font-family: 'GothamPro-LightItalic';
    font-size: 14px;
    &::placeholder {
      color: $white;
    }
    &.invalid {
      border-bottom: 2px solid $red;
      color: $red;
      &::placeholder {
        color: $red;
      }
    }
  }
  button {
    width: 100%;
    margin-top: 40px;
  }
}
</style>
