<template lang="pug">
  .modal
    .modal-content
      .column.slider
      .column.main
        header.header.flex-item
          h3.modal-title Пакет "{{item.title}}"
          .icon.i-multiply
        section.main-info.flex-item
          .column
            .item(v-for="modal in item.modal")
              .icon(:class="modal.icon")
              p {{modal.text}}
          .column
            .icon-box
              .icon.i-truck_grey(data-tooltip='Бесплатная доставка')
            .icon-box
              .icon.i-wallet_grey(data-tooltip='Лучшая цена на модель')
        form.form-content.flex-item(method="post" @change="formValidate()" name="order" netlify)
          label(for="select1") Дверная коробка
          select(id="select1" name="select1")
            option(value="850x2040" selected) 850x2040
            option(value="850x2040") 960x2040
          label(for="select2") Открывание
          select(id="select2" name="select2")
            option(value="левая") левая
            option(value="правая" selected) правая
        footer.footer.flex-item
          p Цена: {{item.price}} грн.
          button.button.button--order(type="submit" @click="formValidate(true)") Заказать
</template>

<script>
import FormComponent from '~/components/FormComponent.vue'
export default {
  name: 'modal',
  mixins: [FormComponent],
  props: {
    item: {}
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 80%;
  max-width: 1000px;
  height: 500px;
  background: $grey;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: $white;
  box-shadow: 2px 3px 7px 0 rgba(70, 70, 71, 0.75);
  transition: all 0.5s ease-in-out;
  z-index: 100;

  &-content {
    display: flex;
    height: 100%;

    & .column {
      height: 100%;
      &.slider {
        width: 33%;
        border-right: 2px solid $grey;
      }
      &.main {
        width: 67%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & .flex-item {
          display: flex;
          padding: 20px 40px;
        }
        & .header {
          justify-content: space-between;
          padding-top: 30px;
        }
        & .main-info {
          justify-content: space-between;
          & .column {
            & .item {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin-bottom: 5px;
              &:last-child {
                margin-bottom: 0;
              }
              & p {
                font-family: 'GothamPro-LightItalic';
                font-size: 1rem;
                padding-left: 20px;
              }
            }
            & .icon-box {
              border: 1px solid $dark-grey;
              border-radius: 5px;
              width: 50px;
              height: 50px;
              position: relative;
              &:first-child {
                margin-bottom: 10px;
              }
              & .icon {

                cursor: pointer;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
        }
        & .form-content {
          justify-content: space-between;
          align-items: center;
          font-family: 'GothamPro-LightItalic';
          font-size: 1rem;
          & select {
            outline: none;
            font-family: 'GothamPro-LightItalic';
            font-size: 1rem;
            color: $dark-grey;
            padding: 5px 10px;
          }
        }
        & .footer {
          background: $dark-grey;
          justify-content: space-between;
          align-items: center;
          & p {
            color: $white;
            font-size: 1.5rem;

          }
        }
      }
    }
  }
}

// =========== Tooltip styling ==================
[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

/* Position tooltip above the element */
[data-tooltip]:before {
  position: absolute;
  bottom: 150%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 160px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

/* Triangle hack to make tooltip look like a speech bubble */
[data-tooltip]:after {
  position: absolute;
  bottom: 150%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}

/* Show tooltip content on hover */
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  opacity: 1;
}

</style>
