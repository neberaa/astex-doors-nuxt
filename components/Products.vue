<template lang="pug">
.products(id="catalog")
  .section-title
    h2 Наши двери
  .content-wrapper
    .products__item(v-for="(door, index) in doors")
      h2 {{door.title}}
      .photo
        img(:src="doorsImages[index].photo")
      p {{door.desc}}
      .footer
        p Цена: {{door.price}} грн.
        button.button.button--order Заказать
    modal
</template>

<script>
import Modal from '~/components/Modal.vue'
import doors from '~/static/data/doors.json'
export default {
  components: {
    'modal': Modal
  },
  name: 'products',
  data () {
    return {
      doors,
      doorsImages: [
        {photo: require('../assets/img/door1.png')},
        {photo: require('../assets/img/door2.png')},
        {photo: require('../assets/img/door3.png')},
        {photo: require('../assets/img/door1.png')},
        {photo: require('../assets/img/door2.png')},
        {photo: require('../assets/img/door3.png')}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  width: 100vw;
  height: auto;
  background: $grey;
  position: relative;

  .content-wrapper {
    max-width: 1280px;
    margin: 0 auto 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__item {
    width: 320px;
    max-height: 650px;
    background-color:  rgba(255, 255, 255, 0.46);
    box-shadow: 3px 5px 7px 0px rgba(70, 70, 71, 0.75);
    margin-right: 30px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 13px 15px 7px 0px rgba(70, 70, 71, 0.75);
      transform: translate(-10px, -20px);
    }

    & h2 {
      color: $dark-grey;
      font-size: 18px;
      padding-top: 20px;
      font-family: 'GothamPro';
    }

    & p {
      font-family: 'GothamPro-LightItalic';
      color: $dark-grey;
      text-align: center;
      padding: 15px;
    }

    & .footer {
      background: $dark-grey;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 130px;

      & p {
        color: $white;
        font-size: 18px;
        font-family: 'GothamPro';
      }
    }

  }

}
</style>
