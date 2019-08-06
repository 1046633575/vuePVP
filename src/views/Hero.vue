<template>
    <div class="container" v-if="model">

        <!-- 顶部广告 -->
        <div class="topBar bg-dark-2 py-2 px-3 d-flex ai-center">
            <img src="../assets/logo.png" height="30">
            <div class="px-3">
                <div class="text-white">王者荣耀</div>
            </div>
            <div class="ml-1 text-white flex-1">攻略站</div>
            <router-link tag="div" to="/" class="text-white">更多英雄 &gt;</router-link>
        </div>

        <!-- 顶部 -->
        <div class="top" :style="{'background-image': `url(${model.banner})`}">
            <div class="info pb-3 text-white px-3 d-flex flex-column jc-end">
                <div class="fs-sm">{{model.name2}}</div>
                <div class="fs-xl py-1" style="font-weight: 700">{{model.name}}</div>
                <div class="fs-sm py-1">{{model.type}}</div>
                <div class="d-flex">
                    <span class="pr-2">难度</span>
                    <span class="circle px-1 bg-primary">{{model.property.difficulty}}</span>
                    <span class="px-2">技能</span>
                    <span class="circle px-1 bg-info">{{model.property.skill}}</span>
                    <span class="px-2">攻击</span>
                    <span class="circle px-1 bg-pink">{{model.property.attack}}</span>
                    <span class="px-2">生存</span>
                    <span class="circle px-1 bg-grey">{{model.property.defense}}</span>
                    <span class="flex-1"></span>
                    <router-link to="/" tag="div" class="text-grey">皮肤: {{model.num}} &gt;</router-link>
                </div>
            </div>
        </div>

        <!-- body -->
        <div>
            <div class="bg-white px-3">
                <div class="nav d-flex jc-around py-3 border-bottom">
                    <div class="nav-item" v-for="(item,i) in model.item" :key="i" :class="{active : active == i}" @click="$refs.list.swiper.slideTo(i)">
                        <div class="nav-link ">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <swiper :options="{autoHeight : true}" ref="list" @slide-change="() => active = $refs.list.swiper.realIndex">
            <swiper-slide>
                <div>

                    <div class="bg-white p-3 border-bottom mb-3">

                        <!-- 按钮 -->
                        <div class="d-flex">
                            <router-link tag="button" to="/" class="btn btn-lg flex-1  border">
                                <i class="iconfont icon-read_icon_menu_n"></i>
                                英雄介绍视频
                            </router-link>
                            <router-link tag="button" to="/" class="btn btn-lg flex-1 ml-2">
                                <i class="iconfont icon-read_icon_menu_n"></i>
                                一图识英雄
                            </router-link>
                        </div>

                        <!-- 技能 -->
                        <div>
                            <div class="d-flex jc-around py-4">
                                <img 
                                    class="icon" 
                                    @click="currentSkillIndex = i" 
                                    :class="{active : currentSkillIndex === i}" 
                                    :src="item.img" 
                                    v-for="(item,i) in model.skill" 
                                    :key="i" 
                                />
                            </div>
                        </div>

                        <!-- 技能介绍 -->
                        <div v-if="currentSkill">
                            <div class="d-flex my-4 ai-center">
                                <h3 class="my-0">{{currentSkill.name}}</h3>
                                <span class="ml-3 text-grey-1">
                                    (冷却值：{{currentSkill.time}} 消耗：{{currentSkill.consume}})
                                </span>
                            </div>
                            <div class="introduce text-dark-1 pb-3 border-bottom">{{currentSkill.introduce}}</div>
                            <div class="py-3 text-grey-1">{{currentSkill.tips}}</div>
                        </div>
                    </div>

                    <div class="bg-white border-bottom">
                        <div>
                            <m-card icon="read_icon_menu_n" title="出装顺序">
                                <div class="fs-xl">顺风出装</div>
                                <div class="d-flex jc-around py-3" >
                                    <div class="tailwind-item text-center" v-for="(item,i) in model.tailwind" :key="i">
                                        <img class="px-2 mb-1" :src="item.img" alt="">
                                        <span class="fs-sm text-dark-1">{{item.name}}</span>
                                    </div>
                                </div>
                                <div class="introduce text-grey-1">{{model.tailwind[0].tips}}</div>
                                
                                <div class="border-bottom pt-4 mb-3"></div>

                                <div class="fs-xl">逆风出装</div>
                                <div class="d-flex jc-around py-3" >
                                    <div class="tailwind-item text-center" v-for="(item,i) in model.headwind" :key="i">
                                        <img class="px-2 mb-1" :src="item.img" alt="">
                                        <span class="fs-sm text-dark-1">{{item.name}}</span>
                                    </div>
                                </div>
                                <div class="introduce text-grey-1">{{model.headwind[0].tips}}</div>
                            </m-card>
                        </div>
                    </div>

                    <m-card icon="read_icon_menu_n" title="使用技巧">
                        <div class="introduce text-dark-1">{{model.useSkills}}</div>
                    </m-card>

                    <m-card icon="read_icon_menu_n" title="对抗技巧">
                        <div class="introduce text-dark-1">{{model.pvpSkills}}</div>
                    </m-card>

                    <m-card icon="read_icon_menu_n" title="团战思路">
                        <div class="introduce text-dark-1">{{model.teamSkills}}</div>
                    </m-card>

                    <m-card icon="read_icon_menu_n" title="英雄关系" class="border-bottom">
                        <div>
                            <div class="fs-xl">最佳搭档</div>
                            <div class="d-flex flex-column pt-2">
                                <div class="d-flex jc-between py-2" v-for="(item,i) in model.goodHero" :key="i">
                                    <img width="50" height="50"  :src="item.img" alt="">
                                    <span class="introduce text-dark-1 px-2">{{item.title}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="border-bottom py-2 mb-3"></div>

                        <div>
                            <div class="fs-xl">被谁克制</div>
                            <div class="d-flex flex-column pt-2">
                                <div class="d-flex jc-between py-2" v-for="(item,i) in model.badHero" :key="i">
                                    <img width="50" height="50"  :src="item.img" alt="">
                                    <span class="introduce text-dark-1 px-2">{{item.title}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="border-bottom py-2 mb-3"></div>

                        <div>
                            <div class="fs-xl">克制谁</div>
                            <div class="d-flex flex-column pt-2">
                                <div class="d-flex jc-between py-2" v-for="(item,i) in model.restraintHero" :key="i">
                                    <img width="50" height="50"  :src="item.img" alt="">
                                    <span class="introduce text-dark-1 px-2">{{item.title}}</span>
                                </div>
                            </div>
                        </div>
                    </m-card>
                    
                    <div class="bg-white py-5"></div>
                </div>
            </swiper-slide>
            <swiper-slide class="bg-white">
                <div class="p-3 ">error</div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: null,
            currentSkillIndex: 0,
            active: 0
        }
    },
    methods: {
        //获取英雄详情数据
        getHero(){
            this.$http.get('./data/hero.json').then(res => {
                this.model = res.data;
            })
        }
    },
    created(){
        this.getHero();
    },
    computed: {
        currentSkill() {
            return this.model.skill[this.currentSkillIndex]
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.container{
    .top{
        height: 50vw;
        background: #fff no-repeat top center;
        background-size: auto 100%;
        .info{
            height: 100%;
            background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,.1));
            .circle{
                border-radius: 50%;
            }
        }
    }
    .icon{
        width: 65px;
        height: 65px;
        border-radius: 48%;
        border: 3px solid map-get($colors, 'white');
        &.active{
            border-color: map-get($colors, 'primary');
        }
    }
    .introduce{
        line-height: 1.5rem;
    }
    .tailwind-item{
        width: 60px;
        img{
            width: 100%;
            border-radius: 50%;
        }
    }
}
</style>


