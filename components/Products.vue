<template lang="pug">
.products
  h2.section-title Наши двери
  .content-wrapper
    .products__item(v-for="door in doors")
      h2 {{door.title}}
      .photo
        img(:src="door.photo")
      p {{door.desc}}
      button.button--order Заказать


</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      doors: [
        {title: 'Пакет "Эконом"', desc: 'Металлическая дверь базовой комплектации: ручка-планка, один замок, металл 1,2мм, внутренняя накладка-ДСП 16мм', photo: require('../assets/img/door1.png'), price: '2200'},
        {title: 'Пакет "Стандарт"', desc: 'Металлическая дверь средней комплектации: ручка-планка хром, один замок, металл 1,2мм, с накладкой МДФ 10мм', photo: require('../assets/img/door2.png'), price: '3000'},
        {title: 'Пакет "Комфорт"', desc: 'Металлическая дверь с двумя МДФ накладками, раздельной ручкой с броненакладкой и двумя замками', photo: require('../assets/img/door3.png'), price: '3600'},
        {title: 'Пакет "Эконом"', desc: 'Металлическая дверь базовой комплектации: ручка-планка, один замок, металл 1,2мм, внутренняя накладка-ДСП 16мм', photo: require('../assets/img/door1.png'), price: '2200'},
        {title: 'Пакет "Стандарт"', desc: 'Металлическая дверь средней комплектации: ручка-планка хром, один замок, металл 1,2мм, с накладкой МДФ 10мм', photo: require('../assets/img/door2.png'), price: '3000'},
        {title: 'Пакет "Комфорт"', desc: 'Металлическая дверь с двумя МДФ накладками, раздельной ручкой с броненакладкой и двумя замками', photo: require('../assets/img/door3.png'), price: '3600'}
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

  .content-wrapper {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    min-width: 320px;
    width: 33%;
    max-height: 650px;
    background-color:  rgba(255, 255, 255, 0.46);
    box-shadow: 3px 5px 7px 0px rgba(70, 70, 71, 0.75);
  }

}
</style>
