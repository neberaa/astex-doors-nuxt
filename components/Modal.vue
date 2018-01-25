<template lang="pug">
  .modal.fade
    .modal-dialog
      .modal-content
        .modal__header
          h3.modal-title {{item.title}}
          button.button--close(type="button" data-dismiss="modal" aria-label="Close")
            span.i-multiply(aria-hidden="true")
        .modal__body
          .column
            // slider
          form.column(method="post" @change="formValidate()" name="order" netlify)
            .row.main-info
              .column
                .item(v-for="modal in item.modal")
                  .icon(:class="modal.icon")
                  p {{modal.text}}
              .column
                .icon.i-truck_grey
                .icon.i-wallet_grey
            .row.dropdown
              label(for="select1") Дверная коробка
              select(id="select1" name="select1")
                option(value="850x2040" selected) 850x2040
                option(value="850x2040") 960x2040
              label(for="select2") Открывание
              select(id="select2" name="select2")
                option(value="левая") левая
                option(value="правая" selected) правая
            .row.footer
              p Цена: {{item.price}} грн.
              button.button.button--order(type="submit" @click="formValidate(true)") Заказать
</template>

<script>
import FormComponent from '~/components/FormComponent.vue'
export default {
  mixins: [FormComponent],
  props: {
    item: {
      require: true,
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  width: 400px;
  height: 200px;
  background: $grey;
}
</style>
