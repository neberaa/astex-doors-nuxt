<template lang="pug">
  .directions
    .content-wrapper
      h2.directions__title
        | Компания &nbsp;
        span Astex &nbsp;
        br
        | представлена на рынке в следующих направления:
      .directions__content
        .directions__item(v-for="(item, index) in directions" ontouchstart="this.classList.toggle('hover');")
          .card
            .front
              .image-container
                img(:src="directionImages[index].photo")
              p.desc {{item.title}}
            .back
              h4 {{item.title}}
              .icon(:class="item.icon")
              p {{item.text}}
              .footer
                button.button.button--black Подробнее

</template>

<script>
import directions from '~/static/data/directions.json'
export default {
  name: 'directions',
  data () {
    return {
      directions,
      directionImages: [
        {photo: require('../assets/img/directions2.png')},
        {photo: require('../assets/img/directions3.png')},
        {photo: require('../assets/img/directions1.png')}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.directions {
  width: 100vw;
  height: 50vh;
  min-height: 750px;
  background: url('~/assets/img/directions-bg.png') repeat;

  & .content-wrapper {
    max-width: 1280px;
    margin: auto;
    padding: 50px 0;
  }

  &__title {
    font-size: 2.25em;
    color: $white;
    font-family: 'GothamPro-Light';
    font-weight: 300;
    & span {
      color: $red;
      text-transform: uppercase;
    }
  }

  &__content {
    display: flex;
    padding: 40px;
    justify-content: space-between;
    align-items: baseline;
    & .directions__item{

      &:hover .card, .directions__item.hover .card {
       transform: rotateY(180deg);
      }
      .card, .front, .back {
        width: 300px;
        height: 450px;
      }
      & .card {
        transition: 0.5s all ease-in;
        transform-style: preserve-3d;
        position: relative;

        .front, .back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
        }
        .front {
          z-index: 2;
          transform: rotateY(0deg);
          .image-container {
            height: 400px;

            img {
              width: 85%;
              height: auto;
              margin: auto;
            }
          }
          p {
            font-size: 1.5em;
            color: $white;
            font-family: 'GothamPro-Light';
            font-weight: 300;
            padding: 0 20px;
          }
        }
        .back {
          transform: rotateY(180deg);
          background: $white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h4 {
            padding: 20px 10px;
            color: $red;
            font-family: 'GothamPro';
            font-size: 1.5em;
            border-bottom: 1px solid $red;
          }
          .icon {
            margin: 0 auto;
          }
          p {
            color: $dark-grey;
            padding: 0 5%;
          }
          .footer {
            background: $red;
            min-height: 120px;
            display: flex;

            button {
              margin: auto;
            }
          }
        }
      }
    }
  }

}
</style>
