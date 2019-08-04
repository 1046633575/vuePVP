<template>
  <div class="home">

    <!-- 轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <img class="w-100" src="../assets/images/0357494396aaf611469a652edd548274.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/0357494396aaf611469a652edd548274.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/0357494396aaf611469a652edd548274.jpeg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination pagination-home text-right px-3 pb-1"  slot="pagination"></div> 
    </swiper>

    <!-- 分类栏 -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3 " v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <div class="sprite sprite-arrow "></div>
          收起
      </div>
    </div>

    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 3000
          },
          pagination: {
            el: '.pagination-home',
            
          }
        }
      }
    }
  }
</script>

<style lang="scss" >
@import '../assets/scss/_variables.scss';

  .pagination-home {
    .swiper-pagination-bullet { 
      border-radius: 0.1538rem;
      background-color: map-get($colors, 'white');
      opacity: 1;
      &.swiper-pagination-bullet-active {
        background-color: map-get($colors, 'info');
      }
    }
  }
  .nav-icons{
    .nav-item{
      width: 25%;
      border-left: 1px solid $border-color;
      &:nth-child(4n+1){
        border-left: none;
      }
    }
  }
</style>