<template>
  <div class="flip">
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="slide slide-1">slide-1</swiper-slide>
      <swiper-slide class="slide slide-2">slide-2</swiper-slide>
      <swiper-slide class="slide slide-3">slide-3</swiper-slide>
      <swiper-slide class="slide slide-4">slide-4</swiper-slide>
      <swiper-slide class="slide slide-5">slide-5</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Swiper as SwiperClass, EffectFlip, EffectCube, EffectCoverflow, EffectFade, Thumbs } from 'swiper/core'
import 'swiper/swiper-bundle.css'
SwiperClass.use([EffectFlip, EffectCube, EffectCoverflow, EffectFade, Thumbs])
export default {
  name: 'flip-demo',
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  data () {
    return {
      swiperOption: {
        effect: 'thumbs' // flip  cube  coverflow   fade
      }
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang='stylus' scrope>
.flip {
  height: 100%;
  width: 100%;
  background-color: antiquewhite;
  .swiper {
    height: 100%;
    .slide {
      height: 100%;
      width: 100%;
      &.slide-1{
        background-color #f00
      }
       &.slide-2{
        background-color #ff0
      }
       &.slide-3{
        background-color #fff
      }
       &.slide-4{
        background-color #f0f
      }
       &.slide-5{
        background-color #00f
      }
    }
  }
}
</style>
