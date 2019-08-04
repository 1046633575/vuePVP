<template>
  <div class="home">
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 1500
          },
          pagination: {
            el: '.pagination-home',
            
          }
        }
      }
    }
  }
</script>

<style lang="scss">
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
</style>