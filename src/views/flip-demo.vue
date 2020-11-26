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
              <div v-for="i in 200" :key="i">{{ i }}</div>
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
              <div v-for="i in 200" :key="i">{{ i }}</div>
            </div>
          </cube-scroll>
        </div>
      </swiper-slide>
      <swiper-slide class="slide slide-4">
        <van-nav-bar
          title="第四页fixed滚动"
          left-text="上一页"
          right-text="下一页"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
        <div class="scroll-wrapper">
          <cube-scroll>
            <div class="scroll-inner">
              <div v-for="i in 200" :key="i">{{ i }}</div>
            </div>
          </cube-scroll>
        </div>
      </swiper-slide>
      <swiper-slide class="slide slide-5">slide-5</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import {
  Swiper as SwiperClass,
  EffectFlip,
  EffectCube,
  EffectCoverflow,
  EffectFade,
  Thumbs
} from 'swiper/core'
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
        // effect: 'flip', // flip  cube  coverflow   fade
        watchSlidesProgress: true, // 开启监听swiper滚动
        on: {
          slideChange: (swiper) => { // 箭头函数，this为vue实例；第一个参数为swiper实例
            this.activeIndex = this.swiper.activeIndex
          },
          // progress: (swiper, progress) => { // 滚动监听
          //   for (var i = 0; i < swiper.slides.length; i++) {
          //     // 因为活动的就是0
          //     swiper.slides[i].style.transform = 'scale(' + (swiper.slides[i].progress + 1) + ')'
          //   }
          // }
          progress: function () { // 普通函数，this为swiper实例
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i) // 指定匹配元素集缩减值; this.slides得到的是jQuery对象， eq方法获取指定索引的jQuery对象
              const slideProgress = this.slides[i].progress // 当前元素集的progress值

              let modify = 0 // 偏移权重
              if (parseInt(Math.abs(slideProgress)) > 0) {
                modify = Math.abs(slideProgress) * 0.2 // 不一定要0.2，可自行调整
              }
              const translate = slideProgress * modify * 500 + 'px' // 500是swiper-slide的宽度
              const scale = 1 - Math.abs(slideProgress) / 5 // 缩放权重值，随着progress由中向两边依次递减，可自行调整
              const zIndex = 99 - Math.abs(Math.round(10 * slideProgress))
              slide.transform(`translateX(${translate}) scale(${scale})`)
              slide.css('zIndex', zIndex)
              slide.css('opacity', 1) // 是否可见
              if (parseInt(Math.abs(slideProgress)) > 1) { // 设置了只有选中的元素以及他两遍的显示，其他隐藏
                slide.css('opacity', 0)
              }
            }
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

<style lang="stylus" scrope>
.flip
  height 100%
  width 100%
  background-color antiquewhite
  .swiper
    height 100%
    .slide
      height 100%
      width 100%
      &.slide-1
        background-color #f00
      &.slide-2
        background-color #ff0
        .scroll-wrapper
          height calc(100% - 46px)
      &.slide-3
        background-color #fff
        display flex
        flex-direction column
        .scroll-wrapper
          flex 1 0 auto
          height 0
      &.slide-4
        background-color #f0f
        .scroll-wrapper
          position fixed
          top 46px
          width 100%
          bottom 0
      &.slide-5
        background-color #00f
</style>
