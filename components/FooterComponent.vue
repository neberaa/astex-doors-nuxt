<template lang="pug">
  .footer(id="contacts")
    .content-wrapper
      header.row
        nuxt-link.logo(to="/")
        navigation-component
      .row.body
        .column.contacts
          .column-item(v-for="item in contacts")
            .icon(:class="item.icon")
            span {{item.text}}
        .column.form
          h2 У вас еще остались вопросы?
          form-component
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import FormComponent from '~/components/FormComponent.vue'
import contacts from '~/static/data/contacts.json'

export default {
  components: {
    'navigation-component': Navigation,
    'form-component': FormComponent
  },
  name: 'footer-component',
  data () {
    return {
      contacts
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  height: 50vh;
  min-height: 580px;
  background: url('~assets/img/footer-bg.jpg') repeat;

  & .content-wrapper {
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .row {
    display: flex;
    justify-content: space-around;
    &.body {
      justify-content: space-around;
    }
    .logo {
      width: 130px;
      height: 180px;
      background: url('~assets/img/logo.png') center center no-repeat;
      background-size: cover;
    }
    .contacts {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
    }
    .column-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      & .icon {
        margin-right: 20px;
      }
      & span {
        color: $white;
        font-size: 18px;
        font-weight: 300;
        font-family: 'GothamPro-Light';
      }
    }
    h2 {
      color: $red;
      font-size: 24px;
      margin-bottom: 40px;
    }
  }
}
</style>
