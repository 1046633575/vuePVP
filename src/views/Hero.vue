<template>
    <div class="container" v-if="model">
        <div class="topBar bg-dark-2 py-2 px-3 d-flex ai-center">
            <img src="../assets/logo.png" height="30">
            <div class="px-3">
                <div class="text-white">王者荣耀</div>
            </div>
            <div class="ml-1 text-white flex-1">攻略站</div>
            <router-link tag="div" to="/" class="text-white">更多英雄 &gt;</router-link>
        </div>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: null
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
    }
}
</script>

<style lang="scss">
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
}
</style>


