<template lang="pug">
  .advantages(id="about")
    .section-title
      h2 Наши преимущества
    .content-wrapper
      .column
        .item(v-for="item in advantages.left")
          div(:class="item.iconClass")
          .column
            h3 {{item.title}}
            p {{item.text}}
      .column
        img(src="~/assets/img/door-main.png")
      .column
        .item(v-for="item in advantages.right")
          div(:class="item.iconClass")
          .column
            h3 {{item.title}}
            p {{item.text}}
</template>

<script>
import advantages from '~/static/data/advantages.json'

export default {
  name: 'advantages',
  data () {
    return {
      advantages
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
