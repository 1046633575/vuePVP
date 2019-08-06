<template>
  <div class="home">

    <!-- 轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <img class="w-100" src="../assets/images/8fb39465b08fa0689fdf82ee29ef7dad.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/0357494396aaf611469a652edd548274.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/2a25b6e6ed97e750f73e8e71afc6c74a.jpeg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination pagination-home text-right px-3 pb-1"  slot="pagination"></div> 
    </swiper>

    <!-- 分类栏 -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="(item,i) in iconCats" :key="i">
          <i class="sprite" :class="`sprite-${item.icon}`"></i>
          <div class="py-2">{{item.title}}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <div class="sprite sprite-arrow "></div>
          收起
      </div>
    </div>

    <m-list-card icon="read_icon_menu_n" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/article/${news.id}`" class="py-2 d-flex jc-between" v-for="(news,i) in category.newsList" :key="i">
          <span class="text-info py-1">[{{news.categoryName}}]</span>
          <span class="px-1 text-info py-1">|</span>
          <span class="flex-1 text-ellipsis pr-2 fs-lg py-1">{{news.title}}</span>
          <span class="fs-sm text-grey-1 py-1">{{news.date}}</span>
        </router-link>
      </template>
    </m-list-card>   

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: -0.5rem">
          <router-link tag="div" to="/hero" class="p-2 text-center" style="width: 20%" v-for="(hero,i) in category.heroes" :key="i">
            <img class="w-100" :src="hero.avatar" alt="">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card> 

    <div class="py-4 text-white"></div>
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
            el: '.pagination-home'
          }
        },
        //新闻数据列表
        newsCats: [],
        //英雄数据列表
        heroCats: [],
        //图标数据列表
        iconCats: []
      }
    },
    methods: {
      //获取新闻数据
      getNewsData(){
        this.$http.get('./data/newsData.json').then((res) => {
          this.newsCats = res.data;
        })
      },
      //获取英雄数据
      getHeroData(){
        this.$http.get('./data/heroData.json').then(res => {
          this.heroCats = res.data;
        })
      },
      //获取图标数据
      getIconData(){
        this.$http.get('./data/icon.json').then(res => {
          this.iconCats = res.data;
        })
      }
    },
    created(){
      this.getNewsData();
      this.getHeroData();
      this.getIconData();
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