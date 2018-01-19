<template lang="pug">
  .map
    gmap-map(:center="center")
    .info
      .icon.i-pin
      h3
        | Как нас найти
        br
        span открыть карту

</template>

<script>
export default {
  name: 'map-component',
  data () {
    return {
      center: {lat: 10.0, lng: 10.0}
    }
  }
}
</script>
<style lang="scss" scoped>
.map {
  position: relative;}
.map , .vue-map-container {
  width: 100vw;
  height: 300px;
  .info {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 280px;
    height: 60px;
    justify-content: space-around;

    & h3 {
      font-size: 24px;
      font-weight: 300;
      font-family: 'GothamPro';
      color: $white;
      text-transform: uppercase;

      & span {
        color: $red;
        text-transform: none;
      }
    }
  }
}
</style>
