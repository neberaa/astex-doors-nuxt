<template lang="pug">
.products(id="catalog")
  .section-title
    h2 Наши двери
  .content-wrapper
    .products__item(v-for="(door, index) in doors" @click="itemClicked(door)")
      h2 Пакет "{{door.title}}"
      .photo
        img(:src="doorsImages[index].photo")
      p {{door.desc}}
      .footer
        p Цена: {{door.price}} грн.
        button.button.button--order Заказать
    transition(name="fade" mode="out-in")
      modal(:item="item" v-on:show:modal="modalVisible" v-bind:photos="doorsImages" v-if="showModal")
  transition(name="fade" mode="out-in")
    .overlay(v-if="showModal" @click="showModal =!showModal")
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
      showModal: false,
      item: {},
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
  },
  methods: {
    itemClicked (item) {
      this.item = item
      this.showModal = !this.showModal
    },
    modalVisible (e) {
      this.showModal = e
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
    max-width: 1200px;
    margin: 0 auto 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  &__item {
    width: 320px;
    max-height: 650px;
    background-color:  rgba(255, 255, 255, 0.46);
    box-shadow: 3px 5px 7px 0px rgba(70, 70, 71, 0.75);
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
      font-size: 1.13em;
      padding-top: 20px;
      font-family: 'GothamPro';
    }

    & p {
      font-family: 'GothamPro-LightItalic';
      color: $dark-grey;
      text-align: center;
      padding: 15px;
    }

    img {
      width: 90%;
      height: auto;
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
        font-size: 1.13em;
        font-family: 'GothamPro';
      }
    }
  }
  .overlay {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 90;
    background: $dark-grey;
    opacity: .7;
  }
  // ======== Modal window transition ===============
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}

// =============== Media queries ======================
@include notebook {
  .products {
    min-height: 800px;
    .content-wrapper {
      min-height: 760px;
    }
    &__item {
      width: 300px;
    }
  }
}
</style>
