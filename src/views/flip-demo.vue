<template>
  <div class="flip">
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="slide slide-1">slide-1</swiper-slide>
      <swiper-slide class="slide slide-2">
        <van-nav-bar
        title="第二页calc滚动"
          left-text="上一页"
          right-text="下一页"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
        <div class="scroll-wrapper">
          <cube-scroll>
            <div class="scroll-inner">
              <div v-for="i in 200" :key="i">{{i}}</div>
            </div>
          </cube-scroll>
        </div>
      </swiper-slide>
      <swiper-slide class="slide slide-3">
        <van-nav-bar
        title="第三页flex滚动"
          left-text="上一页"
          right-text="下一页"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
        <div class="scroll-wrapper">
          <cube-scroll>
            <div class="scroll-inner">
              <div v-for="i in 200" :key="i">{{i}}</div>
            </div>
          </cube-scroll>
        </div>
      </swiper-slide>
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
      activeIndex: 0,
      swiperOption: {
        effect: 'flip', // flip  cube  coverflow   fade
        on: {
          slideChange: () => {
            this.activeIndex = this.swiper.activeIndex
          }
        }
      }
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    onClickLeft () {
      console.log('this.currentPage: ', this.activeIndex)
      this.swiper.slidePrev()
    },
    onClickRight () {
      console.log('this.currentPage: ', this.activeIndex)
      this.swiper.slideNext()
    }
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
        .scroll-wrapper{
          height calc(100% - 46px)
        }
      }
       &.slide-3{
        background-color #fff
        display flex
        flex-direction column
        .scroll-wrapper{
          flex 1 0 auto
          height 0
        }
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
