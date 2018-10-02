<template>
  <div v-if="swiperdata.length" class="swiper" @mouseover="showAron=!showAron" @mouseout="showAron=!showAron">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item in swiperdata" :key="item.id">
        <a :href="item.imgLink">
          <img :src="item.imgUrl + '/base'" alt="" style="width: 100%">
        </a>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" :class="{ swiperhide: showAron }" class="swiper-button-prev swiper-button-white" />
      <div slot="button-next" :class="{ swiperhide: showAron }" class="swiper-button-next swiper-button-white" />
    </swiper>
    <div class="bottomBar">
      <span>{{ msg }}</span>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperdata: {
      type: Array,
      required: false,
      default() {
        return []
      }
    }
  },
  data() {
    const _this = this
    return {
      showAron: true,
      msg: null,
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        effect: 'fade',
        speed: 400,
        width: 1440,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        on: {
          slideChange: function() {
            _this.msg = _this.swiperdata[this.realIndex].imgDescription
          }
        }
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.swiperhide {
  opacity: 0;
}
.swiper-button-next,.swiper-button-prev{
  transition:opacity .5s;
}
.swiper {
  position: relative;
  width: 1440px;
  /*height: 710px;*/
  /*overflow: hidden;*/
  left: 50%;
  transform: translateX(-50%);
  .bottomBar {
    height: 63px;
    width: 100%;
    background: rgba(0,0,0,0.5);
    position: absolute;
    bottom: 0;
    z-index: 1;
    padding-left: 46px;
    padding-right: 46px;
    font-size: 20px;
    color: white;
    line-height: 63px;
    overflow: hidden;
  }
  img {
    display: block;
  }
}
</style>
