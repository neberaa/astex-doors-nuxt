<template lang="pug">
  .modal.fade
    .modal-dialog
      .modal-content
        .modal__header

        .modal__body
        .modal__footer
</template>

<script>
export default {
  props: {
    title: {
      require: true,
      type: String,
      default: ''
    },
    desc: {
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
.advantages {
  width: 100vw;
  height: 100vh;
  background: $grey;

  & .content-wrapper {
    max-width: 1280px;
    margin: 0 auto 100px;
    display: flex;
    justify-content: space-around;

    & .column {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      & .item {
        max-width: 300px;
        color: $dark-grey;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        & .column {
          display: flex;
          margin-left: 20px;
          & h3 {
            font-size: 20px;
            text-align: left;
            margin-bottom: 10px;
          }
          & p {
            text-align: left;
            max-width: 200px;
          }
        }
      }
      & img {
        width: 90%;
        height: 100%;
      }
    }

  }

}
</style>
